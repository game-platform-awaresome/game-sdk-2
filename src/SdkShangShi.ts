module platform{
    //--------------------------------------------------
	// 上士sdk
	//--------------------------------------------------
	export class SdkShangShi extends SdkBase{

		private _key:string;
		public constructor(){
			super(SS);
			this._channleId=10004;
			this._key='A8L8ZXMPYB4SMQ64';
		}

		public getScripts():string[]{
			var timestamp = new Date().getTime();
			return [`${((window as any).config&&(window as any).config.ssl)?'https':'http'}://sycdn.shangshiwl.com/js/sswl_sdk.js?v=` + timestamp];
		}

		public getDataType(type:string):number{
			switch(type){
				case DATA_SELECT_SERVER:return 1;
				case DATA_CREATE_ROLE:return 2;
				case DATA_ENTER_GAME:return 3;
				case DATA_LEVEL_UP:return 4;
				case DATA_QUIT_GAME:return 5;
				case DATA_PAY:return 6;
			}
			return 0;
		}
		public start():boolean{
			var params:any=getUrlParams();
			this._userId = params.user_id;		//平台用户ID
			this._roleId = params.user_id;		//平台用户ID
			this._appId=params.app_id;
			this._time = params.time;   //登录时间
			this._sign=params.sign; //登陆签名
			this._token= params.code; //登入二次验证的code【10分钟内有效】
			this.end(params);
			return true;
		}

		//上报数据
		public submitExtraData(
			dataType:number,
			appid:string,			//游戏appid
			serverId:number,
			serverName:string,		//区服名
			gameRoleUid:string,
			gameRoleName:string,		//角色名
			gameRoleLevel:number,		//角色等级
			diamonds:number	,		//角色元宝数
			time:number,				//请求时间戳，精确到秒即可
			content:string,		//聊天内容
			chattype:string,		//聊天类型
			job:number,		//职业
			gameRoleVipLevel: number,		//游戏中玩家的vip等级
			zhuanshenLevel: number		//游戏中玩家的vip等级
		){
			var sign:string;
			var dataName:string=this.getDataName(dataType);
			switch(dataName){
				case DATA_CREATE_ROLE:
					sign=window['md5'](this._userId + gameRoleUid + time + this._key);
					((window as any).sswlSdk as any).createRole(this._userId,gameRoleUid,time,sign);
					break;
				case DATA_ENTER_GAME:
					sign=window['md5'](this._userId + serverId + this._time+time + this._key);
					((window as any).sswlSdk as any).serverLogin(this._userId,serverId,this._time,time,sign);
					break;
				case DATA_LEVEL_UP:
					sign=window['md5'](this._userId + gameRoleUid + gameRoleLevel + time + this._key);
					((window as any).sswlSdk as any).roleLevel(this._userId,gameRoleUid,gameRoleLevel,time,sign);
					break;
			}
		}

		/**
		 * 充值
 		 * @param user_id: 用户ID 
 		 * @param game_role_id：游戏角色ID
 		 * @param game_role_name：游戏角色名称，需进行urlencode
 		 * @param game_role_level：游戏角色等级
 		 * @param cp_trade_sn：游戏订单号，最多50个字符，不能有特殊符号
 		 * @param money：充值金额，单位：元
 		 * @param money_type：货币类型，默认为CNY
 		 * @param goods_id：游戏内购商品ID
 		 * @param goods_name：游戏内购商品名称, 需进行urlencode
		 * @param goods_desc：游戏内购商品描述, 需进行urlencode
 		 * @param server：服务器ID
 		 * @param time：请求时间戳，精确到秒即可
 		 * @param sign：加密字符串
 		 */
		public openCharge(
				serverId:string, 				//玩家所在服务器的ID
				serverName:string, 				//玩家所在服务器的名称
				gameRoleId:string, 					//玩家角色ID
				gameRoleName:string, 				//玩家角色名称
				gameRoleLevel:string, 				//玩家角色等级
				gameRoleVip:string, 					//游戏中玩家的vip等级
				price:number, 					//充值金额(单位：分)
				diamonds:number, 				//玩家当前身上剩余的游戏币
				buyCount:number, 					//购买数量，一般都是1
				productId:string, 				//充值商品ID，游戏内的商品ID
				productName:string, 			//商品名称，比如100元宝，500钻石...
				productDesc:string, 			//商品描述，比如 充值100元宝，赠送20元宝
				extension:number, 				//会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
				time:number//请求时间戳，精确到秒即可
		)
		{
			var money_type:string="CNY";
			var cp_trade_sn:string=generateUUID();
			var sign=window['md5'](this._userId+gameRoleId+gameRoleName+gameRoleLevel+cp_trade_sn+price+money_type+productId+productName+productDesc+serverId+time+this._key);
			((window as any).sswlSdk as any).h5Pay(
				this._userId,
				gameRoleId,
				gameRoleName,
				gameRoleLevel,
				cp_trade_sn,
				price,
				money_type,
				productId,
				productName,
				productDesc,
				serverId,
				time,
				sign
			);
		}
	}
}