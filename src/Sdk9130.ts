module platform {
    //--------------------------------------------------
    // 贪玩sdk
    //--------------------------------------------------
    export class Sdk9130 extends SdkBase {

        public constructor() {
            super(P9130);
            this._channleId = 10026;
            this._appId = '68'
        }

        public getScripts(): string[] {
            return ["https://static.sh9130.com/js/aksdk.js"];
        }

        public start(): boolean {
            (window as any).AKSDK.login((status, data) => {
                if (status == 0) {
                    this._userId = this._roleId = data.userid;
                    this._roleName = data.account;
                    this._token = data.token;
                    this.end(null);
                }
            })
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
            switch(dataName){
                case DATA_CREATE_ROLE:
                    (window as any).AKSDK.logCreateRole(serverId, serverName, this._roleId, gameRoleName, gameRoleLevel)
                break;
                case DATA_ENTER_GAME:
                    (window as any).AKSDK.logEnterGame(serverId, serverName, this._roleId, gameRoleName, gameRoleLevel)
                break;
                case DATA_LEVEL_UP:
                    (window as any).AKSDK.logRoleUpLevel(serverId, serverName, this._roleId, gameRoleName, gameRoleLevel)
                break;
                case DATA_CHAT:
                new HttpLoader().request('https://msgapi.sh9130.com/',this,(data:string)=>{
                    },egret.URLRequestMethod.GET,new egret.URLVariables(`game=moyulaile&server=${serverId}&platform_uid=${this._userId}&rolename=${gameRoleName}&roleid=${gameRoleUid}&role_level=${gameRoleLevel}&user_ip=&content=${content}&chat_type=${chattype}&channel_id=${this._channleId}&ext=`))
                break;
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
            var obj = {};
            obj['cpbill'] = generateUUID();
            obj['productid'] = shopSetting.getShopId(this._type, productId);
            obj['ApplePrdId'] = shopSetting.getShopId(this._type, productId, price, true);
            obj['productname'] = productName;
            obj['productdesc'] = productDesc;
            obj['serverid'] = serverId;
            obj['servername'] = serverName;
            obj['roleid'] = this._roleId;
            obj['rolename'] = gameRoleName;
            obj['rolelevel'] = gameRoleLevel;
            obj['price'] = price;
            obj['extension'] = productId;
            (window as any).AKSDK.pay(obj, (status, data) => {
                switch (status) {
                    case 0:
                        egret.log('支付成功!');
                        //data.userid//用户ID
                        //data.account//用户帐号
                        //data.cpOrderNo//游戏订单号
                        //data.orderNo//平台订单号
                        //data.amount//金额
                        //data.extension//扩展数据
                        break;
                    case 1:
                        egret.log('支付失败!')
                        break;
                    case 2:
                        egret.log('支付取消!')
                        break;
                }
            })
        }
    }
}