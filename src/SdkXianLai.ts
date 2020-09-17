module platform {
    //--------------------------------------------------
    // 闲来
    //--------------------------------------------------
    export class SdkXianLai extends SdkBase {
        private _app_secret: string;
        private _openId: string;
        private _accessToken: string;
        private _isNew: boolean;
        private _createSec: number;
        private _levelUpSec: number;
        private _totalDamends: number;
        public constructor() {
            super(XL);
            this._channleId = 10031;
        }

        public getScripts(): string[] {
            return ["https://download.xianlaivip.com/h5gamesdk/xlh5sdk-0.0.8.js"];
        }
        //{
        //  errCode: 0,
        //  errDesc: "",
        //  data: {
        //         "openId": "123456",
        //         "nickName": "andy",
        //         "sex": 1,
        //         "headImgUrl": "http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/0"
        //     }
        // }
        public start(): boolean {
            (window as any).XLH5SDK.init();
            this.addButton();

            var params = getUrlParams();
            this._userId = this._roleId = params.openId;
            this._accessToken = params.accessToken;
            this._time = params.timestamp;
            this._sign = params.sign;
            this._ext = window.location.href.substr(window.location.href.indexOf("?") + 1).replace(/&/g, ' ');
            ((window as any).eventDispatcher) = this.eventHandler.bind(this);
            window.addEventListener('XLH5SDKbackground', () => {
                this.stage.dispatchEventWith(egret.Event.DEACTIVATE);
            });
            window.addEventListener('XLH5SDKforeground', () => {
                this.stage.dispatchEventWith(egret.Event.ACTIVATE);
            });
            window.addEventListener('XLH5SDKdiamondchanged', () => {
                this.dispatchEventWith('paySuccess');
            });
            this.end(null);
            // new HttpLoader().request(getPhpPath('getUserInfo') + '?openId=' + params.openId + '&accessToken=' + this._accessToken, this, (str: string) => {
            //     var data = JSON.parse(str);
            //     if (data && data.errCode == 0) {
            //         this._userId = this._roleId = data.openId;
            //         this._roleName = data.nickName;s
            //         this._time = (new Date().getSeconds()).toString();
            //         this.end(null);
            //     } else {
            //         console.error(data.err_msg);
            //     }
            // }, egret.URLRequestMethod.GET);
            return true;
        }

        private eventHandler(type: string) {
            switch (type) {
                case 'XLH5SDKbackground':
                    this.stage.dispatchEventWith(egret.Event.DEACTIVATE);
                    break;
                case 'XLH5SDKforeground':
                    this.stage.dispatchEventWith(egret.Event.ACTIVATE);
                    break;
                case 'XLH5SDKdiamondchanged':
                    this.dispatchEventWith('paySuccess');
                    break;
                case 'testEvent':
                    alert('testEvent') !
                    break;
            }
        }

        private xlContainer: egret.DisplayObjectContainer;
        private startPoint: egret.Point;
        private touchPoint: egret.Point;
        private stage: egret.Stage;
        private addButton() {
            this.startPoint = new egret.Point();
            this.touchPoint = new egret.Point();
            this.xlContainer = new egret.DisplayObjectContainer();

            var moveIcon: egret.Bitmap = new egret.Bitmap();
            var moveContianer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
            moveContianer.touchEnabled = true;
            this.xlContainer.addChild(moveContianer);
            moveContianer.addChild(moveIcon);
            moveContianer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.buttonTouchHandler, this);

            var returnContianer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
            returnContianer.touchEnabled = true;
            var returnIcon: egret.Bitmap = new egret.Bitmap();
            this.xlContainer.addChild(returnContianer);
            returnContianer.addChild(returnIcon);
            returnIcon.x = 63;
            returnContianer.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
                (window as any).XLH5SDK.closeWebView();
            }, this);
            this.stage = (window as any).shell.layerManager.stage;
            (window as any).shell.layerManager.sdk.addChild(this.xlContainer);
            this.xlContainer.x = this.stage.stageWidth - (63 * 2) - 40;
            this.xlContainer.y = 50;
            RES.getResByUrl('resource/xldrag.png', (xldrag: egret.Texture) => {
                moveIcon.texture = xldrag;
                RES.getResByUrl('resource/xlretrun.png', (xlretrun: egret.Texture) => {
                    returnIcon.texture = xlretrun;
                }, this);
            }, this);
        }

        private buttonTouchHandler(e: egret.TouchEvent) {
            switch (e.type) {
                case egret.TouchEvent.TOUCH_BEGIN:
                    if (this.xlContainer.stage) {
                        this.xlContainer.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.buttonTouchHandler, this);
                        this.xlContainer.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.buttonTouchHandler, this);
                        this.startPoint.setTo(this.xlContainer.x, this.xlContainer.y);
                        this.touchPoint.setTo(e.stageX, e.stageY);
                    }
                    break;
                case egret.TouchEvent.TOUCH_MOVE:
                    var tx = this.startPoint.x + (e.stageX - this.touchPoint.x);
                    var ty = this.startPoint.y + (e.stageY - this.touchPoint.y);
                    tx = Math.max(tx, 0);
                    ty = Math.max(ty, 0);
                    tx = Math.min(tx, this.stage.stageWidth - (63 * 2));
                    ty = Math.min(ty, this.stage.stageHeight - 42);
                    this.xlContainer.x = tx;
                    this.xlContainer.y = ty;
                    break;
                case egret.TouchEvent.TOUCH_END:
                    if (this.xlContainer.stage) {
                        this.xlContainer.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.buttonTouchHandler, this);
                        this.xlContainer.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.buttonTouchHandler, this);
                    }
                    break;
            }
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
            var dataName: string = this.getDataName(dataType);
            switch (dataName) {
                case DATA_CREATE_ROLE:
                    break;
                case DATA_ENTER_GAME:
                    break;
                case DATA_LEVEL_UP:
                    // if (gameRoleLevel == 30) {
                    //     this.reportXLActivity();
                    // }
                    break;
            }
        }
        public reportXLActivity() {
            new HttpLoader().request(getPhpPath('reportActivity') + '?openId=' + this._roleId, this, (str: string) => {
                var data = JSON.parse(str);
                if (data && data.errCode == 0) {
                    console.log('报告数据成功!');
                } else {
                    console.error(data.err_msg);
                }
            }, egret.URLRequestMethod.GET);
        }
		/**
		 * 充值
 		 * @param server_id 游戏服ID
 		 * @param server_name 游戏服名称
 		 * @param gameRoleId	贪玩平台用户ID(由3.1 接口传入的uid)
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
            var params: any = {};
            params.openId = this._userId;
            params.body = productName;
            params.outTradeNo = generateUUID();
            params.totalFee = price * 10;
            params.notifyUrl = getPhpPath('pay_xl');
            params.feeType = 1;//1钻石 2RMB
            params.attach = `${params.outTradeNo}_${this._userId}_${serverId}_${params.totalFee}_${productId}_${productName}_${gameRoleName}`;
            (new HttpLoader()).request(getPhpPath('createOrder'), this, (str: string) => {
                var data: any = JSON.parse(str);
                if (data && data.errCode == 0) {
                    (window as any).XLH5SDK.payInDiamond(data.data, (result) => {
                        if (result.status == 0) {
                            egret.log('支付成功!');
                            this.dispatchEventWith('paySuccess');
                        } else {
                            egret.warn('支付异常!');
                            alert('支付异常!');
                        }
                    });
                } else {
                    alert(data.errDesc);
                }
            }, egret.URLRequestMethod.POST, new egret.URLVariables(formatUrlParams(params)));
        }

        /**获取钻石总数 */
        public getStoreDiamonds(caller: any, method: Function): void {
            (window as any).XLH5SDK.getDiamondNum((data: any) => {
                if (data.status == 0) {
                    this._totalDamends = data.diamondNum;
                    method.call(caller, data.diamondNum);
                }
            });
        }

        /**钻石数量 */
        public get totalDamends(): number {
            return this._totalDamends;
        }
    }
}