var Yxitai: any;
module platform {
    //--------------------------------------------------
    // Tai平台
    //--------------------------------------------------
    export class SdkTai extends SdkBase {
        private GYxitai: any;
        private _channel: string;
        private _from: string;
        public constructor() {
            super(TAI);
            this._channleId = 10040;
        }

        public getScripts(): string[] {
            return ["https://m.yxitai.com/Public/mobile/js/https_game.1.02.js"];
        }

        public start(): boolean {
            var params: any = getUrlParams();
            new HttpLoader().request(getPhpPath('getUserInfo') + '?userid=' + params.userid + '&appid=' + params.appid + '&time=' + params.ts + '&from=' + params.from + '&sign=' + params.sign, this, (str: string) => {
                var data = JSON.parse(str);
                if (data && data.res_code == 0) {
                    this._userId = this._roleId = data.userid;
                    this._appId = data.appid;
                    this._time = data.time;
                    this._from = data.from;
                    this._token = data.token;
                    this._sign = data.sign;
                    this.GYxitai = new Yxitai({ appid: this._appId, from: this._from, userid: this._userId });
                    this.end(null);
                }
            })
            return true;
        }
        //切换账号
		public switchUser(){
			this.GYxitai.relogin();
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
            var dataName: string = this.getDataName(dataType);
            switch (dataName) {
                case DATA_CREATE_ROLE:
                    var createPparm = {};
                    createPparm['serverid'] = serverId;
                    createPparm['servername'] = serverName;
                    createPparm['roleid'] = gameRoleUid;
                    createPparm['cash'] = diamonds;
                    createPparm['rolename'] = gameRoleName;
                    this.GYxitai.createRole(createPparm);

                    var parm = {};
                    parm['serverid'] = serverId;
                    parm['servername'] = serverName;
                    parm['roleid'] = gameRoleUid;
                    parm['rolelevel'] = gameRoleLevel;
                    parm['rolename'] = gameRoleName;
                    parm['rolecreatetime'] = time;
                    this.GYxitai.selectServer(parm);
                    break;
                case DATA_ENTER_GAME:
                    this.GYxitai.ready(function (data) {
                        console.log("GYxitai加载完成上报：" + data);
                    });
                    break;
                case DATA_LEVEL_UP:
                    var upParm = {};
                    upParm['serverid'] = serverId;
                    upParm['servername'] = serverName;
                    upParm['roleid'] = gameRoleUid;
                    upParm['cash'] = diamonds;
                    upParm['rolename'] = gameRoleName;
                    upParm['rolelevel'] = gameRoleLevel;
                    this.GYxitai.updateRole(upParm);
                    break;
            }
        }

		/**
		 * 充值
 		 * @param server_id 游戏服ID
 		 * @param server_name 游戏服名称
 		 * @param gameRoleId	贪玩平台用户ID(由3.1 接口传入的uid)
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
            //money、appid
            new HttpLoader().request(getPhpPath('getPayInfo') + '?&money=' + price + '&appid=' + this.appId, this, (jsonData: any) => {
                var paydata = JSON.parse(jsonData);
                var payParm = {};
                payParm['orderid'] = paydata.orderid;
                payParm['money'] = price;
                payParm['product'] = productName;
                payParm['productid'] = productId;
                payParm['roleid'] = gameRoleId;
                payParm['serverid'] = serverId;
                payParm['servername'] = serverName;
                payParm['sign'] = paydata.sign;
                this.GYxitai.pay(payParm);
            });

        }
    }
}