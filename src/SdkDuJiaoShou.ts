module platform {
	//--------------------------------------------------
	// 独角兽
	//--------------------------------------------------
	export class SdkDuJiaoShou extends SdkBase {
		private _key: string;
		private _shareCallBack: Function;
		private _sharethisObject: any;
		private _focusCallBack: Function;
		private _focusthisObject: any;
		public constructor(type: string) {
			super(type);
			//this._channleId = 10007;
			this._appId = '4DWGiGFGP5fB8';
			this._key = 'bQ3TLCTcqU4i3d8l';
			this._verifyResult = false;
			this._focus = false;
			this._sharebonus = false;
			this._focusbonus = false;
		}

		public getScripts(): string[] {
			return [`${((window as any).config && (window as any).config.ssl) ? 'https' : 'http'}://cdn.djsh5.com/js/gank.sdk.https.js`];
		}
		public start(): boolean {
			if (!(window as any).GANK_SDK) return false;
			(window as any).GANK_SDK.config(this._appId, this.onShareSuccess.bind(this), this.onPaySuccess.bind(this), this.onFocusSuccess.bind(this), function (uid, openid, channelid, userinfo) {
				//某些特殊渠道（如玩吧），在SDK无法直接GET到用户信息时，将在此异步方法中返回。
				//do something
				this._userId = uid;
				this._roleId = uid;
				this._roleName = userinfo.nickname;
				this._focus = userinfo.focus;
				this._sign = userinfo.sign;
				this._time = userinfo.timestamp;
				this._appId = userinfo.gameid;
				this._channleId = channelid;
				this._subChannel = channelid;
				this.end(userinfo);
			});
			var params: any = getUrlParams();
			if (params && params.uid) {
				//do something
				this._userId = params.uid;
				this._roleId = params.uid;
				this._channleId = this._subChannel = params.channel;
				this._roleName = params.nickname;
				if (params.focus == "0") {
					this._focus = false;
				} else {
					this._focus = true;
				}
				if (params.sharebonus == "0") {
					this._sharebonus = false;
				} else {
					this._sharebonus = true;
				}
				if (params.focusbonus == "0") {
					this._focusbonus = false;
				} else {
					this._focusbonus = true;
				}
				this._sign = params.sign;
				this._time = params.timestamp;
				this._appId = params.gameid;
				this.end(params);
			}
			return true;
		}

		/**用户分享成功后，SDK会回调该方法。调用该方法时SDK会同时给该函数返回一个字符串“SUCCESS”（全部大写）表示用户是否已分享成功，其余情况均表示分享不成功或者用户取消分享。*/
		public onShareSuccess(data: any) {
			if (this._shareCallBack) {
				this._shareCallBack.call(this._sharethisObject)
			}
		}
		/**用户充值成功后，SDK会回调该方法。该方法仅在提供了同步回调的渠道使用，提供异步回调方法的渠道无此方法。*/
		private onPaySuccess() {
			//var obj = {};
			//(window as any).GANK_SDK.stat("payment",obj);

		}
		/**用户在某些渠道关注了对方公众号（或其他介质）后会异步回调该方法；*/
		public onFocusSuccess() {
			if (this._focusCallBack) {
				this._focusCallBack.call(this._focusthisObject)
			}
		}
		/**实名验证 */
		public verifyIdentity(caller: any, method: Function) {
			// if ((window as any).GANK_SDK.channelid && (window as any).GANK_SDK.channelid == "aiweiyou") {
			// 	(window as any).GANK_SDK.showVerify(function (data) {
			// 		this._verifyResult = data.isVerify == 1;
			// 		if (data.isVerify != 0) {
			// 			method.call(caller, data);
			// 		}
			// 	});
			// }
			//独角兽说没有认证
		}
		/** 显示关注二维码 */
		public showFocus(caller: any, method: Function) {
			(window as any).GANK_SDK.showFocus()
			this._focusCallBack = method;
			this._focusthisObject = caller;
		}
		/**显示分享引导 */
		public showShare(caller: any, method: Function) {
			(window as any).GANK_SDK.showShare()
			this._shareCallBack = method;
			this._sharethisObject = caller;

		}
		/** 显示关注二维码 */
		public setupFocus(caller: any, method: Function) {
			this._focusCallBack = method;
			this._focusthisObject = caller;
		}
		/**显示分享引导 */
		public setupShare(caller: any, method: Function) {
			this._shareCallBack = method;
			this._sharethisObject = caller;

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
			var obj = {};
			switch (dataName) {
				case DATA_ENTER_GAME:
					obj['who'] = gameRoleUid;
					obj['deviceid'] = this._userId;
					obj['appid'] = this._appId;
					obj['serverid'] = serverId;
					obj['level'] = gameRoleLevel;
					obj['channelid'] = this._channleId;
					(window as any).GANK_SDK.stat("login", obj);
					var parm = {};
					parm['type'] = "userinfo";
					parm['who'] = gameRoleUid;
					parm['deviceid'] = this._userId;
					parm['appid'] = this._appId;
					parm['serverid'] = serverId;
					parm['level'] = gameRoleLevel;
					parm['channelid'] = this._channleId;
					parm['power'] = gameRoleLevel;
					(window as any).GANK_SDK.report(parm);
					var parm1 = {};
					parm1['type'] = "enter";
					parm1['who'] = gameRoleUid;
					parm1['deviceid'] = this._userId;
					parm1['appid'] = this._appId;
					parm1['serverid'] = serverId;
					parm1['level'] = gameRoleLevel;
					parm1['channelid'] = this._channleId;
					parm1['subchid'] = 0;
					parm1['power'] = gameRoleLevel;
					(window as any).GANK_SDK.stat("point", parm1);
					break;
				case DATA_CREATE_ROLE:
					obj['who'] = gameRoleUid;
					obj['deviceid'] = this._userId;
					obj['appid'] = this._appId;
					obj['serverid'] = serverId;
					obj['level'] = gameRoleLevel;
					obj['channelid'] = this._channleId;
					(window as any).GANK_SDK.stat("register", obj);
					break;
				case DATA_LEVEL_UP:
					var parm1 = {};
					parm1['type'] = "levelup";
					parm1['who'] = gameRoleUid;
					parm1['deviceid'] = this._userId;
					parm1['appid'] = this._appId;
					parm1['serverid'] = serverId;
					parm1['level'] = gameRoleLevel;
					parm1['channelid'] = this._channleId;
					parm1['subchid'] = 0;
					parm1['power'] = gameRoleLevel;
					(window as any).GANK_SDK.stat("point", parm1);
					break;
				case DATA_SELECT_SERVER:
					var parm1 = {};
					parm1['type'] = "oath";
					parm1['who'] = gameRoleUid;
					parm1['deviceid'] = this._userId;
					parm1['appid'] = this._appId;
					parm1['serverid'] = serverId;
					parm1['level'] = gameRoleLevel;
					parm1['channelid'] = this._channleId;
					parm1['subchid'] = 0;
					parm1['power'] = gameRoleLevel;
					(window as any).GANK_SDK.stat("point", parm1);
					var parm = {};
					parm['type'] = "server";
					parm['who'] = gameRoleUid;
					parm['deviceid'] = this._userId;
					parm['appid'] = this._appId;
					parm['serverid'] = serverId;
					parm['level'] = gameRoleLevel;
					parm['channelid'] = this._channleId;
					parm['power'] = gameRoleLevel;
					(window as any).GANK_SDK.report(parm);
					break;
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

			obj['wid'] = shopSetting.getShopId(this._type, productId, price);
			obj['txid'] = generateUUID();
			obj['userdata'] = serverId + "," + productId;
			obj['serverid'] = serverId;
			obj['username'] = gameRoleName;
			(window as any).GANK_SDK.pay(obj);
		}
		/**
		 * 获取子平台
 		 */
		public get subChannel(): string {
			switch (this._subChannel) {
				case TypeSubDjs.AIAIYOU: return TypeSubDjs.AIAIYOU;
				case TypeSubDjs.HORTOR: return TypeSubDjs.HORTOR;
				case TypeSubDjs.QIANBAO: return TypeSubDjs.QIANBAO;
				case TypeSubDjs.KUGOU: return TypeSubDjs.KUGOU;
				case TypeSubDjs.UNKNOWN: return TypeSubDjs.UNKNOWN;
				case TypeSubDjs.QIDIAN: return TypeSubDjs.QIDIAN;
				case TypeSubDjs.CCYOU: return TypeSubDjs.CCYOU;
				case TypeSubDjs.QUNHEI: return TypeSubDjs.QUNHEI;
				case TypeSubDjs.MEITU: return TypeSubDjs.MEITU;
				case TypeSubDjs.KONGZHONG: return TypeSubDjs.KONGZHONG;
				case TypeSubDjs.BAISI: return TypeSubDjs.BAISI;
				case TypeSubDjs.FANQIE: return TypeSubDjs.FANQIE;
				case TypeSubDjs.CHUANGDU: return TypeSubDjs.CHUANGDU;
				case TypeSubDjs.CHANGXIANG: return TypeSubDjs.CHANGXIANG;
				case TypeSubDjs.WANBA: return TypeSubDjs.WANBA;
				case TypeSubDjs.IQIYI: return TypeSubDjs.IQIYI;
				case TypeSubDjs.HUOXINGWAN: return TypeSubDjs.HUOXINGWAN;
				case TypeSubDjs.YOUKU: return TypeSubDjs.YOUKU;
				case TypeSubDjs.YOUZU: return TypeSubDjs.YOUZU;
				case TypeSubDjs.TEST: return TypeSubDjs.TEST;
				case TypeSubDjs.GUOPAN: return TypeSubDjs.GUOPAN;
				case TypeSubDjs.XINGYOU: return TypeSubDjs.XINGYOU;
				case TypeSubDjs.SINA: return TypeSubDjs.SINA;
				case TypeSubDjs.SOUGOU: return TypeSubDjs.SOUGOU;
				case TypeSubDjs.GUAIMAO: return TypeSubDjs.GUAIMAO;
				case TypeSubDjs.ZHIWU: return TypeSubDjs.ZHIWU;
				case TypeSubDjs.WEIBO: return TypeSubDjs.WEIBO;
				case TypeSubDjs.DANGLE: return TypeSubDjs.DANGLE;
				case TypeSubDjs.ALIPAY: return TypeSubDjs.ALIPAY;
				case TypeSubDjs.SHUNWANG: return TypeSubDjs.SHUNWANG;
				case TypeSubDjs.SHOUQIANBA: return TypeSubDjs.SHOUQIANBA;
				case TypeSubDjs.XIAOMI: return TypeSubDjs.XIAOMI;

				case TypeSubDjs.YYB: return TypeSubDjs.YYB;
				case TypeSubDjs.XIAOXIONG: return TypeSubDjs.XIAOXIONG;
				case TypeSubDjs.ANZHI: return TypeSubDjs.ANZHI;
				case TypeSubDjs.QIQU: return TypeSubDjs.QIQU;
				case TypeSubDjs.TANWAN: return TypeSubDjs.TANWAN;
				case TypeSubDjs.TIANTUAN: return TypeSubDjs.TIANTUAN;
				case TypeSubDjs.HIWANWAN: return TypeSubDjs.HIWANWAN;
				case TypeSubDjs.TONGBUTUI: return TypeSubDjs.TONGBUTUI;
				case TypeSubDjs.KOUDAI: return TypeSubDjs.KOUDAI;
				case TypeSubDjs.BINGQU: return TypeSubDjs.BINGQU;
				case TypeSubDjs.YOUSENG: return TypeSubDjs.YOUSENG;
				case TypeSubDjs.LEGUYU: return TypeSubDjs.LEGUYU;
				case TypeSubDjs.WANNENG: return TypeSubDjs.WANNENG;
				case TypeSubDjs.YHD: return TypeSubDjs.YHD;
				case TypeSubDjs.AIAIYOU: return TypeSubDjs.AIAIYOU;
				case TypeSubDjs.QQREAD: return TypeSubDjs.QQREAD;
				case TypeSubDjs.QQBROWSER: return TypeSubDjs.QQBROWSER;
				case TypeSubDjs.QQGAME: return TypeSubDjs.QQGAME;
				case TypeSubDjs.HENKKUAI: return TypeSubDjs.HENKKUAI;
				case TypeSubDjs.G9G: return TypeSubDjs.G9G;
				case TypeSubDjs.G7K7K: return TypeSubDjs.G7K7K;
				case TypeSubDjs.G7724: return TypeSubDjs.G7724;
				case TypeSubDjs.G68V: return TypeSubDjs.G68V;
				case TypeSubDjs.G59YOU: return TypeSubDjs.G59YOU;
				case TypeSubDjs.G5543: return TypeSubDjs.G5543;
				case TypeSubDjs.G4399: return TypeSubDjs.G4399;
				case TypeSubDjs.G360: return TypeSubDjs.G360;
				case TypeSubDjs.G1758: return TypeSubDjs.G1758;
				case TypeSubDjs.FENGWAN: return TypeSubDjs.FENGWAN;
				case TypeSubDjs.KUPAI: return TypeSubDjs.KUPAI;
				case TypeSubDjs.SOUGOUZB: return TypeSubDjs.SOUGOUZB;
			}
			return this._subChannel;
		}
	}
}