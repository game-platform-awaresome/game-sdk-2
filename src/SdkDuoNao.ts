module platform {
    //--------------------------------------------------
    // 多瑙
    //--------------------------------------------------
    export class SdkDuoNao extends SdkBase {
        private _channel: string;
        public constructor() {
            super(DN);
            this._channleId = 10035;
        }

        public getScripts(): string[] {
            return ['./sdklib/dnhwsdk.js?v1.0'];
        }

        public start(): boolean {
            //https://xxxx.com?uid=1000010&username=rh1000010&gameSign=c0b47b0c72d7af5a5f4d2b426296d3f9&loginTime=1539762838&channel=AS
            var params: any = getUrlParams();
            this._userId = this._roleId = params.uid;
            this._roleName = params.username;
            this._sign = params.gameSign;
            this._time = params.loginTime;
            this._channel = params.channel;
            this.end(null);
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
            var type: number = 0;
            switch (dataName) {
                case DATA_CREATE_ROLE:
                    type = 2
                    break;
                case DATA_ENTER_GAME:
                    type = 1;
                    break;
                case DATA_LEVEL_UP:
                    type = 3
                    break;
            }
            if (type == 0) return;
            var param = {};
            param["role_type"] = type;
            param["server_id"] = serverId;
            param["server_name"] = serverName;
            param["role_id"] = gameRoleUid;
            param["role_name"] = gameRoleName;
            param["party_name"] = '';
            param["role_level"] = gameRoleLevel;
            param["role_vip"] = gameRoleVipLevel;
            param["role_balence"] = diamonds;
            (window as any).Sdk90hw.hwDuoNaoSetRoleInfo(param);
        }

        public share() {
            //(window as any).TuyooSdk.Share({ title: '魔域来了', desc: '一款XXX的游戏', imgUrl: '' });
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
            (window as any).Sdk90hw.hwDuoNaoPay({
                product_price: price,//| 是 | float | 价格(元),留两位小数
                product_count: buyCount,// | 是 | int(11) | 商品数量(除非游戏需要支持一次购买多份商品),默认为1
                product_id: productId,// | 是 | string(64) | 商品id，易接后台需cp配置计费点，计费点id
                product_name: productName,// | 是 | string(200) | 商品名称，计费点名称
                product_desc: productDesc,// | 是 | string(400) | 商品描述(不传则使用product_name) 默认为product_name 商品描述不可过长，长度一般小于255
                exchange_rate: 100,// | 是 | int(11) | 虚拟币兑换比例（例如100，表示1元购买100虚拟币） 默认为0。(目前只做记录，不参与计算支付价格)
                currency_name: '魔石',// | 是 | string(45) | 虚拟币名称（如金币、元宝）默认为 ""
                ext: productId,// | 是 | STRING(200) | CP自定义扩展字段 透传信息 默认为””
                roleinfo:// | 是 | RoleInfo类 | 角色信息类
                {
                    role_type: 1,// | 是 | INT | 数据类型,默认1，(1为进入游戏，2为创建角色，3为角色升级 5 其他)（如果游戏无法区分，默认填1）
                    server_id: serverId,// | 是 | STRING(30) | 游戏服务器id，没有传大于1的数字
                    server_name: serverName,// | 是 | STRING(50) | 游戏服务器名称，没有传大于1的数字
                    role_id: gameRoleId,// | 是 | STRING(30) | 玩家角色id，没有传大于1的数字
                    role_name: gameRoleName,// | 是 | STRING(50) | 玩家角色名称，没有传大于1的数字
                    party_name: '',// | 是 | STRING(200) | 工会、帮派名称，如果没有，请填空字符串””，或者没有传大于1的数字
                    role_level: gameRoleLevel,// | 是 | int(11) | 玩家角色等级，如果没有，请填0。
                    role_vip: gameRoleVip,// | 是 | int(11) | 玩家vip等级，如果没有，请填0。
                    role_balence: diamonds// | 是 | float | 玩家游戏中游戏币余额，留两位小数;如果没有账户余额，请填0。
                }
            });
        }
    }
}