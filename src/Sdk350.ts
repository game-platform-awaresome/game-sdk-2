module platform {
	//--------------------------------------------------
	// 350sdk
	//--------------------------------------------------
	export class Sdk350 extends SdkBase {
		public constructor() {
			super(P350);
			this._channleId=10010;
		}
		public getScripts(): string[] {
			return ["https://h5.350.com/js/gameSDK-init.js"];
		}
		public start(): boolean {
			var params: any = getUrlParams();
			this._userId = this._roleId = params.uid;		//平台用户ID,充值需要
			this._roleName = params.uname;
			this._appId = params.appid;
			this._time = params.time;
			this._sign = params.sign;
			this.end(params);
			return true;
		}
		/**充值成功回调 */
		private onPaySuccess() {

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
		) { }
		/**
		 * 充值
 		 * @param server_id 游戏服ID
 		 * @param product_id	产品ID
 		 * @param product_name	产品名
		   @param product_price	元
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
			buyCount: number, 					//购买数量，一般都是
			productId: string, 				//充值商品ID，游戏内的商品ID
			productName: string, 			//商品名称，比如100元宝，500钻石...
			productDesc: string, 			//商品描述，比如 充值100元宝，赠送20元宝
			extension: number, 				//会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
			time: number//请求时间戳，精确到秒即可
		) {
			var obj = {};
			obj['buyNum'] = 1;
			obj['coin'] = 100;
			obj['game_id'] = this._appId;
			obj['server_id'] = serverId;
			obj['server_name'] = serverName;
			obj['uid'] = this.roleId;
			obj['role_name'] = gameRoleName;
			obj['role_level'] = gameRoleLevel;
			obj['vip'] = gameRoleVip;
			obj['money'] = price;
			obj['game_gold'] = price * 100;
			obj['role_id'] = this._roleId;
			obj['product_id'] = productId;
			obj['product_name'] = productName;
			obj['product_desc'] = productDesc;
			obj['ext'] = productId;
			obj['callback'] = this.onPaySuccess;
			(window as any).twSDK.pay(obj);
		}
	}
}