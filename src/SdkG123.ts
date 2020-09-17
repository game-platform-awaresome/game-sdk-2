module platform {
    //--------------------------------------------------
    // G123sdk
    //--------------------------------------------------
    export class SdkG123 extends SdkBase {
        // private _access_token:string;
        // private _token_type:string;
        private _gameChannelId;//引流渠道id
        private _job = 0;
        public constructor() {
            super(G123);
            this._channleId = 10036;
        }

        public getScripts(): string[] {
            // return ['https://psp.stg.g123.jp/static/cp_sdk.js'];//测试
            return ['https://psp.g123.jp/static/cp_sdk.js'];//正式
        }

        public start(): boolean {
            var params = getUrlParams();
            var access_code = params.code;
            this._gameChannelId = params.platform;
            new HttpLoader().request(`${getPhpPath('getUserInfo')}?access_code=${access_code}`, this, (data: any) => {
                var result = JSON.parse(data);
                if (result && result.userId) {
                    this._userId = this._roleId = result.userId;
                    this._time = result.time;
                    this._sign = result.sign;
                    this.end(null);
                }
            }, egret.URLRequestMethod.GET);
            return true;
        }

        //上报数据
        public submitExtraData(
            dataType: number,
            appid: string,			//游戏appid
            serverId: number,
            serverName: string,		//区服名
            gameRoleUid: string,
            gameRoleName: string,		//角色名
            gameRoleLevel: number,		//角色等级
            diamonds: number,			//角色元宝数
            time: number,				//请求时间戳，精确到秒即可
            content: string,		//聊天内容
            chattype: string,		//聊天类型
            job: number,		//职业
            gameRoleVipLevel: number,		//游戏中玩家的vip等级
            zhuanshenLevel: number		//游戏中玩家的vip等级
        ) {
            var log = -1;
            this._job = job;
            var formatTime = this.formatDate(new Date(time * 1000)).toString();
            var dataName: string = this.getDataName(dataType);
            switch (dataName) {
                case DATA_CREATE_ROLE: log = 1;//账号注册同角色注册1/3
                    // (window as any).parent.postMessage(JSON.stringify({ event: 'CreateRole', }), 'https://private-h5.g123.jp');//测试
                    (window as any).parent.postMessage(JSON.stringify({event: 'CreateRole',}), 'https://h5.g123.jp');//正式
                    break;
                case DATA_ENTER_GAME: log = 2;//账号登陆同角色登陆2/4
                    break;
            }
            if (log >= 0) {
                var playerOs = egret.Capabilities.os;
                var roleLv = zhuanshenLevel * 1000 + gameRoleLevel;
                new HttpLoader().request(`${getPhpPath('submitExtraData')}?log=${log}&sid=${serverId}&time=${formatTime}&os=${egret.Capabilities.os}&gameChannelId=${this._gameChannelId}&uid=${this._userId}&gameRoleUid=${gameRoleUid}&roleLv=${roleLv}&vipLv=${gameRoleVipLevel}&diamonds=${diamonds}&job=${job}`, this, (result: any) => { }, egret.URLRequestMethod.GET);
            }
        }

		/**
		 * 充值
 		 * @param server_id 游戏服ID
 		 * @param server_name 游戏服名称
 		 * @param uid	贪玩平台用户ID(由3.1 接口传入的uid)
 		 * @param role_name	游戏角色名
 		 * @param role_level	游戏角色等级
 		 * @param vip	游戏角色vip
 		 * @param money	充值金额，单位：元
 		 * @param game_gold	充值游戏币
 		 * @param role_id	游戏角色ID
 		 * @param product_id	产品ID
 		 * @param product_name	产品名
 		 * @param product_desc	产品描述
 		 * @param ext 游戏方透传参数，支付回调接口原样返回（例如：游戏方订单ID）
 		 */
        public openCharge(
            serverId: string, 				//玩家所在服务器的ID
            serverName: string, 				//玩家所在服务器的名称
            gameRoleId: string, 					//玩家角色ID
            gameRoleName: string, 				//玩家角色名称
            gameRoleLevel: string, 				//玩家角色等级
            gameRoleVip: string, 					//游戏中玩家的vip等级
            price: number, 					//充值金额(单位：分)
            diamonds: number, 				//玩家当前身上剩余的游戏币
            buyCount: number, 					//购买数量，一般都是1
            productId: string, 				//充值商品ID，游戏内的商品ID
            productName: string, 			//商品名称，比如100元宝，500钻石...
            productDesc: string, 			//商品描述，比如 充值100元宝，赠送20元宝
            extension: number, 				//会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time: number//请求时间戳，精确到秒即可
        ) {
            var formatTime = this.formatDate(new Date(time * 1000)).toString();
            var virtualCurrent = "0";//获得的虚拟货币数
            var index = productDesc.indexOf("_");
            if (index != -1) {
                var arr = productDesc.split("_");
                if (arr.length > 0)
                    productDesc = arr[0];
                if (arr.length > 1)
                    virtualCurrent = arr[1] ? arr[1] : "0";
            }
            var ext = serverId + "_" + serverName + "_" + gameRoleId + "_" + gameRoleName + "_" + productId + "_" + productName + "_" + this._userId + "_" + this._job + "_" + gameRoleLevel + "_" + gameRoleVip + "_" + this._gameChannelId + "_" + formatTime + "_" +virtualCurrent;
            new HttpLoader().request(`${getPhpPath('createOrder')}?vip_Level=${gameRoleVip}&role_Level=${gameRoleLevel}&product_name=${productName}&product_desc=${productDesc}&product_count=${buyCount}&product_price=${price}&ext=${ext}&`, this, (result: any) => {
                result = JSON.parse(result);
                (window as any).CpSdk.SendPayment(result);
            }, egret.URLRequestMethod.GET);
        }

        public showShare(caller: any, method: Function) {
            (window as any).parent.postMessage(JSON.stringify({
                "action": "share",
                "data": {
                    "ctw_line_share_text": "快来领取屠龙宝刀",
                    "ctw_twitter_share_text": "快来领取屠龙宝刀",
                    "ctw_copy_text": "快来领取屠龙宝刀"
                    //,
                    //非必须参数
                    // "ctw_twitter_share_via": "user1",
                    // "ctw_twitter_share_hashtags": "tag1,tag2",
                    // "ctw_share_id": "sample_share_id",
                    // "ctw_share_extra": "sample_extra",
                }
            }), '*');
        }


        //格式化时间2000-01-01 12:05:05   target=new Date(time * 1000)
        protected formatDate(target: Date) {
            var excludedDetail = false;
            var year = target.getFullYear();
            var month = this.addZero(target.getMonth() + 1);
            var date = this.addZero(target.getDate());
            var hoursString = this.addZero(target.getHours());
            var minutesString = this.addZero(target.getMinutes());
            var secondsString = this.addZero(target.getSeconds());
            var result = year + '-' + month + '-' + date;
            if (!excludedDetail) {
                result = result + " " + hoursString + ":" + minutesString + ":" + secondsString;
            }
            return result;
        }

        protected addZero(value) {
            return (value < 10 ? "0" : "") + value;
        }

    }
}