module platform {
	//--------------------------------------------------
	// 贪玩sdk
	//--------------------------------------------------
	export class SdkNiuNiuH5 extends SdkBase {
		private _platform: string;
		public constructor(type:string) {
			super(type);
			this._channleId = 10022;
			this._appId = '7034'
		}

		public getScripts(): string[] {
			return ["//cdn.66173.cn/mobile/scripts/sdk/js/jsencrypt.min.js?y=2",
				"//cdn.66173.cn/mobile/scripts/sdk/js/md5.min.js?y=2",
				"//cdn.66173.cn/www/js/jquery-1.8.3.min.js",
				"//cdn.66173.cn/mobile/scripts/sdkmrt/js/nn_h5game_sdkmrt.js?t="+Date.parse(new Date().toString())];
		}

		public start(): boolean {
			(window as any).NMRTSDK.init({ appId: this._appId, debug: false, isLocal: true }, () => {
				(window as any).NMRTSDK.login(this.onLogin.bind(this))
			})
			return true;
		}
		public onLogin(response: any) {
			this._userId = this._roleId = response.userId;
			this._ext = response.platform;//所在渠道名,充值需要
			this._appId = response.appId;
			this._token = response.token;	
			this.end(response);
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
			var obj = {};
			obj['roleId'] = this._roleId;
			obj['roleName'] = gameRoleName;
			obj['roleLevel'] = gameRoleLevel;
			obj['serverId'] = serverId;
			obj['serverName'] = serverName;
			obj['roleReportType'] = dataType;
			obj['roleCreatedTime'] = time;
			obj['roleLevelMTime'] = time;
			obj['power'] = "";
			obj['partyName'] = "";
			obj['guildId'] = "";
			obj['guildName'] = "";
			obj['guildLevel'] = "";
			obj['guildLeaderId'] = "";
			obj['roleAttachParams'] = "";
			obj['restCoinNum'] = diamonds;
			var dataName: string = this.getDataName(dataType);
			switch (dataName) {
				case DATA_CREATE_ROLE:
					obj['roleLevelMTime'] = "";
					obj['roleReportType'] = 1;
					(window as any).NMRTSDK.roleReport(obj);
					break;
				case DATA_ENTER_GAME:
					obj['roleLevelMTime'] = "";
					obj['roleCreatedTime'] = "";
					obj['roleReportType'] = 2;
					(window as any).NMRTSDK.roleReport(obj);
					break;
				case DATA_LEVEL_UP:
					obj['roleCreatedTime'] = "";
					obj['roleReportType'] = 3;
					(window as any).NMRTSDK.roleReport(obj);
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
			var obj = {};
			obj['appId'] = this._appId;
			obj['platform'] = this._ext;
			obj['userId'] = this._userId;
			obj['roleId'] = this._roleId;
			obj['roleName'] = gameRoleName;
			obj['roleLevel'] = gameRoleLevel;
			obj['serverId'] = serverId;
			obj['serverName'] = serverName;
			obj['billno'] =  generateUUID();
			obj['sdkgoodsid'] = shopSetting.getShopId(this._type, productId,price);
			obj['amount'] = price;
			obj['count'] = buyCount;
			obj['productName'] = productName;
			obj['productDesc'] = productDesc;
			obj['subject'] = productDesc;
			obj['extraInfo'] = productId;
			obj['screenOrient'] = "1";
			(window as any).NMRTSDK.pay(obj);
		}
	}
}