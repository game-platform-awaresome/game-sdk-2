module platform {
	//--------------------------------------------------
	// 贪玩sdk
	//--------------------------------------------------
	export class SdkNiuNiuIOS extends SdkBase {

		public constructor() {
			super(NN_IOS);
			this._channleId = 10024;
			this._appId = '1113'
		}

		public getScripts(): string[] {
			return [];
		}

		public start(): boolean {
			(window as any).sdkLoginResult = (result, msg, uid, usertoken, username, isbindphone) => {
				if (result == '1') {
					this._userId = this._roleId = uid;
					this._roleName = username;
					this._token = usertoken;
					this._ext = isbindphone;
					this.end(null);
				}
			}
			(window as any).webkit.messageHandlers.sdklogin.postMessage("sdklogin");
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
			var prams = `roleId=${this._roleId}&roleName=${gameRoleName}&roleLevel=${gameRoleLevel}&zoneId=${serverId}&zoneName=${serverName}`;
			(window as any).webkit.messageHandlers.sdkroleinfo.postMessage(prams);
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
			var iosPayId=0;
			var prams = "billno=" + generateUUID()  //CP订单号
				+ "&sdkgoodsid=" + shopSetting.getShopId(this._type, productId,price)   //牛牛后台商品ID
				+ "&amount=" + price   //单份金额
				+ "&count=" + buyCount   //购买份数
				+ "&subject=" + productDesc   //商品名称描述等等
				+ "&extraInfo=" + productId   //额外参数
				+ "&innerId=" + iosPayId;   //如果有内购请填写内购ID
			(window as any).webkit.messageHandlers.sdkdomai.postMessage(prams);
		}
	}
}