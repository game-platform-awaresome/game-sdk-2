module platform {
	export class SdkBase extends egret.EventDispatcher {
		//平台Id
		protected _channleId: number = 0;
		//应用Id
		protected _appId: string;
		//平台用户Id
		protected _userId: number;
		//平台用户的注册Id
		protected _roleId: string;
		//平台用户的注册名
		protected _roleName: string;

		protected _token: string;
		protected _time: string;
		protected _sign: string;

		protected _switchUserBtn: boolean;
		protected _bgtype: number;
		protected _logotype: number;
		protected _logourl: string;
		protected _type: string;
		//auth透传参数
		protected _ext: string;
		protected _verifyResult: boolean;
		protected _focus: boolean;
		protected _focusbonus: boolean;
		protected _sharebonus: boolean;
		protected _subChannel: string;
		protected _pf: string;
		protected _giftid: number;
		protected _miniGameVIP: boolean;
		protected _weiduanDownload: boolean;

		protected _wanbaWx: boolean;
		protected _qua: any;
		protected _via: String;
		protected _isXinYue: boolean;
		protected _wanbachannel: any;
		protected _wbQQbeijing: boolean;
		protected _isPay:boolean;
        protected _shareServerId:string = ""; //分享链接进入的服务器Id
        protected _shareUserId:string = ""; //分享链接进入的玩家Id
        protected _shareType:number = 0; //分享链接进入的分享类型
		public constructor(type: string) {
			super();
			this._type = type;
		}

		public get qua(): any {
			return this._qua;
		}

		public get via(): String {
			return this._via;
		}
		
		public get type(): string {
			return this._type;
		}
		public get pf(): string {
			return this._pf;
		}
		public get giftid(): number {
			return this._giftid;
		}
		public get miniGameVIP(): boolean {
			return this._miniGameVIP;
		}
		public get weiduanDownload(): boolean {
			return this._weiduanDownload;
		}
		public get wanbaWx(): boolean {
			return this._wanbaWx;
		}
		public get isXinYue(): boolean {
			return this._isXinYue;
		}
		public get wbQQbeijing(): boolean {
			return this._wbQQbeijing;
		}
		public get wanbachannel(): any {
			return this._wanbachannel;
		}

		
		public get shareServerId(): string {
			return this._shareServerId;
		}
		public get shareUserId(): string {
			return this._shareUserId;
		}
		public get shareType(): number {
			return this._shareType;
		}

		public getScripts(): string[] {
			return [];
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

		public getDataName(type: number): string {
			switch (type) {
				case 1: return DATA_SELECT_SERVER;
				case 2: return DATA_CREATE_ROLE;
				case 3: return DATA_ENTER_GAME;
				case 4: return DATA_LEVEL_UP;
				case 5: return DATA_QUIT_GAME;
				case 6: return DATA_PAY;
				case 7: return DATA_CHAT;
			}
			return '';
		}
		/**
		 * 初始化 
		 */
		public start(): boolean {
			return false;
		}

		public end(data): void {
			egret.callLater(function () {
				this.dispatchEventWith(egret.Event.COMPLETE, false, data);
			}, this);
		}

		/**实名验证 */
		public verifyIdentity(caller: any, method: Function) { }
		public mixLoadEnd() { }
		/**显示关注二维码 */
		public showFocus(caller: any, method: Function) { }
		/**显示分享引导 */
		public showShare(caller: any, method: Function) { }
		/**提供给平台的回调 */
		public setupFocus(caller: any, method: Function) { }
		/**提供给平台的回调 */
		public setupShare(caller: any, method: Function) { }
		/**玩吧红包活动 */
		public redPacketReport(reportData: any, ifComplete: boolean) { }
		/**XL活动30级上报 */
		public reportXLActivity() { }


		/**打开充值界面**/
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
			time: number						//请求时间戳，精确到秒即可
		) { }

		/**上报数据**/
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
		) { }

		/**分享 */
		public shareAppMessage(
            uid:string,
			sid:string,
            shareType:number
        ) { }
		
		/**获取子渠道**/
		public get subChannel(): string {
			return this._subChannel;
		}

		//切换账号
		public switchUser() {

		}

		public get channleId(): number {
			return this._channleId;
		}
		public get appId(): string {
			return this._appId;
		}
		/**平台用户Id */
		public get userId(): number {
			return this._userId;
		}

		/**平台用户的注册Id */
		public get roleId(): string {
			return this._roleId;
		}
		/**平台用户的注册名 */
		public get roleName(): string {
			return this._roleName;
		}
		public get token(): string {
			return this._token;
		}
		public get time(): string {
			return this._time;
		}
		public get sign(): string {
			return this._sign;
		}
		/**auth额外参数 */
		public get ext(): string {
			return this._ext;
		}
		/**验证结果 */
		public get verifyResult(): boolean {
			return this._verifyResult;
		}
		/**关注公众号 */
		public get focus(): boolean {
			return this._focus;
		}
		/**是否显示邀请 */
		public get sharebonus(): boolean {
			return this._sharebonus;
		}
		/**是否显示关注公众号 */
		public get focusbonus(): boolean {
			return this._focusbonus;
		}
		public get switchUserBtn(): boolean {
			return this._switchUserBtn;
		}
		public get bgtype(): number {
			return this._bgtype;
		}
		public get logotype(): number {
			return this._logotype;
		}
		public get logourl(): string {
			return this._logourl;
		}
		public get isMobile(): boolean {
			return egret.Capabilities.isMobile;
		}
		public get isPC(): boolean {
			return !egret.Capabilities.isMobile;
		}
		public get isPay(): boolean {
			return this._isPay;
		}
		public get isWindowPC(): boolean {
			return egret.Capabilities.os == 'Windows PC';
		}
		public get isIOS(): boolean {
			return egret.Capabilities.os == 'iOS';
		}
		public get isAndroid(): boolean {
			return egret.Capabilities.os == 'Android';
		}
		public get isWindowsPhone(): boolean {
			return egret.Capabilities.os == 'Windows Phone';
		}
		public get isMacOs(): boolean {
			return egret.Capabilities.os == 'Mac OS';
		}
		public get isUnknown(): boolean {
			return egret.Capabilities.os == 'Unknown';
		}
	}
}