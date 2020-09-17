module platform {
	//--------------------------------------------------
	// 微软 H5
	//--------------------------------------------------
	export class SdkMS extends SdkBase {
		private _appKey: string;
		private _account: string;//用户名
		private _keyType: string;
		public constructor() {
			super(MS);
			this._channleId = 10039;//与MSUWP使用相同_channleId
			this._appKey = '82EDA7BE63';
			this._keyType = 'H5';
		}
		public getScripts(): string[] {
			return ['https://api.mguwp.net/web/websdk.js'];
		}

		public start(): boolean {
			(window as any).MgLoginResult = this._loginResult.bind(this);
			(window as any).MgPaymentResult = (result, loginResult) => { };
			platform.loadSdkFile(['https://api.mguwp.net/web/cookies.js'], this, () => {
				platform.loadSdkFile(['https://api.mguwp.net/js/jquery/jquery.js'], this, () => {
					platform.loadSdkFile(['https://api.mguwp.net/js/layer/layer.js'], this, () => {
						platform.loadSdkFile(['https://api.mguwp.net/web/base64.js'], this, () => {
							(window as any).openMgLogin(this._appKey, JSON.stringify({}));
						})
					})
				})
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
			diamonds: number,		//角色元宝数
			time: number,				//请求时间戳，精确到秒即可
			content: string,		//聊天内容
			chattype: string,		//聊天类型
			job: number,		//职业
			gameRoleVipLevel: number		//游戏中玩家的vip等级
		) {
			var dataName: string = this.getDataName(dataType);
			switch (dataName) {
			}
		}

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
			var step = extension;
			new HttpLoader().request(`${getPhpPath('CheckUserPay')}?keyType=${this._keyType}&lv=${gameRoleLevel}&step=${step}`, this, (result: any) => {
				if (result) {
					var data = JSON.parse(result);
					var obj = {};
					var ext = serverId + "_" + serverName + "_" + gameRoleId + "_" + gameRoleName + "_" + productId + "_" + productName + "_" + this._userId + "_" + price;//透传
					obj['comment'] = encodeURI(ext);
					obj['goodsKey'] = shopSetting.getShopId(this._type, productId, price);
					obj['callback'] = data.CallbackId;//支付回调标识
					var value = JSON.stringify(obj);
					(window as any).openMgStore(this._appKey, value);
				}
			}, egret.URLRequestMethod.GET);
		}

		private _loginResult(result, loginResult) {
			if (result == "success") {
				var jsonLoginResult = JSON.parse(loginResult);
				this._userId = this._roleId = jsonLoginResult.userId;
				this._token = jsonLoginResult.token;
				this._account = jsonLoginResult.account;
				new HttpLoader().request(`${getPhpPath('CheckUser')}?keyType=${this._keyType}&uid=${this._userId}&token=${this._token}`, this, (result: any) => {
					this._sign = result;
					this.end(null);
				}, egret.URLRequestMethod.GET);
			}
		}

	}
}