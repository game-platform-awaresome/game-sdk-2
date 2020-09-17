module platform {
	//--------------------------------------------------
	// 1377sdk
	//--------------------------------------------------
	export class Sdk915 extends SdkBase {
		public constructor() {
			super(P915);
			this._channleId = 10018;
			this._switchUserBtn=false;
		}
		public getScripts(): string[] {
			return [`${((window as any).config && (window as any).config.ssl) ? 'https' : 'http'}://h5.915.com/js/gameSDK-init.js`];
		}
		public start(): boolean {
			var params: any = getUrlParams();
			this._roleId = this._userId = params.uid;
			this._roleName = params.uname;
			this._appId = params.appid;
			this._time = params.time;
			this._sign = params.sign;
			if(params.switchUserBtn&&params.switchUserBtn=="1"){
				this._switchUserBtn = true;//是否显示切换账号按钮
			}
			this._logotype = params.logotype;
			this._bgtype = params.bgtype;//游戏启动图控制
			this.end(params);
			return true;
		}
		        		//切换账号
		public switchUser(){
			(window as any).twSDK.logout();
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
			var reportType = 0;
			switch (dataName) {
				case DATA_SELECT_SERVER:
					reportType = 1;
					break;
				case DATA_CREATE_ROLE:
					reportType = 2;
					break;
				case DATA_ENTER_GAME:
					reportType = 3;
					break;
				case DATA_LEVEL_UP:
					reportType = 4;
					break;
				case DATA_QUIT_GAME:
					reportType = 5;
					break;
			}
			try {
				if (reportType > 0) {
					var obj = {};
					obj['appid'] = this._appId;
					obj['serverID'] = serverId;
					obj['serverName'] = serverName;
					obj['userId'] = this.roleId;
					obj['roleID'] = gameRoleUid;
					obj['roleName'] = gameRoleName;
					obj['roleLevel'] = gameRoleLevel;
					obj['moneyNum'] = diamonds;
					(window as any).twSDK.reportUserInfo(obj);
				}
			} catch (e) {
				console.error(e);
			}
		}
		public callFunc() { }
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
			obj['buyNum'] = 1;
			obj['coin'] = 100;
			obj['game_id'] = this._appId;
			obj['server_id'] = serverId;
			obj['server_name'] = serverName;
			obj['uid'] = this.roleId;
			obj['role_name'] = gameRoleName;
			obj['role_level'] = gameRoleLevel;
			obj['vip'] = gameRoleVip;
			obj['money'] = price;
			obj['game_gold'] = price * 100;
			obj['role_id'] = gameRoleId;
			obj['product_id'] = productId;
			obj['product_name'] = productName;
			obj['product_desc'] = productDesc;
			obj['ext'] = productId;
			obj['callback'] = function (response) { // 取消// [response{ret: 状态码, msg:'描述'}]
			};
			(window as any).twSDK.pay(obj);
		}
	}
}