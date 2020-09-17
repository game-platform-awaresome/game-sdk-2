module platform {
	//--------------------------------------------------
	// 贪玩sdk
	//--------------------------------------------------
	export class SdkTanwan extends SdkBase {

		public constructor() {
			super(TW);
			this._channleId = 10000;
		}

		public getScripts(): string[] {
			if ((window as any).config && (window as any).config.ssl) {
				return ["https://image.693975.com/js/game/sdk-init.js"];
				 
			}
			return ["http://image.693975.com/js/game/sdk-init.js"];
		}

		public start(): boolean {
			var params: any = getUrlParams();
			this._userId = params.uid;		//贪玩平台用户ID,充值需要
			this._appId = params.appid;
			this._time = params.time;
			this._roleId = params.uid;	//贪玩平台用户ID，作为roleId
			this._roleName = params.uname;	//平台用户名
			this._sign = params.sign;	//Md5(uid+appid+time+login_key)
			this._logotype = params.logotype;
			if (this._logotype == -2) this._logourl = params.logo_url;
			//setTimeout(this.end,500,params);
			this.end(params);
			return true;
		}

		//切换账号
		public switchUser() {
			(window as any).omgSDK.switchUser();
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
			var obj = {};
			obj['dataType'] = dataType;
			obj['appid'] = appid;
			obj['serverID'] = serverId;
			obj['serverName'] = serverName;
			obj['userId'] = this._userId;
			obj['roleID'] = this._roleId;
			obj['roleName'] = gameRoleName;
			obj['roleLevel'] = gameRoleLevel;
			obj['moneyNum'] = diamonds;

			(window as any).omgSDK.reportUserInfo(obj);
			// var dataName: string = this.getDataName(dataType);
			// if (dataName == DATA_CHAT) {
			// 	var type = this.getChatType(chattype);
			// 	var key = "8ea0d55bdec444832abbee0e9f2a";
			// 	var gkey = "678";
			// 	var sign = window['md5'](gkey + serverId + this._userId + time + key);
			// 	var parm = `gkey=${gkey}&tkey=3&server_id=${serverId}&qid=${this._userId}&name=${gameRoleName}&type=${type}
			// 	&content=${content}&time=${time}&ip=""&toqid=""&toname=""&sign=${sign}`;
			// 	this.requestChatData(parm);
			// }
		}
		// private requestChatData(parm: any) {
		// 	var url = `${((window as any).config && (window as any).config.ssl) ? 'https' : 'http'}://h5chat.api.tanwan.com/index.php`;
		// 	var loader = new egret.HttpRequest();
		// 	loader.responseType = egret.HttpResponseType.TEXT;
		// 	loader.open(url, egret.HttpMethod.POST);
		// 	loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		// 	loader.addEventListener(egret.Event.COMPLETE, this.onRequestComplete, this);
		// 	loader.send(parm);
		// }
		private onRequestComplete(event: egret.Event): void {
		}
		public getChatType(type: string): string {
			switch (type) {
				case "1": return "4";//4世界消息类型：1私聊；2喇叭；3邮件；4世界；5国家；6工会/帮会；7队伍；8附近；9其他
				case "6": return "9";
				case "2": return "6";
				case "5": return "1";
			}
			return "";
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
			obj['buyNum'] = 1;
			obj['coin'] = 100;
			obj['game_id'] = this._appId;
			obj['server_id'] = serverId;
			obj['server_name'] = serverName;
			obj['uid'] = this._userId;
			obj['role_name'] = gameRoleName;
			obj['role_level'] = gameRoleLevel;
			obj['vip'] = gameRoleVip;
			obj['money'] = price;
			obj['game_gold'] = diamonds;
			obj['role_id'] = this._roleId;
			obj['product_id'] = productId;
			obj['product_name'] = productName;
			obj['product_desc'] = productDesc;
			obj['ext'] = productId;
			((window as any).omgSDK as any).pay(obj);
		}
	}
}