module platform {
	//--------------------------------------------------
	// 1377sdk
	//--------------------------------------------------
	export class SdkWanBa extends SdkBase {
		private _shareCallBack: Function;
		private _shareCaller: any;
		private _focusCallBack: Function;
		private _focusthisObject: any;
		private _platform: number;//平台，2-IOS，1-安卓
		//private _pf: String;//用户平台来源，用于OpenAPI接口。透传即可，关于pf的详细用法，可以参见
		private _openkey: String;//第三方登录态openkey，调用window.getOpenKey()后自动更新
		private _loginType: String;//登录类型，qq-QQ账号登录，wx-微信账号登陆
		// private _via: String;// 渠道标识，用于统计，透传即可
		private _appurl: String;// 当前页面对应的原始地址
		private _appicon: String;// 图标，100x100
		private _shareurl: String;// 用于设置分享地址
		private _jumpurl: String;// 用于设置快捷方式
		// private _qua: any;
		private _os: number;
		// 解析后的对象meybeQua -- String 原始qua字符串
		//os -- String 操作系统。AND-安卓，IPH-IOS
		//app -- String 手机QQ、手机QQ空间或微信：SQ-手Q，QZ-手空，WX-微信，QQLive-腾讯视频
		//version -- String 版本号，前三位
		//subVersion -- String 版本号，第四位
		//appType -- String 渠道号
		private _isFollowingAccount: boolean;
		private _isQQlive: boolean = false;
		private _webViewVisible: boolean = true;
		private _ifComplete: boolean;
		public constructor() {
			super(WB);
			this._focus = false;
			this._verifyResult = false;
			this._miniGameVIP = false;
			this._wanbaWx = false;
			this._isXinYue = false;
			this._weiduanDownload = false;
			this._wbQQbeijing = false;
			if ((window as any).mqq.data.canIShow('favoritesToDesktop')) {
				this._focusbonus = true;
			}
			if ((window as any).mqq.data.canIShow('share')) {
				this._sharebonus = true;
			}
			if ((window as any).mqq.data.canIShow('miniGameVIP')) {
				this._miniGameVIP = true;
			}
			if ((window as any).OPEN_DATA.channel == 'SQ' && (window as any).OPEN_DATA.qua.app == 'SQ') {
				(window as any).mqq.app.isAppInstalled('com.tencent.qzweiduan48', function (result) {
					this._weiduanDownload = result;
				});
			}
			(window as any).__paySuccess = this.onPaySuccess.bind(this);
			(window as any).__payError = this.onPayError.bind(this);
			(window as any).__payClose = this.onPayClose.bind(this);
			//分享设置
			(window as any).mqq.invoke('ui', 'setOnShareHandler', (type) => {
				if (type == 0 && (window as any).OPEN_DATA.qua.app == 'SQ') {
					(window as any).mqq.ui.shareArkMessage(this.getShareContent(type), this.onShareSuccess.bind(this));
				} else {
					(window as any).mqq.invoke('ui', 'shareMessage', this.getShareContent(type), this.onShareSuccess.bind(this));
				}
			});
			//关注设置
			(window as any).mqq.invoke('ui', 'setOnAddShortcutHandler', {
				callback: (window as any).mqq.callback(function () {
					(window as any).mqq.ui.addShortcut({
						action: 'web',
						title: '魔域来了',
						icon: (window as any).OPEN_DATA.appicon,
						url: (window as any).OPEN_DATA.jumpurl,
						callback: (ret) => {
							if (this._focusCallBack) this._focusCallBack.call(this._focusthisObject)
						}
					});
				}, false, true)
			});

			(window as any).mqq.addEventListener("qbrowserVisibilityChange", (e) => {
				console.log("玩吧hidden~~" + !e.hidden);
				this._webViewVisible = !e.hidden;
				if (this._webViewChangeMethod) this._webViewChangeMethod.call(this._webViewChangeCaller);
				//mqq.ui.pageVisibility		查询页面的可见性
			});
			//this._channleId = 10019;

		}
		public getScripts(): string[] {
			return [`${((window as any).config && (window as any).config.ssl) ? 'https' : 'http'}://cdn-public.8zy.com/js/mxzsdk.js`];
		}

		/**支付成功执行 */
		protected onPaySuccess() {
			(window as any).getOpenKey(this.updateOpenKey.bind(this));
			alert("支付成功");
		}

		/**支付失败执行 */
		protected onPayError() {
			alert("支付错误");
		}
		/**关闭对话框执行,IOS下无效 */
		protected onPayClose() {
			alert("支付取消");
		}

		protected getShareContent(type: any) {
			var titleList = ["8个好友正在玩，直接感受一人三兽并肩PK的畅爽快感",
				"《魔域来了》会让所有心中有“怀旧之情”的玩家们感受到自己又回到了亚特大陆以及青春时最纯真的快乐！",
				"颠覆传统游戏单英雄的战斗体验，感受一人三兽并肩PK的畅爽快感。",
				"当年是否为没拥有一只百星幻兽而后悔，再来一次机会，是否能抓住！",
				"勇士，快来带领三兽，征战亚特大陆！"
			];
			return {
				title: titleList[Math.floor(Math.random() * titleList.length)],
				desc: '魔域来了重磅来袭！',
				share_type: type,
				share_url: (window as any).OPEN_DATA.shareurl,
				image_url: (window as any).OPEN_DATA.appicon,
				bk_url: "https://cdn0.myh5.90wmoyu.com/shell/share/share_wb.png",
				back: true
			}
		}

		/** 显示关注二维码 */
		public showFocus(caller: any, method: Function) {
			this._focusCallBack = method;
			this._focusthisObject = caller;
			(window as any).mqq.ui.addShortcut({
				action: 'web',
				title: '魔域来了',
				icon: (window as any).OPEN_DATA.appicon,
				url: (window as any).OPEN_DATA.jumpurl,
				callback: (ret) => {
					this._focusCallBack.call(this._focusthisObject)
				}
			})
			if (this._platform == 2) {
				this._focusCallBack.call(this._focusthisObject)
			}
		}
		public onShareSuccess(data) {
			if (data && data.retCode == 0) {
				alert('分享成功');
				if (this._shareCallBack) this._shareCallBack.call(this._shareCaller);
			} else {
				alert('分享取消');
			}
		}
		/**显示分享引导 */
		public showShare(caller: any, method: Function) {
			this._shareCaller = caller;
			this._shareCallBack = method;
			if (egret.Capabilities.isMobile) {
				if (this._isQQlive) {
					(window as any).mqq.ui.showShareMenu(this.getShareContent("QQLive"), this.onShareSuccess.bind(this));
				} else {
					(window as any).mqq.ui.showShareMenu();
				}
			} else {
				(window as any).mqq.ui.shareMessage(this.getShareContent(1), this.onShareSuccess.bind(this));
			}
		}
		/**显示分享引导 */
		public setupShare(caller: any, method: Function) {
			this._shareCallBack = method;
			this._shareCaller = caller;

		}
		/**红包活动 */
		public redPacketReport(reportData: any, ifComplete: boolean) {
			this._ifComplete = ifComplete;
			var parm = `openid=${this._roleId}&openkey=${this._openkey}&appid=${this._appId}&pf=${this._ext}&format=json&type=${reportData.type}&num=${reportData.num}&op=${2}&extid=${1}`;
			var requrl = "https://" + (window as any).config.ip + "/platform_wb/redPacketReport.php?" + parm;
			var loader = new egret.HttpRequest();
			loader.responseType = egret.HttpResponseType.TEXT;
			loader.open(requrl, egret.HttpMethod.GET);
			loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			loader.addEventListener(egret.Event.COMPLETE, this.onRedPacketRequestDataComplete, this);
			loader.send();

		}
		private onRedPacketRequestDataComplete(event: egret.Event): void {
			var request = <egret.HttpRequest>event.currentTarget;
			var params = JSON.parse(request.response);
			console.log(params);
			
			egret.setTimeout(function () {
				try {
					if (this._ifComplete) {
						(window as any).redPacketTaskReport(function (result) {console.log(result); });
					}
				}
				catch (e) {
				}
			},this,5000)

		}
		public start(): boolean {
			(window as any).getOpenKey(this.callback.bind(this));
			return true;
		}
		private callback(tokenObj) {
			var giftidData: any = getUrlParams();
			var params = (window as any).window.OPEN_DATA;
			this._platform = params.platform;
			this._pf = params.pf;
			this._openkey = params.openkey;
			this._channleId = (params.loginType=='openlogin')?'qq':params.loginType + params.platform;
			this._via = params.via;
			this._appurl = params.appurl;
			this._shareurl = params.shareurl;
			this._appicon = params.appicon;
			this._jumpurl = params.jumpurl;
			this._qua = params.qua;
			this._os = params.platform;
			this._roleId = this._userId = params.openid;
			this._appId = params.appid;
			this._token = params.openkey;
			this._ext = params.pf;
			this._wanbachannel = params.channel;
			if (params.pf == "weixin.114" || params.pf == "wanba_ts.113") {
				this._isXinYue = true;
			}

			if (giftidData.GIFT) {
				this._giftid = parseInt(giftidData.GIFT);
			}
			if (this._qua.app == "WX") {
				this._wanbaWx = true;
				this._sharebonus = true;
			}
			if (this._qua.app == "QQLive") {
				this._isQQlive = true;
			}
			if ((window as any).OPEN_DATA.channel == 'SQ' && (window as any).OPEN_DATA.qua.app == 'SQ') {
				this.getQQBeiJing();
			}
			//this._isFollowingAccount=params.isFollowingAccount;
			this.end.call(this, tokenObj);
			//window.appInBackground -- Boolean 当前页面是否在后台true -- Boolean 后台运行false -- Boolean 前台运行
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
					(window as any).reportRegister();
					var parm = "/" + this.appId + "/" + this._ext + "/" + this._roleId;
					this.requestData(parm, "regchar");
					break;
				case DATA_ENTER_GAME:
					(window as any).reportLogin();
					var parm = "/" + this.appId + "/" + this._ext + "/" + this._roleId + "/" + this._via;
					this.requestData(parm, "login");
					break;
				case DATA_QUIT_GAME:
					(window as any).reportLogin();
					var parm = "/" + this.appId + "/" + this._ext + "/" + this._roleId + "/" + 0;
					this.requestData(parm, "logout");
					break;
				case DATA_LEVEL_UP:
					if (this._pf == "wanba_ts.105") {
						var gameResultData = {
							"infoList": [
								{
									"type": 22,         //必选。数据类型。
									"op": 1,           //必选。运营类型。1表示增量，2表示存量。
									"num": 1,          //必选。数目。不超过32位有符号数。
								}
							]
						};
						try {
							(window as any).BK.QQ.reportGameResult(gameResultData, function (errCode, cmd, data) {
								if (errCode != 0) {
									//alert('上报运营结果失败' + errCode + cmd + data)
								} else {
									//alert('上报运营结果成功' + errCode + cmd + data)
								}
							}
							);
							var gameLevelData = {
								"infoList": [
									{
										"type": 1,         //必选。数据类型。
										"op": 2,           //必选。运营类型。1表示增量，2表示存量。
										"num": gameRoleLevel,          //必选。数目。不超过32位有符号数。
									}
								]
							};
							(window as any).BK.QQ.reportGameResult(gameLevelData, function (errCode, cmd, data) {
								if (errCode != 0) {
									//alert('上报运营结果失败' + errCode + cmd + data)
								} else {
									//alert('上报运营结果成功' + errCode + cmd + data)
								}
							});
						}
						catch (e) {
							alert(e);
						}
					}
					break;
			}
		}
		//上报
		private requestData(parm: any, type: string) {
			var url;
			switch (type) {
				case "regchar":
					url = "https://report.8zy.com/report/regchar";
					break;
				case "pay":
					url = "https://report.8zy.com/report/pay";
					break;
				case "login":
					url = "https://report.8zy.com/report/login";
					break;
				case "logout":
					url = "https://report.8zy.com/report/logout";
					break;
			}
			url = url + parm;
			var loader = new egret.HttpRequest();
			loader.responseType = egret.HttpResponseType.TEXT;
			loader.open(url, egret.HttpMethod.GET);
			loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			loader.addEventListener(egret.Event.COMPLETE, this.onRequestDataComplete, this);
			loader.send();
		}
		private onRequestDataComplete(event: egret.Event): void {
		}
		private _price: number;
		private _billno: string;//订单号
		private _itemid: string;
		private _count: number;
		private _sid: string;
		private _paytime: number;
		private _platformItemid;
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
			this._price = price;
			this._billno = generateUUID();
			this._itemid = productId;
			this._count = buyCount;
			this._sid = serverId;
			this._paytime = time;
			this._platformItemid = shopSetting.getShopId(this._type, productId, price, this._os == 2);
			(window as any).getOpenKey(this.updateOpenKey.bind(this));
		}
		private updateOpenKey(tokenObj) {
			this._openkey = tokenObj.data.openkey;
			this.userinfo();
		}
		//查询星币是否足够
		private userinfo() {
			var parm = `openid=${this._roleId}&zoneid=${this._os}&openkey=${this._openkey}&appid=${this._appId}&pf=${this._ext}&format=json`;
			var url;
			url = "https://" + (window as any).config.ip + "/platform_wb/getPlayzoneUserinfo.php?" + parm;
			var loader = new egret.HttpRequest();
			loader.responseType = egret.HttpResponseType.TEXT;
			loader.open(url, egret.HttpMethod.GET);
			loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			loader.addEventListener(egret.Event.COMPLETE, this.onRequestComplete, this);
			loader.send();
		}
		private onRequestComplete(event: egret.Event): void {
			var request = <egret.HttpRequest>event.currentTarget;
			var params = JSON.parse(request.response);
			if (params && params.data) {
				if (params.data[0].score >= (this._price * 10)) {
					this.buyItem();
				} else {
					console.log(params.data[0].score + "===星币");
					//充值星币
					(window as any).popPayTips({
						version: 'v2',
						defaultScore: this._price * 10,
						appid: this._appId
					});
				}
			}
		}
		//星币兑换游戏道具
		private buyItem() {
			var sign = window['md5'](this.roleId + this._price + this._sid + "Mr2daw4deDI2WEpd");
			var parm = `billno=${this._billno}&openid=${this._roleId}&zoneid=${this._os}&openkey=${this._openkey}&appid=${this._appId}&itemid=${this._platformItemid}&count=${this._count}&pf=${this._ext}&format=json&uid=${this.roleId}&orderId=${this._billno}&money=${this._price}&sid=${this._sid}&time=${this._paytime}&sign=${sign}&productId=${this._itemid}&channel=${this._channleId}&via=${this._via}`;
			var url;
			url = "https://" + (window as any).config.ip + "/platform_wb/buyPlayzoneItem.php?" + parm;
			var loader = new egret.HttpRequest();
			loader.responseType = egret.HttpResponseType.TEXT;
			loader.open(url, egret.HttpMethod.GET);
			loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			loader.addEventListener(egret.Event.COMPLETE, this.onBuyItemComplete, this);
			loader.send();
		}

		private onBuyItemComplete(event: egret.Event): void {
			var request = <egret.HttpRequest>event.currentTarget;
			if (request.response == "ok") {
				//齐永庆修改充值上报放php
				// var parm = "/" + this.appId + "/" + this._ext + "/" + this._roleId + "/" + this._price + "/" + 0 + "/" + this._via;
				// this.requestData(parm, "pay");
				if (this._pf == "wanba_ts.105") {
					var gameResultData = {
						"infoList": [
							{
								"type": 33,         //必选。数据类型。
								"op": 1,           //必选。运营类型。1表示增量，2表示存量。
								"num": 1,          //必选。数目。不超过32位有符号数。
							}
						]
					};
					(window as any).BK.QQ.reportGameResult(gameResultData, function (errCode, cmd, data) {
						if (errCode != 0) {
							//alert('上报运营结果失败' + errCode + cmd + data)
						} else {
							//alert('上报运营结果成功' + errCode + cmd + data)
						}
					}
					);
				}
				alert("购买成功");
			} else {
				alert("购买失败请重试");
			}
		}

		//--kevin----

		private _webViewChangeCaller: any;
		private _webViewChangeMethod: Function;
		public onWebViewVisibleChange(caller: any, method: Function) {
			this._webViewChangeCaller = caller;
			this._webViewChangeMethod = method;
		}

		public getWebViewVisible(): boolean {
			return this._webViewVisible;
		}
		//玩吧qq背景
		public getQQBeiJing() {
			var parm = `openid=${this._roleId}&openkey=${this._openkey}&appid=${this._appId}&pf=${this._ext}&format=json`;
			var url;
			url = "https://" + (window as any).config.ip + "/platform_wb/getQQBeiJing.php?" + parm;
			var loader = new egret.HttpRequest();
			loader.responseType = egret.HttpResponseType.TEXT;
			loader.open(url, egret.HttpMethod.GET);
			loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			loader.addEventListener(egret.Event.COMPLETE, this.onRequestQQBeiJingComplete, this);
			loader.send();
		}
		private onRequestQQBeiJingComplete(event: egret.Event): void {
			var request = <egret.HttpRequest>event.currentTarget;
			var params = JSON.parse(request.response);
			if (params && params.data) {
				this._wbQQbeijing = params.data.isUsed;
			}
		}
	}
}