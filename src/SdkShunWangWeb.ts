module platform {
    //--------------------------------------------------
    // 顺网
    //--------------------------------------------------
    export class SdkShunWangWeb extends SdkBase {
        private _channel: string;
        private _gameId: number;
        private _swTag: string;
        public constructor() {
            super(SWWEB);
            this._channleId = 10037;
            this._gameId = 3786;
        }

        public getScripts(): string[] {
            return [];
        }

        public start(): boolean {
            //https://xxx/index.sw.html?_back_url=&card_state=0&fcm=0&guid=3786_1552359227350_99375692&platform=swjoy&play_type=web&server_code=&sign=608888978c99133d5565877d57b67bcc&swTag=sw&time=1552382127
            var params: any = getUrlParams();
            new HttpLoader().request(getPhpPath('getUserInfo') + '?guid=' + params.guid + '&fcm=' + params.fcm + '&card_state=' + params.card_state + '&play_type=' + params.play_type + '&server_idx=' + params.server_idx + '&server_code=' + params.server_code + '&platform=' + params.platform + '&sign=' + params.sign + '&time=' + params.time + '&sw_tag=' + params.sw_tag, this, (str: string) => {
                var data = JSON.parse(str);
                if (data && data.res_code == 0) {
                    this._userId = this._roleId = data.guid;
                    this._sign = data.sign;
                    this._time = data.time;
                    this._swTag = data.sw_tag;
                    this.end(null);
                }
            })
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
            new HttpLoader().request(getPhpPath('getPayInfo') + '?gameId=' + this._gameId + '&guid=' + this.roleId + '&rmb=' + price + '&time=' + time + '&ext=' + (serverId+"_"+productId) + '&swTag=' + this._swTag, this, (str: string) => {
                var data = JSON.parse(str);
                if (data && data.response.code == 0) {
                    this.dispatchEventWith('InitiatePaymentOfShunWang',false,data.response.qrcode);
                }
            });
        }
    }
}