module platform {
    //--------------------------------------------------
    // 途游
    //--------------------------------------------------
    export class SdkTuYou extends SdkBase {
        public constructor() {
            super(TY);
            this._channleId = 10033;
        }

        public getScripts(): string[] {
            return ["https://downqn.tuyoo.com/h5sdk/v100/release/tuyoosdk_wxthirdshell_release_33300.js"];
        }

        public start(): boolean {
            this.addButton();
            var general = {};
            (window as any).TuyooSdk.OnInit('wxthirdshell.h5', general, () => {
                var params = getUrlParams();
                this._userId = this._roleId = params.userID;
                this._sign = params.sign;
                this._ext = params.userName + '|' + params.purl;
                this.end(null);
            }, this);
            return true;
        }

        private container:egret.DisplayObjectContainer;
        private startPoint:egret.Point;
        private touchPoint:egret.Point;
        private stage:egret.Stage;
        private addButton() {
            this.startPoint=new egret.Point();
            this.touchPoint=new egret.Point();
            this.container=new egret.DisplayObjectContainer();

            var moveIcon: egret.Bitmap = new egret.Bitmap();
            var moveContianer:egret.DisplayObjectContainer=new egret.DisplayObjectContainer();
            moveContianer.touchEnabled=true;
            this.container.addChild(moveContianer);
            moveContianer.addChild(moveIcon);
            moveContianer.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.buttonTouchHandler,this);

            var returnContianer:egret.DisplayObjectContainer=new egret.DisplayObjectContainer();
            returnContianer.touchEnabled=true;
            var returnIcon: egret.Bitmap = new egret.Bitmap();
            this.container.addChild(returnContianer);
            returnContianer.addChild(returnIcon);
            returnIcon.x=63;
            returnContianer.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
                (window as any).TuyooSdk.OnExit(false);
            },this);
            this.stage=(window as any).shell.layerManager.stage;
            (window as any).shell.layerManager.sdk.addChild(this.container);
            this.container.x=this.stage.stageWidth-(63*2)-40;
            this.container.y=50;
            RES.getResByUrl('resource/xldrag.png', (xldrag:egret.Texture) => {
                moveIcon.texture=xldrag;
                RES.getResByUrl('resource/xlretrun.png', (xlretrun:egret.Texture) => {
                    returnIcon.texture=xlretrun;
                }, this);
            }, this);
        }

        private buttonTouchHandler(e:egret.TouchEvent){
            switch(e.type){
                case egret.TouchEvent.TOUCH_BEGIN:
                    if(this.container.stage){
                        this.container.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.buttonTouchHandler,this);
                        this.container.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.buttonTouchHandler,this);
                        this.startPoint.setTo(this.container.x,this.container.y);
                        this.touchPoint.setTo(e.stageX,e.stageY);
                    }
                break;
                case egret.TouchEvent.TOUCH_MOVE:
                    var tx=this.startPoint.x+(e.stageX-this.touchPoint.x);
                    var ty=this.startPoint.y+(e.stageY-this.touchPoint.y);
                    tx=Math.max(tx,0);
                    ty=Math.max(ty,0);
                    tx=Math.min(tx,this.stage.stageWidth-(63*2));
                    ty=Math.min(ty,this.stage.stageHeight-42);
                    this.container.x=tx;
                    this.container.y=ty;
                break;
                case egret.TouchEvent.TOUCH_END:
                    if(this.container.stage){
                        this.container.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.buttonTouchHandler,this);
                        this.container.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.buttonTouchHandler,this);
                    }
                    if(Math.abs(this.startPoint.x-this.container.x)<1&&Math.abs(this.startPoint.y-this.container.y)<1){
                        this.share();
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
                    (window as any).TuyooSdk.CreateRole()
                    break;
                case DATA_ENTER_GAME:
                    break;
                case DATA_LEVEL_UP:
                    break;
            }
        }

        public share() {
            (window as any).TuyooSdk.Share({ title: '魔域来了', desc: '一款XXX的游戏', imgUrl: '' });
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
            var ext:string=`${this._userId}|${serverId}|${gameRoleId}|${productId}|${productName}|${gameRoleName}`;
            alert('SDKTuYou-Pay appInfo:'+ext);
            (window as any).TuyooSdk.Pay({
                prodId: shopSetting.getShopId(this._type, productId,price),        //商品Id
                prodName: productName,     //商品名称
                prodPrice: price,  //商品价格
                prodOrderId: generateUUID(),//cp的订单ID
                appInfo: ext//cp透穿参数，有就传，没有可以不穿，随后端返回
            }, function (status, paydata, error) {
                console.log("支付结果:", status, error, paydata);
            }, this);
        }
    }
}