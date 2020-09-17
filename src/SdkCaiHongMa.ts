module platform {
	//--------------------------------------------------
	// 彩虹马sdk
	//--------------------------------------------------
	export class SdkCaiHongMa extends SdkBase {
		public constructor() {
			super(CHM);
			this._channleId = 10016;
			this._appId = "161000112";
		}
		public getScripts(): string[] {
			return ["https://iosdk.papa21.com/static/rainbow_horse/csh5sdk.js"];
		}
		public start(): boolean {
			if (!(window as any).CS) return false;
			(window as any).CS.config({ appkey: this._appId, gameUrl: "https://" + (window as any).config.ip + "/index.chm.html", notifyUrl: "http://" + (window as any).config.ip + "/platform_chm/pay_chm.php" });
			(window as any).CS.login(this.callback, this)
			return true;
		}
		private callback(tokenObj) {
			console.log(tokenObj);
			//do something
			this._token = tokenObj.token;
			this._roleId = this._userId = tokenObj.uid;
			this.end.call(this, tokenObj);
		}
		public getDataType(type: string): number {
			switch (type) {
				case DATA_SELECT_SERVER: return 1;
				case DATA_CREATE_ROLE: return 2;
				case DATA_ENTER_GAME: return 3;
				case DATA_LEVEL_UP: return 4;
				case DATA_QUIT_GAME: return 5;
				case DATA_PAY: return 6;
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
			diamonds: number,		//角色元宝数
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
					var obj = {};
					obj['role_name'] = gameRoleName;
					obj['app_district'] = serverId;
					obj['app_server'] = serverId;
					(window as any).CS.createRole(obj);
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
			var obj = {};
			obj['product_id'] = productId;
			obj['product_name'] = productName;
			obj['app_order_id'] = generateUUID();
			obj['pay_amount'] = price;
			obj['role_id'] = this.roleId;
			obj['role_name'] = gameRoleName;
			obj['app_name'] = "魔域H5";
			obj['app_extra1'] = 0;
			obj['app_extra2'] = 0;
			obj['app_district'] = serverId;
			obj['app_server'] = serverId;
			obj['sign'] = this.sign;
			(window as any).CS.pay(obj, this.payCallback, "返回游戏");
		}
		private payCallback() {

		}
	}
}