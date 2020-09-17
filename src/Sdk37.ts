module platform {
	//--------------------------------------------------
	// 37sdk
	//--------------------------------------------------
	export class Sdk37 extends SdkBase {
		private _isAdult: boolean;
		private _guid: string;
		private _c_game_id: string;
		private _loginkey: string;
		public constructor() {
			super(P37);
			this._channleId = 10021;
			this._appId = "36";
			this._loginkey = "M9s6LAPHul1me8B7Q2b6V0YjMgyr7hR2";
		}
		public getScripts(): string[] {
			var timestamp = new Date().getTime();
			return [`${((window as any).config && (window as any).config.ssl) ? 'https' : 'http'}://static.63yx.com/js/widget/lsyxsdk.js?v=` + timestamp];
		}
		public start(): boolean {
			var params: any = getUrlParams();
			this._roleId = this._userId = params.user_name;
			this._isAdult = params.is_adult==1;
			this._time = params.time;
			this._sign = params.sign;
			this._ext = params.is_adult + "," + params.user_refer;
			this._guid = params.guid;
			this._c_game_id = params.c_game_id;
			//user_refer	string	否	渠道标识
			//nickname	string	否	用户昵称，url编码
			//guid	string	否	进入游戏唯一标识
			this.end(params);
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
			var obj: string;
			var sign;
			switch (dataName) {
				case DATA_CREATE_ROLE:
					sign = window['md5'](this._roleId + this._guid + this.appId + this._c_game_id + serverId + time + this._loginkey);
					obj = `guid=${this._guid}&game_id=${this._appId}&c_game_id=${this._c_game_id}&sid=${serverId}&time=${time}&user_id=${this._roleId}&server_name=${serverName}&login_account=${this._roleId}&sign=${sign}`;
					this.requestData(obj, DATA_CREATE_ROLE);
					break;
				case DATA_ENTER_GAME:
					sign = window['md5'](this._roleId + this._guid + this.appId + this._c_game_id + serverId + time + this._loginkey);
					obj = `guid=${this._guid}&game_id=${this._appId}&c_game_id=${this._c_game_id}&sid=${serverId}&time=${time}&user_id=${this._roleId}&server_name=${serverName}&login_account=${this._roleId}&sign=${sign}`;
					this.requestData(obj, DATA_ENTER_GAME);
					break;
			}
		}
		private requestData(parm: any, type: string) {
			var url;
			switch (type) {
				case DATA_ENTER_GAME:
					url = "https://" + (window as any).config.ip + "/platform_37/entergameserver.php?" + parm;
					break;
				case DATA_CREATE_ROLE:
					url = "https://" + (window as any).config.ip + "/platform_37/createrole.php?" + parm;
					break;
			}
			var loader = new egret.HttpRequest();
			loader.responseType = egret.HttpResponseType.TEXT;
			loader.open(url, egret.HttpMethod.GET);
			loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			loader.addEventListener(egret.Event.COMPLETE, this.onRequestComplete, this);
			loader.send();
		}
		private onRequestComplete(event: egret.Event): void {

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
			var order_no = generateUUID();
			var str = `actor_id=${gameRoleId}&ext=${this._roleId}&game_id=${this._appId}&money=${price}&order_no=${order_no}&product_id=${productId}&sid=${serverId}&subject=${productName}&time=${time}&user_id=${this.roleId}&Yg9h19frcVZzWC376QhsbG8XgN2SPn2a`;
			var sign = window['md5'](str);
			var obj = {};
			obj['order_no'] = order_no;
			obj['game_id'] = this._appId;
			obj['user_id'] = this.roleId;
			obj['sid'] = serverId;
			obj['actor_id'] = gameRoleId;
			obj['product_id'] = productId;
			obj['subject'] = productName;
			obj['money'] = price;
			obj['time'] = time;
			obj['ext'] = this._roleId;
			obj['sign'] = sign;
			(window as any).lsyxsdk.pay(obj);
		}
	}
}