module platform {
    //--------------------------------------------------
    // 疯狂游乐场
    //--------------------------------------------------
    export class SdkFengKuang extends SdkBase {
        private _key: string;
        private _shareCallBack: Function;
        private _sharethisObject: any;
        public constructor() {
            super(FKYLC);
            this._channleId = 10006;
            this._appId = 'mysq';
            this._key = 'f3e8165fda0103c05675b3ac3f48e93e';
            this._verifyResult = false;
            this._focus = false;
        }

        public getScripts(): string[] {
            return ['https://cdn.hortor.net/sdk/sdk_agent.min.js'];
        }
        public start(): boolean {
            if (!(window as any).HORTOR_AGENT) return false;
            var mySdk: any = (window as any).HORTOR_AGENT;
            mySdk.init();
            mySdk.config({
                gameId: this._appId,
                share: {
                    timeline: {
                        title: "战斗伙伴宠宠欲动，轻松打造百星幻兽！",
                        imgUrl: "https://cdn0.myh5.90wmoyu.com/shell/resource/share/share_fkylc.png",
                        success: () => {
                            this._shareCallBack.call(this._sharethisObject);
                        },
                        cancel: () => { }
                    },
                    friend: {
                        title: "战斗伙伴宠宠欲动，轻松打造百星幻兽！",
                        desc: "魔域神曲重磅来袭！",
                        imgUrl: "https://cdn0.myh5.90wmoyu.com/shell/resource/share/share_fkylc.png",
                        success: () => {
                            this._shareCallBack.call(this._sharethisObject);
                        },
                        cancel: () => { }
                    },
                    //配置⾃定义参数
                    shareCustomParam: {
                        cp_param1: "",//⾃定义参数key必须以cp_开始
                        cp_param2: "",
                    }
                },
                pay: {
                    success: this.onPaySuccess.bind(this),
                    cancel: this.onPayCancel.bind(this)
                }
            });
            var params: any = getUrlParams();
            //do something
            this._userId = this._roleId = params.userId;
            this._roleName = params.userName;
            if (params.isSubscribe == "true") {
                this._focus = true;
            } else {
                this._focus = false;
            }
            if (params.isShowSubscribe&&params.isShowSubscribe == "true") {
                this._focusbonus = true;
            } else {
                this._focusbonus = false;
            }
            this._sign = params.sign;
            this._time = params.time;
            this._ext = params.friendCode;
            this.end(params);
            return true;
        }

        public
        /**充值成功回调 */
        private onPaySuccess() {

        }

        /**充值取消回调 */
        private onPayCancel() {

        }
        /**显示分享引导 */
        public showShare(caller: any, method: Function) {
            this._shareCallBack = method;
            this._sharethisObject = caller;
        }
        /** 显示关注二维码 */
        public showFocus(caller: any, method: Function) {
            var mySdk: any = (window as any).HORTOR_AGENT;
            mySdk.showQRCode();
        }
        /**实名验证 */
        public verifyIdentity(caller: any, method: Function) {
            var mySdk: any = (window as any).HORTOR_AGENT;
            mySdk.realnameAuthentication(function (origin, data) {
                this._verifyResult = data.errCode == 0;
                if (data.errCode == 0 || data.errCode == 1) {
                    method.call(caller, data);
                }
            });
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
            var obj: string = "";
            switch (dataName) {
                case DATA_ENTER_GAME:
                    obj = `who=${gameRoleUid}&deviceid=${this._userId}&appid=4DWGiGFGP5fB8&serverid=${serverId}&level=${gameRoleLevel}&channelid=hortor`;
                    this.requestData(obj, "login");
                    obj = `type=enter&who=${gameRoleUid}&deviceid=${this._userId}&appid=4DWGiGFGP5fB8&serverid=${serverId}&level=${gameRoleLevel}&channelid=hortor&subchid=${0}&power=${0}`;
                    this.requestData(obj, "point");
                    break;
                case DATA_CREATE_ROLE:
                    obj = `who=${gameRoleUid}&deviceid=${this._userId}&appid=4DWGiGFGP5fB8&serverid=${serverId}&level=${gameRoleLevel}&channelid=hortor`;
                    this.requestData(obj, "register");
                    break;
                case DATA_LEVEL_UP:
                    obj = `type=levelup&who=${gameRoleUid}&deviceid=${this._userId}&appid=4DWGiGFGP5fB8&serverid=${serverId}&level=${gameRoleLevel}&channelid=hortor&subchid=${0}&power=${0}`;
                    this.requestData(obj, "point");
                    break;
                case DATA_SELECT_SERVER:
                    obj = `type=oath&who=${gameRoleUid}&deviceid=${this._userId}&appid=4DWGiGFGP5fB8&serverid=${serverId}&level=${gameRoleLevel}&channelid=hortor&subchid=${0}&power=${0}`;
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
            buyCount: number, 					//购买数量，一般都是1
            productId: string, 				//充值商品ID，游戏内的商品ID
            productName: string, 			//商品名称，比如100元宝，500钻石...
            productDesc: string, 			//商品描述，比如 充值100元宝，赠送20元宝
            extension: number, 				//会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time: number//请求时间戳，精确到秒即可
        ) {
            var ext = serverId + "," + price;
            var sign = window['md5'](`ext=${ext}gameId=${this._appId}goodsId=${productId}secret=${this._key}time=${time}userId=${this._userId}`);
            var obj = `gameId=${this._appId}&goodsId=${productId}&goodsName=${productName}&userId=${this._userId}&money=${price * 100}&ext=${ext}&time=${time}&sign=${sign}`;
            this.getPayInfo(obj);
        }
        private getPayInfo(params) {
            var url = "https://wx.hortor.net/pay/partner";
            var loader = new egret.HttpRequest();
            loader.responseType = egret.HttpResponseType.TEXT;
            loader.open(url, egret.HttpMethod.POST);
            loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            loader.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
            loader.send(params);
        }
        private onGetComplete(event: egret.Event): void {
            var request = <egret.HttpRequest>event.currentTarget;
            var params = JSON.parse(request.response);
            if (params) {
                var mySdk: any = (window as any).HORTOR_AGENT;
                mySdk.pay(params);
            }
        }
    }
}