module platform {
	//--------------------------------------------------
	// 9377安卓sdk
	//--------------------------------------------------
	export class SdkSYJsqqI extends SdkBase {
		private _key: string;
		public constructor() {
			super(JSQQI);
			this._channleId = 10017;
			this._verifyResult = false;
			this._appId = '35216';
			this._key = '343f543a387199c4deec865e68f6ec05';
		}

		public start(): boolean {
			var params: any = getUrlParams();

			this._userId = this._roleId = this._roleName = params.username;		//平台用户ID,充值需要
			this._time = params.timestamp;
			this._sign = params.sign;	//md5( username + adult + timestamp + key)
			this._time = params.timestamp;
			this._token= window['md5'](params.username+params.adult+params.timestamp+this._key);
			//params.avatar//头像地址
			//this._appId = params.adult;//成年标识, 1成年，0未成年, -1填写了身份证但未成年

			//setTimeout(this.end,500,params);
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
			buyCount: number, 					//购买数量，一般都是1
			productId: string, 				//充值商品ID，游戏内的商品ID
			productName: string, 			//商品名称，比如100元宝，500钻石...
			productDesc: string, 			//商品描述，比如 充值100元宝，赠送20元宝
			extension: number, 				//会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
			time: number//请求时间戳，精确到秒即可
		) {
			var obj = {};
			obj['event'] = "pay";
			obj['gid'] = this._appId;
			obj['username'] = this._userId;
			obj['_sid'] = serverId;
			obj['amount'] = price;
			obj['product'] = productName;
			obj['extra_info'] = this._appId + "_" + productId;
			parent.postMessage(JSON.stringify(obj), '*');
		}
	}
}