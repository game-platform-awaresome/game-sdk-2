module platform {
	//--------------------------------------------------
	// 九灵海外
	//--------------------------------------------------
	export class SdkJiuLinHaiWai extends SdkBase {
		private _key: string;
		private _os: string;
		private _shareCallBack: Function;
		private _shareCaller: any;
		private _sid: string;
		private _ratingCallBack: Function;
		private _ratingCaller: any;
		public constructor() {
			super(JLHW);
			this._channleId = 10027;
			this._appId = '1002';
			this._key = '';
			this._verifyResult = false;
		}
		public getScripts(): string[] {
			return ['./sdklib/hwsdk.js?v2.0'];
		}

		public start(): boolean {
			var params: any = getUrlParams();
			this._userId = this._roleId = params.uid;
			this._roleName = params.username;
			this._sign = params.gameSign;
			this._time = params.loginTime;
			this._ext = this._os = params.channel;
			this.end(params);
			hwShareCallBacked = (e: string) => {
				this.shareSuccess(e);
			}
			hwRatingCallBacked = (code) => {
				if (code.toString() == "0") {
					if (this._ratingCallBack) {
						this._ratingCallBack.call(this._ratingCaller)
					}
				}
			}
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
				case DATA_CREATE_ROLE://创角界面角色创建成功后调用
					(window as any).Sdk90hw.hwCreateRoleSuccess({ uid: this.userId, serverid: serverId, playerid: gameRoleUid });
					break;
				case DATA_ENTER_GAME://加载完毕进入场景调用
					(window as any).Sdk90hw.hwNewEntryGame({ uid: this.userId, serverid: serverId, level_order: gameRoleLevel });
					break;
				case DATA_LEVEL_UP://游戏中，角色升级调用
					if (gameRoleLevel == 10 || gameRoleLevel == 40 || gameRoleLevel == 80) (window as any).Sdk90hw.hwRoleLevel({ uid: this.userId, serverid: serverId, level_order: gameRoleLevel, playerid: gameRoleUid });
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
			price = Math.round(price * 100) / 100;
			var obj = {};
			obj['productId'] = shopSetting.getShopId(this._type, productId, price, this._os == 'AS');
			obj['serverid'] = serverId;
			obj['amount'] = price + '';
			obj['uid'] = this._userId;
			obj['shopid'] = productId;
			obj['roleid'] = gameRoleId;
			obj['optorid'] = 2;
			obj['gameId'] = 1002;
			obj['level_order'] = gameRoleLevel;
			(window as any).Sdk90hw.hwApplePay(obj);
		}

		/**唤醒Sdk */
		public sdkActive() {
			(window as any).Sdk90hw.hwAccountSetEvent({ uid: this.userId });
		}

		public setServerId(sid) {
			this._sid = sid.toString();
		}

		public showShare(caller: any, method: Function) {
			(window as any).Sdk90hw.hwShareAction({
				"uid": this._userId.toString(),
				"serverid": this._sid,
				"playerid": this._roleId.toString(),
				"andLink": "https://play.google.com/store/apps/details?id=com.moyu.chm&hl=en",	//要分享的安卓链接
				"iosLink": "https://itunes.apple.com/app/id1447213542", //要分享的ios链接
				"dsp": "Come come come on join me here. Get free gear right away.",       //链接描述
			});
			this._shareCaller = caller;
			this._shareCallBack = method;
		}

		public shareSuccess(e: string) {
			if (e == "0") {
				if (this._shareCallBack) {
					this._shareCallBack.call(this._shareCaller)
				}
				console.log("===分享成功===" + e + "===点击领取奖励===")
			} else if (e == "1") {
				console.log("===分享失败===" + e)
			} else if (e == "2") {
				console.log("===取消分享===" + e)
			}
		}

		public setRatingCallBack(caller: any, method: Function) {
			this._ratingCaller = caller;
			this._ratingCallBack = method;
		}

		public goToRating(){
			(window as any).Sdk90hw.hwGoToRating({});
		}

	}
}
var hwShareCallBacked: Function;
var hwRatingCallBacked: Function;
