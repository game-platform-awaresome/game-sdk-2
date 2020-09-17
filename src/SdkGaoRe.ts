module platform {
    //--------------------------------------------------
    // 高热手机端 sdk
    //--------------------------------------------------
    export class SdkGaoRe extends SdkBase {
        private _key: string;
        public constructor() {
            super(GR);
            this._channleId = 10011;
            this._appId = '434';
            this._key = 'yWpx3hWQHFhSnTCj#434#6KuRKuaAjLJ5sYRy';
        }
        public start(): boolean {
            var params: any = getUrlParams();
            //do something
            this._userId = this._roleId = params.uid;
            this._time = params.time;
            this._sign = params.sign;
            this._appId = params.appid;
            this.end(params);
            return true;
        }
        public getDataType(type: string): number {
            switch (type) {
                case DATA_SELECT_SERVER: return 1;
                case DATA_CREATE_ROLE: return 2;
                case DATA_ENTER_GAME: return 3;
                case DATA_LEVEL_UP: return 4;
                case DATA_QUIT_GAME: return 5;
                case DATA_PAY: return 6;
                case DATA_CHAT: return 7;
            }
            return 0;
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
        		//切换账号
		public switchUser(){
			 (AndroidCallBack as any).grLogout();
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
            diamonds: number,		//角色元宝数
            time: number,				//请求时间戳，精确到秒即可
            content: string,		//聊天内容
            chattype: string,		//聊天类型
            job: number,		//职业
            gameRoleVipLevel: number,		//游戏中玩家的vip等级
			zhuanshenLevel: number		//游戏中玩家的vip等级
        ) {
            var dataName: string = this.getDataName(dataType);
            var reportType = 0;
            switch (dataName) {
                case DATA_SELECT_SERVER:
                    reportType = 1;
                    break;
                case DATA_CREATE_ROLE:
                    reportType = 2;
                    break;
                case DATA_ENTER_GAME:
                    reportType = 3;
                    break;
                case DATA_LEVEL_UP:
                    reportType = 4;
                    break;
                case DATA_QUIT_GAME:
                    reportType = 5;
                    break;
            }
            try {
                if (reportType > 0) {
                    var jobName = this.getJobById(job);
                    (AndroidCallBack as any).grSubmitExtendData(reportType, serverId, serverName, gameRoleName, gameRoleLevel, this.userId,
                        diamonds,
                        0,
                        null,
                        null,
                        0,
                        null,
                        jobName,
                        job,
                        "无",
                        "无",
                        0,
                        "无",
                        gameRoleVipLevel,
                        0,
                        "无"

                    );
                }
            } catch (e) {
                console.error(e);
            }
        }
        /**
 * 充值
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
            try {
                (AndroidCallBack as any).pay("1", "100", productId, price.toString(), productId, productName, productDesc, this._userId, gameRoleVip, gameRoleName, serverId, serverName, gameRoleVip);
            } catch (e) {
                console.error(e);
            }
        }
    }
}