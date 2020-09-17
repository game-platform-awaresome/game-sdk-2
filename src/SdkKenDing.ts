module platform {
    //--------------------------------------------------
    // 垦丁sdk
    //--------------------------------------------------
    export class SdkKenDing extends SdkBase {
        private _app_secret: string;
        private _cur_channel: string;
        private _isNew: boolean;
        private _createSec: number;
        private _levelUpSec: number;
        public constructor() {
            super(KD);
            this._channleId = 10030;
            this._appId = '416863'
            this._app_secret = 'c2f4281bcda5ccb14c6dab96efd29fb7';
        }

        public getScripts(): string[] {
            return ["https://h5api.guoziyx.com/sdk/8899sdk-1.3.0.js"];
        }

        public start(): boolean {
            var params = getUrlParams();
            this._cur_channel = params.cur_channel;
            new HttpLoader().request(getPhpPath('getUserInfo') + '?key=' + params.key, this, (str: string) => {
                var data = JSON.parse(str);
                if (data && data.res_code == 0) {
                    this._userId = this._roleId = data.user_id;
                    this._roleName = data.nickname;
                    this._time = (new Date().getSeconds()).toString();
                    this._sign = md5(this._userId + '' + this._time + '' + this._appId + '' + this._app_secret);
                    this.end(null);
                } else {
                    console.error(data.err_msg);
                }
            }, egret.URLRequestMethod.GET);
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
                    this._isNew = true;
                    this._createSec = time;
                    new HttpLoader().request(`${getPhpPath('reportCreateRole')}?user_id=${this._userId}&role_id=${gameRoleUid}&role_name=${gameRoleName}&cur_channel=${this._cur_channel}&game_server=${serverId}`, this, null, egret.URLRequestMethod.GET);
                    break;
                case DATA_ENTER_GAME:
                    (window as any).KD_SDK.kd_enterGame({
                        is_new: this._isNew ? 1 : 0,//是否新创角（1-是，该角色为本次登录时创建；0-否）
                        role_level: gameRoleLevel,//当前角色等级（登录时角色等级）
                        game_id: this._appId,//游戏id
                        user_id: this._userId,//果子平台用户id
                        role_id: gameRoleUid,//角色id
                        role_name: gameRoleName,//角色名
                        server_id: serverId,//服务器ID
                        server_name: serverName,//服务器名称
                        power: 0,//战力
                        login_time: time,//本次登陆时间戳,精确到秒
                        member_level: gameRoleVipLevel,//用户等级,vip0,vip1
                        currency: diamonds,//未绑定元宝数量
                        bind_currency: 0,//绑定元宝数量
                        point: 0,//积分，没有传0
                        role_create_time: this._createSec ? this._createSec.toString() : "0",//角色创建时间戳,精确到秒
                        last_upgrade_time: this._levelUpSec ? this._levelUpSec.toString() : "0",//角色上次升级时间戳,精确到秒
                    }, () => { });
                    break;
                case DATA_LEVEL_UP:
                    this._levelUpSec = time;
                    (window as any).KD_SDK.kd_upgrade({
                        game_id: this._appId,//游戏id
                        user_id: this._userId,//果子平台用户id
                        role_id: gameRoleUid,//角色id
                        role_name: gameRoleName,//角色名
                        role_level: gameRoleLevel,//角色等级
                        server_id: serverId,//服务器ID
                        server_name: serverName,//服务器名称
                        member_level: gameRoleVipLevel,//用户等级,vip0,vip1
                        currency: diamonds,//未绑定元宝数量
                        bind_currency: 0,//绑定元宝数量
                        point: 0,//积分，没有传0
                        role_create_time: this._createSec ? this._createSec.toString() : "0",//角色创建时间戳,精确到秒
                        last_upgrade_time: this._levelUpSec ? this._levelUpSec.toString() : "0",//角色上次升级时间戳,精确到秒
                        is_new_role: this._isNew ? 1 : 0,//是否为新创角
                    }, () => { });
                    break;
            }
        }
        /**生成签名 详见垦丁签名生成规则*/
        private createSign(obj: any): string {
            var arr = [];
            var key: any;
            for (key in obj) {
                arr.push(key);
            }
            arr.sort();
            var result: string = '';
            for (var i = 0; i < arr.length; i++) {
                key = arr[i];
                var value = obj[key];
                result += key + '=' + (value ? value : '') + ((i < arr.length - 1) ? '&' : '');
            }
            return (md5(`${result}&secret=${this._app_secret}`) as string).toLocaleUpperCase();
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
            var pay: any = {};
            pay.body = productDesc;
            pay.total_fee = (price * 100).toString();
            pay.user_id = this._userId;
            pay.role_id = gameRoleId;
            pay.game_id = this._appId;
            pay.trade_id = generateUUID();
            pay.game_server = serverId;
            pay.role_level = gameRoleLevel.toString();
            pay.attach = this._userId + '_' + serverId + '_' + shopSetting.getShopId(this._type, productId).toString() + '_' + productName + '_' + gameRoleName;
            pay.notify_url = getPhpPath('pay_kd');
            pay.nonce_str = md5(new Date().getSeconds());
            pay.sign = this.createSign(pay);
            pay.notify_url = encodeURIComponent(pay.notify_url);
            (window as any).KD_SDK.kd_pay(pay);
        }
    }
}