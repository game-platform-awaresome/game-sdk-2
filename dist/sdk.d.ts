declare module platform {
    class SdkBase extends egret.EventDispatcher {
        protected _channleId: number;
        protected _appId: string;
        protected _userId: number;
        protected _roleId: string;
        protected _roleName: string;
        protected _token: string;
        protected _time: string;
        protected _sign: string;
        protected _switchUserBtn: boolean;
        protected _bgtype: number;
        protected _logotype: number;
        protected _logourl: string;
        protected _type: string;
        protected _ext: string;
        protected _verifyResult: boolean;
        protected _focus: boolean;
        protected _focusbonus: boolean;
        protected _sharebonus: boolean;
        protected _subChannel: string;
        protected _pf: string;
        protected _giftid: number;
        protected _miniGameVIP: boolean;
        protected _weiduanDownload: boolean;
        protected _wanbaWx: boolean;
        protected _qua: any;
        protected _via: String;
        protected _isXinYue: boolean;
        protected _wanbachannel: any;
        protected _wbQQbeijing: boolean;
        protected _isPay: boolean;
        protected _shareServerId: string;
        protected _shareUserId: string;
        protected _shareType: number;
        constructor(type: string);
        readonly qua: any;
        readonly via: String;
        readonly type: string;
        readonly pf: string;
        readonly giftid: number;
        readonly miniGameVIP: boolean;
        readonly weiduanDownload: boolean;
        readonly wanbaWx: boolean;
        readonly isXinYue: boolean;
        readonly wbQQbeijing: boolean;
        readonly wanbachannel: any;
        readonly shareServerId: string;
        readonly shareUserId: string;
        readonly shareType: number;
        getScripts(): string[];
        getDataType(type: string): number;
        getDataName(type: number): string;
        /**
         * 初始化
         */
        start(): boolean;
        end(data: any): void;
        /**实名验证 */
        verifyIdentity(caller: any, method: Function): void;
        mixLoadEnd(): void;
        /**显示关注二维码 */
        showFocus(caller: any, method: Function): void;
        /**显示分享引导 */
        showShare(caller: any, method: Function): void;
        /**提供给平台的回调 */
        setupFocus(caller: any, method: Function): void;
        /**提供给平台的回调 */
        setupShare(caller: any, method: Function): void;
        /**玩吧红包活动 */
        redPacketReport(reportData: any, ifComplete: boolean): void;
        /**XL活动30级上报 */
        reportXLActivity(): void;
        /**打开充值界面**/
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
        /**上报数据**/
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        /**分享 */
        shareAppMessage(uid: string, sid: string, shareType: number): void;
        /**获取子渠道**/
        readonly subChannel: string;
        switchUser(): void;
        readonly channleId: number;
        readonly appId: string;
        /**平台用户Id */
        readonly userId: number;
        /**平台用户的注册Id */
        readonly roleId: string;
        /**平台用户的注册名 */
        readonly roleName: string;
        readonly token: string;
        readonly time: string;
        readonly sign: string;
        /**auth额外参数 */
        readonly ext: string;
        /**验证结果 */
        readonly verifyResult: boolean;
        /**关注公众号 */
        readonly focus: boolean;
        /**是否显示邀请 */
        readonly sharebonus: boolean;
        /**是否显示关注公众号 */
        readonly focusbonus: boolean;
        readonly switchUserBtn: boolean;
        readonly bgtype: number;
        readonly logotype: number;
        readonly logourl: string;
        readonly isMobile: boolean;
        readonly isPC: boolean;
        readonly isPay: boolean;
        readonly isWindowPC: boolean;
        readonly isIOS: boolean;
        readonly isAndroid: boolean;
        readonly isWindowsPhone: boolean;
        readonly isMacOs: boolean;
        readonly isUnknown: boolean;
    }
}
declare module platform {
    class TypeSubDjs {
        static AIWEIYOU: string;
        static HORTOR: string;
        static QIANBAO: string;
        static KUGOU: string;
        static UNKNOWN: string;
        static QIDIAN: string;
        static CCYOU: string;
        static QUNHEI: string;
        static MEITU: string;
        static KONGZHONG: string;
        static BAISI: string;
        static FANQIE: string;
        static CHUANGDU: string;
        static CHANGXIANG: string;
        static WANBA: string;
        static IQIYI: string;
        static HUOXINGWAN: string;
        static YOUKU: string;
        static YOUZU: string;
        static TEST: string;
        static GUOPAN: string;
        static XINGYOU: string;
        static SINA: string;
        static SOUGOU: string;
        static ZHIWU: string;
        static GUAIMAO: string;
        static WEIBO: string;
        static DANGLE: string;
        static ALIPAY: string;
        static SHUNWANG: string;
        static SHOUQIANBA: string;
        static XIAOMI: string;
        static YYB: string;
        static XIAOXIONG: string;
        static ANZHI: string;
        static QIQU: string;
        static TANWAN: string;
        static TIANTUAN: string;
        static HIWANWAN: string;
        static TONGBUTUI: string;
        static KOUDAI: string;
        static BINGQU: string;
        static YOUSENG: string;
        static LEGUYU: string;
        static WANNENG: string;
        static YHD: string;
        static AIAIYOU: string;
        static QQREAD: string;
        static QQBROWSER: string;
        static QQGAME: string;
        static HENKKUAI: string;
        static G9G: string;
        static G7K7K: string;
        static G7724: string;
        static G68V: string;
        static G59YOU: string;
        static G5543: string;
        static G4399: string;
        static G360: string;
        static G1758: string;
        static FENGWAN: string;
        static KUPAI: string;
        static SOUGOUZB: string;
    }
}
declare module platform {
    const ML = "ml";
    const TW = "tw";
    const P9377 = "9377";
    const KY = "ky";
    /**上士 */
    const SS = "ss";
    /**爱微游 */
    const AWY = "awy";
    /**独角兽http */
    const DJSHP = "djshp";
    /**独角兽https */
    const DJSHPS = "djshps";
    /**疯狂游乐场 */
    const FKYLC = "fkylc";
    /**90海外 */
    const JLHW = "90hw";
    /**恺英手游 */
    const MG = "mg";
    /**高热手机端 */
    const GR = "gr";
    /**高热平台 */
    const GRH5 = "grh5";
    /**350 */
    const P350 = "350";
    /**1377 */
    const P1377 = "1377";
    /**悟饭 */
    const WF = "wf";
    /**彩虹马 */
    const CHM = "chm";
    /**九翎聚合 */
    const JLJH = "jljh";
    /**九翎聚合ios */
    const JLJHIOS = "jljhios";
    /**sy9377ios */
    const JSQQI = "jsqqi";
    /**sy9377安卓 */
    const JSQQA = "jsqqa";
    /**915 */
    const P915 = "915";
    /**玩吧 */
    const WB = "wb";
    /**三七 */
    const P37 = "37";
    /**牛牛 */
    const NN_H5 = "nn_h5";
    /**牛牛 */
    const NN_ANDROID = "nn_android";
    /**牛牛 */
    const NN_ZF = "nn_zf";
    /**牛牛 */
    const NN_ZF_H5 = "nn_zf_h5";
    /**牛牛 */
    const NN_IOS = "nn_ios";
    /**哆可梦 */
    const DKM = "dkm";
    /**9130 */
    const P9130 = "9130";
    /**益游 */
    const YIYO = "yiyo";
    /**垦丁 */
    const KD = "kd";
    /**闲来 */
    const XL = "xl";
    /**热血 */
    const RX = "rx";
    /**途游 */
    const TY = "ty";
    /**嗨玩 */
    const HAW = "haw";
    /**多瑙 */
    const DN = "dn";
    /**G123-日本 */
    const G123 = "g123";
    /**顺网 */
    const SWWEB = "swweb";
    const SWH5 = "swh5";
    /**微软MSUWP-MG */
    const MSUWP = "msuwp";
    /**微软MS-MG */
    const MS = "ms";
    /**Tai平台JJ */
    const TAI = "tai";
    const DATA_SELECT_SERVER = "data_select_server";
    const DATA_CREATE_ROLE = "data_create_role";
    const DATA_ENTER_GAME = "data_enter_game";
    const DATA_LEVEL_UP = "data_level_up";
    const DATA_QUIT_GAME = "data_quit_game";
    const DATA_PAY = "data_pay";
    const DATA_CHAT = "data_chat";
    const DATA_CREATE_ROLE_ENTER = "data_create_role_enter";
    const DATA_CREATE_ROLE_CLICK = "data_create_role_click";
    let sdk: SdkBase;
    /**打开SDK */
    let enable: (type: string, caller?: any, method?: Function) => Promise<any>;
    let createSdk: (type: any) => SdkGaoReH5;
    function loadSdkFile(scripts: any, caller: any, callback: any): void;
    function getUrlParams(): any;
    function generateUUID(): string;
    function getPhpPath(name: string): string;
    function formatUrlParams(params: any): string;
}
declare module platform {
    class Sdk1377 extends SdkBase {
        private _shareCallBack;
        private _sharethisObject;
        constructor();
        getScripts(): string[];
        start(): boolean;
        /**显示分享引导 */
        showShare(caller: any, method: Function): void;
        private onShareSuccess(data);
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        callFunc(): void;
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class Sdk350 extends SdkBase {
        constructor();
        getScripts(): string[];
        start(): boolean;
        /**充值成功回调 */
        private onPaySuccess();
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class Sdk37 extends SdkBase {
        private _isAdult;
        private _guid;
        private _c_game_id;
        private _loginkey;
        constructor();
        getScripts(): string[];
        start(): boolean;
        getDataType(type: string): number;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        private requestData(parm, type);
        private onRequestComplete(event);
        /**
 * 充值
     * @param server_id 游戏服ID
     * @param product_id	产品ID
     * @param product_name	产品名
   @param product_price	元
     */
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class Sdk9130 extends SdkBase {
        constructor();
        getScripts(): string[];
        start(): boolean;
        getDataType(type: string): number;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class Sdk915 extends SdkBase {
        constructor();
        getScripts(): string[];
        start(): boolean;
        switchUser(): void;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        callFunc(): void;
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class Sdk9377 extends SdkBase {
        private _key;
        constructor();
        start(): boolean;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class SdkAiWeiYou extends SdkBase {
        private _key;
        private _shareCallBack;
        private _shareCaller;
        constructor();
        getScripts(): string[];
        start(): boolean;
        private getUserInfo(token);
        private onGetComplete(event);
        /**用户分享成功后，SDK会回调该方法。调用该方法时SDK会同时给该函数返回一个字符串“SUCCESS”（全部大写）表示用户是否已分享成功，其余情况均表示分享不成功或者用户取消分享。*/
        onShareSuccess(data: any): void;
        /**用户充值成功后，SDK会回调该方法。该方法仅在提供了同步回调的渠道使用，提供异步回调方法的渠道无此方法。*/
        onPaySuccess(): void;
        private showConfirmDialog(title, infomation);
        private setAlearttyle();
        /**实名验证 */
        verifyIdentity(caller: any, method: Function): void;
        /** 显示关注二维码 */
        showFocus(caller: any, method: Function): void;
        /**显示分享引导 */
        showShare(caller: any, method: Function): void;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        private requestData(parm, type);
        private onRequestComplete(event);
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class SdkCaiHongMa extends SdkBase {
        constructor();
        getScripts(): string[];
        start(): boolean;
        private callback(tokenObj);
        getDataType(type: string): number;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        /**
 * 充值
     * @param server_id 游戏服ID
     * @param product_id	产品ID
     * @param product_name	产品名
   @param product_price	元
     */
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
        private payCallback();
    }
}
declare module platform {
    class SdkDkm extends SdkBase {
        constructor();
        getScripts(): string[];
        start(): boolean;
        getDataType(type: string): number;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class SdkDuJiaoShou extends SdkBase {
        private _key;
        private _shareCallBack;
        private _sharethisObject;
        private _focusCallBack;
        private _focusthisObject;
        constructor(type: string);
        getScripts(): string[];
        start(): boolean;
        /**用户分享成功后，SDK会回调该方法。调用该方法时SDK会同时给该函数返回一个字符串“SUCCESS”（全部大写）表示用户是否已分享成功，其余情况均表示分享不成功或者用户取消分享。*/
        onShareSuccess(data: any): void;
        /**用户充值成功后，SDK会回调该方法。该方法仅在提供了同步回调的渠道使用，提供异步回调方法的渠道无此方法。*/
        private onPaySuccess();
        /**用户在某些渠道关注了对方公众号（或其他介质）后会异步回调该方法；*/
        onFocusSuccess(): void;
        /**实名验证 */
        verifyIdentity(caller: any, method: Function): void;
        /** 显示关注二维码 */
        showFocus(caller: any, method: Function): void;
        /**显示分享引导 */
        showShare(caller: any, method: Function): void;
        /** 显示关注二维码 */
        setupFocus(caller: any, method: Function): void;
        /**显示分享引导 */
        setupShare(caller: any, method: Function): void;
        getDataType(type: string): number;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
        /**
         * 获取子平台
         */
        readonly subChannel: string;
    }
}
declare module platform {
    class SdkDuoNao extends SdkBase {
        private _channel;
        constructor();
        getScripts(): string[];
        start(): boolean;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        share(): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class SdkFengKuang extends SdkBase {
        private _key;
        private _shareCallBack;
        private _sharethisObject;
        constructor();
        getScripts(): string[];
        start(): boolean;
        public: any;
        /**充值成功回调 */
        private onPaySuccess();
        /**充值取消回调 */
        private onPayCancel();
        /**显示分享引导 */
        showShare(caller: any, method: Function): void;
        /** 显示关注二维码 */
        showFocus(caller: any, method: Function): void;
        /**实名验证 */
        verifyIdentity(caller: any, method: Function): void;
        getDataType(type: string): number;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        private requestData(parm, type);
        private onRequestComplete(event);
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
        private getPayInfo(params);
        private onGetComplete(event);
    }
}
declare module platform {
    class SdkG123 extends SdkBase {
        private _gameChannelId;
        private _job;
        constructor();
        getScripts(): string[];
        start(): boolean;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
        showShare(caller: any, method: Function): void;
        protected formatDate(target: Date): string;
        protected addZero(value: any): string;
    }
}
declare module platform {
    class SdkGaoRe extends SdkBase {
        private _key;
        constructor();
        start(): boolean;
        getDataType(type: string): number;
        private getJobById(id);
        switchUser(): void;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        /**
 * 充值
     */
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class SdkGaoReH5 extends SdkBase {
        constructor();
        getScripts(): string[];
        start(): boolean;
        switchUser(): void;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        /**
 * 充值
     * @param server_id 游戏服ID
     * @param product_id	产品ID
     * @param product_name	产品名
     */
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class SdkHaiWan extends SdkBase {
        constructor();
        getScripts(): string[];
        start(): boolean;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        share(): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class SdkJiuLinHaiWai extends SdkBase {
        private _key;
        private _os;
        private _shareCallBack;
        private _shareCaller;
        private _sid;
        private _ratingCallBack;
        private _ratingCaller;
        constructor();
        getScripts(): string[];
        start(): boolean;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number): void;
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
        /**唤醒Sdk */
        sdkActive(): void;
        setServerId(sid: any): void;
        showShare(caller: any, method: Function): void;
        shareSuccess(e: string): void;
        setRatingCallBack(caller: any, method: Function): void;
        goToRating(): void;
    }
}
declare var hwShareCallBacked: Function;
declare var hwRatingCallBacked: Function;
declare module platform {
    class SdkJuHe extends SdkBase {
        private _shareCallBack;
        private _sharethisObject;
        constructor();
        getScripts(): string[];
        start(): boolean;
        private xlContainer;
        private startPoint;
        private touchPoint;
        private stage;
        private addButton();
        private buttonTouchHandler(e);
        /** 游戏暂停函数 */
        private gamePauseCallback();
        /** 游戏开始函数 */
        private gameStartCallback();
        /** 显示关注二维码 */
        showFocus(caller: any, method: Function): void;
        mixLoadEnd(): void;
        getDataType(type: string): number;
        /**用户分享成功后，SDK会回调该方法。调用该方法时SDK会同时给该函数返回一个字符串“SUCCESS”（全部大写）表示用户是否已分享成功，其余情况均表示分享不成功或者用户取消分享。*/
        private onShareSuccess();
        /**显示分享引导 */
        showShare(caller: any, method: Function): void;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
        private _mydom;
        private _myWebView;
        private _domWidth;
        private _domHeight;
        private _megin;
        private juHePay(parameter);
    }
}
declare module platform {
    class SdkJuHeIOS extends SdkBase {
        private _shareCallBack;
        private _sharethisObject;
        private _isExamine;
        constructor();
        getScripts(): string[];
        start(): boolean;
        /** 游戏暂停函数 */
        private gamePauseCallback();
        /** 游戏开始函数 */
        private gameStartCallback();
        /** 显示关注二维码 */
        showFocus(caller: any, method: Function): void;
        mixLoadEnd(): void;
        getDataType(type: string): number;
        /**用户分享成功后，SDK会回调该方法。调用该方法时SDK会同时给该函数返回一个字符串“SUCCESS”（全部大写）表示用户是否已分享成功，其余情况均表示分享不成功或者用户取消分享。*/
        private onShareSuccess();
        /**显示分享引导 */
        showShare(caller: any, method: Function): void;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
        private _mydom;
        private _myWebView;
        private _domWidth;
        private _domHeight;
        private _megin;
        private juHePay(parameter);
    }
}
declare module platform {
    class SdkKaiYing extends SdkBase {
        constructor();
        getScripts(): string[];
        getDataType(type: string): number;
        getChatType(type: string): string;
        start(): boolean;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class HttpLoader extends egret.URLLoader {
        private _url;
        private _caller;
        private _complete;
        constructor();
        request(url: string, caller: any, complete: Function, requestMethod?: string, data?: egret.URLVariables): void;
        private onLoadComplete(e);
        private onLoadError(e);
    }
}
declare module platform {
    class SdkKenDing extends SdkBase {
        private _app_secret;
        private _cur_channel;
        private _isNew;
        private _createSec;
        private _levelUpSec;
        constructor();
        getScripts(): string[];
        start(): boolean;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        /**生成签名 详见垦丁签名生成规则*/
        private createSign(obj);
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class SdkManlin extends SdkBase {
        constructor();
        getScripts(): string[];
        getDataType(type: string): number;
        auth(data: string): void;
        start(): boolean;
        private loginSuccess(data);
        private loginFaild(data);
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
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
        private chargeSuccess(data);
        private chargeFaild(data);
    }
}
declare module platform {
    class SdkMS extends SdkBase {
        private _appKey;
        private _account;
        private _keyType;
        constructor();
        getScripts(): string[];
        start(): boolean;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number): void;
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
        private _loginResult(result, loginResult);
    }
}
declare module platform {
    class SdkMSUWP extends SdkBase {
        private _appKey;
        private _keyType;
        constructor();
        getScripts(): string[];
        start(): boolean;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number): void;
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
        private _loginResult(account, id, token);
    }
}
declare module platform {
    class SdkNiuNiuAndroid extends SdkBase {
        private _isOppoChannel;
        private _isOppoEnter;
        constructor(type: string);
        getScripts(): string[];
        start(): boolean;
        getDataType(type: string): number;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
        requestOppoInfo(serverId: string): void;
    }
}
declare module platform {
    class SdkNiuNiuH5 extends SdkBase {
        private _platform;
        constructor(type: string);
        getScripts(): string[];
        start(): boolean;
        onLogin(response: any): void;
        getDataType(type: string): number;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class SdkNiuNiuIOS extends SdkBase {
        constructor();
        getScripts(): string[];
        start(): boolean;
        getDataType(type: string): number;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class SdkReXue extends SdkBase {
        private _account;
        constructor();
        getScripts(): string[];
        start(): boolean;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class SdkShangShi extends SdkBase {
        private _key;
        constructor();
        getScripts(): string[];
        getDataType(type: string): number;
        start(): boolean;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class SdkShunWangH5 extends SdkBase {
        private _channel;
        private _gameId;
        private _swTag;
        constructor();
        getScripts(): string[];
        start(): boolean;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class SdkShunWangWeb extends SdkBase {
        private _channel;
        private _gameId;
        private _swTag;
        constructor();
        getScripts(): string[];
        start(): boolean;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class SdkSYJsqqA extends SdkBase {
        private _key;
        constructor();
        start(): boolean;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class SdkSYJsqqI extends SdkBase {
        private _key;
        constructor();
        start(): boolean;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare var Yxitai: any;
declare module platform {
    class SdkTai extends SdkBase {
        private GYxitai;
        private _channel;
        private _from;
        constructor();
        getScripts(): string[];
        start(): boolean;
        switchUser(): void;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class SdkTanwan extends SdkBase {
        constructor();
        getScripts(): string[];
        start(): boolean;
        switchUser(): void;
        getDataType(type: string): number;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        private onRequestComplete(event);
        getChatType(type: string): string;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class SdkTuYou extends SdkBase {
        constructor();
        getScripts(): string[];
        start(): boolean;
        private container;
        private startPoint;
        private touchPoint;
        private stage;
        private addButton();
        private buttonTouchHandler(e);
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        share(): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class SdkWanBa extends SdkBase {
        private _shareCallBack;
        private _shareCaller;
        private _focusCallBack;
        private _focusthisObject;
        private _platform;
        private _openkey;
        private _loginType;
        private _appurl;
        private _appicon;
        private _shareurl;
        private _jumpurl;
        private _os;
        private _isFollowingAccount;
        private _isQQlive;
        private _webViewVisible;
        private _ifComplete;
        constructor();
        getScripts(): string[];
        /**支付成功执行 */
        protected onPaySuccess(): void;
        /**支付失败执行 */
        protected onPayError(): void;
        /**关闭对话框执行,IOS下无效 */
        protected onPayClose(): void;
        protected getShareContent(type: any): {
            title: string;
            desc: string;
            share_type: any;
            share_url: any;
            image_url: any;
            bk_url: string;
            back: boolean;
        };
        /** 显示关注二维码 */
        showFocus(caller: any, method: Function): void;
        onShareSuccess(data: any): void;
        /**显示分享引导 */
        showShare(caller: any, method: Function): void;
        /**显示分享引导 */
        setupShare(caller: any, method: Function): void;
        /**红包活动 */
        redPacketReport(reportData: any, ifComplete: boolean): void;
        private onRedPacketRequestDataComplete(event);
        start(): boolean;
        private callback(tokenObj);
        getDataType(type: string): number;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        private requestData(parm, type);
        private onRequestDataComplete(event);
        private _price;
        private _billno;
        private _itemid;
        private _count;
        private _sid;
        private _paytime;
        private _platformItemid;
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
        private updateOpenKey(tokenObj);
        private userinfo();
        private onRequestComplete(event);
        private buyItem();
        private onBuyItemComplete(event);
        private _webViewChangeCaller;
        private _webViewChangeMethod;
        onWebViewVisibleChange(caller: any, method: Function): void;
        getWebViewVisible(): boolean;
        getQQBeiJing(): void;
        private onRequestQQBeiJingComplete(event);
    }
}
declare module platform {
    class SdkWuFan extends SdkBase {
        constructor();
        getScripts(): string[];
        start(): boolean;
        private callback(tokenObj);
        getDataType(type: string): number;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        /**
        * 充值
        * @param server_id 游戏服ID
        * @param product_id	产品ID
        * @param product_name	产品名
        * @param product_price	元
        */
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
        private payCallback();
    }
}
declare module platform {
    class SdkXianLai extends SdkBase {
        private _app_secret;
        private _openId;
        private _accessToken;
        private _isNew;
        private _createSec;
        private _levelUpSec;
        private _totalDamends;
        constructor();
        getScripts(): string[];
        start(): boolean;
        private eventHandler(type);
        private xlContainer;
        private startPoint;
        private touchPoint;
        private stage;
        private addButton();
        private buttonTouchHandler(e);
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
        reportXLActivity(): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
        /**获取钻石总数 */
        getStoreDiamonds(caller: any, method: Function): void;
        /**钻石数量 */
        readonly totalDamends: number;
    }
}
declare module platform {
    class SdkYiYo extends SdkBase {
        private _appkey;
        private _app_secret;
        /**是否成年 */
        protected _isAdult: boolean;
        constructor();
        getScripts(): string[];
        start(): boolean;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
declare module platform {
    class ShopSetting {
        private _mapping;
        private _list;
        constructor();
        hasMapping(type: string): boolean;
        getMappingName(type: string, isIOS?: boolean): string;
        getShopId(type: string, productId: string, price?: number, isIOS?: boolean): any;
        initializeMapping(type: string, caller?: any, method?: Function): Promise<void | {}>;
    }
    let shopSetting: ShopSetting;
}
declare module platform {
    class SdkKaiYingMG extends SdkBase {
        constructor();
        private getJobById(id);
        getDataType(type: string): number;
        start(): boolean;
        submitExtraData(dataType: number, appid: string, serverId: number, serverName: string, gameRoleUid: string, gameRoleName: string, gameRoleLevel: number, diamonds: number, time: number, content: string, chattype: string, job: number, gameRoleVipLevel: number, zhuanshenLevel: number): void;
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
        openCharge(serverId: string, serverName: string, gameRoleId: string, gameRoleName: string, gameRoleLevel: string, gameRoleVip: string, price: number, diamonds: number, buyCount: number, productId: string, productName: string, productDesc: string, extension: number, time: number): void;
    }
}
