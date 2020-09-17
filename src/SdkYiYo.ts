module platform {
    //--------------------------------------------------
    // 益游sdk
    //--------------------------------------------------
    export class SdkYiYo extends SdkBase {
        private _appkey: string;
        private _app_secret: string;
        /**是否成年 */
		protected _isAdult:boolean;
        public constructor() {
            super(YIYO);
            this._channleId = 10029;
            this._appkey = '57f095450db2fe488b5ff0b6247b6f67';
            this._app_secret='a6682dc258dbe3c1ab0e7d8d4dfb6d3c';
        }

        public getScripts(): string[] {
            return ["http://h5.h5youyou.com/assets/v0.1.0/sdk.js"];
        }

        public start(): boolean {
            var params = getUrlParams();
            this._userId = this._roleId = params.userid.toString();	//int	平台账号id (用于初始化sdk中的account的值	是
            this._roleName = params.username;	//string	平台账号名	是
            this._isAdult = params.isAdult == 1;	//int	 用于防沉迷，0为未填写实名信息，1为已成年，2为未成年	
            this._time = params.time;	//int	unix时间戳，精确到秒（10位数字）	是
            this._sign = params.sign;	//string	md5(userid+username+vaildCode+time+isAdult+app_secret)
            //按照平台提供的sign去服务端验证，需要把vaildCode,isAdult都带到服务端，太麻烦,所以这里的sign验证改我们自己定义的token验证:userid+time+appkey+app_secret;
            this._token=md5(this._userId+''+this._time+''+this._appkey+''+this._app_secret);
            (window as any).H5youyouSDK.Init({
                "account": this._userId,
                "appkey": this._appkey,
                "vaildCode": params.vaildCode
            });
            this.end(null);
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
                case DATA_ENTER_GAME:
                    (window as any).H5youyouSDK.RoleInfo({
                        "serverid": serverId,
                        "servername": serverName,
                        "roleid": gameRoleUid,
                        "rolename": gameRoleName,
                        "rolelevel": gameRoleLevel,
                        "appkey": this._appkey,
                        "account": this._userId
                    });
                    break;
            }
        }

		/**
		 * 充值
 		 * @param server_id 游戏服ID
 		 * @param server_name 游戏服名称
 		 * @param uid	贪玩平台用户ID(由3.1 接口传入的uid)
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
            //cporder	Cp方订单	是
            //userid	int	平台账号id	是
            //server_id	string	游戏区服	否
            //roleid	string	 角色ID	否
            //amt	int	充值金额（单位：元）	是
            //goodsid	string	商品ID	是
            //appkey	string	游戏ID	是
            //time	int	unix时间戳，精确到秒（10位数字）	是
            //custom	string	透传参数 base64加密	是
            //sign	string	md5(userid+appkey+amt+goodsid+cporder+custom+time+app_secret) ‘+’号为连接符	是

            /////var time:string=(new Date().getSeconds()).toString();
            var cporder: string = generateUUID();
            var ext: string = productId.toString();
            var param: string = `cporder=${cporder}&userId=${this._userId}&serverId=${serverId}&roleId=${gameRoleId}&price=${price}&productId=${productId}&appkey=${this._appkey}&time=${time}&ext=${ext}`;
            var url:string=getPhpPath('createOrder');
            new HttpLoader().request(url+'?'+param, this, (str: string) => {
                var data = JSON.parse(str);
                if (data.status == 1) {
                    (window as any).H5youyouSDK.Pay({
                        "safeCode": data.code
                    });
                }else{
                    egret.error(str);
                }
            }, egret.URLRequestMethod.GET);
        }
    }
}