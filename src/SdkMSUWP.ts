module platform {
	//--------------------------------------------------
	// 微软 UWP
	//--------------------------------------------------
	export class SdkMSUWP extends SdkBase {
		private _appKey: string;
		private _keyType: string;
		public constructor() {
			super(MSUWP);
			this._channleId = 10039;//与MS使用相同_channleId
			this._appKey = '7231CE22D6';
			this._keyType = 'UWP';
		}
		public getScripts(): string[] {
			return [];
		}

		public start(): boolean {
			(window as any).MG_CallBack = this._loginResult.bind(this);
			(window as any).MG_PayBack = (mgpayback) => { };
			(window as any).external.notify("login");
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
					if (data.OnlyMS < 0) return;
					var obj = {};
					var ext = serverId + "_" + serverName + "_" + gameRoleId + "_" + gameRoleName + "_" + productId + "_" + productName + "_" + this._userId + "_" + price;//透传
					obj['Comment'] = encodeURI(ext);
					obj['DigitalGoodsKey'] = shopSetting.getShopId(this._type, productId, price);
					obj['CallbackId'] = data.CallbackId;//支付回调标识
					obj['OnlyMS'] = data.OnlyMS.toString();
					var value = JSON.stringify(obj);
					(window as any).external.notify(value);
				}
			}, egret.URLRequestMethod.GET);

		}

		private _loginResult(account, id, token) {
			this._roleName = account;
			this._userId = this._roleId = id;
			this._token = token;
			new HttpLoader().request(`${getPhpPath('CheckUserInfo')}?keyType=${this._keyType}&uid=${id}&token=${token}`, this, (result: any) => {
				if (result.toString()!="0") {
					this._sign = result;
					this.end(null);
				}
			}, egret.URLRequestMethod.GET);

		}

	}
}