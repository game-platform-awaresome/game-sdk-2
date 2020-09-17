module platform {
    //--------------------------------------------------
	// 漫灵sdk
	//--------------------------------------------------
	export class SdkManlin extends SdkBase{
		
		public constructor(){
			super(ML);
			this._appId='20004';
			this._channleId=egret.Capabilities.os=='iOS'?200040902:200040002;
		}

		public getScripts():string[]{
			return ['./sdklib/md5.js','./sdklib/mlsdk.js'];
		}
		public getDataType(type:string):number{
			switch(type){
				case DATA_SELECT_SERVER:return 1;
				case DATA_CREATE_ROLE:return 2;
				case DATA_ENTER_GAME:return 3;
				case DATA_LEVEL_UP:return 4;
				case DATA_QUIT_GAME:return 5;
			}
			return 0;
		}

		public auth(data:string){
		} 

		public start():boolean{
			console.log("[SDK ML] SEND_LOGIN...");
			(window as any).MLSdk.openLogin({onSuccess:this.loginSuccess.bind(this),onFaild:this.loginFaild.bind(this)});
			return true;
		}

		private loginSuccess(data){
			console.log("[SDK ML] login success:"+(data?data.toString():""));
			var object:JSON = JSON.parse(data);
			this._userId =  object['userID'].toString();
			this._roleId =  object['userID'].toString();
			this._token = object['token'];
			this.end(data);
		}

		private loginFaild(data){
			console.log("[SDK ML] login faild:"+(data?data.toString():""));
		}

		/**
		 * 		Note: 部分渠道要求在 选择服务器，创建角色，登录游戏，角色升级，退出游戏 等时刻，必须要上报游戏中玩家数据，以便渠道后台统计用户数据。所以，游戏层需要在特定的地方多次调用该方法。
		 *     	该方法将调用的时机分为几种类型：
				1：选择服务器
				2：创建角色
				3：进入游戏
				4：等级提升
				5：退出游戏

				所以在上面5个地方，都需要调用
				UUser.getInstance().submitExtraData(UserExtraData extraData)

				其中，UserExtraData就是游戏内玩家的数据，比如在选择服务器时，extraData中的dataType为1；创建角色的时候，dataType为2；进入游戏时，dataType为3；等级提升时，dataType为4；退出游戏时，dataType为5

				选择服务器时，因为还没有进入游戏，无法知道角色数据，extraData中只需要传入服务器信息即可。
		*
		*/
		//上报数据
		public submitExtraData(
			dataType:number,
			appid:string,			//游戏appid
			serverId:number,
			serverName:string,		//区服名
			gameRoleUid:string,
			gameRoleName:string,		//角色名
			gameRoleLevel:number,		//角色等级
			diamonds:number,		//角色元宝数
			time:number,				//请求时间戳，精确到秒即可
			content:string,		//聊天内容
			chattype:string,		//聊天类型
			job:number,		//职业
			gameRoleVipLevel: number,		//游戏中玩家的vip等级
			zhuanshenLevel: number		//游戏中玩家的vip等级
		){
			var callback = {
					onSuccess:function(data){}, 
					onFaild:function(data){} 
			};
			(window as any).MLSdk.submitExtraData(dataType, serverId, serverName, this._roleId, gameRoleName, egret.getTimer(), gameRoleLevel, diamonds, callback);
		}
		/**
		 * 充值
		 * @param serverID 玩家所在服务器的ID
		 * @param serverName 玩家所在服务器的名称
		 * @param roleID 玩家角色ID
		 * @param roleName 玩家角色名称
		 * @param roleLevel 玩家角色等级
		 * @param vip 游戏中玩家的vip等级
		 * @param price 充值金额(单位：分)
		 * @param roleHasGoldNum 玩家当前身上剩余的游戏币
		 * @param buyNum 购买数量，一般都是1
		 * @param productId 充值商品ID，游戏内的商品ID
		 * @param productName 商品名称，比如100元宝，500钻石...
		 * @param productDesc 商品描述，比如 充值100元宝，赠送20元宝
		 * @param extension 会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
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
			(window as any).MLSdk.openCharge(
				productId,
				productName, 
				productDesc, 
				price, 
				buyCount, 
				diamonds, 
				serverId, 
				serverName, 
				this._roleId, 
				gameRoleName, 
				gameRoleLevel, 
				gameRoleVip, 
				extension.toString(), 
				{onSuccess:this.chargeSuccess.bind(this),onFaild:this.chargeFaild.bind(this)});
		}

		private chargeSuccess(data){
			console.log("[SDK ML] openCharge success:"+(data?data.toString():""));
		}

		private chargeFaild(data){
			console.log("[SDK ML] openCharge faild:"+(data?data.toString():""));
		}
	}
}