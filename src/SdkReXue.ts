module platform {
    //--------------------------------------------------
    // 热血sdk
    //--------------------------------------------------
    export class SdkReXue extends SdkBase {
        private _account:string;
        public constructor() {
            super(RX);
            this._channleId = 10032;
        }

        public getScripts(): string[] {
            return [];
        }

        public start(): boolean {
            var params: any = getUrlParams();
            this._appId = params.appid;
            this._userId = params.uid;		//平台用户ID
            this._roleId = params.uid;		//平台用户ID
            this._account=params.username;
            this._token = params.state; //登录后从SDK获取的服务端sessionid值
            this._sign = params.flag; //加密签名，注：.为连接符，不参与加密
            this.end(params);
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
            diamonds: number,		//角色元宝数
            time: number,				//请求时间戳，精确到秒即可
            content: string,		//聊天内容
            chattype: string,		//聊天类型
            job: number,		//职业
            gameRoleVipLevel: number,		//游戏中玩家的vip等级
            zhuanshenLevel: number		//游戏中玩家的vip等级
        ) {
            var sign: string;
            var dataName: string = this.getDataName(dataType);
            switch (dataName) {
                case DATA_CREATE_ROLE:
                    break;
                case DATA_ENTER_GAME:
                    break;
                case DATA_LEVEL_UP:
                    break;
            }
        }

		/**
		 * 充值
 		 * @param user_id: 用户ID 
 		 * @param game_role_id：游戏角色ID
 		 * @param game_role_name：游戏角色名称，需进行urlencode
 		 * @param game_role_level：游戏角色等级
 		 * @param cp_trade_sn：游戏订单号，最多50个字符，不能有特殊符号
 		 * @param money：充值金额，单位：元
 		 * @param money_type：货币类型，默认为CNY
 		 * @param goods_id：游戏内购商品ID
 		 * @param goods_name：游戏内购商品名称, 需进行urlencode
		 * @param goods_desc：游戏内购商品描述, 需进行urlencode
 		 * @param server：服务器ID
 		 * @param time：请求时间戳，精确到秒即可
 		 * @param sign：加密字符串
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
            window.parent.postMessage({
                uid: this._userId,
                username: this._account,
                money: price,
                server_id: serverId,
                role_id: gameRoleId,
                ext: `${productId}_${productName}_${gameRoleName}`,
                appid: this._appId
            }, '*');
        }
    }
}