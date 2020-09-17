module platform {
	//--------------------------------------------------
	// 恺英sdk
	//--------------------------------------------------
	export class SdkKaiYing extends SdkBase {

		public constructor() {
			super(KY);
			this._channleId = 10003;
			this._appId = '37';
		}

		public getScripts(): string[] {
			return [`${((window as any).config && (window as any).config.ssl) ? 'https' : 'http'}://static.xyimg.net/cn/static/h5/js/sdk_20170923.js?v=2018092103`];
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
		public getChatType(type: string): string {
			switch (type) {
				case "1": return "世界";
				case "6": return "综合";
				case "2": return "军团";
			}
			return "";
		}

		public start(): boolean {
			var params: any = getUrlParams();
			this._userId = params.uid;		//平台用户ID
			this._roleId = params.uid;		//平台用户ID
			//this._roleName=params.rolename;
			this._time = params.logintime;   //登录时间
			this._token = params.token;	//md5(uid+”salsjOIUR94wjsdfjlw4j”+logintime)
			this.end(params);
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
			gameRoleVipLevel: number,		//游戏中玩家的vip等级
			zhuanshenLevel: number		//游戏中玩家的vip等级
		) {
			var dataName: string = this.getDataName(dataType);
			switch (dataName) {
				case DATA_CREATE_ROLE:
					((window as any).XYY_SDK as any).createRole(this._userId, serverId, gameRoleName, gameRoleUid, serverName,gameRoleLevel);
					break;
				case DATA_ENTER_GAME:
					((window as any).XYY_SDK as any).gamelogin(this._userId, this._appId, serverId, gameRoleUid, gameRoleName);
					break;
				case DATA_CHAT:
					var typename: string = this.getChatType(chattype);
					((window as any).XYY_SDK as any).sendchatlog(serverId, gameRoleName, serverName, "xy", "xy", this._userId, content, chattype, typename, "xy", this._appId, "");
					break;
				case DATA_LEVEL_UP:
					((window as any).XYY_SDK as any).upgrade(this._userId, serverId, gameRoleName, gameRoleUid, serverName,gameRoleLevel);
					break;
			}
		}

		/**
		 * 充值
 		 * @param gid: 游戏id 
 		 * @param uid：登录后用户id，由登录传给游戏的用户id
 		 * @param appusername：用户名
 		 * @param sid：大区id
 		 * @param openuid：用户游戏内id
 		 * @param productid：用户购买道具id
 		 * @param money：金额(单位元)
 		 * @param resource：写死1477161
 		 * @param app_order_id：订单id
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
			// var obj = {};
			// obj['gid'] = 37;
			// obj['uid'] = uid;
			// obj['appusername'] = appusername;
			// obj['sid'] = sid;
			// obj['openuid'] = openuid;
			// obj['productid'] = productid;
			// obj['money'] = money;
			// obj['resource'] = resource;
			// obj['app_order_id'] = app_order_id;
			((window as any).XYY_SDK as any).loadPayBox(this._appId, this._userId, gameRoleName, serverId, gameRoleId, productId, price, 1477161, productId);
		}
	}
}