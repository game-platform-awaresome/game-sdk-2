module platform {
	//--------------------------------------------------
	// 爱微游sdk
	//--------------------------------------------------
	export class SdkAiWeiYou extends SdkBase {
		private _key: string;
		private _shareCallBack: Function;
		private _shareCaller: any;
		public constructor() {
			super(AWY);
			this._channleId = 10005;
			this._appId = '374';
			this._key = 'mLolB6Dn8zwfhwJyY95iDL0lOsA3mg69';
			this._verifyResult = false;
			this._focus = false;
		}
		public getScripts(): string[] {
			return [`${((window as any).config && (window as any).config.ssl) ? 'https' : 'http'}://cdn.11h5.com/static/js/sdk.min.js`];
		}

		public start(): boolean {
			if (!(window as any).AWY_SDK) return false;
			(window as any).AWY_SDK.config(this._appId, this.onShareSuccess.bind(this), this.onPaySuccess.bind(this));
			var params: any = getUrlParams();
			//do something
			this._token = params.token;
			this.getUserInfo(params.token);
			if (params.verify && params.verify == 1) {
				this._verifyResult = true;
			}
			this._ext = params.fuid;
			return true;
		}

		private getUserInfo(token) {
			var url = "https://" + (window as any).config.ip + "/platform_awy/checkUserToken.php?userToken=" + token + "&gameid=374";
			var loader = new egret.HttpRequest();
			loader.responseType = egret.HttpResponseType.TEXT;
			loader.open(url, egret.HttpMethod.GET);
			loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			loader.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
			loader.send();
		}

		private onGetComplete(event: egret.Event): void {
			var request = <egret.HttpRequest>event.currentTarget;
			var params = JSON.parse(request.response);
			if (params.error && params.error == 403) {
				(window as any).AWY_SDK.logout()
			} else {
				this._userId = this._roleId = params.uid;
				this._time = params.time;
				this._sign = params.sign;
				if (params.focus && params.focus == 1) {
					this._focus = true;
				}
				this.end(params);
			}
		}
		/**用户分享成功后，SDK会回调该方法。调用该方法时SDK会同时给该函数返回一个字符串“SUCCESS”（全部大写）表示用户是否已分享成功，其余情况均表示分享不成功或者用户取消分享。*/
		public onShareSuccess(data) {
			if (this._shareCallBack) {
				this._shareCallBack.call(this._shareCaller)
			}
		}
		/**用户充值成功后，SDK会回调该方法。该方法仅在提供了同步回调的渠道使用，提供异步回调方法的渠道无此方法。*/
		public onPaySuccess() {
			this.showConfirmDialog("提示", "充值成功");
		}
		private showConfirmDialog(title, infomation) {
			var __ret = this.setAlearttyle();
			var shield = __ret.shield;
			var alertFram = __ret.alertFram;
			var strHtml;
			strHtml = "<ul style=\"list-style:none;margin:0px;padding:0px;width:100%\">\n";
			strHtml += " <li style=\"background:#DDDDDD;text-align:left;padding-left:20px;font-size:14px;font-weight:bold;height:30px;line-height:30px;border:1px solid #000000;border-radius :6px 6px 0px 0px;color:black\">" + title + "</li>\n";
			strHtml += " <li style=\"background:#DDDDDD;text-align:center;font-size:12px;height:95px;line-height:95px;border-left:1px solid #000000;border-right:1px solid #000000;color:#000000\">" + infomation + "</li>\n";
			strHtml += " <li style=\"background:#DDDDDD;text-align:center;font-weight:bold;height:30px;padding:5px;line-height:25px;border-radius :0px 0px 6px 6px; border:1px solid #000000;\"><input type=\"button\" value=\"确 定\" onclick=\"doOk()\" style=\"width:80px;background:#DDDDDD;color:black;border:1px solid black;border-radius:4px;cursor:pointer;cufont-size:14px;line-height:25px;outline:none;margin-top: 2px\"/></li>\n";
			strHtml += "</ul>\n";
			alertFram.innerHTML = strHtml;
			(window as any).doOk = function () {
				alertFram.style.display = "none";
				shield.style.display = "none";
			}
			document.body.appendChild(alertFram);
			document.body.appendChild(shield);
			alertFram.focus();
			document.body.onselectstart = function () { return false; };

		}
		private setAlearttyle() {
			var shield = document.createElement("DIV");
			shield.id = "shield";
			shield.style.position = "absolute";
			shield.style.left = "50%";
			shield.style.top = "50%";
			shield.style.width = "200px";
			shield.style.height = "100px";
			shield.style.marginLeft = "-100px";
			shield.style.marginTop = "-110px";
			shield.style.zIndex = "25";
			var alertFram = document.createElement("DIV");
			alertFram.id = "alertFram";
			alertFram.style.position = "absolute";
			alertFram.style.width = "200px";
			alertFram.style.height = "100px";
			alertFram.style.left = "50%";
			alertFram.style.top = "50%";
			alertFram.style.marginLeft = "-100px";
			alertFram.style.marginTop = "-110px";
			alertFram.style.textAlign = "left";
			alertFram.style.lineHeight = "100px";
			alertFram.style.zIndex = "300";
			alertFram.style.borderRadius = "4px";
			return { shield: shield, alertFram: alertFram };
		}
		/**实名验证 */
		public verifyIdentity(caller: any, method: Function) {
			(window as any).AWY_SDK.verify(function (data) {
				this._verifyResult = data.error == 0;
				if (data.error == 0) {
					method.call(caller, data);
				};
			});
		}
		/** 显示关注二维码 */
		public showFocus(caller: any, method: Function) {
			(window as any).AWY_SDK.showFocus()
		}
		/**显示分享引导 */
		public showShare(caller: any, method: Function) {
			(window as any).AWY_SDK.showShare();
			this._shareCaller = caller;
			this._shareCallBack = method;
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
			var obj: string = "";
			switch (dataName) {
				case DATA_ENTER_GAME:
					obj = `who=${gameRoleUid}&deviceid=${this._userId}&appid=4DWGiGFGP5fB8&serverid=${serverId}&level=${gameRoleLevel}&channelid=aiweiyou`;
					this.requestData(obj, "login");
					obj = `type=enter&who=${gameRoleUid}&deviceid=${this._userId}&appid=4DWGiGFGP5fB8&serverid=${serverId}&level=${gameRoleLevel}&channelid=aiweiyou&subchid=${0}&power=${0}`;
					this.requestData(obj, "point");
					break;
				case DATA_CREATE_ROLE:
					obj = `who=${gameRoleUid}&deviceid=${this._userId}&appid=4DWGiGFGP5fB8&serverid=${serverId}&level=${gameRoleLevel}&channelid=aiweiyou`;
					this.requestData(obj, "register");
					break;
				case DATA_LEVEL_UP:
					obj = `type=levelup&who=${gameRoleUid}&deviceid=${this._userId}&appid=4DWGiGFGP5fB8&serverid=${serverId}&level=${gameRoleLevel}&channelid=aiweiyou&subchid=${0}&power=${0}`;
					this.requestData(obj, "point");
					break;
				case DATA_SELECT_SERVER:
					obj = `type=oath&who=${gameRoleUid}&deviceid=${this._userId}&appid=4DWGiGFGP5fB8&serverid=${serverId}&level=${gameRoleLevel}&channelid=aiweiyou&subchid=${0}&power=${0}`;
					this.requestData(obj, "point");
					break;
			}
		}
		private requestData(parm: any, type: string) {
			var url;
			switch (type) {
				case "login":
					url = "https://log.gank-studio.com/receive/login";
					break;
				case "userinfo":
					url = "https://log.gank-studio.com/receive/login";
					break;
				case "register":
					url = "https://log.gank-studio.com/receive/register";
					break;
				case "point":
					url = "https://log.gank-studio.com/receive/point.php";
					break;
			}
			var loader = new egret.HttpRequest();
			loader.responseType = egret.HttpResponseType.TEXT;
			loader.open(url, egret.HttpMethod.POST);
			loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			loader.addEventListener(egret.Event.COMPLETE, this.onRequestComplete, this);
			loader.send(parm);
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
			buyCount: number, 					//购买数量，一般都是
			productId: string, 				//充值商品ID，游戏内的商品ID
			productName: string, 			//商品名称，比如100元宝，500钻石...
			productDesc: string, 			//商品描述，比如 充值100元宝，赠送20元宝
			extension: number, 				//会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
			time: number//请求时间戳，精确到秒即可
		) {
			var obj = {};
			obj['pid'] = shopSetting.getShopId(this._type, productId, price);
			obj['userdata'] = encodeURI(serverId + "," + productId);
			(window as any).AWY_SDK.pay(obj);
		}
	}
}