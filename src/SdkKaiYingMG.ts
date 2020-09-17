module platform {
    //--------------------------------------------------
    // 恺英手游sdk
    //--------------------------------------------------
    export class SdkKaiYingMG extends SdkBase {

        public constructor() {
            super(MG);
            this._channleId = 10009;
            this._sign = 'be03027faeadffc4924af9fe5758f541';
        }

        private getJobById(id: number): string {
            switch (id) {
                case 1:
                    return "战士";
                case 2:
                    return "法师";
                case 3:
                    return "异能";
            }
            return "";
        }

        public getDataType(type: string): number {
            switch (type) {
                //选择服务器
                case DATA_SELECT_SERVER: return 1;
                //创角成功
                case DATA_CREATE_ROLE: return 2;
                //进入游戏
                case DATA_ENTER_GAME: return 3;
                //角色升级
                case DATA_LEVEL_UP: return 4;
                //退出游戏
                case DATA_QUIT_GAME: return 5;
                //充值
                case DATA_PAY: return 6;
                //聊天
                case DATA_CHAT: return 7;
                //进入创角界面
                case DATA_CREATE_ROLE_ENTER: return 8;
                //点击创角按钮
                case DATA_CREATE_ROLE_CLICK: return 9;
            }
            return 0;
        }

        public start(): boolean {
            var params: any = getUrlParams();
            this._userId = params.uid;		//平台用户ID
            this._roleId = params.uid;		//平台用户ID
            this._time = params.rtime;   //登录时间
            this._appId = params.appid;
            this._token = params.token;	//
            this.end(params);
            return true;
        }

        //上报数据
        public submitExtraData(
            dataType: number,       //上报类型
            appid: string,			//游戏appid
            serverId: number,       //区服Id
            serverName: string,		//区服名
            gameRoleUid: string,    //游戏角色Id（某些情况下为空）
            gameRoleName: string,		//角色名
            gameRoleLevel: number,		//角色等级
            diamonds: number,		//角色元宝数
            time: number,				//请求时间戳，精确到秒即可
            content: string,		//聊天内容
            chattype: string,		//聊天类型
            job: number,		//职业
            gameRoleVipLevel: number,		//游戏中玩家的vip等级
			zhuanshenLevel: number		//游戏中玩家的vip等级
        ) {
            try{
                var paramstr=`appid=${appid}&chat_type=${chattype}&content=${content}&data_type=${dataType}&device_type=${egret.Capabilities.os}&diamonds=${diamonds}&job=${job}&level=${gameRoleLevel}&role_id=${gameRoleUid}&role_name=${gameRoleName}&server_id=${serverId}&server_name=${serverName}&time=${time}&uid=${this._roleId}`;
                var sign:string=window['md5'](`lkdjfgiDFGKEcvaice83${paramstr}`)
                var url = `https://adapi.mg3721.com/service/gameData?${paramstr}&sign=${sign}`;
			    var loader = new egret.HttpRequest();
			    loader.open(url, egret.HttpMethod.POST);
			    loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			    loader.send();
            }catch(e){
                console.error("捕获到异常:",e)
            }
            var dataName: string = this.getDataName(dataType);
            var obj = {};
            switch (dataName) {
                case DATA_CREATE_ROLE:
                    obj['role'] = this._roleId;
                    obj['roleName'] = gameRoleName;
                    obj['server'] = serverId;
                    try {
                        if (this._appId == "52") {
                            (js as any).MGSDKCreateRole(JSON.stringify(obj));
                        } else if (this._appId == "112"||this._appId == "117"||this._appId == "121"||this._appId == "122"||this._appId == "123"||this._appId == "124"||this._appId == "125") {
                            ((window as any).webkit.messageHandlers.MGSDKCreateRole.postMessage(JSON.stringify(obj)));
                        }
                    } catch (e) {
                        console.error("捕获到异常:",e);
                    }
                    break;
                case DATA_ENTER_GAME:
                    var jobName = this.getJobById(job);
                    obj['role'] = this._roleId;
                    obj['roleName'] = gameRoleName;
                    obj['server'] = serverId;
                    obj['level'] = gameRoleLevel;
                    obj['occupation'] = jobName;
                    try {
                        if (this._appId == "52") {
                            (js as any).MGSDKRoleLogin(JSON.stringify(obj));
                        } else if (this._appId == "112"||this._appId == "117"||this._appId == "121"||this._appId == "122"||this._appId == "123"||this._appId == "124"||this._appId == "125") {
                            ((window as any).webkit.messageHandlers.MGSDKRoleLogin.postMessage(JSON.stringify(obj)));
                        }
                    } catch (e) {
                        console.error("捕获到异常:",e);
                    }
                    break;
            }
        }

		/**
		 * 充值
 		 * @param gid: 游戏id 
 		 * @param uid：登录后用户id，由登录传给游戏的用户id
 		 * @param appusername：用户名
 		 * @param sid：大区id
 		 * @param openuid：用户游戏内id
 		 * @param productid：用户购买道具id
 		 * @param money：金额(单位元)
 		 * @param resource：写死1477161
 		 * @param app_order_id：订单id
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
            var obj = {};
            obj['openUID'] = this._userId;
            obj['amount'] = price;
            obj['appName'] = "MG";
            obj['appOrderID'] = productId;
            obj['appUserID'] = this._roleId;
            obj['appUserName'] = gameRoleName;
            obj['SID'] = serverId;
            obj['productId'] = productId;
            obj['productName'] = productName;
            obj['callback_url'] = "http://pay.90wmoyu.com/platform_mg/pay_mg.php";
            try {
                if (this._appId == "52") {
                    (js as any).MGIAP(JSON.stringify(obj));
                } else if (this._appId == "112"||this._appId == "117"||this._appId == "121"||this._appId == "122"||this._appId == "123"||this._appId == "124"||this._appId == "125") {
                    ((window as any).webkit.messageHandlers.MGIAP.postMessage(JSON.stringify(obj)));
                }
            } catch (e) {
                console.error(e);
            }
        }
    }
}