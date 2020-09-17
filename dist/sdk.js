var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var platform;
(function (platform) {
    var SdkBase = (function (_super) {
        __extends(SdkBase, _super);
        function SdkBase(type) {
            var _this = _super.call(this) || this;
            //平台Id
            _this._channleId = 0;
            _this._shareServerId = ""; //分享链接进入的服务器Id
            _this._shareUserId = ""; //分享链接进入的玩家Id
            _this._shareType = 0; //分享链接进入的分享类型
            _this._type = type;
            return _this;
        }
        Object.defineProperty(SdkBase.prototype, "qua", {
            get: function () {
                return this._qua;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "via", {
            get: function () {
                return this._via;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "type", {
            get: function () {
                return this._type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "pf", {
            get: function () {
                return this._pf;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "giftid", {
            get: function () {
                return this._giftid;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "miniGameVIP", {
            get: function () {
                return this._miniGameVIP;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "weiduanDownload", {
            get: function () {
                return this._weiduanDownload;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "wanbaWx", {
            get: function () {
                return this._wanbaWx;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "isXinYue", {
            get: function () {
                return this._isXinYue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "wbQQbeijing", {
            get: function () {
                return this._wbQQbeijing;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "wanbachannel", {
            get: function () {
                return this._wanbachannel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "shareServerId", {
            get: function () {
                return this._shareServerId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "shareUserId", {
            get: function () {
                return this._shareUserId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "shareType", {
            get: function () {
                return this._shareType;
            },
            enumerable: true,
            configurable: true
        });
        SdkBase.prototype.getScripts = function () {
            return [];
        };
        SdkBase.prototype.getDataType = function (type) {
            switch (type) {
                case platform.DATA_SELECT_SERVER: return 1;
                case platform.DATA_CREATE_ROLE: return 2;
                case platform.DATA_ENTER_GAME: return 3;
                case platform.DATA_LEVEL_UP: return 4;
                case platform.DATA_QUIT_GAME: return 5;
                case platform.DATA_PAY: return 6;
                case platform.DATA_CHAT: return 7;
            }
            return 0;
        };
        SdkBase.prototype.getDataName = function (type) {
            switch (type) {
                case 1: return platform.DATA_SELECT_SERVER;
                case 2: return platform.DATA_CREATE_ROLE;
                case 3: return platform.DATA_ENTER_GAME;
                case 4: return platform.DATA_LEVEL_UP;
                case 5: return platform.DATA_QUIT_GAME;
                case 6: return platform.DATA_PAY;
                case 7: return platform.DATA_CHAT;
            }
            return '';
        };
        /**
         * 初始化
         */
        SdkBase.prototype.start = function () {
            return false;
        };
        SdkBase.prototype.end = function (data) {
            egret.callLater(function () {
                this.dispatchEventWith(egret.Event.COMPLETE, false, data);
            }, this);
        };
        /**实名验证 */
        SdkBase.prototype.verifyIdentity = function (caller, method) { };
        SdkBase.prototype.mixLoadEnd = function () { };
        /**显示关注二维码 */
        SdkBase.prototype.showFocus = function (caller, method) { };
        /**显示分享引导 */
        SdkBase.prototype.showShare = function (caller, method) { };
        /**提供给平台的回调 */
        SdkBase.prototype.setupFocus = function (caller, method) { };
        /**提供给平台的回调 */
        SdkBase.prototype.setupShare = function (caller, method) { };
        /**玩吧红包活动 */
        SdkBase.prototype.redPacketReport = function (reportData, ifComplete) { };
        /**XL活动30级上报 */
        SdkBase.prototype.reportXLActivity = function () { };
        /**打开充值界面**/
        SdkBase.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) { };
        /**上报数据**/
        SdkBase.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) { };
        /**分享 */
        SdkBase.prototype.shareAppMessage = function (uid, sid, shareType) { };
        Object.defineProperty(SdkBase.prototype, "subChannel", {
            /**获取子渠道**/
            get: function () {
                return this._subChannel;
            },
            enumerable: true,
            configurable: true
        });
        //切换账号
        SdkBase.prototype.switchUser = function () {
        };
        Object.defineProperty(SdkBase.prototype, "channleId", {
            get: function () {
                return this._channleId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "appId", {
            get: function () {
                return this._appId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "userId", {
            /**平台用户Id */
            get: function () {
                return this._userId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "roleId", {
            /**平台用户的注册Id */
            get: function () {
                return this._roleId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "roleName", {
            /**平台用户的注册名 */
            get: function () {
                return this._roleName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "token", {
            get: function () {
                return this._token;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "time", {
            get: function () {
                return this._time;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "sign", {
            get: function () {
                return this._sign;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "ext", {
            /**auth额外参数 */
            get: function () {
                return this._ext;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "verifyResult", {
            /**验证结果 */
            get: function () {
                return this._verifyResult;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "focus", {
            /**关注公众号 */
            get: function () {
                return this._focus;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "sharebonus", {
            /**是否显示邀请 */
            get: function () {
                return this._sharebonus;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "focusbonus", {
            /**是否显示关注公众号 */
            get: function () {
                return this._focusbonus;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "switchUserBtn", {
            get: function () {
                return this._switchUserBtn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "bgtype", {
            get: function () {
                return this._bgtype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "logotype", {
            get: function () {
                return this._logotype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "logourl", {
            get: function () {
                return this._logourl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "isMobile", {
            get: function () {
                return egret.Capabilities.isMobile;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "isPC", {
            get: function () {
                return !egret.Capabilities.isMobile;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "isPay", {
            get: function () {
                return this._isPay;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "isWindowPC", {
            get: function () {
                return egret.Capabilities.os == 'Windows PC';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "isIOS", {
            get: function () {
                return egret.Capabilities.os == 'iOS';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "isAndroid", {
            get: function () {
                return egret.Capabilities.os == 'Android';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "isWindowsPhone", {
            get: function () {
                return egret.Capabilities.os == 'Windows Phone';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "isMacOs", {
            get: function () {
                return egret.Capabilities.os == 'Mac OS';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SdkBase.prototype, "isUnknown", {
            get: function () {
                return egret.Capabilities.os == 'Unknown';
            },
            enumerable: true,
            configurable: true
        });
        return SdkBase;
    }(egret.EventDispatcher));
    platform.SdkBase = SdkBase;
    __reflect(SdkBase.prototype, "platform.SdkBase");
})(platform || (platform = {}));
var platform;
(function (platform) {
    var TypeSubDjs = (function () {
        function TypeSubDjs() {
        }
        TypeSubDjs.AIWEIYOU = "aiweiyou"; //爱微游
        TypeSubDjs.HORTOR = "hortor"; //疯狂游乐场
        TypeSubDjs.QIANBAO = "qianbao"; //钱宝
        TypeSubDjs.KUGOU = "kugou"; //酷狗
        TypeSubDjs.UNKNOWN = "unknown"; //通用
        TypeSubDjs.QIDIAN = "qidian"; //起点
        TypeSubDjs.CCYOU = "ccyou"; //虫虫游
        TypeSubDjs.QUNHEI = "qunhei"; //群黑
        TypeSubDjs.MEITU = "meitu"; //美图
        TypeSubDjs.KONGZHONG = "kongzhong"; //空中网
        TypeSubDjs.BAISI = "baisi"; //百思
        TypeSubDjs.FANQIE = "fanqie"; //番茄
        TypeSubDjs.CHUANGDU = "changdu"; //畅读书城
        TypeSubDjs.CHANGXIANG = "changxiang"; //畅想
        TypeSubDjs.WANBA = "wanba"; //玩吧
        TypeSubDjs.IQIYI = "iqiyi"; //爱奇艺
        TypeSubDjs.HUOXINGWAN = "huoxingwan"; //火星玩
        TypeSubDjs.YOUKU = "youku"; //游酷
        TypeSubDjs.YOUZU = "youzu"; //游族
        TypeSubDjs.TEST = "test"; //测试渠道
        TypeSubDjs.GUOPAN = "guopan"; //果盘
        TypeSubDjs.XINGYOU = "xinyou"; //新游
        TypeSubDjs.SINA = "sina"; //新浪
        TypeSubDjs.SOUGOU = "sougou"; //搜狗
        TypeSubDjs.ZHIWU = "zhiwu"; //指舞飞游
        TypeSubDjs.GUAIMAO = "guaimao"; //怪猫
        TypeSubDjs.WEIBO = "weibo"; //微博
        TypeSubDjs.DANGLE = "dangle"; //当乐
        TypeSubDjs.ALIPAY = "alipay"; //支付包
        TypeSubDjs.SHUNWANG = "shunwang"; //顺网
        TypeSubDjs.SHOUQIANBA = "shouqianba"; //收钱吧
        TypeSubDjs.XIAOMI = "xiaomi"; //小米
        TypeSubDjs.YYB = "yyb"; //应用宝
        TypeSubDjs.XIAOXIONG = "xiaoxiong"; //小熊游乐场
        TypeSubDjs.ANZHI = "anzhi"; //安智
        TypeSubDjs.QIQU = "qiqu"; //奇趣
        TypeSubDjs.TANWAN = "tianwan"; //天玩
        TypeSubDjs.TIANTUAN = "tiantuan"; //天团
        TypeSubDjs.HIWANWAN = "hiwanwan"; //嗨玩玩
        TypeSubDjs.TONGBUTUI = "tongbutui"; //同步推
        TypeSubDjs.KOUDAI = "koudai"; //口袋微游戏
        TypeSubDjs.BINGQU = "bingqu"; //冰趣
        TypeSubDjs.YOUSENG = "youseng"; //优森移动
        TypeSubDjs.LEGUYU = "leguyu"; //乐谷鱼
        TypeSubDjs.WANNENG = "wanneng"; //万能wifi
        TypeSubDjs.YHD = "yhd"; //一号店
        TypeSubDjs.AIAIYOU = "aiaiyou"; //爱爱游
        TypeSubDjs.QQREAD = "qqread"; //QQ阅读
        TypeSubDjs.QQBROWSER = "qqbrowser "; //QQ浏览器
        TypeSubDjs.QQGAME = "qqgame"; //QQ大厅
        TypeSubDjs.HENKKUAI = "henkuai"; //9G(很快)
        TypeSubDjs.G9G = "9g"; //9G
        TypeSubDjs.G7K7K = "7k7k"; //7k7k
        TypeSubDjs.G7724 = "7724"; //7724
        TypeSubDjs.G68V = "68v"; //68微游戏
        TypeSubDjs.G59YOU = "59you"; //59游
        TypeSubDjs.G5543 = "5543"; //5543
        TypeSubDjs.G4399 = "4399"; //4399
        TypeSubDjs.G360 = "360"; //360
        TypeSubDjs.G1758 = "1758"; //1758
        TypeSubDjs.FENGWAN = "fengwan"; //疯玩
        TypeSubDjs.KUPAI = "kupai"; //酷派
        TypeSubDjs.SOUGOUZB = "sougouzb"; //搜狗直播
        return TypeSubDjs;
    }());
    platform.TypeSubDjs = TypeSubDjs;
    __reflect(TypeSubDjs.prototype, "platform.TypeSubDjs");
})(platform || (platform = {}));
var platform;
(function (platform) {
    platform.ML = 'ml';
    platform.TW = 'tw';
    platform.P9377 = '9377';
    platform.KY = 'ky';
    /**上士 */
    platform.SS = 'ss';
    /**爱微游 */
    platform.AWY = 'awy';
    /**独角兽http */
    platform.DJSHP = 'djshp';
    /**独角兽https */
    platform.DJSHPS = 'djshps';
    /**疯狂游乐场 */
    platform.FKYLC = 'fkylc';
    /**90海外 */
    platform.JLHW = '90hw';
    /**恺英手游 */
    platform.MG = 'mg';
    /**高热手机端 */
    platform.GR = 'gr';
    /**高热平台 */
    platform.GRH5 = 'grh5';
    /**350 */
    platform.P350 = '350';
    /**1377 */
    platform.P1377 = '1377';
    /**悟饭 */
    platform.WF = 'wf';
    /**彩虹马 */
    platform.CHM = 'chm';
    /**九翎聚合 */
    platform.JLJH = 'jljh';
    /**九翎聚合ios */
    platform.JLJHIOS = 'jljhios';
    /**sy9377ios */
    platform.JSQQI = 'jsqqi';
    /**sy9377安卓 */
    platform.JSQQA = 'jsqqa';
    /**915 */
    platform.P915 = '915';
    /**玩吧 */
    platform.WB = 'wb';
    /**三七 */
    platform.P37 = '37';
    /**牛牛 */
    platform.NN_H5 = 'nn_h5';
    /**牛牛 */
    platform.NN_ANDROID = 'nn_android';
    /**牛牛 */
    platform.NN_ZF = 'nn_zf';
    /**牛牛 */
    platform.NN_ZF_H5 = 'nn_zf_h5';
    /**牛牛 */
    platform.NN_IOS = 'nn_ios';
    /**哆可梦 */
    platform.DKM = 'dkm';
    /**9130 */
    platform.P9130 = '9130';
    /**益游 */
    platform.YIYO = 'yiyo';
    /**垦丁 */
    platform.KD = 'kd';
    /**闲来 */
    platform.XL = 'xl';
    /**热血 */
    platform.RX = 'rx';
    /**途游 */
    platform.TY = 'ty';
    /**嗨玩 */
    platform.HAW = 'haw';
    /**多瑙 */
    platform.DN = 'dn';
    /**G123-日本 */
    platform.G123 = 'g123';
    /**顺网 */
    platform.SWWEB = 'swweb';
    platform.SWH5 = 'swh5';
    /**微软MSUWP-MG */
    platform.MSUWP = 'msuwp';
    /**微软MS-MG */
    platform.MS = 'ms';
    /**Tai平台JJ */
    platform.TAI = 'tai';
    //--------------------------------------------------
    platform.DATA_SELECT_SERVER = 'data_select_server';
    platform.DATA_CREATE_ROLE = 'data_create_role';
    platform.DATA_ENTER_GAME = 'data_enter_game';
    platform.DATA_LEVEL_UP = 'data_level_up';
    platform.DATA_QUIT_GAME = 'data_quit_game';
    platform.DATA_PAY = 'data_pay';
    platform.DATA_CHAT = 'data_chat';
    platform.DATA_CREATE_ROLE_ENTER = 'data_create_role_enter';
    platform.DATA_CREATE_ROLE_CLICK = 'data_create_role_click';
    /**打开SDK */
    platform.enable = function (type, caller, method) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var scripts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!type) {
                            if (method)
                                method.call(caller);
                            return [2 /*return*/, Promise.resolve()];
                        }
                        return [4 /*yield*/, platform.shopSetting.initializeMapping(type)];
                    case 1:
                        _a.sent();
                        this.sdk = platform.createSdk(type);
                        scripts = this.sdk.getScripts();
                        if (!scripts || !scripts.length) {
                            if (method)
                                method.call(caller);
                            return [2 /*return*/, Promise.resolve()];
                        }
                        return [2 /*return*/, new Promise(function (reslove, reject) {
                                loadSdkFile(scripts, _this, function () {
                                    if (method)
                                        method.call(caller);
                                    reslove();
                                });
                            })];
                }
            });
        });
    };
    platform.createSdk = function (type) {
        switch (type) {
            case platform.ML: return new platform.SdkManlin();
            case platform.TW: return new platform.SdkTanwan();
            case platform.P9377: return new platform.Sdk9377();
            case platform.KY: return new platform.SdkKaiYing();
            case platform.SS: return new platform.SdkShangShi();
            case platform.JLHW: return new platform.SdkJiuLinHaiWai();
            case platform.AWY: return new platform.SdkAiWeiYou();
            case platform.DJSHP: return new platform.SdkDuJiaoShou(platform.DJSHP);
            case platform.DJSHPS: return new platform.SdkDuJiaoShou(platform.DJSHPS);
            case platform.FKYLC: return new platform.SdkFengKuang();
            case platform.MG: return new platform.SdkKaiYingMG();
            case platform.GR: return new platform.SdkGaoRe();
            case platform.P350: return new platform.Sdk350();
            case platform.GRH5: return new platform.SdkGaoReH5();
            case platform.JLJH: return new platform.SdkJuHe();
            case platform.JLJHIOS: return new platform.SdkJuHeIOS();
            case platform.P1377: return new platform.Sdk1377();
            case platform.WF: return new platform.SdkWuFan();
            case platform.CHM: return new platform.SdkCaiHongMa();
            case platform.JSQQI: return new platform.SdkSYJsqqI();
            case platform.P915: return new platform.Sdk915();
            case platform.WB: return new platform.SdkWanBa();
            case platform.JSQQA: return new platform.SdkSYJsqqA();
            case platform.P37: return new platform.Sdk37();
            case platform.NN_ANDROID: return new platform.SdkNiuNiuAndroid(platform.NN_ANDROID);
            case platform.NN_ZF: return new platform.SdkNiuNiuAndroid(platform.NN_ZF);
            case platform.NN_IOS: return new platform.SdkNiuNiuIOS();
            case platform.NN_H5: return new platform.SdkNiuNiuH5(platform.NN_H5);
            case platform.NN_ZF_H5: return new platform.SdkNiuNiuH5(platform.NN_ZF_H5);
            case platform.DKM: return new platform.SdkDkm();
            case platform.P9130: return new platform.Sdk9130();
            case platform.YIYO: return new platform.SdkYiYo();
            case platform.KD: return new platform.SdkKenDing();
            case platform.XL: return new platform.SdkXianLai();
            case platform.RX: return new platform.SdkReXue();
            case platform.TY: return new platform.SdkTuYou();
            case platform.HAW: return new platform.SdkHaiWan();
            case platform.DN: return new platform.SdkDuoNao();
            case platform.G123: return new platform.SdkG123();
            case platform.SWWEB: return new platform.SdkShunWangWeb();
            case platform.SWH5: return new platform.SdkShunWangH5();
            case platform.MSUWP: return new platform.SdkMSUWP();
            case platform.MS: return new platform.SdkMS();
            case platform.TAI: return new platform.SdkTai();
        }
        return null;
    };
    function loadJS(src, caller, callback) {
        var s = document.createElement('script');
        s.async = false;
        s.src = src;
        s.addEventListener('load', function () {
            s.parentNode.removeChild(s);
            s.removeEventListener('load', arguments.callee, false);
            callback.call(caller);
        }, false);
        document.body.appendChild(s);
    }
    function loadSdkFile(scripts, caller, callback) {
        function loadFile() {
            if (!scripts.length) {
                callback.call(caller);
                return;
            }
            loadJS(scripts.shift(), this, loadFile);
        }
        loadFile();
    }
    platform.loadSdkFile = loadSdkFile;
    ;
    function getUrlParams() {
        var result = {};
        var name, value;
        var str = window.location.href; //取得整个地址栏
        var num = str.indexOf("?");
        str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]		
        var arr = str.split("&"); //各个参数放到数组里
        for (var i = 0; i < arr.length; i++) {
            num = arr[i].indexOf("=");
            if (num > 0) {
                name = arr[i].substring(0, num);
                value = arr[i].substr(num + 1);
                result[name] = value;
            }
        }
        return result;
    }
    platform.getUrlParams = getUrlParams;
    function generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }
    platform.generateUUID = generateUUID;
    ;
    function getPhpPath(name) {
        return (window.config.ssl ? 'https' : 'http') + "://" + window.config.ip + "/" + window.config.platform + "/" + name + ".php";
    }
    platform.getPhpPath = getPhpPath;
    function formatUrlParams(params) {
        var result = '';
        for (var key in params) {
            result += key + '=' + params[key] + '&';
        }
        return result.substring(0, result.length - 1);
    }
    platform.formatUrlParams = formatUrlParams;
    //--------------------------------------------------
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 1377sdk
    //--------------------------------------------------
    var Sdk1377 = (function (_super) {
        __extends(Sdk1377, _super);
        function Sdk1377() {
            var _this = _super.call(this, platform.P1377) || this;
            _this._channleId = 10014;
            return _this;
        }
        Sdk1377.prototype.getScripts = function () {
            return ["https://h5.1377.com/js/zantaiSDK-init.js"];
        };
        Sdk1377.prototype.start = function () {
            var params = platform.getUrlParams();
            this._appId = params.appid;
            this._roleName = params.uname;
            this._roleId = this._userId = params.uid;
            this._channleId = params.agent_id;
            this._time = params.time;
            this._sign = params.sign;
            this.end(params);
            return true;
        };
        /**显示分享引导 */
        Sdk1377.prototype.showShare = function (caller, method) {
            var obj = {};
            obj['show_share'] = 0;
            obj['callFunc'] = this.onShareSuccess;
            window.zantaiSDK.change_share_info(obj);
            this._shareCallBack = method;
            this._sharethisObject = caller;
        };
        Sdk1377.prototype.onShareSuccess = function (data) {
            if (data == "success") {
                if (this._shareCallBack && this._sharethisObject) {
                    this._shareCallBack.apply(this._sharethisObject);
                }
            }
        };
        //上报数据
        Sdk1377.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            var reportType = 0;
            switch (dataName) {
                case platform.DATA_SELECT_SERVER:
                    reportType = 1;
                    break;
                case platform.DATA_CREATE_ROLE:
                    reportType = 2;
                    break;
                case platform.DATA_ENTER_GAME:
                    reportType = 3;
                    break;
                case platform.DATA_LEVEL_UP:
                    reportType = 4;
                    break;
                case platform.DATA_QUIT_GAME:
                    reportType = 5;
                    break;
            }
            try {
                if (reportType > 0) {
                    var obj = {};
                    obj['uid'] = 1;
                    obj['callFunc'] = this.callFunc;
                    obj['type'] = reportType;
                    obj['money'] = diamonds;
                    obj['roleId'] = this.roleId;
                    obj['roleName'] = gameRoleName;
                    obj['roleLevel'] = gameRoleLevel;
                    obj['serverId'] = serverId;
                    window.zantaiSDK.report_user_action(obj);
                }
            }
            catch (e) {
                console.error(e);
            }
        };
        Sdk1377.prototype.callFunc = function () { };
        Sdk1377.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var obj = {};
            obj['buyNum'] = 1;
            obj['ext'] = productId;
            obj['coin'] = price * 100;
            obj['game_gold'] = price * 100;
            obj['game_id'] = this._appId;
            obj['money'] = price;
            obj['product_desc'] = productDesc;
            obj['product_id'] = productId;
            obj['product_name'] = productName;
            obj['role_id'] = this.roleId;
            obj['role_name'] = gameRoleName;
            obj['role_level'] = gameRoleLevel;
            obj['server_id'] = serverId;
            obj['server_name'] = serverName;
            obj['uid'] = this._userId;
            obj['vip'] = gameRoleVip;
            window.zantaiSDK.pay(obj);
        };
        return Sdk1377;
    }(platform.SdkBase));
    platform.Sdk1377 = Sdk1377;
    __reflect(Sdk1377.prototype, "platform.Sdk1377");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 350sdk
    //--------------------------------------------------
    var Sdk350 = (function (_super) {
        __extends(Sdk350, _super);
        function Sdk350() {
            var _this = _super.call(this, platform.P350) || this;
            _this._channleId = 10010;
            return _this;
        }
        Sdk350.prototype.getScripts = function () {
            return ["https://h5.350.com/js/gameSDK-init.js"];
        };
        Sdk350.prototype.start = function () {
            var params = platform.getUrlParams();
            this._userId = this._roleId = params.uid; //平台用户ID,充值需要
            this._roleName = params.uname;
            this._appId = params.appid;
            this._time = params.time;
            this._sign = params.sign;
            this.end(params);
            return true;
        };
        /**充值成功回调 */
        Sdk350.prototype.onPaySuccess = function () {
        };
        //上报数据
        Sdk350.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) { };
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        Sdk350.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
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
            obj['role_id'] = this._roleId;
            obj['product_id'] = productId;
            obj['product_name'] = productName;
            obj['product_desc'] = productDesc;
            obj['ext'] = productId;
            obj['callback'] = this.onPaySuccess;
            window.twSDK.pay(obj);
        };
        return Sdk350;
    }(platform.SdkBase));
    platform.Sdk350 = Sdk350;
    __reflect(Sdk350.prototype, "platform.Sdk350");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 37sdk
    //--------------------------------------------------
    var Sdk37 = (function (_super) {
        __extends(Sdk37, _super);
        function Sdk37() {
            var _this = _super.call(this, platform.P37) || this;
            _this._channleId = 10021;
            _this._appId = "36";
            _this._loginkey = "M9s6LAPHul1me8B7Q2b6V0YjMgyr7hR2";
            return _this;
        }
        Sdk37.prototype.getScripts = function () {
            var timestamp = new Date().getTime();
            return [((window.config && window.config.ssl) ? 'https' : 'http') + "://static.63yx.com/js/widget/lsyxsdk.js?v=" + timestamp];
        };
        Sdk37.prototype.start = function () {
            var params = platform.getUrlParams();
            this._roleId = this._userId = params.user_name;
            this._isAdult = params.is_adult == 1;
            this._time = params.time;
            this._sign = params.sign;
            this._ext = params.is_adult + "," + params.user_refer;
            this._guid = params.guid;
            this._c_game_id = params.c_game_id;
            //user_refer	string	否	渠道标识
            //nickname	string	否	用户昵称，url编码
            //guid	string	否	进入游戏唯一标识
            this.end(params);
            return true;
        };
        Sdk37.prototype.getDataType = function (type) {
            switch (type) {
                case platform.DATA_SELECT_SERVER: return 1;
                case platform.DATA_CREATE_ROLE: return 2;
                case platform.DATA_ENTER_GAME: return 3;
                case platform.DATA_LEVEL_UP: return 4;
                case platform.DATA_QUIT_GAME: return 5;
                case platform.DATA_PAY: return 6;
            }
            return 0;
        };
        //上报数据
        Sdk37.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            var obj;
            var sign;
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    sign = window['md5'](this._roleId + this._guid + this.appId + this._c_game_id + serverId + time + this._loginkey);
                    obj = "guid=" + this._guid + "&game_id=" + this._appId + "&c_game_id=" + this._c_game_id + "&sid=" + serverId + "&time=" + time + "&user_id=" + this._roleId + "&server_name=" + serverName + "&login_account=" + this._roleId + "&sign=" + sign;
                    this.requestData(obj, platform.DATA_CREATE_ROLE);
                    break;
                case platform.DATA_ENTER_GAME:
                    sign = window['md5'](this._roleId + this._guid + this.appId + this._c_game_id + serverId + time + this._loginkey);
                    obj = "guid=" + this._guid + "&game_id=" + this._appId + "&c_game_id=" + this._c_game_id + "&sid=" + serverId + "&time=" + time + "&user_id=" + this._roleId + "&server_name=" + serverName + "&login_account=" + this._roleId + "&sign=" + sign;
                    this.requestData(obj, platform.DATA_ENTER_GAME);
                    break;
            }
        };
        Sdk37.prototype.requestData = function (parm, type) {
            var url;
            switch (type) {
                case platform.DATA_ENTER_GAME:
                    url = "https://" + window.config.ip + "/platform_37/entergameserver.php?" + parm;
                    break;
                case platform.DATA_CREATE_ROLE:
                    url = "https://" + window.config.ip + "/platform_37/createrole.php?" + parm;
                    break;
            }
            var loader = new egret.HttpRequest();
            loader.responseType = egret.HttpResponseType.TEXT;
            loader.open(url, egret.HttpMethod.GET);
            loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            loader.addEventListener(egret.Event.COMPLETE, this.onRequestComplete, this);
            loader.send();
        };
        Sdk37.prototype.onRequestComplete = function (event) {
        };
        /**
 * 充值
     * @param server_id 游戏服ID
     * @param product_id	产品ID
     * @param product_name	产品名
   @param product_price	元
     */
        Sdk37.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var order_no = platform.generateUUID();
            var str = "actor_id=" + gameRoleId + "&ext=" + this._roleId + "&game_id=" + this._appId + "&money=" + price + "&order_no=" + order_no + "&product_id=" + productId + "&sid=" + serverId + "&subject=" + productName + "&time=" + time + "&user_id=" + this.roleId + "&Yg9h19frcVZzWC376QhsbG8XgN2SPn2a";
            var sign = window['md5'](str);
            var obj = {};
            obj['order_no'] = order_no;
            obj['game_id'] = this._appId;
            obj['user_id'] = this.roleId;
            obj['sid'] = serverId;
            obj['actor_id'] = gameRoleId;
            obj['product_id'] = productId;
            obj['subject'] = productName;
            obj['money'] = price;
            obj['time'] = time;
            obj['ext'] = this._roleId;
            obj['sign'] = sign;
            window.lsyxsdk.pay(obj);
        };
        return Sdk37;
    }(platform.SdkBase));
    platform.Sdk37 = Sdk37;
    __reflect(Sdk37.prototype, "platform.Sdk37");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 贪玩sdk
    //--------------------------------------------------
    var Sdk9130 = (function (_super) {
        __extends(Sdk9130, _super);
        function Sdk9130() {
            var _this = _super.call(this, platform.P9130) || this;
            _this._channleId = 10026;
            _this._appId = '68';
            return _this;
        }
        Sdk9130.prototype.getScripts = function () {
            return ["https://static.sh9130.com/js/aksdk.js"];
        };
        Sdk9130.prototype.start = function () {
            var _this = this;
            window.AKSDK.login(function (status, data) {
                if (status == 0) {
                    _this._userId = _this._roleId = data.userid;
                    _this._roleName = data.account;
                    _this._token = data.token;
                    _this.end(null);
                }
            });
            return true;
        };
        Sdk9130.prototype.getDataType = function (type) {
            switch (type) {
                case platform.DATA_SELECT_SERVER: return 1;
                case platform.DATA_CREATE_ROLE: return 2;
                case platform.DATA_ENTER_GAME: return 3;
                case platform.DATA_LEVEL_UP: return 4;
                case platform.DATA_QUIT_GAME: return 5;
                case platform.DATA_PAY: return 6;
                case platform.DATA_CHAT: return 7;
            }
            return 0;
        };
        //上报数据
        Sdk9130.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    window.AKSDK.logCreateRole(serverId, serverName, this._roleId, gameRoleName, gameRoleLevel);
                    break;
                case platform.DATA_ENTER_GAME:
                    window.AKSDK.logEnterGame(serverId, serverName, this._roleId, gameRoleName, gameRoleLevel);
                    break;
                case platform.DATA_LEVEL_UP:
                    window.AKSDK.logRoleUpLevel(serverId, serverName, this._roleId, gameRoleName, gameRoleLevel);
                    break;
                case platform.DATA_CHAT:
                    new platform.HttpLoader().request('https://msgapi.sh9130.com/', this, function (data) {
                    }, egret.URLRequestMethod.GET, new egret.URLVariables("game=moyulaile&server=" + serverId + "&platform_uid=" + this._userId + "&rolename=" + gameRoleName + "&roleid=" + gameRoleUid + "&role_level=" + gameRoleLevel + "&user_ip=&content=" + content + "&chat_type=" + chattype + "&channel_id=" + this._channleId + "&ext="));
                    break;
            }
        };
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
        Sdk9130.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var obj = {};
            obj['cpbill'] = platform.generateUUID();
            obj['productid'] = platform.shopSetting.getShopId(this._type, productId);
            obj['ApplePrdId'] = platform.shopSetting.getShopId(this._type, productId, price, true);
            obj['productname'] = productName;
            obj['productdesc'] = productDesc;
            obj['serverid'] = serverId;
            obj['servername'] = serverName;
            obj['roleid'] = this._roleId;
            obj['rolename'] = gameRoleName;
            obj['rolelevel'] = gameRoleLevel;
            obj['price'] = price;
            obj['extension'] = productId;
            window.AKSDK.pay(obj, function (status, data) {
                switch (status) {
                    case 0:
                        egret.log('支付成功!');
                        //data.userid//用户ID
                        //data.account//用户帐号
                        //data.cpOrderNo//游戏订单号
                        //data.orderNo//平台订单号
                        //data.amount//金额
                        //data.extension//扩展数据
                        break;
                    case 1:
                        egret.log('支付失败!');
                        break;
                    case 2:
                        egret.log('支付取消!');
                        break;
                }
            });
        };
        return Sdk9130;
    }(platform.SdkBase));
    platform.Sdk9130 = Sdk9130;
    __reflect(Sdk9130.prototype, "platform.Sdk9130");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 1377sdk
    //--------------------------------------------------
    var Sdk915 = (function (_super) {
        __extends(Sdk915, _super);
        function Sdk915() {
            var _this = _super.call(this, platform.P915) || this;
            _this._channleId = 10018;
            _this._switchUserBtn = false;
            return _this;
        }
        Sdk915.prototype.getScripts = function () {
            return [((window.config && window.config.ssl) ? 'https' : 'http') + "://h5.915.com/js/gameSDK-init.js"];
        };
        Sdk915.prototype.start = function () {
            var params = platform.getUrlParams();
            this._roleId = this._userId = params.uid;
            this._roleName = params.uname;
            this._appId = params.appid;
            this._time = params.time;
            this._sign = params.sign;
            if (params.switchUserBtn && params.switchUserBtn == "1") {
                this._switchUserBtn = true; //是否显示切换账号按钮
            }
            this._logotype = params.logotype;
            this._bgtype = params.bgtype; //游戏启动图控制
            this.end(params);
            return true;
        };
        //切换账号
        Sdk915.prototype.switchUser = function () {
            window.twSDK.logout();
        };
        //上报数据
        Sdk915.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            var reportType = 0;
            switch (dataName) {
                case platform.DATA_SELECT_SERVER:
                    reportType = 1;
                    break;
                case platform.DATA_CREATE_ROLE:
                    reportType = 2;
                    break;
                case platform.DATA_ENTER_GAME:
                    reportType = 3;
                    break;
                case platform.DATA_LEVEL_UP:
                    reportType = 4;
                    break;
                case platform.DATA_QUIT_GAME:
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
                    window.twSDK.reportUserInfo(obj);
                }
            }
            catch (e) {
                console.error(e);
            }
        };
        Sdk915.prototype.callFunc = function () { };
        Sdk915.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
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
            obj['callback'] = function (response) {
            };
            window.twSDK.pay(obj);
        };
        return Sdk915;
    }(platform.SdkBase));
    platform.Sdk915 = Sdk915;
    __reflect(Sdk915.prototype, "platform.Sdk915");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 9377sdk
    //--------------------------------------------------
    var Sdk9377 = (function (_super) {
        __extends(Sdk9377, _super);
        function Sdk9377() {
            var _this = _super.call(this, platform.P9377) || this;
            _this._channleId = 10001;
            switch (egret.Capabilities.os) {
                case 'iOS':
                    _this._appId = '802';
                    _this._key = 'ff65d185f5b9fa4c9dd49e339c51c1b1';
                    break;
                case 'Android':
                    _this._appId = '805';
                    _this._key = 'ff65d185f5b9fa4c9dd49e339c51c1b1';
                    break;
                case 'Windows PC':
                case 'Mac OS':
                default:
                    _this._appId = '919';
                    _this._key = 'ff65d185f5b9fa4c9dd49e339c51c1b1';
                    break;
            }
            _this._verifyResult = false;
            return _this;
        }
        Sdk9377.prototype.start = function () {
            var params = platform.getUrlParams();
            //http://xxx.com/login.pp?username=test &adult=1&timestamp=1491356426&sign=e110c877ff7f298b28afc17b8fdc4b0e&avatar=http%3A%2F%2F;
            this._userId = this._roleId = this._roleName = params.username; //平台用户ID,充值需要
            this._time = params.timestamp;
            this._sign = params.sign; //md5( username + adult + timestamp + key)
            //params.avatar//头像地址
            //this._appId = params.adult;//成年标识, 1成年，0未成年, -1填写了身份证但未成年
            this._verifyResult = this._sign == window['md5'](this._userId + params.adult + this._time + this._key);
            //setTimeout(this.end,500,params);
            this.end(params);
            return true;
        };
        //上报数据
        Sdk9377.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) { };
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        Sdk9377.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var obj = {};
            obj['event'] = "pay";
            obj['gid'] = this._appId;
            obj['username'] = this._userId;
            obj['_sid'] = serverId;
            obj['amount'] = price;
            obj['product'] = productName;
            obj['extra_info'] = this._appId + "_" + productId;
            parent.postMessage(JSON.stringify(obj), '*');
        };
        return Sdk9377;
    }(platform.SdkBase));
    platform.Sdk9377 = Sdk9377;
    __reflect(Sdk9377.prototype, "platform.Sdk9377");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 爱微游sdk
    //--------------------------------------------------
    var SdkAiWeiYou = (function (_super) {
        __extends(SdkAiWeiYou, _super);
        function SdkAiWeiYou() {
            var _this = _super.call(this, platform.AWY) || this;
            _this._channleId = 10005;
            _this._appId = '374';
            _this._key = 'mLolB6Dn8zwfhwJyY95iDL0lOsA3mg69';
            _this._verifyResult = false;
            _this._focus = false;
            return _this;
        }
        SdkAiWeiYou.prototype.getScripts = function () {
            return [((window.config && window.config.ssl) ? 'https' : 'http') + "://cdn.11h5.com/static/js/sdk.min.js"];
        };
        SdkAiWeiYou.prototype.start = function () {
            if (!window.AWY_SDK)
                return false;
            window.AWY_SDK.config(this._appId, this.onShareSuccess.bind(this), this.onPaySuccess.bind(this));
            var params = platform.getUrlParams();
            //do something
            this._token = params.token;
            this.getUserInfo(params.token);
            if (params.verify && params.verify == 1) {
                this._verifyResult = true;
            }
            this._ext = params.fuid;
            return true;
        };
        SdkAiWeiYou.prototype.getUserInfo = function (token) {
            var url = "https://" + window.config.ip + "/platform_awy/checkUserToken.php?userToken=" + token + "&gameid=374";
            var loader = new egret.HttpRequest();
            loader.responseType = egret.HttpResponseType.TEXT;
            loader.open(url, egret.HttpMethod.GET);
            loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            loader.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
            loader.send();
        };
        SdkAiWeiYou.prototype.onGetComplete = function (event) {
            var request = event.currentTarget;
            var params = JSON.parse(request.response);
            if (params.error && params.error == 403) {
                window.AWY_SDK.logout();
            }
            else {
                this._userId = this._roleId = params.uid;
                this._time = params.time;
                this._sign = params.sign;
                if (params.focus && params.focus == 1) {
                    this._focus = true;
                }
                this.end(params);
            }
        };
        /**用户分享成功后，SDK会回调该方法。调用该方法时SDK会同时给该函数返回一个字符串“SUCCESS”（全部大写）表示用户是否已分享成功，其余情况均表示分享不成功或者用户取消分享。*/
        SdkAiWeiYou.prototype.onShareSuccess = function (data) {
            if (this._shareCallBack) {
                this._shareCallBack.call(this._shareCaller);
            }
        };
        /**用户充值成功后，SDK会回调该方法。该方法仅在提供了同步回调的渠道使用，提供异步回调方法的渠道无此方法。*/
        SdkAiWeiYou.prototype.onPaySuccess = function () {
            this.showConfirmDialog("提示", "充值成功");
        };
        SdkAiWeiYou.prototype.showConfirmDialog = function (title, infomation) {
            var __ret = this.setAlearttyle();
            var shield = __ret.shield;
            var alertFram = __ret.alertFram;
            var strHtml;
            strHtml = "<ul style=\"list-style:none;margin:0px;padding:0px;width:100%\">\n";
            strHtml += " <li style=\"background:#DDDDDD;text-align:left;padding-left:20px;font-size:14px;font-weight:bold;height:30px;line-height:30px;border:1px solid #000000;border-radius :6px 6px 0px 0px;color:black\">" + title + "</li>\n";
            strHtml += " <li style=\"background:#DDDDDD;text-align:center;font-size:12px;height:95px;line-height:95px;border-left:1px solid #000000;border-right:1px solid #000000;color:#000000\">" + infomation + "</li>\n";
            strHtml += " <li style=\"background:#DDDDDD;text-align:center;font-weight:bold;height:30px;padding:5px;line-height:25px;border-radius :0px 0px 6px 6px; border:1px solid #000000;\"><input type=\"button\" value=\"确 定\" onclick=\"doOk()\" style=\"width:80px;background:#DDDDDD;color:black;border:1px solid black;border-radius:4px;cursor:pointer;cufont-size:14px;line-height:25px;outline:none;margin-top: 2px\"/></li>\n";
            strHtml += "</ul>\n";
            alertFram.innerHTML = strHtml;
            window.doOk = function () {
                alertFram.style.display = "none";
                shield.style.display = "none";
            };
            document.body.appendChild(alertFram);
            document.body.appendChild(shield);
            alertFram.focus();
            document.body.onselectstart = function () { return false; };
        };
        SdkAiWeiYou.prototype.setAlearttyle = function () {
            var shield = document.createElement("DIV");
            shield.id = "shield";
            shield.style.position = "absolute";
            shield.style.left = "50%";
            shield.style.top = "50%";
            shield.style.width = "200px";
            shield.style.height = "100px";
            shield.style.marginLeft = "-100px";
            shield.style.marginTop = "-110px";
            shield.style.zIndex = "25";
            var alertFram = document.createElement("DIV");
            alertFram.id = "alertFram";
            alertFram.style.position = "absolute";
            alertFram.style.width = "200px";
            alertFram.style.height = "100px";
            alertFram.style.left = "50%";
            alertFram.style.top = "50%";
            alertFram.style.marginLeft = "-100px";
            alertFram.style.marginTop = "-110px";
            alertFram.style.textAlign = "left";
            alertFram.style.lineHeight = "100px";
            alertFram.style.zIndex = "300";
            alertFram.style.borderRadius = "4px";
            return { shield: shield, alertFram: alertFram };
        };
        /**实名验证 */
        SdkAiWeiYou.prototype.verifyIdentity = function (caller, method) {
            window.AWY_SDK.verify(function (data) {
                this._verifyResult = data.error == 0;
                if (data.error == 0) {
                    method.call(caller, data);
                }
                ;
            });
        };
        /** 显示关注二维码 */
        SdkAiWeiYou.prototype.showFocus = function (caller, method) {
            window.AWY_SDK.showFocus();
        };
        /**显示分享引导 */
        SdkAiWeiYou.prototype.showShare = function (caller, method) {
            window.AWY_SDK.showShare();
            this._shareCaller = caller;
            this._shareCallBack = method;
        };
        //上报数据
        SdkAiWeiYou.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            var obj = "";
            switch (dataName) {
                case platform.DATA_ENTER_GAME:
                    obj = "who=" + gameRoleUid + "&deviceid=" + this._userId + "&appid=4DWGiGFGP5fB8&serverid=" + serverId + "&level=" + gameRoleLevel + "&channelid=aiweiyou";
                    this.requestData(obj, "login");
                    obj = "type=enter&who=" + gameRoleUid + "&deviceid=" + this._userId + "&appid=4DWGiGFGP5fB8&serverid=" + serverId + "&level=" + gameRoleLevel + "&channelid=aiweiyou&subchid=" + 0 + "&power=" + 0;
                    this.requestData(obj, "point");
                    break;
                case platform.DATA_CREATE_ROLE:
                    obj = "who=" + gameRoleUid + "&deviceid=" + this._userId + "&appid=4DWGiGFGP5fB8&serverid=" + serverId + "&level=" + gameRoleLevel + "&channelid=aiweiyou";
                    this.requestData(obj, "register");
                    break;
                case platform.DATA_LEVEL_UP:
                    obj = "type=levelup&who=" + gameRoleUid + "&deviceid=" + this._userId + "&appid=4DWGiGFGP5fB8&serverid=" + serverId + "&level=" + gameRoleLevel + "&channelid=aiweiyou&subchid=" + 0 + "&power=" + 0;
                    this.requestData(obj, "point");
                    break;
                case platform.DATA_SELECT_SERVER:
                    obj = "type=oath&who=" + gameRoleUid + "&deviceid=" + this._userId + "&appid=4DWGiGFGP5fB8&serverid=" + serverId + "&level=" + gameRoleLevel + "&channelid=aiweiyou&subchid=" + 0 + "&power=" + 0;
                    this.requestData(obj, "point");
                    break;
            }
        };
        SdkAiWeiYou.prototype.requestData = function (parm, type) {
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
        };
        SdkAiWeiYou.prototype.onRequestComplete = function (event) {
        };
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        SdkAiWeiYou.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var obj = {};
            obj['pid'] = platform.shopSetting.getShopId(this._type, productId, price);
            obj['userdata'] = encodeURI(serverId + "," + productId);
            window.AWY_SDK.pay(obj);
        };
        return SdkAiWeiYou;
    }(platform.SdkBase));
    platform.SdkAiWeiYou = SdkAiWeiYou;
    __reflect(SdkAiWeiYou.prototype, "platform.SdkAiWeiYou");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 彩虹马sdk
    //--------------------------------------------------
    var SdkCaiHongMa = (function (_super) {
        __extends(SdkCaiHongMa, _super);
        function SdkCaiHongMa() {
            var _this = _super.call(this, platform.CHM) || this;
            _this._channleId = 10016;
            _this._appId = "161000112";
            return _this;
        }
        SdkCaiHongMa.prototype.getScripts = function () {
            return ["https://iosdk.papa21.com/static/rainbow_horse/csh5sdk.js"];
        };
        SdkCaiHongMa.prototype.start = function () {
            if (!window.CS)
                return false;
            window.CS.config({ appkey: this._appId, gameUrl: "https://" + window.config.ip + "/index.chm.html", notifyUrl: "http://" + window.config.ip + "/platform_chm/pay_chm.php" });
            window.CS.login(this.callback, this);
            return true;
        };
        SdkCaiHongMa.prototype.callback = function (tokenObj) {
            console.log(tokenObj);
            //do something
            this._token = tokenObj.token;
            this._roleId = this._userId = tokenObj.uid;
            this.end.call(this, tokenObj);
        };
        SdkCaiHongMa.prototype.getDataType = function (type) {
            switch (type) {
                case platform.DATA_SELECT_SERVER: return 1;
                case platform.DATA_CREATE_ROLE: return 2;
                case platform.DATA_ENTER_GAME: return 3;
                case platform.DATA_LEVEL_UP: return 4;
                case platform.DATA_QUIT_GAME: return 5;
                case platform.DATA_PAY: return 6;
            }
            return 0;
        };
        //上报数据
        SdkCaiHongMa.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    var obj = {};
                    obj['role_name'] = gameRoleName;
                    obj['app_district'] = serverId;
                    obj['app_server'] = serverId;
                    window.CS.createRole(obj);
            }
        };
        /**
 * 充值
     * @param server_id 游戏服ID
     * @param product_id	产品ID
     * @param product_name	产品名
   @param product_price	元
     */
        SdkCaiHongMa.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var obj = {};
            obj['product_id'] = productId;
            obj['product_name'] = productName;
            obj['app_order_id'] = platform.generateUUID();
            obj['pay_amount'] = price;
            obj['role_id'] = this.roleId;
            obj['role_name'] = gameRoleName;
            obj['app_name'] = "魔域H5";
            obj['app_extra1'] = 0;
            obj['app_extra2'] = 0;
            obj['app_district'] = serverId;
            obj['app_server'] = serverId;
            obj['sign'] = this.sign;
            window.CS.pay(obj, this.payCallback, "返回游戏");
        };
        SdkCaiHongMa.prototype.payCallback = function () {
        };
        return SdkCaiHongMa;
    }(platform.SdkBase));
    platform.SdkCaiHongMa = SdkCaiHongMa;
    __reflect(SdkCaiHongMa.prototype, "platform.SdkCaiHongMa");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 贪玩sdk
    //--------------------------------------------------
    var SdkDkm = (function (_super) {
        __extends(SdkDkm, _super);
        function SdkDkm() {
            var _this = _super.call(this, platform.DKM) || this;
            _this._channleId = 10025;
            _this._appId = '647';
            return _this;
        }
        SdkDkm.prototype.getScripts = function () {
            return ["https://picstatic.dkmol.net/js/aksdk.js"];
        };
        SdkDkm.prototype.start = function () {
            var _this = this;
            window.AKSDK.login(function (status, data) {
                if (status == 0) {
                    _this._userId = _this._roleId = data.userid;
                    _this._roleName = data.account;
                    _this._token = data.token;
                    _this.end(null);
                }
            });
            return true;
        };
        SdkDkm.prototype.getDataType = function (type) {
            switch (type) {
                case platform.DATA_SELECT_SERVER: return 1;
                case platform.DATA_CREATE_ROLE: return 2;
                case platform.DATA_ENTER_GAME: return 3;
                case platform.DATA_LEVEL_UP: return 4;
                case platform.DATA_QUIT_GAME: return 5;
                case platform.DATA_PAY: return 6;
                case platform.DATA_CHAT: return 7;
            }
            return 0;
        };
        //上报数据
        SdkDkm.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    window.AKSDK.logCreateRole(serverId, serverName, this._roleId, gameRoleName, gameRoleLevel, new Date().getUTCSeconds());
                    break;
                case platform.DATA_ENTER_GAME:
                    window.AKSDK.logEnterGame(serverId, serverName, this._roleId, gameRoleName, gameRoleLevel, new Date().getUTCSeconds());
                    break;
                case platform.DATA_LEVEL_UP:
                    window.AKSDK.logRoleUpLevel(serverId, serverName, this._roleId, gameRoleName, gameRoleLevel, new Date().getUTCSeconds());
                    break;
            }
        };
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
        SdkDkm.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var obj = {};
            obj['cpbill'] = platform.generateUUID();
            obj['productid'] = platform.shopSetting.getShopId(this._type, productId);
            obj['ApplePrdId'] = platform.shopSetting.getShopId(this._type, productId, price, true);
            obj['productname'] = productName;
            obj['productdesc'] = productDesc;
            obj['serverid'] = serverId;
            obj['servername'] = serverName;
            obj['roleid'] = this._roleId;
            obj['rolename'] = gameRoleName;
            obj['rolelevel'] = gameRoleLevel;
            obj['price'] = price;
            obj['extension'] = productId;
            window.AKSDK.pay(obj, function (status, data) {
                switch (status) {
                    case 0:
                        egret.log('支付成功!');
                        //data.userid//用户ID
                        //data.account//用户帐号
                        //data.cpOrderNo//游戏订单号
                        //data.orderNo//平台订单号
                        //data.amount//金额
                        //data.extension//扩展数据
                        break;
                    case 1:
                        egret.log('支付失败!');
                        break;
                    case 2:
                        egret.log('支付取消!');
                        break;
                }
            });
        };
        return SdkDkm;
    }(platform.SdkBase));
    platform.SdkDkm = SdkDkm;
    __reflect(SdkDkm.prototype, "platform.SdkDkm");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 独角兽
    //--------------------------------------------------
    var SdkDuJiaoShou = (function (_super) {
        __extends(SdkDuJiaoShou, _super);
        function SdkDuJiaoShou(type) {
            var _this = _super.call(this, type) || this;
            //this._channleId = 10007;
            _this._appId = '4DWGiGFGP5fB8';
            _this._key = 'bQ3TLCTcqU4i3d8l';
            _this._verifyResult = false;
            _this._focus = false;
            _this._sharebonus = false;
            _this._focusbonus = false;
            return _this;
        }
        SdkDuJiaoShou.prototype.getScripts = function () {
            return [((window.config && window.config.ssl) ? 'https' : 'http') + "://cdn.djsh5.com/js/gank.sdk.https.js"];
        };
        SdkDuJiaoShou.prototype.start = function () {
            if (!window.GANK_SDK)
                return false;
            window.GANK_SDK.config(this._appId, this.onShareSuccess.bind(this), this.onPaySuccess.bind(this), this.onFocusSuccess.bind(this), function (uid, openid, channelid, userinfo) {
                //某些特殊渠道（如玩吧），在SDK无法直接GET到用户信息时，将在此异步方法中返回。
                //do something
                this._userId = uid;
                this._roleId = uid;
                this._roleName = userinfo.nickname;
                this._focus = userinfo.focus;
                this._sign = userinfo.sign;
                this._time = userinfo.timestamp;
                this._appId = userinfo.gameid;
                this._channleId = channelid;
                this._subChannel = channelid;
                this.end(userinfo);
            });
            var params = platform.getUrlParams();
            if (params && params.uid) {
                //do something
                this._userId = params.uid;
                this._roleId = params.uid;
                this._channleId = this._subChannel = params.channel;
                this._roleName = params.nickname;
                if (params.focus == "0") {
                    this._focus = false;
                }
                else {
                    this._focus = true;
                }
                if (params.sharebonus == "0") {
                    this._sharebonus = false;
                }
                else {
                    this._sharebonus = true;
                }
                if (params.focusbonus == "0") {
                    this._focusbonus = false;
                }
                else {
                    this._focusbonus = true;
                }
                this._sign = params.sign;
                this._time = params.timestamp;
                this._appId = params.gameid;
                this.end(params);
            }
            return true;
        };
        /**用户分享成功后，SDK会回调该方法。调用该方法时SDK会同时给该函数返回一个字符串“SUCCESS”（全部大写）表示用户是否已分享成功，其余情况均表示分享不成功或者用户取消分享。*/
        SdkDuJiaoShou.prototype.onShareSuccess = function (data) {
            if (this._shareCallBack) {
                this._shareCallBack.call(this._sharethisObject);
            }
        };
        /**用户充值成功后，SDK会回调该方法。该方法仅在提供了同步回调的渠道使用，提供异步回调方法的渠道无此方法。*/
        SdkDuJiaoShou.prototype.onPaySuccess = function () {
            //var obj = {};
            //(window as any).GANK_SDK.stat("payment",obj);
        };
        /**用户在某些渠道关注了对方公众号（或其他介质）后会异步回调该方法；*/
        SdkDuJiaoShou.prototype.onFocusSuccess = function () {
            if (this._focusCallBack) {
                this._focusCallBack.call(this._focusthisObject);
            }
        };
        /**实名验证 */
        SdkDuJiaoShou.prototype.verifyIdentity = function (caller, method) {
            // if ((window as any).GANK_SDK.channelid && (window as any).GANK_SDK.channelid == "aiweiyou") {
            // 	(window as any).GANK_SDK.showVerify(function (data) {
            // 		this._verifyResult = data.isVerify == 1;
            // 		if (data.isVerify != 0) {
            // 			method.call(caller, data);
            // 		}
            // 	});
            // }
            //独角兽说没有认证
        };
        /** 显示关注二维码 */
        SdkDuJiaoShou.prototype.showFocus = function (caller, method) {
            window.GANK_SDK.showFocus();
            this._focusCallBack = method;
            this._focusthisObject = caller;
        };
        /**显示分享引导 */
        SdkDuJiaoShou.prototype.showShare = function (caller, method) {
            window.GANK_SDK.showShare();
            this._shareCallBack = method;
            this._sharethisObject = caller;
        };
        /** 显示关注二维码 */
        SdkDuJiaoShou.prototype.setupFocus = function (caller, method) {
            this._focusCallBack = method;
            this._focusthisObject = caller;
        };
        /**显示分享引导 */
        SdkDuJiaoShou.prototype.setupShare = function (caller, method) {
            this._shareCallBack = method;
            this._sharethisObject = caller;
        };
        SdkDuJiaoShou.prototype.getDataType = function (type) {
            switch (type) {
                case platform.DATA_SELECT_SERVER: return 1;
                case platform.DATA_CREATE_ROLE: return 2;
                case platform.DATA_ENTER_GAME: return 3;
                case platform.DATA_LEVEL_UP: return 4;
                case platform.DATA_QUIT_GAME: return 5;
                case platform.DATA_PAY: return 6;
            }
            return 0;
        };
        //上报数据
        SdkDuJiaoShou.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            var obj = {};
            switch (dataName) {
                case platform.DATA_ENTER_GAME:
                    obj['who'] = gameRoleUid;
                    obj['deviceid'] = this._userId;
                    obj['appid'] = this._appId;
                    obj['serverid'] = serverId;
                    obj['level'] = gameRoleLevel;
                    obj['channelid'] = this._channleId;
                    window.GANK_SDK.stat("login", obj);
                    var parm = {};
                    parm['type'] = "userinfo";
                    parm['who'] = gameRoleUid;
                    parm['deviceid'] = this._userId;
                    parm['appid'] = this._appId;
                    parm['serverid'] = serverId;
                    parm['level'] = gameRoleLevel;
                    parm['channelid'] = this._channleId;
                    parm['power'] = gameRoleLevel;
                    window.GANK_SDK.report(parm);
                    var parm1 = {};
                    parm1['type'] = "enter";
                    parm1['who'] = gameRoleUid;
                    parm1['deviceid'] = this._userId;
                    parm1['appid'] = this._appId;
                    parm1['serverid'] = serverId;
                    parm1['level'] = gameRoleLevel;
                    parm1['channelid'] = this._channleId;
                    parm1['subchid'] = 0;
                    parm1['power'] = gameRoleLevel;
                    window.GANK_SDK.stat("point", parm1);
                    break;
                case platform.DATA_CREATE_ROLE:
                    obj['who'] = gameRoleUid;
                    obj['deviceid'] = this._userId;
                    obj['appid'] = this._appId;
                    obj['serverid'] = serverId;
                    obj['level'] = gameRoleLevel;
                    obj['channelid'] = this._channleId;
                    window.GANK_SDK.stat("register", obj);
                    break;
                case platform.DATA_LEVEL_UP:
                    var parm1 = {};
                    parm1['type'] = "levelup";
                    parm1['who'] = gameRoleUid;
                    parm1['deviceid'] = this._userId;
                    parm1['appid'] = this._appId;
                    parm1['serverid'] = serverId;
                    parm1['level'] = gameRoleLevel;
                    parm1['channelid'] = this._channleId;
                    parm1['subchid'] = 0;
                    parm1['power'] = gameRoleLevel;
                    window.GANK_SDK.stat("point", parm1);
                    break;
                case platform.DATA_SELECT_SERVER:
                    var parm1 = {};
                    parm1['type'] = "oath";
                    parm1['who'] = gameRoleUid;
                    parm1['deviceid'] = this._userId;
                    parm1['appid'] = this._appId;
                    parm1['serverid'] = serverId;
                    parm1['level'] = gameRoleLevel;
                    parm1['channelid'] = this._channleId;
                    parm1['subchid'] = 0;
                    parm1['power'] = gameRoleLevel;
                    window.GANK_SDK.stat("point", parm1);
                    var parm = {};
                    parm['type'] = "server";
                    parm['who'] = gameRoleUid;
                    parm['deviceid'] = this._userId;
                    parm['appid'] = this._appId;
                    parm['serverid'] = serverId;
                    parm['level'] = gameRoleLevel;
                    parm['channelid'] = this._channleId;
                    parm['power'] = gameRoleLevel;
                    window.GANK_SDK.report(parm);
                    break;
            }
        };
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        SdkDuJiaoShou.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var obj = {};
            obj['wid'] = platform.shopSetting.getShopId(this._type, productId, price);
            obj['txid'] = platform.generateUUID();
            obj['userdata'] = serverId + "," + productId;
            obj['serverid'] = serverId;
            obj['username'] = gameRoleName;
            window.GANK_SDK.pay(obj);
        };
        Object.defineProperty(SdkDuJiaoShou.prototype, "subChannel", {
            /**
             * 获取子平台
             */
            get: function () {
                switch (this._subChannel) {
                    case platform.TypeSubDjs.AIAIYOU: return platform.TypeSubDjs.AIAIYOU;
                    case platform.TypeSubDjs.HORTOR: return platform.TypeSubDjs.HORTOR;
                    case platform.TypeSubDjs.QIANBAO: return platform.TypeSubDjs.QIANBAO;
                    case platform.TypeSubDjs.KUGOU: return platform.TypeSubDjs.KUGOU;
                    case platform.TypeSubDjs.UNKNOWN: return platform.TypeSubDjs.UNKNOWN;
                    case platform.TypeSubDjs.QIDIAN: return platform.TypeSubDjs.QIDIAN;
                    case platform.TypeSubDjs.CCYOU: return platform.TypeSubDjs.CCYOU;
                    case platform.TypeSubDjs.QUNHEI: return platform.TypeSubDjs.QUNHEI;
                    case platform.TypeSubDjs.MEITU: return platform.TypeSubDjs.MEITU;
                    case platform.TypeSubDjs.KONGZHONG: return platform.TypeSubDjs.KONGZHONG;
                    case platform.TypeSubDjs.BAISI: return platform.TypeSubDjs.BAISI;
                    case platform.TypeSubDjs.FANQIE: return platform.TypeSubDjs.FANQIE;
                    case platform.TypeSubDjs.CHUANGDU: return platform.TypeSubDjs.CHUANGDU;
                    case platform.TypeSubDjs.CHANGXIANG: return platform.TypeSubDjs.CHANGXIANG;
                    case platform.TypeSubDjs.WANBA: return platform.TypeSubDjs.WANBA;
                    case platform.TypeSubDjs.IQIYI: return platform.TypeSubDjs.IQIYI;
                    case platform.TypeSubDjs.HUOXINGWAN: return platform.TypeSubDjs.HUOXINGWAN;
                    case platform.TypeSubDjs.YOUKU: return platform.TypeSubDjs.YOUKU;
                    case platform.TypeSubDjs.YOUZU: return platform.TypeSubDjs.YOUZU;
                    case platform.TypeSubDjs.TEST: return platform.TypeSubDjs.TEST;
                    case platform.TypeSubDjs.GUOPAN: return platform.TypeSubDjs.GUOPAN;
                    case platform.TypeSubDjs.XINGYOU: return platform.TypeSubDjs.XINGYOU;
                    case platform.TypeSubDjs.SINA: return platform.TypeSubDjs.SINA;
                    case platform.TypeSubDjs.SOUGOU: return platform.TypeSubDjs.SOUGOU;
                    case platform.TypeSubDjs.GUAIMAO: return platform.TypeSubDjs.GUAIMAO;
                    case platform.TypeSubDjs.ZHIWU: return platform.TypeSubDjs.ZHIWU;
                    case platform.TypeSubDjs.WEIBO: return platform.TypeSubDjs.WEIBO;
                    case platform.TypeSubDjs.DANGLE: return platform.TypeSubDjs.DANGLE;
                    case platform.TypeSubDjs.ALIPAY: return platform.TypeSubDjs.ALIPAY;
                    case platform.TypeSubDjs.SHUNWANG: return platform.TypeSubDjs.SHUNWANG;
                    case platform.TypeSubDjs.SHOUQIANBA: return platform.TypeSubDjs.SHOUQIANBA;
                    case platform.TypeSubDjs.XIAOMI: return platform.TypeSubDjs.XIAOMI;
                    case platform.TypeSubDjs.YYB: return platform.TypeSubDjs.YYB;
                    case platform.TypeSubDjs.XIAOXIONG: return platform.TypeSubDjs.XIAOXIONG;
                    case platform.TypeSubDjs.ANZHI: return platform.TypeSubDjs.ANZHI;
                    case platform.TypeSubDjs.QIQU: return platform.TypeSubDjs.QIQU;
                    case platform.TypeSubDjs.TANWAN: return platform.TypeSubDjs.TANWAN;
                    case platform.TypeSubDjs.TIANTUAN: return platform.TypeSubDjs.TIANTUAN;
                    case platform.TypeSubDjs.HIWANWAN: return platform.TypeSubDjs.HIWANWAN;
                    case platform.TypeSubDjs.TONGBUTUI: return platform.TypeSubDjs.TONGBUTUI;
                    case platform.TypeSubDjs.KOUDAI: return platform.TypeSubDjs.KOUDAI;
                    case platform.TypeSubDjs.BINGQU: return platform.TypeSubDjs.BINGQU;
                    case platform.TypeSubDjs.YOUSENG: return platform.TypeSubDjs.YOUSENG;
                    case platform.TypeSubDjs.LEGUYU: return platform.TypeSubDjs.LEGUYU;
                    case platform.TypeSubDjs.WANNENG: return platform.TypeSubDjs.WANNENG;
                    case platform.TypeSubDjs.YHD: return platform.TypeSubDjs.YHD;
                    case platform.TypeSubDjs.AIAIYOU: return platform.TypeSubDjs.AIAIYOU;
                    case platform.TypeSubDjs.QQREAD: return platform.TypeSubDjs.QQREAD;
                    case platform.TypeSubDjs.QQBROWSER: return platform.TypeSubDjs.QQBROWSER;
                    case platform.TypeSubDjs.QQGAME: return platform.TypeSubDjs.QQGAME;
                    case platform.TypeSubDjs.HENKKUAI: return platform.TypeSubDjs.HENKKUAI;
                    case platform.TypeSubDjs.G9G: return platform.TypeSubDjs.G9G;
                    case platform.TypeSubDjs.G7K7K: return platform.TypeSubDjs.G7K7K;
                    case platform.TypeSubDjs.G7724: return platform.TypeSubDjs.G7724;
                    case platform.TypeSubDjs.G68V: return platform.TypeSubDjs.G68V;
                    case platform.TypeSubDjs.G59YOU: return platform.TypeSubDjs.G59YOU;
                    case platform.TypeSubDjs.G5543: return platform.TypeSubDjs.G5543;
                    case platform.TypeSubDjs.G4399: return platform.TypeSubDjs.G4399;
                    case platform.TypeSubDjs.G360: return platform.TypeSubDjs.G360;
                    case platform.TypeSubDjs.G1758: return platform.TypeSubDjs.G1758;
                    case platform.TypeSubDjs.FENGWAN: return platform.TypeSubDjs.FENGWAN;
                    case platform.TypeSubDjs.KUPAI: return platform.TypeSubDjs.KUPAI;
                    case platform.TypeSubDjs.SOUGOUZB: return platform.TypeSubDjs.SOUGOUZB;
                }
                return this._subChannel;
            },
            enumerable: true,
            configurable: true
        });
        return SdkDuJiaoShou;
    }(platform.SdkBase));
    platform.SdkDuJiaoShou = SdkDuJiaoShou;
    __reflect(SdkDuJiaoShou.prototype, "platform.SdkDuJiaoShou");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 多瑙
    //--------------------------------------------------
    var SdkDuoNao = (function (_super) {
        __extends(SdkDuoNao, _super);
        function SdkDuoNao() {
            var _this = _super.call(this, platform.DN) || this;
            _this._channleId = 10035;
            return _this;
        }
        SdkDuoNao.prototype.getScripts = function () {
            return ['./sdklib/dnhwsdk.js?v1.0'];
        };
        SdkDuoNao.prototype.start = function () {
            //https://xxxx.com?uid=1000010&username=rh1000010&gameSign=c0b47b0c72d7af5a5f4d2b426296d3f9&loginTime=1539762838&channel=AS
            var params = platform.getUrlParams();
            this._userId = this._roleId = params.uid;
            this._roleName = params.username;
            this._sign = params.gameSign;
            this._time = params.loginTime;
            this._channel = params.channel;
            this.end(null);
            return true;
        };
        //上报数据
        SdkDuoNao.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            var type = 0;
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    type = 2;
                    break;
                case platform.DATA_ENTER_GAME:
                    type = 1;
                    break;
                case platform.DATA_LEVEL_UP:
                    type = 3;
                    break;
            }
            if (type == 0)
                return;
            var param = {};
            param["role_type"] = type;
            param["server_id"] = serverId;
            param["server_name"] = serverName;
            param["role_id"] = gameRoleUid;
            param["role_name"] = gameRoleName;
            param["party_name"] = '';
            param["role_level"] = gameRoleLevel;
            param["role_vip"] = gameRoleVipLevel;
            param["role_balence"] = diamonds;
            window.Sdk90hw.hwDuoNaoSetRoleInfo(param);
        };
        SdkDuoNao.prototype.share = function () {
            //(window as any).TuyooSdk.Share({ title: '魔域来了', desc: '一款XXX的游戏', imgUrl: '' });
        };
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
        SdkDuoNao.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            window.Sdk90hw.hwDuoNaoPay({
                product_price: price,
                product_count: buyCount,
                product_id: productId,
                product_name: productName,
                product_desc: productDesc,
                exchange_rate: 100,
                currency_name: '魔石',
                ext: productId,
                roleinfo: // | 是 | RoleInfo类 | 角色信息类
                {
                    role_type: 1,
                    server_id: serverId,
                    server_name: serverName,
                    role_id: gameRoleId,
                    role_name: gameRoleName,
                    party_name: '',
                    role_level: gameRoleLevel,
                    role_vip: gameRoleVip,
                    role_balence: diamonds // | 是 | float | 玩家游戏中游戏币余额，留两位小数;如果没有账户余额，请填0。
                }
            });
        };
        return SdkDuoNao;
    }(platform.SdkBase));
    platform.SdkDuoNao = SdkDuoNao;
    __reflect(SdkDuoNao.prototype, "platform.SdkDuoNao");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 疯狂游乐场
    //--------------------------------------------------
    var SdkFengKuang = (function (_super) {
        __extends(SdkFengKuang, _super);
        function SdkFengKuang() {
            var _this = _super.call(this, platform.FKYLC) || this;
            _this._channleId = 10006;
            _this._appId = 'mysq';
            _this._key = 'f3e8165fda0103c05675b3ac3f48e93e';
            _this._verifyResult = false;
            _this._focus = false;
            return _this;
        }
        SdkFengKuang.prototype.getScripts = function () {
            return ['https://cdn.hortor.net/sdk/sdk_agent.min.js'];
        };
        SdkFengKuang.prototype.start = function () {
            var _this = this;
            if (!window.HORTOR_AGENT)
                return false;
            var mySdk = window.HORTOR_AGENT;
            mySdk.init();
            mySdk.config({
                gameId: this._appId,
                share: {
                    timeline: {
                        title: "战斗伙伴宠宠欲动，轻松打造百星幻兽！",
                        imgUrl: "https://cdn0.myh5.90wmoyu.com/shell/resource/share/share_fkylc.png",
                        success: function () {
                            _this._shareCallBack.call(_this._sharethisObject);
                        },
                        cancel: function () { }
                    },
                    friend: {
                        title: "战斗伙伴宠宠欲动，轻松打造百星幻兽！",
                        desc: "魔域神曲重磅来袭！",
                        imgUrl: "https://cdn0.myh5.90wmoyu.com/shell/resource/share/share_fkylc.png",
                        success: function () {
                            _this._shareCallBack.call(_this._sharethisObject);
                        },
                        cancel: function () { }
                    },
                    //配置⾃定义参数
                    shareCustomParam: {
                        cp_param1: "",
                        cp_param2: "",
                    }
                },
                pay: {
                    success: this.onPaySuccess.bind(this),
                    cancel: this.onPayCancel.bind(this)
                }
            });
            var params = platform.getUrlParams();
            //do something
            this._userId = this._roleId = params.userId;
            this._roleName = params.userName;
            if (params.isSubscribe == "true") {
                this._focus = true;
            }
            else {
                this._focus = false;
            }
            if (params.isShowSubscribe && params.isShowSubscribe == "true") {
                this._focusbonus = true;
            }
            else {
                this._focusbonus = false;
            }
            this._sign = params.sign;
            this._time = params.time;
            this._ext = params.friendCode;
            this.end(params);
            return true;
        };
        /**充值成功回调 */
        SdkFengKuang.prototype.onPaySuccess = function () {
        };
        /**充值取消回调 */
        SdkFengKuang.prototype.onPayCancel = function () {
        };
        /**显示分享引导 */
        SdkFengKuang.prototype.showShare = function (caller, method) {
            this._shareCallBack = method;
            this._sharethisObject = caller;
        };
        /** 显示关注二维码 */
        SdkFengKuang.prototype.showFocus = function (caller, method) {
            var mySdk = window.HORTOR_AGENT;
            mySdk.showQRCode();
        };
        /**实名验证 */
        SdkFengKuang.prototype.verifyIdentity = function (caller, method) {
            var mySdk = window.HORTOR_AGENT;
            mySdk.realnameAuthentication(function (origin, data) {
                this._verifyResult = data.errCode == 0;
                if (data.errCode == 0 || data.errCode == 1) {
                    method.call(caller, data);
                }
            });
        };
        SdkFengKuang.prototype.getDataType = function (type) {
            switch (type) {
                case platform.DATA_SELECT_SERVER: return 1;
                case platform.DATA_CREATE_ROLE: return 2;
                case platform.DATA_ENTER_GAME: return 3;
                case platform.DATA_LEVEL_UP: return 4;
                case platform.DATA_QUIT_GAME: return 5;
                case platform.DATA_PAY: return 6;
            }
            return 0;
        };
        //上报数据
        SdkFengKuang.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            var obj = "";
            switch (dataName) {
                case platform.DATA_ENTER_GAME:
                    obj = "who=" + gameRoleUid + "&deviceid=" + this._userId + "&appid=4DWGiGFGP5fB8&serverid=" + serverId + "&level=" + gameRoleLevel + "&channelid=hortor";
                    this.requestData(obj, "login");
                    obj = "type=enter&who=" + gameRoleUid + "&deviceid=" + this._userId + "&appid=4DWGiGFGP5fB8&serverid=" + serverId + "&level=" + gameRoleLevel + "&channelid=hortor&subchid=" + 0 + "&power=" + 0;
                    this.requestData(obj, "point");
                    break;
                case platform.DATA_CREATE_ROLE:
                    obj = "who=" + gameRoleUid + "&deviceid=" + this._userId + "&appid=4DWGiGFGP5fB8&serverid=" + serverId + "&level=" + gameRoleLevel + "&channelid=hortor";
                    this.requestData(obj, "register");
                    break;
                case platform.DATA_LEVEL_UP:
                    obj = "type=levelup&who=" + gameRoleUid + "&deviceid=" + this._userId + "&appid=4DWGiGFGP5fB8&serverid=" + serverId + "&level=" + gameRoleLevel + "&channelid=hortor&subchid=" + 0 + "&power=" + 0;
                    this.requestData(obj, "point");
                    break;
                case platform.DATA_SELECT_SERVER:
                    obj = "type=oath&who=" + gameRoleUid + "&deviceid=" + this._userId + "&appid=4DWGiGFGP5fB8&serverid=" + serverId + "&level=" + gameRoleLevel + "&channelid=hortor&subchid=" + 0 + "&power=" + 0;
                    this.requestData(obj, "point");
                    break;
            }
        };
        SdkFengKuang.prototype.requestData = function (parm, type) {
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
        };
        SdkFengKuang.prototype.onRequestComplete = function (event) {
        };
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        SdkFengKuang.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var ext = serverId + "," + price;
            var sign = window['md5']("ext=" + ext + "gameId=" + this._appId + "goodsId=" + productId + "secret=" + this._key + "time=" + time + "userId=" + this._userId);
            var obj = "gameId=" + this._appId + "&goodsId=" + productId + "&goodsName=" + productName + "&userId=" + this._userId + "&money=" + price * 100 + "&ext=" + ext + "&time=" + time + "&sign=" + sign;
            this.getPayInfo(obj);
        };
        SdkFengKuang.prototype.getPayInfo = function (params) {
            var url = "https://wx.hortor.net/pay/partner";
            var loader = new egret.HttpRequest();
            loader.responseType = egret.HttpResponseType.TEXT;
            loader.open(url, egret.HttpMethod.POST);
            loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            loader.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
            loader.send(params);
        };
        SdkFengKuang.prototype.onGetComplete = function (event) {
            var request = event.currentTarget;
            var params = JSON.parse(request.response);
            if (params) {
                var mySdk = window.HORTOR_AGENT;
                mySdk.pay(params);
            }
        };
        return SdkFengKuang;
    }(platform.SdkBase));
    platform.SdkFengKuang = SdkFengKuang;
    __reflect(SdkFengKuang.prototype, "platform.SdkFengKuang");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // G123sdk
    //--------------------------------------------------
    var SdkG123 = (function (_super) {
        __extends(SdkG123, _super);
        function SdkG123() {
            var _this = _super.call(this, platform.G123) || this;
            _this._job = 0;
            _this._channleId = 10036;
            return _this;
        }
        SdkG123.prototype.getScripts = function () {
            // return ['https://psp.stg.g123.jp/static/cp_sdk.js'];//测试
            return ['https://psp.g123.jp/static/cp_sdk.js']; //正式
        };
        SdkG123.prototype.start = function () {
            var _this = this;
            var params = platform.getUrlParams();
            var access_code = params.code;
            this._gameChannelId = params.platform;
            new platform.HttpLoader().request(platform.getPhpPath('getUserInfo') + "?access_code=" + access_code, this, function (data) {
                var result = JSON.parse(data);
                if (result && result.userId) {
                    _this._userId = _this._roleId = result.userId;
                    _this._time = result.time;
                    _this._sign = result.sign;
                    _this.end(null);
                }
            }, egret.URLRequestMethod.GET);
            return true;
        };
        //上报数据
        SdkG123.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var log = -1;
            this._job = job;
            var formatTime = this.formatDate(new Date(time * 1000)).toString();
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    log = 1; //账号注册同角色注册1/3
                    // (window as any).parent.postMessage(JSON.stringify({ event: 'CreateRole', }), 'https://private-h5.g123.jp');//测试
                    window.parent.postMessage(JSON.stringify({ event: 'CreateRole', }), 'https://h5.g123.jp'); //正式
                    break;
                case platform.DATA_ENTER_GAME:
                    log = 2; //账号登陆同角色登陆2/4
                    break;
            }
            if (log >= 0) {
                var playerOs = egret.Capabilities.os;
                var roleLv = zhuanshenLevel * 1000 + gameRoleLevel;
                new platform.HttpLoader().request(platform.getPhpPath('submitExtraData') + "?log=" + log + "&sid=" + serverId + "&time=" + formatTime + "&os=" + egret.Capabilities.os + "&gameChannelId=" + this._gameChannelId + "&uid=" + this._userId + "&gameRoleUid=" + gameRoleUid + "&roleLv=" + roleLv + "&vipLv=" + gameRoleVipLevel + "&diamonds=" + diamonds + "&job=" + job, this, function (result) { }, egret.URLRequestMethod.GET);
            }
        };
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
        SdkG123.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var formatTime = this.formatDate(new Date(time * 1000)).toString();
            var virtualCurrent = "0"; //获得的虚拟货币数
            var index = productDesc.indexOf("_");
            if (index != -1) {
                var arr = productDesc.split("_");
                if (arr.length > 0)
                    productDesc = arr[0];
                if (arr.length > 1)
                    virtualCurrent = arr[1] ? arr[1] : "0";
            }
            var ext = serverId + "_" + serverName + "_" + gameRoleId + "_" + gameRoleName + "_" + productId + "_" + productName + "_" + this._userId + "_" + this._job + "_" + gameRoleLevel + "_" + gameRoleVip + "_" + this._gameChannelId + "_" + formatTime + "_" + virtualCurrent;
            new platform.HttpLoader().request(platform.getPhpPath('createOrder') + "?vip_Level=" + gameRoleVip + "&role_Level=" + gameRoleLevel + "&product_name=" + productName + "&product_desc=" + productDesc + "&product_count=" + buyCount + "&product_price=" + price + "&ext=" + ext + "&", this, function (result) {
                result = JSON.parse(result);
                window.CpSdk.SendPayment(result);
            }, egret.URLRequestMethod.GET);
        };
        SdkG123.prototype.showShare = function (caller, method) {
            window.parent.postMessage(JSON.stringify({
                "action": "share",
                "data": {
                    "ctw_line_share_text": "快来领取屠龙宝刀",
                    "ctw_twitter_share_text": "快来领取屠龙宝刀",
                    "ctw_copy_text": "快来领取屠龙宝刀"
                    //,
                    //非必须参数
                    // "ctw_twitter_share_via": "user1",
                    // "ctw_twitter_share_hashtags": "tag1,tag2",
                    // "ctw_share_id": "sample_share_id",
                    // "ctw_share_extra": "sample_extra",
                }
            }), '*');
        };
        //格式化时间2000-01-01 12:05:05   target=new Date(time * 1000)
        SdkG123.prototype.formatDate = function (target) {
            var excludedDetail = false;
            var year = target.getFullYear();
            var month = this.addZero(target.getMonth() + 1);
            var date = this.addZero(target.getDate());
            var hoursString = this.addZero(target.getHours());
            var minutesString = this.addZero(target.getMinutes());
            var secondsString = this.addZero(target.getSeconds());
            var result = year + '-' + month + '-' + date;
            if (!excludedDetail) {
                result = result + " " + hoursString + ":" + minutesString + ":" + secondsString;
            }
            return result;
        };
        SdkG123.prototype.addZero = function (value) {
            return (value < 10 ? "0" : "") + value;
        };
        return SdkG123;
    }(platform.SdkBase));
    platform.SdkG123 = SdkG123;
    __reflect(SdkG123.prototype, "platform.SdkG123");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 高热手机端 sdk
    //--------------------------------------------------
    var SdkGaoRe = (function (_super) {
        __extends(SdkGaoRe, _super);
        function SdkGaoRe() {
            var _this = _super.call(this, platform.GR) || this;
            _this._channleId = 10011;
            _this._appId = '434';
            _this._key = 'yWpx3hWQHFhSnTCj#434#6KuRKuaAjLJ5sYRy';
            return _this;
        }
        SdkGaoRe.prototype.start = function () {
            var params = platform.getUrlParams();
            //do something
            this._userId = this._roleId = params.uid;
            this._time = params.time;
            this._sign = params.sign;
            this._appId = params.appid;
            this.end(params);
            return true;
        };
        SdkGaoRe.prototype.getDataType = function (type) {
            switch (type) {
                case platform.DATA_SELECT_SERVER: return 1;
                case platform.DATA_CREATE_ROLE: return 2;
                case platform.DATA_ENTER_GAME: return 3;
                case platform.DATA_LEVEL_UP: return 4;
                case platform.DATA_QUIT_GAME: return 5;
                case platform.DATA_PAY: return 6;
                case platform.DATA_CHAT: return 7;
            }
            return 0;
        };
        SdkGaoRe.prototype.getJobById = function (id) {
            switch (id) {
                case 1:
                    return "战士";
                case 2:
                    return "法师";
                case 3:
                    return "异能";
            }
            return "";
        };
        //切换账号
        SdkGaoRe.prototype.switchUser = function () {
            AndroidCallBack.grLogout();
        };
        //上报数据
        SdkGaoRe.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            var reportType = 0;
            switch (dataName) {
                case platform.DATA_SELECT_SERVER:
                    reportType = 1;
                    break;
                case platform.DATA_CREATE_ROLE:
                    reportType = 2;
                    break;
                case platform.DATA_ENTER_GAME:
                    reportType = 3;
                    break;
                case platform.DATA_LEVEL_UP:
                    reportType = 4;
                    break;
                case platform.DATA_QUIT_GAME:
                    reportType = 5;
                    break;
            }
            try {
                if (reportType > 0) {
                    var jobName = this.getJobById(job);
                    AndroidCallBack.grSubmitExtendData(reportType, serverId, serverName, gameRoleName, gameRoleLevel, this.userId, diamonds, 0, null, null, 0, null, jobName, job, "无", "无", 0, "无", gameRoleVipLevel, 0, "无");
                }
            }
            catch (e) {
                console.error(e);
            }
        };
        /**
 * 充值
     */
        SdkGaoRe.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            try {
                AndroidCallBack.pay("1", "100", productId, price.toString(), productId, productName, productDesc, this._userId, gameRoleVip, gameRoleName, serverId, serverName, gameRoleVip);
            }
            catch (e) {
                console.error(e);
            }
        };
        return SdkGaoRe;
    }(platform.SdkBase));
    platform.SdkGaoRe = SdkGaoRe;
    __reflect(SdkGaoRe.prototype, "platform.SdkGaoRe");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 高热H5平台sdk
    //--------------------------------------------------
    var SdkGaoReH5 = (function (_super) {
        __extends(SdkGaoReH5, _super);
        function SdkGaoReH5() {
            var _this = _super.call(this, platform.GRH5) || this;
            _this._appId = "445";
            _this._channleId = 10012;
            return _this;
        }
        SdkGaoReH5.prototype.getScripts = function () {
            return ["https://h5.gaore.com/js/gaoreSDK.js"];
        };
        SdkGaoReH5.prototype.start = function () {
            var _this = this;
            var params = platform.getUrlParams();
            window.gaoreSDK.getLoginInfo({
                game_id: this.appId, server_id: 0, callFunc: function (response) {
                    _this._userId = _this._roleId = response.uid; //平台用户ID,充值需要
                    _this._roleName = response.user_name;
                    _this._sign = response.sign;
                    _this._ext = (_this._roleName + "," + response.sid);
                    _this.end(response);
                }
            });
            return true;
        };
        //切换账号
        SdkGaoReH5.prototype.switchUser = function () {
            window.gaoreSDK.out_login();
        };
        //上报数据
        SdkGaoReH5.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) { };
        /**
 * 充值
     * @param server_id 游戏服ID
     * @param product_id	产品ID
     * @param product_name	产品名
     */
        SdkGaoReH5.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var obj = {};
            obj['user_name'] = this.roleName;
            obj['bay_num'] = 1;
            obj['coin'] = 100;
            obj['game_id'] = this.appId;
            obj['server_id'] = serverId;
            obj['uid'] = this.userId;
            obj['role_name'] = gameRoleName;
            obj['role_level'] = gameRoleLevel;
            obj['vip'] = gameRoleVip;
            obj['money'] = price;
            obj['game_gold'] = price * 100;
            obj['role_id'] = this._roleId;
            obj['product_id'] = productId;
            obj['product_name'] = productName;
            obj['product_desc'] = productDesc;
            obj['ext'] = productId;
            obj['callback'] = function (response) { };
            window.gaoreSDK.pay(obj);
        };
        return SdkGaoReH5;
    }(platform.SdkBase));
    platform.SdkGaoReH5 = SdkGaoReH5;
    __reflect(SdkGaoReH5.prototype, "platform.SdkGaoReH5");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 嗨玩
    //--------------------------------------------------
    var SdkHaiWan = (function (_super) {
        __extends(SdkHaiWan, _super);
        function SdkHaiWan() {
            var _this = _super.call(this, platform.HAW) || this;
            _this._channleId = 10034;
            return _this;
        }
        SdkHaiWan.prototype.getScripts = function () {
            return [];
        };
        SdkHaiWan.prototype.start = function () {
            return true;
        };
        //上报数据
        SdkHaiWan.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    break;
                case platform.DATA_ENTER_GAME:
                    break;
                case platform.DATA_LEVEL_UP:
                    break;
            }
        };
        SdkHaiWan.prototype.share = function () {
            window.TuyooSdk.Share({ title: '魔域来了', desc: '一款XXX的游戏', imgUrl: '' });
        };
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
        SdkHaiWan.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
        };
        return SdkHaiWan;
    }(platform.SdkBase));
    platform.SdkHaiWan = SdkHaiWan;
    __reflect(SdkHaiWan.prototype, "platform.SdkHaiWan");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 九灵海外
    //--------------------------------------------------
    var SdkJiuLinHaiWai = (function (_super) {
        __extends(SdkJiuLinHaiWai, _super);
        function SdkJiuLinHaiWai() {
            var _this = _super.call(this, platform.JLHW) || this;
            _this._channleId = 10027;
            _this._appId = '1002';
            _this._key = '';
            _this._verifyResult = false;
            return _this;
        }
        SdkJiuLinHaiWai.prototype.getScripts = function () {
            return ['./sdklib/hwsdk.js?v2.0'];
        };
        SdkJiuLinHaiWai.prototype.start = function () {
            var _this = this;
            var params = platform.getUrlParams();
            this._userId = this._roleId = params.uid;
            this._roleName = params.username;
            this._sign = params.gameSign;
            this._time = params.loginTime;
            this._ext = this._os = params.channel;
            this.end(params);
            hwShareCallBacked = function (e) {
                _this.shareSuccess(e);
            };
            hwRatingCallBacked = function (code) {
                if (code.toString() == "0") {
                    if (_this._ratingCallBack) {
                        _this._ratingCallBack.call(_this._ratingCaller);
                    }
                }
            };
            return true;
        };
        //上报数据
        SdkJiuLinHaiWai.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_CREATE_ROLE://创角界面角色创建成功后调用
                    window.Sdk90hw.hwCreateRoleSuccess({ uid: this.userId, serverid: serverId, playerid: gameRoleUid });
                    break;
                case platform.DATA_ENTER_GAME://加载完毕进入场景调用
                    window.Sdk90hw.hwNewEntryGame({ uid: this.userId, serverid: serverId, level_order: gameRoleLevel });
                    break;
                case platform.DATA_LEVEL_UP://游戏中，角色升级调用
                    if (gameRoleLevel == 10 || gameRoleLevel == 40 || gameRoleLevel == 80)
                        window.Sdk90hw.hwRoleLevel({ uid: this.userId, serverid: serverId, level_order: gameRoleLevel, playerid: gameRoleUid });
                    break;
            }
        };
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        SdkJiuLinHaiWai.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            price = Math.round(price * 100) / 100;
            var obj = {};
            obj['productId'] = platform.shopSetting.getShopId(this._type, productId, price, this._os == 'AS');
            obj['serverid'] = serverId;
            obj['amount'] = price + '';
            obj['uid'] = this._userId;
            obj['shopid'] = productId;
            obj['roleid'] = gameRoleId;
            obj['optorid'] = 2;
            obj['gameId'] = 1002;
            obj['level_order'] = gameRoleLevel;
            window.Sdk90hw.hwApplePay(obj);
        };
        /**唤醒Sdk */
        SdkJiuLinHaiWai.prototype.sdkActive = function () {
            window.Sdk90hw.hwAccountSetEvent({ uid: this.userId });
        };
        SdkJiuLinHaiWai.prototype.setServerId = function (sid) {
            this._sid = sid.toString();
        };
        SdkJiuLinHaiWai.prototype.showShare = function (caller, method) {
            window.Sdk90hw.hwShareAction({
                "uid": this._userId.toString(),
                "serverid": this._sid,
                "playerid": this._roleId.toString(),
                "andLink": "https://play.google.com/store/apps/details?id=com.moyu.chm&hl=en",
                "iosLink": "https://itunes.apple.com/app/id1447213542",
                "dsp": "Come come come on join me here. Get free gear right away.",
            });
            this._shareCaller = caller;
            this._shareCallBack = method;
        };
        SdkJiuLinHaiWai.prototype.shareSuccess = function (e) {
            if (e == "0") {
                if (this._shareCallBack) {
                    this._shareCallBack.call(this._shareCaller);
                }
                console.log("===分享成功===" + e + "===点击领取奖励===");
            }
            else if (e == "1") {
                console.log("===分享失败===" + e);
            }
            else if (e == "2") {
                console.log("===取消分享===" + e);
            }
        };
        SdkJiuLinHaiWai.prototype.setRatingCallBack = function (caller, method) {
            this._ratingCaller = caller;
            this._ratingCallBack = method;
        };
        SdkJiuLinHaiWai.prototype.goToRating = function () {
            window.Sdk90hw.hwGoToRating({});
        };
        return SdkJiuLinHaiWai;
    }(platform.SdkBase));
    platform.SdkJiuLinHaiWai = SdkJiuLinHaiWai;
    __reflect(SdkJiuLinHaiWai.prototype, "platform.SdkJiuLinHaiWai");
})(platform || (platform = {}));
var hwShareCallBacked;
var hwRatingCallBacked;
var platform;
(function (platform) {
    //--------------------------------------------------
    // 九翎聚合sdk
    //--------------------------------------------------
    var SdkJuHe = (function (_super) {
        __extends(SdkJuHe, _super);
        function SdkJuHe() {
            var _this = _super.call(this, platform.JLJH) || this;
            _this._domWidth = 0.82;
            _this._domHeight = 0.74;
            _this._megin = 8;
            _this._channleId = 10013;
            _this._appId = "100031"; //appid：100031  appkey：6a11b531ec8461cd64eee9ba6e1149d6
            return _this;
        }
        SdkJuHe.prototype.getScripts = function () {
            return ["https://game.jiulingwan.com/public/sdk/js/sdk_cp.min.js"];
        };
        SdkJuHe.prototype.start = function () {
            if (window.AWY_SDK) {
                window.AWY_SDK.config(this._appId, this.onShareSuccess);
                window.AWY_SDK.config2(this.gamePauseCallback, this.gameStartCallback);
            }
            var params = platform.getUrlParams();
            this._userId = this._roleId = params.username;
            this._time = params.logintime;
            this._token = params.token;
            if (params.iswxsubscribe == 0) {
                this._focus = false;
            }
            else {
                this._focus = true;
            }
            if (params.isShowBack == 1) {
                this.addButton();
            }
            this.end(params);
            return true;
        };
        SdkJuHe.prototype.addButton = function () {
            var _this = this;
            this.startPoint = new egret.Point();
            this.touchPoint = new egret.Point();
            this.xlContainer = new egret.DisplayObjectContainer();
            var moveIcon = new egret.Bitmap();
            var moveContianer = new egret.DisplayObjectContainer();
            moveContianer.touchEnabled = true;
            this.xlContainer.addChild(moveContianer);
            moveContianer.addChild(moveIcon);
            moveContianer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.buttonTouchHandler, this);
            var returnContianer = new egret.DisplayObjectContainer();
            returnContianer.touchEnabled = true;
            var returnIcon = new egret.Bitmap();
            this.xlContainer.addChild(returnContianer);
            returnContianer.addChild(returnIcon);
            returnIcon.x = 63;
            returnContianer.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                window.AWY_SDK.backHome();
            }, this);
            this.stage = window.shell.layerManager.stage;
            window.shell.layerManager.sdk.addChild(this.xlContainer);
            this.xlContainer.x = this.stage.stageWidth - (63 * 2) - 40;
            this.xlContainer.y = 50;
            RES.getResByUrl('resource/xldrag.png', function (xldrag) {
                moveIcon.texture = xldrag;
                RES.getResByUrl('resource/xlretrun.png', function (xlretrun) {
                    returnIcon.texture = xlretrun;
                }, _this);
            }, this);
        };
        SdkJuHe.prototype.buttonTouchHandler = function (e) {
            switch (e.type) {
                case egret.TouchEvent.TOUCH_BEGIN:
                    if (this.xlContainer.stage) {
                        this.xlContainer.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.buttonTouchHandler, this);
                        this.xlContainer.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.buttonTouchHandler, this);
                        this.startPoint.setTo(this.xlContainer.x, this.xlContainer.y);
                        this.touchPoint.setTo(e.stageX, e.stageY);
                    }
                    break;
                case egret.TouchEvent.TOUCH_MOVE:
                    var tx = this.startPoint.x + (e.stageX - this.touchPoint.x);
                    var ty = this.startPoint.y + (e.stageY - this.touchPoint.y);
                    tx = Math.max(tx, 0);
                    ty = Math.max(ty, 0);
                    tx = Math.min(tx, this.stage.stageWidth - (63 * 2));
                    ty = Math.min(ty, this.stage.stageHeight - 42);
                    this.xlContainer.x = tx;
                    this.xlContainer.y = ty;
                    break;
                case egret.TouchEvent.TOUCH_END:
                    if (this.xlContainer.stage) {
                        this.xlContainer.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.buttonTouchHandler, this);
                        this.xlContainer.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.buttonTouchHandler, this);
                    }
                    break;
            }
        };
        /** 游戏暂停函数 */
        SdkJuHe.prototype.gamePauseCallback = function () { };
        /** 游戏开始函数 */
        SdkJuHe.prototype.gameStartCallback = function () { };
        /** 显示关注二维码 */
        SdkJuHe.prototype.showFocus = function (caller, method) {
            if (window.AWY_SDK) {
                window.AWY_SDK.showQRCode();
            }
        };
        SdkJuHe.prototype.mixLoadEnd = function () {
            if (window.AWY_SDK) {
                window.AWY_SDK.mixLoadEnd();
            }
        };
        SdkJuHe.prototype.getDataType = function (type) {
            switch (type) {
                //选择服务器
                case platform.DATA_SELECT_SERVER: return 1;
                //创角成功
                case platform.DATA_CREATE_ROLE: return 2;
                //进入游戏
                case platform.DATA_ENTER_GAME: return 3;
                //角色升级
                case platform.DATA_LEVEL_UP: return 4;
                //退出游戏
                case platform.DATA_QUIT_GAME: return 5;
                //充值
                case platform.DATA_PAY: return 6;
                //聊天
                case platform.DATA_CHAT: return 7;
                //进入创角界面
                case platform.DATA_CREATE_ROLE_ENTER: return 8;
                //点击创角按钮
                case platform.DATA_CREATE_ROLE_CLICK: return 9;
            }
            return 0;
        };
        /**用户分享成功后，SDK会回调该方法。调用该方法时SDK会同时给该函数返回一个字符串“SUCCESS”（全部大写）表示用户是否已分享成功，其余情况均表示分享不成功或者用户取消分享。*/
        SdkJuHe.prototype.onShareSuccess = function () {
            egret.log("分享成功");
            if (this._shareCallBack && this._sharethisObject) {
                this._shareCallBack.apply(this._sharethisObject);
            }
        };
        /**显示分享引导 */
        SdkJuHe.prototype.showShare = function (caller, method) {
            if (window.AWY_SDK) {
                window.AWY_SDK.showShare();
                this._shareCallBack = method;
                this._sharethisObject = caller;
            }
        };
        //上报数据
        SdkJuHe.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            var obj = {};
            var leve = gameRoleLevel;
            if (zhuanshenLevel) {
                leve = (zhuanshenLevel * 1000 + gameRoleLevel);
            }
            switch (dataName) {
                case platform.DATA_ENTER_GAME:
                    if (window.AWY_SDK) {
                        window.AWY_SDK.userinfo(leve, gameRoleName, serverName, this.userId, serverId, -1, 0);
                    }
                    break;
                case platform.DATA_CREATE_ROLE:
                    if (window.AWY_SDK) {
                        window.AWY_SDK.userinfo(leve, gameRoleName, serverName, this.userId, serverId, 1, 0);
                    }
                    break;
                case platform.DATA_LEVEL_UP:
                    if (window.AWY_SDK) {
                        window.AWY_SDK.userinfo(leve, gameRoleName, serverName, this.userId, serverId, -1, 0);
                    }
                    break;
            }
        };
        SdkJuHe.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var obj = {};
            obj['username'] = this.userId;
            obj['productname'] = productName;
            obj['amount'] = price;
            obj['roleid'] = this.userId;
            obj['serverid'] = serverId;
            obj['appid'] = this.userId;
            obj['token'] = this._token;
            var parameter = "username=" + this.userId + "&productname=" + productName + "&amount=" + price + "&roleid=" + this.userId + "&serverid=" + serverId + "&appid=" + this.appId + "&token=" + this.token + "&remarks=" + productId;
            this.juHePay(parameter);
        };
        SdkJuHe.prototype.juHePay = function (parameter) {
            var url = "//game.jiulingwan.com/sdk.php/User/Pay/subpage?";
            url = url + parameter;
            try {
                var mainDom = document.getElementById('main');
                if (!this._mydom) {
                    this._myWebView = document.createElement("iframe");
                    this._myWebView.id = 'page';
                    this._myWebView.width = '100%';
                    this._myWebView.height = '100%';
                    this._myWebView.scrolling = 'auto';
                    this._myWebView.style.border = "0px #000000 solid";
                    this._myWebView.src = url;
                    mainDom.appendChild(this._myWebView);
                }
                else {
                    this._myWebView.src = url;
                    mainDom.appendChild(this._myWebView);
                }
            }
            catch (e) {
                alert(e);
            }
        };
        return SdkJuHe;
    }(platform.SdkBase));
    platform.SdkJuHe = SdkJuHe;
    __reflect(SdkJuHe.prototype, "platform.SdkJuHe");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 九翎聚合iossdk
    //--------------------------------------------------
    var SdkJuHeIOS = (function (_super) {
        __extends(SdkJuHeIOS, _super);
        function SdkJuHeIOS() {
            var _this = _super.call(this, platform.JLJHIOS) || this;
            _this._isExamine = false; //是否是ios提审
            _this._domWidth = 0.82;
            _this._domHeight = 0.74;
            _this._megin = 8;
            _this._channleId = 10013;
            _this._appId = "100039"; //appid：100031  appkey：6a11b531ec8461cd64eee9ba6e1149d6
            return _this;
        }
        SdkJuHeIOS.prototype.getScripts = function () {
            return ["https://game.jiulingwan.com/public/sdk/js/sdk_cp.min.js"];
        };
        SdkJuHeIOS.prototype.start = function () {
            if (window.AWY_SDK) {
                window.AWY_SDK.config(this._appId, this.onShareSuccess);
                window.AWY_SDK.config2(this.gamePauseCallback, this.gameStartCallback);
            }
            var params = platform.getUrlParams();
            this._userId = this._roleId = params.username;
            this._time = params.logintime;
            this._token = params.token;
            if (params.iswxsubscribe == 0) {
                this._focus = false;
            }
            else {
                this._focus = true;
            }
            this.end(params);
            return true;
        };
        /** 游戏暂停函数 */
        SdkJuHeIOS.prototype.gamePauseCallback = function () { };
        /** 游戏开始函数 */
        SdkJuHeIOS.prototype.gameStartCallback = function () { };
        /** 显示关注二维码 */
        SdkJuHeIOS.prototype.showFocus = function (caller, method) {
            if (window.AWY_SDK) {
                window.AWY_SDK.showQRCode();
            }
        };
        SdkJuHeIOS.prototype.mixLoadEnd = function () {
            if (window.AWY_SDK) {
                window.AWY_SDK.mixLoadEnd();
            }
        };
        SdkJuHeIOS.prototype.getDataType = function (type) {
            switch (type) {
                //选择服务器
                case platform.DATA_SELECT_SERVER: return 1;
                //创角成功
                case platform.DATA_CREATE_ROLE: return 2;
                //进入游戏
                case platform.DATA_ENTER_GAME: return 3;
                //角色升级
                case platform.DATA_LEVEL_UP: return 4;
                //退出游戏
                case platform.DATA_QUIT_GAME: return 5;
                //充值
                case platform.DATA_PAY: return 6;
                //聊天
                case platform.DATA_CHAT: return 7;
                //进入创角界面
                case platform.DATA_CREATE_ROLE_ENTER: return 8;
                //点击创角按钮
                case platform.DATA_CREATE_ROLE_CLICK: return 9;
            }
            return 0;
        };
        /**用户分享成功后，SDK会回调该方法。调用该方法时SDK会同时给该函数返回一个字符串“SUCCESS”（全部大写）表示用户是否已分享成功，其余情况均表示分享不成功或者用户取消分享。*/
        SdkJuHeIOS.prototype.onShareSuccess = function () {
            egret.log("分享成功");
            if (this._shareCallBack && this._sharethisObject) {
                this._shareCallBack.apply(this._sharethisObject);
            }
        };
        /**显示分享引导 */
        SdkJuHeIOS.prototype.showShare = function (caller, method) {
            if (window.AWY_SDK) {
                window.AWY_SDK.showShare();
                this._shareCallBack = method;
                this._sharethisObject = caller;
            }
        };
        //上报数据
        SdkJuHeIOS.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            var obj = {};
            var leve = gameRoleLevel;
            if (zhuanshenLevel) {
                leve = (zhuanshenLevel * 1000 + gameRoleLevel);
            }
            switch (dataName) {
                case platform.DATA_ENTER_GAME:
                    if (window.AWY_SDK) {
                        window.AWY_SDK.userinfo(leve, gameRoleName, serverName, this.userId, serverId, -1, 0);
                    }
                    break;
                case platform.DATA_CREATE_ROLE:
                    if (window.AWY_SDK) {
                        window.AWY_SDK.userinfo(leve, gameRoleName, serverName, this.userId, serverId, 1, 0);
                    }
                    break;
                case platform.DATA_LEVEL_UP:
                    if (window.AWY_SDK) {
                        window.AWY_SDK.userinfo(leve, gameRoleName, serverName, this.userId, serverId, -1, 0);
                    }
                    break;
            }
        };
        SdkJuHeIOS.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var obj = {};
            obj['productId'] = platform.shopSetting.getShopId(this._type, productId, price, true);
            obj['username'] = this.userId;
            obj['productname'] = productName;
            obj['amount'] = price;
            obj['roleid'] = this.userId;
            obj['serverid'] = serverId;
            obj['appid'] = this.userId;
            obj['token'] = this._token;
            var parameter = "username=" + this.userId + "&productname=" + productName + "&amount=" + price + "&roleid=" + this.userId + "&serverid=" + serverId + "&appid=" + this.appId + "&token=" + this.token + "&productId=" + platform.shopSetting.getShopId(this._type, productId, price, true) + "&remarks=" + productId;
            this.juHePay(parameter);
        };
        SdkJuHeIOS.prototype.juHePay = function (parameter) {
            var url = "//game.jiulingwan.com/sdk.php/User/Pay/subpage?"; //正式服
            if (this._isExamine) {
                url = "//game.90tsf.com/sdk.php/User/Pay/subpage?"; //ios提审
            }
            url = url + parameter;
            try {
                var mainDom = document.getElementById('main');
                if (!this._mydom) {
                    this._myWebView = document.createElement("iframe");
                    this._myWebView.id = 'page';
                    this._myWebView.width = '100%';
                    this._myWebView.height = '100%';
                    this._myWebView.scrolling = 'auto';
                    this._myWebView.style.border = "0px #000000 solid";
                    this._myWebView.src = url;
                    mainDom.appendChild(this._myWebView);
                }
                else {
                    this._myWebView.src = url;
                    mainDom.appendChild(this._myWebView);
                }
            }
            catch (e) {
                alert(e);
            }
        };
        return SdkJuHeIOS;
    }(platform.SdkBase));
    platform.SdkJuHeIOS = SdkJuHeIOS;
    __reflect(SdkJuHeIOS.prototype, "platform.SdkJuHeIOS");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 恺英sdk
    //--------------------------------------------------
    var SdkKaiYing = (function (_super) {
        __extends(SdkKaiYing, _super);
        function SdkKaiYing() {
            var _this = _super.call(this, platform.KY) || this;
            _this._channleId = 10003;
            _this._appId = '37';
            return _this;
        }
        SdkKaiYing.prototype.getScripts = function () {
            return [((window.config && window.config.ssl) ? 'https' : 'http') + "://static.xyimg.net/cn/static/h5/js/sdk_20170923.js?v=2018092103"];
        };
        SdkKaiYing.prototype.getDataType = function (type) {
            switch (type) {
                case platform.DATA_SELECT_SERVER: return 1;
                case platform.DATA_CREATE_ROLE: return 2;
                case platform.DATA_ENTER_GAME: return 3;
                case platform.DATA_LEVEL_UP: return 4;
                case platform.DATA_QUIT_GAME: return 5;
                case platform.DATA_PAY: return 6;
                case platform.DATA_CHAT: return 7;
            }
            return 0;
        };
        SdkKaiYing.prototype.getChatType = function (type) {
            switch (type) {
                case "1": return "世界";
                case "6": return "综合";
                case "2": return "军团";
            }
            return "";
        };
        SdkKaiYing.prototype.start = function () {
            var params = platform.getUrlParams();
            this._userId = params.uid; //平台用户ID
            this._roleId = params.uid; //平台用户ID
            //this._roleName=params.rolename;
            this._time = params.logintime; //登录时间
            this._token = params.token; //md5(uid+”salsjOIUR94wjsdfjlw4j”+logintime)
            this.end(params);
            return true;
        };
        //上报数据
        SdkKaiYing.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    window.XYY_SDK.createRole(this._userId, serverId, gameRoleName, gameRoleUid, serverName, gameRoleLevel);
                    break;
                case platform.DATA_ENTER_GAME:
                    window.XYY_SDK.gamelogin(this._userId, this._appId, serverId, gameRoleUid, gameRoleName);
                    break;
                case platform.DATA_CHAT:
                    var typename = this.getChatType(chattype);
                    window.XYY_SDK.sendchatlog(serverId, gameRoleName, serverName, "xy", "xy", this._userId, content, chattype, typename, "xy", this._appId, "");
                    break;
                case platform.DATA_LEVEL_UP:
                    window.XYY_SDK.upgrade(this._userId, serverId, gameRoleName, gameRoleUid, serverName, gameRoleLevel);
                    break;
            }
        };
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
        SdkKaiYing.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
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
            window.XYY_SDK.loadPayBox(this._appId, this._userId, gameRoleName, serverId, gameRoleId, productId, price, 1477161, productId);
        };
        return SdkKaiYing;
    }(platform.SdkBase));
    platform.SdkKaiYing = SdkKaiYing;
    __reflect(SdkKaiYing.prototype, "platform.SdkKaiYing");
})(platform || (platform = {}));
var platform;
(function (platform) {
    var HttpLoader = (function (_super) {
        __extends(HttpLoader, _super);
        function HttpLoader() {
            return _super.call(this) || this;
        }
        HttpLoader.prototype.request = function (url, caller, complete, requestMethod, data) {
            if (requestMethod === void 0) { requestMethod = egret.URLRequestMethod.GET; }
            if (data === void 0) { data = null; }
            this._url = url;
            this._caller = caller;
            this._complete = complete;
            this.dataFormat = egret.URLLoaderDataFormat.TEXT;
            var urlRequest = new egret.URLRequest(url);
            urlRequest.method = requestMethod;
            urlRequest.data = data;
            this.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
            this.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadError, this);
            this.load(urlRequest);
        };
        HttpLoader.prototype.onLoadComplete = function (e) {
            this.removeEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
            this.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadError, this);
            if (this._complete)
                this._complete.call(this._caller, this.data);
            this._complete = null;
            this._caller = null;
        };
        HttpLoader.prototype.onLoadError = function (e) {
            this.removeEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
            this.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadError, this);
            this._complete.call(this._caller, null);
            this._complete = null;
            this._caller = null;
            console.error("Http错误:", this._url);
        };
        return HttpLoader;
    }(egret.URLLoader));
    platform.HttpLoader = HttpLoader;
    __reflect(HttpLoader.prototype, "platform.HttpLoader");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 垦丁sdk
    //--------------------------------------------------
    var SdkKenDing = (function (_super) {
        __extends(SdkKenDing, _super);
        function SdkKenDing() {
            var _this = _super.call(this, platform.KD) || this;
            _this._channleId = 10030;
            _this._appId = '416863';
            _this._app_secret = 'c2f4281bcda5ccb14c6dab96efd29fb7';
            return _this;
        }
        SdkKenDing.prototype.getScripts = function () {
            return ["https://h5api.guoziyx.com/sdk/8899sdk-1.3.0.js"];
        };
        SdkKenDing.prototype.start = function () {
            var _this = this;
            var params = platform.getUrlParams();
            this._cur_channel = params.cur_channel;
            new platform.HttpLoader().request(platform.getPhpPath('getUserInfo') + '?key=' + params.key, this, function (str) {
                var data = JSON.parse(str);
                if (data && data.res_code == 0) {
                    _this._userId = _this._roleId = data.user_id;
                    _this._roleName = data.nickname;
                    _this._time = (new Date().getSeconds()).toString();
                    _this._sign = md5(_this._userId + '' + _this._time + '' + _this._appId + '' + _this._app_secret);
                    _this.end(null);
                }
                else {
                    console.error(data.err_msg);
                }
            }, egret.URLRequestMethod.GET);
            return true;
        };
        //上报数据
        SdkKenDing.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    this._isNew = true;
                    this._createSec = time;
                    new platform.HttpLoader().request(platform.getPhpPath('reportCreateRole') + "?user_id=" + this._userId + "&role_id=" + gameRoleUid + "&role_name=" + gameRoleName + "&cur_channel=" + this._cur_channel + "&game_server=" + serverId, this, null, egret.URLRequestMethod.GET);
                    break;
                case platform.DATA_ENTER_GAME:
                    window.KD_SDK.kd_enterGame({
                        is_new: this._isNew ? 1 : 0,
                        role_level: gameRoleLevel,
                        game_id: this._appId,
                        user_id: this._userId,
                        role_id: gameRoleUid,
                        role_name: gameRoleName,
                        server_id: serverId,
                        server_name: serverName,
                        power: 0,
                        login_time: time,
                        member_level: gameRoleVipLevel,
                        currency: diamonds,
                        bind_currency: 0,
                        point: 0,
                        role_create_time: this._createSec ? this._createSec.toString() : "0",
                        last_upgrade_time: this._levelUpSec ? this._levelUpSec.toString() : "0",
                    }, function () { });
                    break;
                case platform.DATA_LEVEL_UP:
                    this._levelUpSec = time;
                    window.KD_SDK.kd_upgrade({
                        game_id: this._appId,
                        user_id: this._userId,
                        role_id: gameRoleUid,
                        role_name: gameRoleName,
                        role_level: gameRoleLevel,
                        server_id: serverId,
                        server_name: serverName,
                        member_level: gameRoleVipLevel,
                        currency: diamonds,
                        bind_currency: 0,
                        point: 0,
                        role_create_time: this._createSec ? this._createSec.toString() : "0",
                        last_upgrade_time: this._levelUpSec ? this._levelUpSec.toString() : "0",
                        is_new_role: this._isNew ? 1 : 0,
                    }, function () { });
                    break;
            }
        };
        /**生成签名 详见垦丁签名生成规则*/
        SdkKenDing.prototype.createSign = function (obj) {
            var arr = [];
            var key;
            for (key in obj) {
                arr.push(key);
            }
            arr.sort();
            var result = '';
            for (var i = 0; i < arr.length; i++) {
                key = arr[i];
                var value = obj[key];
                result += key + '=' + (value ? value : '') + ((i < arr.length - 1) ? '&' : '');
            }
            return md5(result + "&secret=" + this._app_secret).toLocaleUpperCase();
        };
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
        SdkKenDing.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var pay = {};
            pay.body = productDesc;
            pay.total_fee = (price * 100).toString();
            pay.user_id = this._userId;
            pay.role_id = gameRoleId;
            pay.game_id = this._appId;
            pay.trade_id = platform.generateUUID();
            pay.game_server = serverId;
            pay.role_level = gameRoleLevel.toString();
            pay.attach = this._userId + '_' + serverId + '_' + platform.shopSetting.getShopId(this._type, productId).toString() + '_' + productName + '_' + gameRoleName;
            pay.notify_url = platform.getPhpPath('pay_kd');
            pay.nonce_str = md5(new Date().getSeconds());
            pay.sign = this.createSign(pay);
            pay.notify_url = encodeURIComponent(pay.notify_url);
            window.KD_SDK.kd_pay(pay);
        };
        return SdkKenDing;
    }(platform.SdkBase));
    platform.SdkKenDing = SdkKenDing;
    __reflect(SdkKenDing.prototype, "platform.SdkKenDing");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 漫灵sdk
    //--------------------------------------------------
    var SdkManlin = (function (_super) {
        __extends(SdkManlin, _super);
        function SdkManlin() {
            var _this = _super.call(this, platform.ML) || this;
            _this._appId = '20004';
            _this._channleId = egret.Capabilities.os == 'iOS' ? 200040902 : 200040002;
            return _this;
        }
        SdkManlin.prototype.getScripts = function () {
            return ['./sdklib/md5.js', './sdklib/mlsdk.js'];
        };
        SdkManlin.prototype.getDataType = function (type) {
            switch (type) {
                case platform.DATA_SELECT_SERVER: return 1;
                case platform.DATA_CREATE_ROLE: return 2;
                case platform.DATA_ENTER_GAME: return 3;
                case platform.DATA_LEVEL_UP: return 4;
                case platform.DATA_QUIT_GAME: return 5;
            }
            return 0;
        };
        SdkManlin.prototype.auth = function (data) {
        };
        SdkManlin.prototype.start = function () {
            console.log("[SDK ML] SEND_LOGIN...");
            window.MLSdk.openLogin({ onSuccess: this.loginSuccess.bind(this), onFaild: this.loginFaild.bind(this) });
            return true;
        };
        SdkManlin.prototype.loginSuccess = function (data) {
            console.log("[SDK ML] login success:" + (data ? data.toString() : ""));
            var object = JSON.parse(data);
            this._userId = object['userID'].toString();
            this._roleId = object['userID'].toString();
            this._token = object['token'];
            this.end(data);
        };
        SdkManlin.prototype.loginFaild = function (data) {
            console.log("[SDK ML] login faild:" + (data ? data.toString() : ""));
        };
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
        SdkManlin.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var callback = {
                onSuccess: function (data) { },
                onFaild: function (data) { }
            };
            window.MLSdk.submitExtraData(dataType, serverId, serverName, this._roleId, gameRoleName, egret.getTimer(), gameRoleLevel, diamonds, callback);
        };
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
        SdkManlin.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            window.MLSdk.openCharge(productId, productName, productDesc, price, buyCount, diamonds, serverId, serverName, this._roleId, gameRoleName, gameRoleLevel, gameRoleVip, extension.toString(), { onSuccess: this.chargeSuccess.bind(this), onFaild: this.chargeFaild.bind(this) });
        };
        SdkManlin.prototype.chargeSuccess = function (data) {
            console.log("[SDK ML] openCharge success:" + (data ? data.toString() : ""));
        };
        SdkManlin.prototype.chargeFaild = function (data) {
            console.log("[SDK ML] openCharge faild:" + (data ? data.toString() : ""));
        };
        return SdkManlin;
    }(platform.SdkBase));
    platform.SdkManlin = SdkManlin;
    __reflect(SdkManlin.prototype, "platform.SdkManlin");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 微软 H5
    //--------------------------------------------------
    var SdkMS = (function (_super) {
        __extends(SdkMS, _super);
        function SdkMS() {
            var _this = _super.call(this, platform.MS) || this;
            _this._channleId = 10039; //与MSUWP使用相同_channleId
            _this._appKey = '82EDA7BE63';
            _this._keyType = 'H5';
            return _this;
        }
        SdkMS.prototype.getScripts = function () {
            return ['https://api.mguwp.net/web/websdk.js'];
        };
        SdkMS.prototype.start = function () {
            var _this = this;
            window.MgLoginResult = this._loginResult.bind(this);
            window.MgPaymentResult = function (result, loginResult) { };
            platform.loadSdkFile(['https://api.mguwp.net/web/cookies.js'], this, function () {
                platform.loadSdkFile(['https://api.mguwp.net/js/jquery/jquery.js'], _this, function () {
                    platform.loadSdkFile(['https://api.mguwp.net/js/layer/layer.js'], _this, function () {
                        platform.loadSdkFile(['https://api.mguwp.net/web/base64.js'], _this, function () {
                            window.openMgLogin(_this._appKey, JSON.stringify({}));
                        });
                    });
                });
            });
            return true;
        };
        //上报数据
        SdkMS.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            switch (dataName) {
            }
        };
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        SdkMS.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var _this = this;
            var step = extension;
            new platform.HttpLoader().request(platform.getPhpPath('CheckUserPay') + "?keyType=" + this._keyType + "&lv=" + gameRoleLevel + "&step=" + step, this, function (result) {
                if (result) {
                    var data = JSON.parse(result);
                    var obj = {};
                    var ext = serverId + "_" + serverName + "_" + gameRoleId + "_" + gameRoleName + "_" + productId + "_" + productName + "_" + _this._userId + "_" + price; //透传
                    obj['comment'] = encodeURI(ext);
                    obj['goodsKey'] = platform.shopSetting.getShopId(_this._type, productId, price);
                    obj['callback'] = data.CallbackId; //支付回调标识
                    var value = JSON.stringify(obj);
                    window.openMgStore(_this._appKey, value);
                }
            }, egret.URLRequestMethod.GET);
        };
        SdkMS.prototype._loginResult = function (result, loginResult) {
            var _this = this;
            if (result == "success") {
                var jsonLoginResult = JSON.parse(loginResult);
                this._userId = this._roleId = jsonLoginResult.userId;
                this._token = jsonLoginResult.token;
                this._account = jsonLoginResult.account;
                new platform.HttpLoader().request(platform.getPhpPath('CheckUser') + "?keyType=" + this._keyType + "&uid=" + this._userId + "&token=" + this._token, this, function (result) {
                    _this._sign = result;
                    _this.end(null);
                }, egret.URLRequestMethod.GET);
            }
        };
        return SdkMS;
    }(platform.SdkBase));
    platform.SdkMS = SdkMS;
    __reflect(SdkMS.prototype, "platform.SdkMS");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 微软 UWP
    //--------------------------------------------------
    var SdkMSUWP = (function (_super) {
        __extends(SdkMSUWP, _super);
        function SdkMSUWP() {
            var _this = _super.call(this, platform.MSUWP) || this;
            _this._channleId = 10039; //与MS使用相同_channleId
            _this._appKey = '7231CE22D6';
            _this._keyType = 'UWP';
            return _this;
        }
        SdkMSUWP.prototype.getScripts = function () {
            return [];
        };
        SdkMSUWP.prototype.start = function () {
            window.MG_CallBack = this._loginResult.bind(this);
            window.MG_PayBack = function (mgpayback) { };
            window.external.notify("login");
            return true;
        };
        //上报数据
        SdkMSUWP.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            switch (dataName) {
            }
        };
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        SdkMSUWP.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var _this = this;
            var step = extension;
            new platform.HttpLoader().request(platform.getPhpPath('CheckUserPay') + "?keyType=" + this._keyType + "&lv=" + gameRoleLevel + "&step=" + step, this, function (result) {
                if (result) {
                    var data = JSON.parse(result);
                    if (data.OnlyMS < 0)
                        return;
                    var obj = {};
                    var ext = serverId + "_" + serverName + "_" + gameRoleId + "_" + gameRoleName + "_" + productId + "_" + productName + "_" + _this._userId + "_" + price; //透传
                    obj['Comment'] = encodeURI(ext);
                    obj['DigitalGoodsKey'] = platform.shopSetting.getShopId(_this._type, productId, price);
                    obj['CallbackId'] = data.CallbackId; //支付回调标识
                    obj['OnlyMS'] = data.OnlyMS.toString();
                    var value = JSON.stringify(obj);
                    window.external.notify(value);
                }
            }, egret.URLRequestMethod.GET);
        };
        SdkMSUWP.prototype._loginResult = function (account, id, token) {
            var _this = this;
            this._roleName = account;
            this._userId = this._roleId = id;
            this._token = token;
            new platform.HttpLoader().request(platform.getPhpPath('CheckUserInfo') + "?keyType=" + this._keyType + "&uid=" + id + "&token=" + token, this, function (result) {
                if (result.toString() != "0") {
                    _this._sign = result;
                    _this.end(null);
                }
            }, egret.URLRequestMethod.GET);
        };
        return SdkMSUWP;
    }(platform.SdkBase));
    platform.SdkMSUWP = SdkMSUWP;
    __reflect(SdkMSUWP.prototype, "platform.SdkMSUWP");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 牛牛sdk
    //--------------------------------------------------
    var SdkNiuNiuAndroid = (function (_super) {
        __extends(SdkNiuNiuAndroid, _super);
        function SdkNiuNiuAndroid(type) {
            var _this = _super.call(this, type) || this;
            _this._isOppoChannel = false;
            _this._isOppoEnter = false;
            _this._channleId = 10023;
            _this._appId = '7033';
            return _this;
        }
        SdkNiuNiuAndroid.prototype.getScripts = function () {
            return [];
        };
        SdkNiuNiuAndroid.prototype.start = function () {
            var _this = this;
            window.oppoGamecenterEnter = function (result, desc, channel, uid, timestamps, sign) {
                _this._isOppoChannel = true;
                _this._isOppoEnter = result == '1'; //游戏中心进入 需要配对相应礼包
            };
            window.sdkLoginResult = function (result, msg, uid, usertoken, username, isverify, userage, channel) {
                if (result == '1') {
                    _this._userId = _this._roleId = uid;
                    _this._roleName = username;
                    _this._token = usertoken;
                    _this._ext = channel;
                    _this.end(null);
                }
            };
            try {
                window.nngame_obj.sdkLogin();
            }
            catch (e) {
                this._userId = this._roleId = platform.getUrlParams().uid;
                this.end(null);
            }
            return true;
        };
        SdkNiuNiuAndroid.prototype.getDataType = function (type) {
            switch (type) {
                case platform.DATA_SELECT_SERVER: return 1;
                case platform.DATA_CREATE_ROLE: return 2;
                case platform.DATA_ENTER_GAME: return 3;
                case platform.DATA_LEVEL_UP: return 4;
                case platform.DATA_QUIT_GAME: return 5;
                case platform.DATA_PAY: return 6;
                case platform.DATA_CHAT: return 7;
            }
            return 0;
        };
        //上报数据
        SdkNiuNiuAndroid.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            try {
                window.nngame_obj.sdkRoleInfo(this._roleId, gameRoleName, gameRoleLevel, serverId, serverName);
            }
            catch (e) { }
        };
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
        SdkNiuNiuAndroid.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            try {
                var shopItemId = platform.shopSetting.getShopId(this._type, productId, price);
                window.nngame_obj.sdkPay(shopItemId, platform.generateUUID(), price, buyCount, productId);
            }
            catch (e) { }
        };
        SdkNiuNiuAndroid.prototype.requestOppoInfo = function (serverId) {
            if (!this._isOppoChannel)
                return;
            new platform.HttpLoader().request(platform.getPhpPath('notifyOppoState') + "?isOppoEnter=" + (this._isOppoEnter ? 1 : 0) + "&sid=" + serverId + "&uid=" + this._userId, this, function () { });
        };
        return SdkNiuNiuAndroid;
    }(platform.SdkBase));
    platform.SdkNiuNiuAndroid = SdkNiuNiuAndroid;
    __reflect(SdkNiuNiuAndroid.prototype, "platform.SdkNiuNiuAndroid");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 贪玩sdk
    //--------------------------------------------------
    var SdkNiuNiuH5 = (function (_super) {
        __extends(SdkNiuNiuH5, _super);
        function SdkNiuNiuH5(type) {
            var _this = _super.call(this, type) || this;
            _this._channleId = 10022;
            _this._appId = '7034';
            return _this;
        }
        SdkNiuNiuH5.prototype.getScripts = function () {
            return ["//cdn.66173.cn/mobile/scripts/sdk/js/jsencrypt.min.js?y=2",
                "//cdn.66173.cn/mobile/scripts/sdk/js/md5.min.js?y=2",
                "//cdn.66173.cn/www/js/jquery-1.8.3.min.js",
                "//cdn.66173.cn/mobile/scripts/sdkmrt/js/nn_h5game_sdkmrt.js?t=" + Date.parse(new Date().toString())];
        };
        SdkNiuNiuH5.prototype.start = function () {
            var _this = this;
            window.NMRTSDK.init({ appId: this._appId, debug: false, isLocal: true }, function () {
                window.NMRTSDK.login(_this.onLogin.bind(_this));
            });
            return true;
        };
        SdkNiuNiuH5.prototype.onLogin = function (response) {
            this._userId = this._roleId = response.userId;
            this._ext = response.platform; //所在渠道名,充值需要
            this._appId = response.appId;
            this._token = response.token;
            this.end(response);
        };
        SdkNiuNiuH5.prototype.getDataType = function (type) {
            switch (type) {
                case platform.DATA_SELECT_SERVER: return 1;
                case platform.DATA_CREATE_ROLE: return 2;
                case platform.DATA_ENTER_GAME: return 3;
                case platform.DATA_LEVEL_UP: return 4;
                case platform.DATA_QUIT_GAME: return 5;
                case platform.DATA_PAY: return 6;
                case platform.DATA_CHAT: return 7;
            }
            return 0;
        };
        //上报数据
        SdkNiuNiuH5.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
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
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    obj['roleLevelMTime'] = "";
                    obj['roleReportType'] = 1;
                    window.NMRTSDK.roleReport(obj);
                    break;
                case platform.DATA_ENTER_GAME:
                    obj['roleLevelMTime'] = "";
                    obj['roleCreatedTime'] = "";
                    obj['roleReportType'] = 2;
                    window.NMRTSDK.roleReport(obj);
                    break;
                case platform.DATA_LEVEL_UP:
                    obj['roleCreatedTime'] = "";
                    obj['roleReportType'] = 3;
                    window.NMRTSDK.roleReport(obj);
                    break;
            }
        };
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
        SdkNiuNiuH5.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
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
            obj['billno'] = platform.generateUUID();
            obj['sdkgoodsid'] = platform.shopSetting.getShopId(this._type, productId, price);
            obj['amount'] = price;
            obj['count'] = buyCount;
            obj['productName'] = productName;
            obj['productDesc'] = productDesc;
            obj['subject'] = productDesc;
            obj['extraInfo'] = productId;
            obj['screenOrient'] = "1";
            window.NMRTSDK.pay(obj);
        };
        return SdkNiuNiuH5;
    }(platform.SdkBase));
    platform.SdkNiuNiuH5 = SdkNiuNiuH5;
    __reflect(SdkNiuNiuH5.prototype, "platform.SdkNiuNiuH5");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 贪玩sdk
    //--------------------------------------------------
    var SdkNiuNiuIOS = (function (_super) {
        __extends(SdkNiuNiuIOS, _super);
        function SdkNiuNiuIOS() {
            var _this = _super.call(this, platform.NN_IOS) || this;
            _this._channleId = 10024;
            _this._appId = '1113';
            return _this;
        }
        SdkNiuNiuIOS.prototype.getScripts = function () {
            return [];
        };
        SdkNiuNiuIOS.prototype.start = function () {
            var _this = this;
            window.sdkLoginResult = function (result, msg, uid, usertoken, username, isbindphone) {
                if (result == '1') {
                    _this._userId = _this._roleId = uid;
                    _this._roleName = username;
                    _this._token = usertoken;
                    _this._ext = isbindphone;
                    _this.end(null);
                }
            };
            window.webkit.messageHandlers.sdklogin.postMessage("sdklogin");
            return true;
        };
        SdkNiuNiuIOS.prototype.getDataType = function (type) {
            switch (type) {
                case platform.DATA_SELECT_SERVER: return 1;
                case platform.DATA_CREATE_ROLE: return 2;
                case platform.DATA_ENTER_GAME: return 3;
                case platform.DATA_LEVEL_UP: return 4;
                case platform.DATA_QUIT_GAME: return 5;
                case platform.DATA_PAY: return 6;
                case platform.DATA_CHAT: return 7;
            }
            return 0;
        };
        //上报数据
        SdkNiuNiuIOS.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var prams = "roleId=" + this._roleId + "&roleName=" + gameRoleName + "&roleLevel=" + gameRoleLevel + "&zoneId=" + serverId + "&zoneName=" + serverName;
            window.webkit.messageHandlers.sdkroleinfo.postMessage(prams);
        };
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
        SdkNiuNiuIOS.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var iosPayId = 0;
            var prams = "billno=" + platform.generateUUID() //CP订单号
                + "&sdkgoodsid=" + platform.shopSetting.getShopId(this._type, productId, price) //牛牛后台商品ID
                + "&amount=" + price //单份金额
                + "&count=" + buyCount //购买份数
                + "&subject=" + productDesc //商品名称描述等等
                + "&extraInfo=" + productId //额外参数
                + "&innerId=" + iosPayId; //如果有内购请填写内购ID
            window.webkit.messageHandlers.sdkdomai.postMessage(prams);
        };
        return SdkNiuNiuIOS;
    }(platform.SdkBase));
    platform.SdkNiuNiuIOS = SdkNiuNiuIOS;
    __reflect(SdkNiuNiuIOS.prototype, "platform.SdkNiuNiuIOS");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 热血sdk
    //--------------------------------------------------
    var SdkReXue = (function (_super) {
        __extends(SdkReXue, _super);
        function SdkReXue() {
            var _this = _super.call(this, platform.RX) || this;
            _this._channleId = 10032;
            return _this;
        }
        SdkReXue.prototype.getScripts = function () {
            return [];
        };
        SdkReXue.prototype.start = function () {
            var params = platform.getUrlParams();
            this._appId = params.appid;
            this._userId = params.uid; //平台用户ID
            this._roleId = params.uid; //平台用户ID
            this._account = params.username;
            this._token = params.state; //登录后从SDK获取的服务端sessionid值
            this._sign = params.flag; //加密签名，注：.为连接符，不参与加密
            this.end(params);
            return true;
        };
        //上报数据
        SdkReXue.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var sign;
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    break;
                case platform.DATA_ENTER_GAME:
                    break;
                case platform.DATA_LEVEL_UP:
                    break;
            }
        };
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
        SdkReXue.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            window.parent.postMessage({
                uid: this._userId,
                username: this._account,
                money: price,
                server_id: serverId,
                role_id: gameRoleId,
                ext: productId + "_" + productName + "_" + gameRoleName,
                appid: this._appId
            }, '*');
        };
        return SdkReXue;
    }(platform.SdkBase));
    platform.SdkReXue = SdkReXue;
    __reflect(SdkReXue.prototype, "platform.SdkReXue");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 上士sdk
    //--------------------------------------------------
    var SdkShangShi = (function (_super) {
        __extends(SdkShangShi, _super);
        function SdkShangShi() {
            var _this = _super.call(this, platform.SS) || this;
            _this._channleId = 10004;
            _this._key = 'A8L8ZXMPYB4SMQ64';
            return _this;
        }
        SdkShangShi.prototype.getScripts = function () {
            var timestamp = new Date().getTime();
            return [((window.config && window.config.ssl) ? 'https' : 'http') + "://sycdn.shangshiwl.com/js/sswl_sdk.js?v=" + timestamp];
        };
        SdkShangShi.prototype.getDataType = function (type) {
            switch (type) {
                case platform.DATA_SELECT_SERVER: return 1;
                case platform.DATA_CREATE_ROLE: return 2;
                case platform.DATA_ENTER_GAME: return 3;
                case platform.DATA_LEVEL_UP: return 4;
                case platform.DATA_QUIT_GAME: return 5;
                case platform.DATA_PAY: return 6;
            }
            return 0;
        };
        SdkShangShi.prototype.start = function () {
            var params = platform.getUrlParams();
            this._userId = params.user_id; //平台用户ID
            this._roleId = params.user_id; //平台用户ID
            this._appId = params.app_id;
            this._time = params.time; //登录时间
            this._sign = params.sign; //登陆签名
            this._token = params.code; //登入二次验证的code【10分钟内有效】
            this.end(params);
            return true;
        };
        //上报数据
        SdkShangShi.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var sign;
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    sign = window['md5'](this._userId + gameRoleUid + time + this._key);
                    window.sswlSdk.createRole(this._userId, gameRoleUid, time, sign);
                    break;
                case platform.DATA_ENTER_GAME:
                    sign = window['md5'](this._userId + serverId + this._time + time + this._key);
                    window.sswlSdk.serverLogin(this._userId, serverId, this._time, time, sign);
                    break;
                case platform.DATA_LEVEL_UP:
                    sign = window['md5'](this._userId + gameRoleUid + gameRoleLevel + time + this._key);
                    window.sswlSdk.roleLevel(this._userId, gameRoleUid, gameRoleLevel, time, sign);
                    break;
            }
        };
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
        SdkShangShi.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var money_type = "CNY";
            var cp_trade_sn = platform.generateUUID();
            var sign = window['md5'](this._userId + gameRoleId + gameRoleName + gameRoleLevel + cp_trade_sn + price + money_type + productId + productName + productDesc + serverId + time + this._key);
            window.sswlSdk.h5Pay(this._userId, gameRoleId, gameRoleName, gameRoleLevel, cp_trade_sn, price, money_type, productId, productName, productDesc, serverId, time, sign);
        };
        return SdkShangShi;
    }(platform.SdkBase));
    platform.SdkShangShi = SdkShangShi;
    __reflect(SdkShangShi.prototype, "platform.SdkShangShi");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 顺网H5
    //--------------------------------------------------
    var SdkShunWangH5 = (function (_super) {
        __extends(SdkShunWangH5, _super);
        function SdkShunWangH5() {
            var _this = _super.call(this, platform.SWWEB) || this;
            _this._channleId = 10038;
            _this._gameId = 6295;
            return _this;
        }
        SdkShunWangH5.prototype.getScripts = function () {
            return ["https://reslaosiji.swjoy.com/pay/h5_pay.js"];
        };
        SdkShunWangH5.prototype.start = function () {
            var _this = this;
            var params = platform.getUrlParams();
            new platform.HttpLoader().request(platform.getPhpPath('getUserInfo') + '?guid=' + params.guid + '&fcm=' + params.fcm + '&card_state=' + params.card_state + '&play_type=' + params.play_type + '&server_idx=' + params.server_idx + '&server_code=' + params.server_code + '&platform=' + params.platform + '&sign=' + params.sign + '&time=' + params.time + '&sw_tag=' + params.sw_tag, this, function (str) {
                var data = JSON.parse(str);
                if (data && data.res_code == 0) {
                    _this._userId = _this._roleId = data.guid;
                    _this._sign = data.sign;
                    _this._time = data.time;
                    _this._swTag = data.sw_tag;
                    _this.end(null);
                }
            });
            return true;
        };
        //上报数据
        SdkShunWangH5.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    break;
                case platform.DATA_ENTER_GAME:
                    break;
                case platform.DATA_LEVEL_UP:
                    break;
            }
        };
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
        SdkShunWangH5.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var _this = this;
            new platform.HttpLoader().request(platform.getPhpPath('getPayInfo') + '?gameId=' + this._gameId + '&guid=' + this.roleId + '&rmb=' + price + '&time=' + time + '&ext=' + (serverId + "_" + productId) + '&swTag=' + this._swTag, this, function (jsonData) {
                var paydata = JSON.parse(jsonData);
                window.H5Pay().init({
                    gameId: _this._gameId,
                    data: paydata.data,
                    sign: paydata.sign
                }, function (json) {
                    if (json.response.code == 0) {
                        _this.dispatchEventWith('InitiatePaymentOfShunWang', false, json.response.qrcode);
                    }
                });
            });
        };
        return SdkShunWangH5;
    }(platform.SdkBase));
    platform.SdkShunWangH5 = SdkShunWangH5;
    __reflect(SdkShunWangH5.prototype, "platform.SdkShunWangH5");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 顺网
    //--------------------------------------------------
    var SdkShunWangWeb = (function (_super) {
        __extends(SdkShunWangWeb, _super);
        function SdkShunWangWeb() {
            var _this = _super.call(this, platform.SWWEB) || this;
            _this._channleId = 10037;
            _this._gameId = 3786;
            return _this;
        }
        SdkShunWangWeb.prototype.getScripts = function () {
            return [];
        };
        SdkShunWangWeb.prototype.start = function () {
            var _this = this;
            //https://xxx/index.sw.html?_back_url=&card_state=0&fcm=0&guid=3786_1552359227350_99375692&platform=swjoy&play_type=web&server_code=&sign=608888978c99133d5565877d57b67bcc&swTag=sw&time=1552382127
            var params = platform.getUrlParams();
            new platform.HttpLoader().request(platform.getPhpPath('getUserInfo') + '?guid=' + params.guid + '&fcm=' + params.fcm + '&card_state=' + params.card_state + '&play_type=' + params.play_type + '&server_idx=' + params.server_idx + '&server_code=' + params.server_code + '&platform=' + params.platform + '&sign=' + params.sign + '&time=' + params.time + '&sw_tag=' + params.sw_tag, this, function (str) {
                var data = JSON.parse(str);
                if (data && data.res_code == 0) {
                    _this._userId = _this._roleId = data.guid;
                    _this._sign = data.sign;
                    _this._time = data.time;
                    _this._swTag = data.sw_tag;
                    _this.end(null);
                }
            });
            return true;
        };
        //上报数据
        SdkShunWangWeb.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    break;
                case platform.DATA_ENTER_GAME:
                    break;
                case platform.DATA_LEVEL_UP:
                    break;
            }
        };
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
        SdkShunWangWeb.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var _this = this;
            new platform.HttpLoader().request(platform.getPhpPath('getPayInfo') + '?gameId=' + this._gameId + '&guid=' + this.roleId + '&rmb=' + price + '&time=' + time + '&ext=' + (serverId + "_" + productId) + '&swTag=' + this._swTag, this, function (str) {
                var data = JSON.parse(str);
                if (data && data.response.code == 0) {
                    _this.dispatchEventWith('InitiatePaymentOfShunWang', false, data.response.qrcode);
                }
            });
        };
        return SdkShunWangWeb;
    }(platform.SdkBase));
    platform.SdkShunWangWeb = SdkShunWangWeb;
    __reflect(SdkShunWangWeb.prototype, "platform.SdkShunWangWeb");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 9377IOSsdk
    //--------------------------------------------------
    var SdkSYJsqqA = (function (_super) {
        __extends(SdkSYJsqqA, _super);
        function SdkSYJsqqA() {
            var _this = _super.call(this, platform.JSQQA) || this;
            _this._channleId = 10020;
            _this._verifyResult = false;
            _this._appId = '35426';
            _this._key = '566a8403b6d4278d70b553e80a7dbcd8';
            return _this;
        }
        SdkSYJsqqA.prototype.start = function () {
            var params = platform.getUrlParams();
            this._userId = this._roleId = this._roleName = params.username; //平台用户ID,充值需要
            this._time = params.timestamp;
            this._sign = params.sign; //md5( username + adult + timestamp + key)
            this._time = params.timestamp;
            this._token = window['md5'](params.username + params.adult + params.timestamp + this._key);
            //params.avatar//头像地址
            //this._appId = params.adult;//成年标识, 1成年，0未成年, -1填写了身份证但未成年
            //setTimeout(this.end,500,params);
            this.end(params);
            return true;
        };
        //上报数据
        SdkSYJsqqA.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) { };
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        SdkSYJsqqA.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var obj = {};
            obj['event'] = "pay";
            obj['gid'] = this._appId;
            obj['username'] = this._userId;
            obj['_sid'] = serverId;
            obj['amount'] = price;
            obj['product'] = productName;
            obj['extra_info'] = this._appId + "_" + productId;
            parent.postMessage(JSON.stringify(obj), '*');
        };
        return SdkSYJsqqA;
    }(platform.SdkBase));
    platform.SdkSYJsqqA = SdkSYJsqqA;
    __reflect(SdkSYJsqqA.prototype, "platform.SdkSYJsqqA");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 9377安卓sdk
    //--------------------------------------------------
    var SdkSYJsqqI = (function (_super) {
        __extends(SdkSYJsqqI, _super);
        function SdkSYJsqqI() {
            var _this = _super.call(this, platform.JSQQI) || this;
            _this._channleId = 10017;
            _this._verifyResult = false;
            _this._appId = '35216';
            _this._key = '343f543a387199c4deec865e68f6ec05';
            return _this;
        }
        SdkSYJsqqI.prototype.start = function () {
            var params = platform.getUrlParams();
            this._userId = this._roleId = this._roleName = params.username; //平台用户ID,充值需要
            this._time = params.timestamp;
            this._sign = params.sign; //md5( username + adult + timestamp + key)
            this._time = params.timestamp;
            this._token = window['md5'](params.username + params.adult + params.timestamp + this._key);
            //params.avatar//头像地址
            //this._appId = params.adult;//成年标识, 1成年，0未成年, -1填写了身份证但未成年
            //setTimeout(this.end,500,params);
            this.end(params);
            return true;
        };
        //上报数据
        SdkSYJsqqI.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) { };
        /**
         * 充值
         * @param server_id 游戏服ID
         * @param product_id	产品ID
         * @param product_name	产品名
           @param product_price	元
         */
        SdkSYJsqqI.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var obj = {};
            obj['event'] = "pay";
            obj['gid'] = this._appId;
            obj['username'] = this._userId;
            obj['_sid'] = serverId;
            obj['amount'] = price;
            obj['product'] = productName;
            obj['extra_info'] = this._appId + "_" + productId;
            parent.postMessage(JSON.stringify(obj), '*');
        };
        return SdkSYJsqqI;
    }(platform.SdkBase));
    platform.SdkSYJsqqI = SdkSYJsqqI;
    __reflect(SdkSYJsqqI.prototype, "platform.SdkSYJsqqI");
})(platform || (platform = {}));
var Yxitai;
var platform;
(function (platform) {
    //--------------------------------------------------
    // Tai平台
    //--------------------------------------------------
    var SdkTai = (function (_super) {
        __extends(SdkTai, _super);
        function SdkTai() {
            var _this = _super.call(this, platform.TAI) || this;
            _this._channleId = 10040;
            return _this;
        }
        SdkTai.prototype.getScripts = function () {
            return ["https://m.yxitai.com/Public/mobile/js/https_game.1.02.js"];
        };
        SdkTai.prototype.start = function () {
            var _this = this;
            var params = platform.getUrlParams();
            new platform.HttpLoader().request(platform.getPhpPath('getUserInfo') + '?userid=' + params.userid + '&appid=' + params.appid + '&time=' + params.ts + '&from=' + params.from + '&sign=' + params.sign, this, function (str) {
                var data = JSON.parse(str);
                if (data && data.res_code == 0) {
                    _this._userId = _this._roleId = data.userid;
                    _this._appId = data.appid;
                    _this._time = data.time;
                    _this._from = data.from;
                    _this._token = data.token;
                    _this._sign = data.sign;
                    _this.GYxitai = new Yxitai({ appid: _this._appId, from: _this._from, userid: _this._userId });
                    _this.end(null);
                }
            });
            return true;
        };
        //切换账号
        SdkTai.prototype.switchUser = function () {
            this.GYxitai.relogin();
        };
        //上报数据
        SdkTai.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    var createPparm = {};
                    createPparm['serverid'] = serverId;
                    createPparm['servername'] = serverName;
                    createPparm['roleid'] = gameRoleUid;
                    createPparm['cash'] = diamonds;
                    createPparm['rolename'] = gameRoleName;
                    this.GYxitai.createRole(createPparm);
                    var parm = {};
                    parm['serverid'] = serverId;
                    parm['servername'] = serverName;
                    parm['roleid'] = gameRoleUid;
                    parm['rolelevel'] = gameRoleLevel;
                    parm['rolename'] = gameRoleName;
                    parm['rolecreatetime'] = time;
                    this.GYxitai.selectServer(parm);
                    break;
                case platform.DATA_ENTER_GAME:
                    this.GYxitai.ready(function (data) {
                        console.log("GYxitai加载完成上报：" + data);
                    });
                    break;
                case platform.DATA_LEVEL_UP:
                    var upParm = {};
                    upParm['serverid'] = serverId;
                    upParm['servername'] = serverName;
                    upParm['roleid'] = gameRoleUid;
                    upParm['cash'] = diamonds;
                    upParm['rolename'] = gameRoleName;
                    upParm['rolelevel'] = gameRoleLevel;
                    this.GYxitai.updateRole(upParm);
                    break;
            }
        };
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
        SdkTai.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var _this = this;
            //money、appid
            new platform.HttpLoader().request(platform.getPhpPath('getPayInfo') + '?&money=' + price + '&appid=' + this.appId, this, function (jsonData) {
                var paydata = JSON.parse(jsonData);
                var payParm = {};
                payParm['orderid'] = paydata.orderid;
                payParm['money'] = price;
                payParm['product'] = productName;
                payParm['productid'] = productId;
                payParm['roleid'] = gameRoleId;
                payParm['serverid'] = serverId;
                payParm['servername'] = serverName;
                payParm['sign'] = paydata.sign;
                _this.GYxitai.pay(payParm);
            });
        };
        return SdkTai;
    }(platform.SdkBase));
    platform.SdkTai = SdkTai;
    __reflect(SdkTai.prototype, "platform.SdkTai");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 贪玩sdk
    //--------------------------------------------------
    var SdkTanwan = (function (_super) {
        __extends(SdkTanwan, _super);
        function SdkTanwan() {
            var _this = _super.call(this, platform.TW) || this;
            _this._channleId = 10000;
            return _this;
        }
        SdkTanwan.prototype.getScripts = function () {
            if (window.config && window.config.ssl) {
                return ["https://image.693975.com/js/game/sdk-init.js"];
            }
            return ["http://image.693975.com/js/game/sdk-init.js"];
        };
        SdkTanwan.prototype.start = function () {
            var params = platform.getUrlParams();
            this._userId = params.uid; //贪玩平台用户ID,充值需要
            this._appId = params.appid;
            this._time = params.time;
            this._roleId = params.uid; //贪玩平台用户ID，作为roleId
            this._roleName = params.uname; //平台用户名
            this._sign = params.sign; //Md5(uid+appid+time+login_key)
            this._logotype = params.logotype;
            if (this._logotype == -2)
                this._logourl = params.logo_url;
            //setTimeout(this.end,500,params);
            this.end(params);
            return true;
        };
        //切换账号
        SdkTanwan.prototype.switchUser = function () {
            window.omgSDK.switchUser();
        };
        SdkTanwan.prototype.getDataType = function (type) {
            switch (type) {
                case platform.DATA_SELECT_SERVER: return 1;
                case platform.DATA_CREATE_ROLE: return 2;
                case platform.DATA_ENTER_GAME: return 3;
                case platform.DATA_LEVEL_UP: return 4;
                case platform.DATA_QUIT_GAME: return 5;
                case platform.DATA_PAY: return 6;
                case platform.DATA_CHAT: return 7;
            }
            return 0;
        };
        //上报数据
        SdkTanwan.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var obj = {};
            obj['dataType'] = dataType;
            obj['appid'] = appid;
            obj['serverID'] = serverId;
            obj['serverName'] = serverName;
            obj['userId'] = this._userId;
            obj['roleID'] = this._roleId;
            obj['roleName'] = gameRoleName;
            obj['roleLevel'] = gameRoleLevel;
            obj['moneyNum'] = diamonds;
            window.omgSDK.reportUserInfo(obj);
            // var dataName: string = this.getDataName(dataType);
            // if (dataName == DATA_CHAT) {
            // 	var type = this.getChatType(chattype);
            // 	var key = "8ea0d55bdec444832abbee0e9f2a";
            // 	var gkey = "678";
            // 	var sign = window['md5'](gkey + serverId + this._userId + time + key);
            // 	var parm = `gkey=${gkey}&tkey=3&server_id=${serverId}&qid=${this._userId}&name=${gameRoleName}&type=${type}
            // 	&content=${content}&time=${time}&ip=""&toqid=""&toname=""&sign=${sign}`;
            // 	this.requestChatData(parm);
            // }
        };
        // private requestChatData(parm: any) {
        // 	var url = `${((window as any).config && (window as any).config.ssl) ? 'https' : 'http'}://h5chat.api.tanwan.com/index.php`;
        // 	var loader = new egret.HttpRequest();
        // 	loader.responseType = egret.HttpResponseType.TEXT;
        // 	loader.open(url, egret.HttpMethod.POST);
        // 	loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // 	loader.addEventListener(egret.Event.COMPLETE, this.onRequestComplete, this);
        // 	loader.send(parm);
        // }
        SdkTanwan.prototype.onRequestComplete = function (event) {
        };
        SdkTanwan.prototype.getChatType = function (type) {
            switch (type) {
                case "1": return "4"; //4世界消息类型：1私聊；2喇叭；3邮件；4世界；5国家；6工会/帮会；7队伍；8附近；9其他
                case "6": return "9";
                case "2": return "6";
                case "5": return "1";
            }
            return "";
        };
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
        SdkTanwan.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var obj = {};
            obj['buyNum'] = 1;
            obj['coin'] = 100;
            obj['game_id'] = this._appId;
            obj['server_id'] = serverId;
            obj['server_name'] = serverName;
            obj['uid'] = this._userId;
            obj['role_name'] = gameRoleName;
            obj['role_level'] = gameRoleLevel;
            obj['vip'] = gameRoleVip;
            obj['money'] = price;
            obj['game_gold'] = diamonds;
            obj['role_id'] = this._roleId;
            obj['product_id'] = productId;
            obj['product_name'] = productName;
            obj['product_desc'] = productDesc;
            obj['ext'] = productId;
            window.omgSDK.pay(obj);
        };
        return SdkTanwan;
    }(platform.SdkBase));
    platform.SdkTanwan = SdkTanwan;
    __reflect(SdkTanwan.prototype, "platform.SdkTanwan");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 途游
    //--------------------------------------------------
    var SdkTuYou = (function (_super) {
        __extends(SdkTuYou, _super);
        function SdkTuYou() {
            var _this = _super.call(this, platform.TY) || this;
            _this._channleId = 10033;
            return _this;
        }
        SdkTuYou.prototype.getScripts = function () {
            return ["https://downqn.tuyoo.com/h5sdk/v100/release/tuyoosdk_wxthirdshell_release_33300.js"];
        };
        SdkTuYou.prototype.start = function () {
            var _this = this;
            this.addButton();
            var general = {};
            window.TuyooSdk.OnInit('wxthirdshell.h5', general, function () {
                var params = platform.getUrlParams();
                _this._userId = _this._roleId = params.userID;
                _this._sign = params.sign;
                _this._ext = params.userName + '|' + params.purl;
                _this.end(null);
            }, this);
            return true;
        };
        SdkTuYou.prototype.addButton = function () {
            var _this = this;
            this.startPoint = new egret.Point();
            this.touchPoint = new egret.Point();
            this.container = new egret.DisplayObjectContainer();
            var moveIcon = new egret.Bitmap();
            var moveContianer = new egret.DisplayObjectContainer();
            moveContianer.touchEnabled = true;
            this.container.addChild(moveContianer);
            moveContianer.addChild(moveIcon);
            moveContianer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.buttonTouchHandler, this);
            var returnContianer = new egret.DisplayObjectContainer();
            returnContianer.touchEnabled = true;
            var returnIcon = new egret.Bitmap();
            this.container.addChild(returnContianer);
            returnContianer.addChild(returnIcon);
            returnIcon.x = 63;
            returnContianer.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                window.TuyooSdk.OnExit(false);
            }, this);
            this.stage = window.shell.layerManager.stage;
            window.shell.layerManager.sdk.addChild(this.container);
            this.container.x = this.stage.stageWidth - (63 * 2) - 40;
            this.container.y = 50;
            RES.getResByUrl('resource/xldrag.png', function (xldrag) {
                moveIcon.texture = xldrag;
                RES.getResByUrl('resource/xlretrun.png', function (xlretrun) {
                    returnIcon.texture = xlretrun;
                }, _this);
            }, this);
        };
        SdkTuYou.prototype.buttonTouchHandler = function (e) {
            switch (e.type) {
                case egret.TouchEvent.TOUCH_BEGIN:
                    if (this.container.stage) {
                        this.container.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.buttonTouchHandler, this);
                        this.container.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.buttonTouchHandler, this);
                        this.startPoint.setTo(this.container.x, this.container.y);
                        this.touchPoint.setTo(e.stageX, e.stageY);
                    }
                    break;
                case egret.TouchEvent.TOUCH_MOVE:
                    var tx = this.startPoint.x + (e.stageX - this.touchPoint.x);
                    var ty = this.startPoint.y + (e.stageY - this.touchPoint.y);
                    tx = Math.max(tx, 0);
                    ty = Math.max(ty, 0);
                    tx = Math.min(tx, this.stage.stageWidth - (63 * 2));
                    ty = Math.min(ty, this.stage.stageHeight - 42);
                    this.container.x = tx;
                    this.container.y = ty;
                    break;
                case egret.TouchEvent.TOUCH_END:
                    if (this.container.stage) {
                        this.container.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.buttonTouchHandler, this);
                        this.container.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.buttonTouchHandler, this);
                    }
                    if (Math.abs(this.startPoint.x - this.container.x) < 1 && Math.abs(this.startPoint.y - this.container.y) < 1) {
                        this.share();
                    }
                    break;
            }
        };
        //上报数据
        SdkTuYou.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    window.TuyooSdk.CreateRole();
                    break;
                case platform.DATA_ENTER_GAME:
                    break;
                case platform.DATA_LEVEL_UP:
                    break;
            }
        };
        SdkTuYou.prototype.share = function () {
            window.TuyooSdk.Share({ title: '魔域来了', desc: '一款XXX的游戏', imgUrl: '' });
        };
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
        SdkTuYou.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var ext = this._userId + "|" + serverId + "|" + gameRoleId + "|" + productId + "|" + productName + "|" + gameRoleName;
            alert('SDKTuYou-Pay appInfo:' + ext);
            window.TuyooSdk.Pay({
                prodId: platform.shopSetting.getShopId(this._type, productId, price),
                prodName: productName,
                prodPrice: price,
                prodOrderId: platform.generateUUID(),
                appInfo: ext //cp透穿参数，有就传，没有可以不穿，随后端返回
            }, function (status, paydata, error) {
                console.log("支付结果:", status, error, paydata);
            }, this);
        };
        return SdkTuYou;
    }(platform.SdkBase));
    platform.SdkTuYou = SdkTuYou;
    __reflect(SdkTuYou.prototype, "platform.SdkTuYou");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 1377sdk
    //--------------------------------------------------
    var SdkWanBa = (function (_super) {
        __extends(SdkWanBa, _super);
        function SdkWanBa() {
            var _this = _super.call(this, platform.WB) || this;
            _this._isQQlive = false;
            _this._webViewVisible = true;
            _this._focus = false;
            _this._verifyResult = false;
            _this._miniGameVIP = false;
            _this._wanbaWx = false;
            _this._isXinYue = false;
            _this._weiduanDownload = false;
            _this._wbQQbeijing = false;
            if (window.mqq.data.canIShow('favoritesToDesktop')) {
                _this._focusbonus = true;
            }
            if (window.mqq.data.canIShow('share')) {
                _this._sharebonus = true;
            }
            if (window.mqq.data.canIShow('miniGameVIP')) {
                _this._miniGameVIP = true;
            }
            if (window.OPEN_DATA.channel == 'SQ' && window.OPEN_DATA.qua.app == 'SQ') {
                window.mqq.app.isAppInstalled('com.tencent.qzweiduan48', function (result) {
                    this._weiduanDownload = result;
                });
            }
            window.__paySuccess = _this.onPaySuccess.bind(_this);
            window.__payError = _this.onPayError.bind(_this);
            window.__payClose = _this.onPayClose.bind(_this);
            //分享设置
            window.mqq.invoke('ui', 'setOnShareHandler', function (type) {
                if (type == 0 && window.OPEN_DATA.qua.app == 'SQ') {
                    window.mqq.ui.shareArkMessage(_this.getShareContent(type), _this.onShareSuccess.bind(_this));
                }
                else {
                    window.mqq.invoke('ui', 'shareMessage', _this.getShareContent(type), _this.onShareSuccess.bind(_this));
                }
            });
            //关注设置
            window.mqq.invoke('ui', 'setOnAddShortcutHandler', {
                callback: window.mqq.callback(function () {
                    var _this = this;
                    window.mqq.ui.addShortcut({
                        action: 'web',
                        title: '魔域来了',
                        icon: window.OPEN_DATA.appicon,
                        url: window.OPEN_DATA.jumpurl,
                        callback: function (ret) {
                            if (_this._focusCallBack)
                                _this._focusCallBack.call(_this._focusthisObject);
                        }
                    });
                }, false, true)
            });
            window.mqq.addEventListener("qbrowserVisibilityChange", function (e) {
                console.log("玩吧hidden~~" + !e.hidden);
                _this._webViewVisible = !e.hidden;
                if (_this._webViewChangeMethod)
                    _this._webViewChangeMethod.call(_this._webViewChangeCaller);
                //mqq.ui.pageVisibility		查询页面的可见性
            });
            return _this;
            //this._channleId = 10019;
        }
        SdkWanBa.prototype.getScripts = function () {
            return [((window.config && window.config.ssl) ? 'https' : 'http') + "://cdn-public.8zy.com/js/mxzsdk.js"];
        };
        /**支付成功执行 */
        SdkWanBa.prototype.onPaySuccess = function () {
            window.getOpenKey(this.updateOpenKey.bind(this));
            alert("支付成功");
        };
        /**支付失败执行 */
        SdkWanBa.prototype.onPayError = function () {
            alert("支付错误");
        };
        /**关闭对话框执行,IOS下无效 */
        SdkWanBa.prototype.onPayClose = function () {
            alert("支付取消");
        };
        SdkWanBa.prototype.getShareContent = function (type) {
            var titleList = ["8个好友正在玩，直接感受一人三兽并肩PK的畅爽快感",
                "《魔域来了》会让所有心中有“怀旧之情”的玩家们感受到自己又回到了亚特大陆以及青春时最纯真的快乐！",
                "颠覆传统游戏单英雄的战斗体验，感受一人三兽并肩PK的畅爽快感。",
                "当年是否为没拥有一只百星幻兽而后悔，再来一次机会，是否能抓住！",
                "勇士，快来带领三兽，征战亚特大陆！"
            ];
            return {
                title: titleList[Math.floor(Math.random() * titleList.length)],
                desc: '魔域来了重磅来袭！',
                share_type: type,
                share_url: window.OPEN_DATA.shareurl,
                image_url: window.OPEN_DATA.appicon,
                bk_url: "https://cdn0.myh5.90wmoyu.com/shell/share/share_wb.png",
                back: true
            };
        };
        /** 显示关注二维码 */
        SdkWanBa.prototype.showFocus = function (caller, method) {
            var _this = this;
            this._focusCallBack = method;
            this._focusthisObject = caller;
            window.mqq.ui.addShortcut({
                action: 'web',
                title: '魔域来了',
                icon: window.OPEN_DATA.appicon,
                url: window.OPEN_DATA.jumpurl,
                callback: function (ret) {
                    _this._focusCallBack.call(_this._focusthisObject);
                }
            });
            if (this._platform == 2) {
                this._focusCallBack.call(this._focusthisObject);
            }
        };
        SdkWanBa.prototype.onShareSuccess = function (data) {
            if (data && data.retCode == 0) {
                alert('分享成功');
                if (this._shareCallBack)
                    this._shareCallBack.call(this._shareCaller);
            }
            else {
                alert('分享取消');
            }
        };
        /**显示分享引导 */
        SdkWanBa.prototype.showShare = function (caller, method) {
            this._shareCaller = caller;
            this._shareCallBack = method;
            if (egret.Capabilities.isMobile) {
                if (this._isQQlive) {
                    window.mqq.ui.showShareMenu(this.getShareContent("QQLive"), this.onShareSuccess.bind(this));
                }
                else {
                    window.mqq.ui.showShareMenu();
                }
            }
            else {
                window.mqq.ui.shareMessage(this.getShareContent(1), this.onShareSuccess.bind(this));
            }
        };
        /**显示分享引导 */
        SdkWanBa.prototype.setupShare = function (caller, method) {
            this._shareCallBack = method;
            this._shareCaller = caller;
        };
        /**红包活动 */
        SdkWanBa.prototype.redPacketReport = function (reportData, ifComplete) {
            this._ifComplete = ifComplete;
            var parm = "openid=" + this._roleId + "&openkey=" + this._openkey + "&appid=" + this._appId + "&pf=" + this._ext + "&format=json&type=" + reportData.type + "&num=" + reportData.num + "&op=" + 2 + "&extid=" + 1;
            var requrl = "https://" + window.config.ip + "/platform_wb/redPacketReport.php?" + parm;
            var loader = new egret.HttpRequest();
            loader.responseType = egret.HttpResponseType.TEXT;
            loader.open(requrl, egret.HttpMethod.GET);
            loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            loader.addEventListener(egret.Event.COMPLETE, this.onRedPacketRequestDataComplete, this);
            loader.send();
        };
        SdkWanBa.prototype.onRedPacketRequestDataComplete = function (event) {
            var request = event.currentTarget;
            var params = JSON.parse(request.response);
            console.log(params);
            egret.setTimeout(function () {
                try {
                    if (this._ifComplete) {
                        window.redPacketTaskReport(function (result) { console.log(result); });
                    }
                }
                catch (e) {
                }
            }, this, 5000);
        };
        SdkWanBa.prototype.start = function () {
            window.getOpenKey(this.callback.bind(this));
            return true;
        };
        SdkWanBa.prototype.callback = function (tokenObj) {
            var giftidData = platform.getUrlParams();
            var params = window.window.OPEN_DATA;
            this._platform = params.platform;
            this._pf = params.pf;
            this._openkey = params.openkey;
            this._channleId = (params.loginType == 'openlogin') ? 'qq' : params.loginType + params.platform;
            this._via = params.via;
            this._appurl = params.appurl;
            this._shareurl = params.shareurl;
            this._appicon = params.appicon;
            this._jumpurl = params.jumpurl;
            this._qua = params.qua;
            this._os = params.platform;
            this._roleId = this._userId = params.openid;
            this._appId = params.appid;
            this._token = params.openkey;
            this._ext = params.pf;
            this._wanbachannel = params.channel;
            if (params.pf == "weixin.114" || params.pf == "wanba_ts.113") {
                this._isXinYue = true;
            }
            if (giftidData.GIFT) {
                this._giftid = parseInt(giftidData.GIFT);
            }
            if (this._qua.app == "WX") {
                this._wanbaWx = true;
                this._sharebonus = true;
            }
            if (this._qua.app == "QQLive") {
                this._isQQlive = true;
            }
            if (window.OPEN_DATA.channel == 'SQ' && window.OPEN_DATA.qua.app == 'SQ') {
                this.getQQBeiJing();
            }
            //this._isFollowingAccount=params.isFollowingAccount;
            this.end.call(this, tokenObj);
            //window.appInBackground -- Boolean 当前页面是否在后台true -- Boolean 后台运行false -- Boolean 前台运行
        };
        SdkWanBa.prototype.getDataType = function (type) {
            switch (type) {
                case platform.DATA_SELECT_SERVER: return 1;
                case platform.DATA_CREATE_ROLE: return 2;
                case platform.DATA_ENTER_GAME: return 3;
                case platform.DATA_LEVEL_UP: return 4;
                case platform.DATA_QUIT_GAME: return 5;
                case platform.DATA_PAY: return 6;
                case platform.DATA_CHAT: return 7;
            }
            return 0;
        };
        //上报数据
        SdkWanBa.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    window.reportRegister();
                    var parm = "/" + this.appId + "/" + this._ext + "/" + this._roleId;
                    this.requestData(parm, "regchar");
                    break;
                case platform.DATA_ENTER_GAME:
                    window.reportLogin();
                    var parm = "/" + this.appId + "/" + this._ext + "/" + this._roleId + "/" + this._via;
                    this.requestData(parm, "login");
                    break;
                case platform.DATA_QUIT_GAME:
                    window.reportLogin();
                    var parm = "/" + this.appId + "/" + this._ext + "/" + this._roleId + "/" + 0;
                    this.requestData(parm, "logout");
                    break;
                case platform.DATA_LEVEL_UP:
                    if (this._pf == "wanba_ts.105") {
                        var gameResultData = {
                            "infoList": [
                                {
                                    "type": 22,
                                    "op": 1,
                                    "num": 1,
                                }
                            ]
                        };
                        try {
                            window.BK.QQ.reportGameResult(gameResultData, function (errCode, cmd, data) {
                                if (errCode != 0) {
                                    //alert('上报运营结果失败' + errCode + cmd + data)
                                }
                                else {
                                    //alert('上报运营结果成功' + errCode + cmd + data)
                                }
                            });
                            var gameLevelData = {
                                "infoList": [
                                    {
                                        "type": 1,
                                        "op": 2,
                                        "num": gameRoleLevel,
                                    }
                                ]
                            };
                            window.BK.QQ.reportGameResult(gameLevelData, function (errCode, cmd, data) {
                                if (errCode != 0) {
                                    //alert('上报运营结果失败' + errCode + cmd + data)
                                }
                                else {
                                    //alert('上报运营结果成功' + errCode + cmd + data)
                                }
                            });
                        }
                        catch (e) {
                            alert(e);
                        }
                    }
                    break;
            }
        };
        //上报
        SdkWanBa.prototype.requestData = function (parm, type) {
            var url;
            switch (type) {
                case "regchar":
                    url = "https://report.8zy.com/report/regchar";
                    break;
                case "pay":
                    url = "https://report.8zy.com/report/pay";
                    break;
                case "login":
                    url = "https://report.8zy.com/report/login";
                    break;
                case "logout":
                    url = "https://report.8zy.com/report/logout";
                    break;
            }
            url = url + parm;
            var loader = new egret.HttpRequest();
            loader.responseType = egret.HttpResponseType.TEXT;
            loader.open(url, egret.HttpMethod.GET);
            loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            loader.addEventListener(egret.Event.COMPLETE, this.onRequestDataComplete, this);
            loader.send();
        };
        SdkWanBa.prototype.onRequestDataComplete = function (event) {
        };
        SdkWanBa.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            this._price = price;
            this._billno = platform.generateUUID();
            this._itemid = productId;
            this._count = buyCount;
            this._sid = serverId;
            this._paytime = time;
            this._platformItemid = platform.shopSetting.getShopId(this._type, productId, price, this._os == 2);
            window.getOpenKey(this.updateOpenKey.bind(this));
        };
        SdkWanBa.prototype.updateOpenKey = function (tokenObj) {
            this._openkey = tokenObj.data.openkey;
            this.userinfo();
        };
        //查询星币是否足够
        SdkWanBa.prototype.userinfo = function () {
            var parm = "openid=" + this._roleId + "&zoneid=" + this._os + "&openkey=" + this._openkey + "&appid=" + this._appId + "&pf=" + this._ext + "&format=json";
            var url;
            url = "https://" + window.config.ip + "/platform_wb/getPlayzoneUserinfo.php?" + parm;
            var loader = new egret.HttpRequest();
            loader.responseType = egret.HttpResponseType.TEXT;
            loader.open(url, egret.HttpMethod.GET);
            loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            loader.addEventListener(egret.Event.COMPLETE, this.onRequestComplete, this);
            loader.send();
        };
        SdkWanBa.prototype.onRequestComplete = function (event) {
            var request = event.currentTarget;
            var params = JSON.parse(request.response);
            if (params && params.data) {
                if (params.data[0].score >= (this._price * 10)) {
                    this.buyItem();
                }
                else {
                    console.log(params.data[0].score + "===星币");
                    //充值星币
                    window.popPayTips({
                        version: 'v2',
                        defaultScore: this._price * 10,
                        appid: this._appId
                    });
                }
            }
        };
        //星币兑换游戏道具
        SdkWanBa.prototype.buyItem = function () {
            var sign = window['md5'](this.roleId + this._price + this._sid + "Mr2daw4deDI2WEpd");
            var parm = "billno=" + this._billno + "&openid=" + this._roleId + "&zoneid=" + this._os + "&openkey=" + this._openkey + "&appid=" + this._appId + "&itemid=" + this._platformItemid + "&count=" + this._count + "&pf=" + this._ext + "&format=json&uid=" + this.roleId + "&orderId=" + this._billno + "&money=" + this._price + "&sid=" + this._sid + "&time=" + this._paytime + "&sign=" + sign + "&productId=" + this._itemid + "&channel=" + this._channleId + "&via=" + this._via;
            var url;
            url = "https://" + window.config.ip + "/platform_wb/buyPlayzoneItem.php?" + parm;
            var loader = new egret.HttpRequest();
            loader.responseType = egret.HttpResponseType.TEXT;
            loader.open(url, egret.HttpMethod.GET);
            loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            loader.addEventListener(egret.Event.COMPLETE, this.onBuyItemComplete, this);
            loader.send();
        };
        SdkWanBa.prototype.onBuyItemComplete = function (event) {
            var request = event.currentTarget;
            if (request.response == "ok") {
                //齐永庆修改充值上报放php
                // var parm = "/" + this.appId + "/" + this._ext + "/" + this._roleId + "/" + this._price + "/" + 0 + "/" + this._via;
                // this.requestData(parm, "pay");
                if (this._pf == "wanba_ts.105") {
                    var gameResultData = {
                        "infoList": [
                            {
                                "type": 33,
                                "op": 1,
                                "num": 1,
                            }
                        ]
                    };
                    window.BK.QQ.reportGameResult(gameResultData, function (errCode, cmd, data) {
                        if (errCode != 0) {
                            //alert('上报运营结果失败' + errCode + cmd + data)
                        }
                        else {
                            //alert('上报运营结果成功' + errCode + cmd + data)
                        }
                    });
                }
                alert("购买成功");
            }
            else {
                alert("购买失败请重试");
            }
        };
        SdkWanBa.prototype.onWebViewVisibleChange = function (caller, method) {
            this._webViewChangeCaller = caller;
            this._webViewChangeMethod = method;
        };
        SdkWanBa.prototype.getWebViewVisible = function () {
            return this._webViewVisible;
        };
        //玩吧qq背景
        SdkWanBa.prototype.getQQBeiJing = function () {
            var parm = "openid=" + this._roleId + "&openkey=" + this._openkey + "&appid=" + this._appId + "&pf=" + this._ext + "&format=json";
            var url;
            url = "https://" + window.config.ip + "/platform_wb/getQQBeiJing.php?" + parm;
            var loader = new egret.HttpRequest();
            loader.responseType = egret.HttpResponseType.TEXT;
            loader.open(url, egret.HttpMethod.GET);
            loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            loader.addEventListener(egret.Event.COMPLETE, this.onRequestQQBeiJingComplete, this);
            loader.send();
        };
        SdkWanBa.prototype.onRequestQQBeiJingComplete = function (event) {
            var request = event.currentTarget;
            var params = JSON.parse(request.response);
            if (params && params.data) {
                this._wbQQbeijing = params.data.isUsed;
            }
        };
        return SdkWanBa;
    }(platform.SdkBase));
    platform.SdkWanBa = SdkWanBa;
    __reflect(SdkWanBa.prototype, "platform.SdkWanBa");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 悟饭sdk
    //--------------------------------------------------
    var SdkWuFan = (function (_super) {
        __extends(SdkWuFan, _super);
        function SdkWuFan() {
            var _this = _super.call(this, platform.WF) || this;
            _this._channleId = 10015;
            _this._appId = "16001797";
            return _this;
        }
        SdkWuFan.prototype.getScripts = function () {
            return ["https://sdk.5fun.cn/static/ios_h5_sdk/wufanh5sdk.js"];
        };
        SdkWuFan.prototype.start = function () {
            if (!window.WuFan)
                return false;
            window.WuFan.config({ appkey: this._appId, gameUrl: "https://cdn0.myh5.90wmoyu.com/index.wf.html", notifyUrl: "http://pay.90wmoyu.com/platform_wf/pay_wf.php" });
            window.WuFan.login(this.callback, this);
            return true;
        };
        SdkWuFan.prototype.callback = function (tokenObj) {
            console.log(tokenObj);
            //(window as any).WuFan.playGame();
            //do something
            window.WuFan.buoy();
            window.WuFan.desktop();
            this._token = tokenObj.token;
            this._roleId = this._userId = tokenObj.uid;
            this.end.call(this, tokenObj);
        };
        SdkWuFan.prototype.getDataType = function (type) {
            switch (type) {
                case platform.DATA_SELECT_SERVER: return 1;
                case platform.DATA_CREATE_ROLE: return 2;
                case platform.DATA_ENTER_GAME: return 3;
                case platform.DATA_LEVEL_UP: return 4;
                case platform.DATA_QUIT_GAME: return 5;
                case platform.DATA_PAY: return 6;
            }
            return 0;
        };
        //上报数据
        SdkWuFan.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    var obj = {};
                    obj['role_name'] = gameRoleName;
                    obj['app_district'] = serverId;
                    obj['app_server'] = serverId;
                    window.WuFan.createRole(obj);
            }
        };
        /**
        * 充值
        * @param server_id 游戏服ID
        * @param product_id	产品ID
        * @param product_name	产品名
        * @param product_price	元
        */
        SdkWuFan.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var obj = {};
            obj['product_id'] = productId;
            obj['product_name'] = productName;
            obj['app_order_id'] = platform.generateUUID();
            obj['pay_amount'] = price;
            obj['role_id'] = this.roleId;
            obj['role_name'] = gameRoleName;
            obj['app_name'] = "魔域H5";
            obj['app_extra1'] = 0;
            obj['app_extra2'] = 0;
            obj['app_district'] = serverId;
            obj['app_server'] = serverId;
            obj['sign'] = this.sign;
            // (window as any).WuFan.pay(obj, this.payCallback, "返回游戏");
        };
        SdkWuFan.prototype.payCallback = function () {
        };
        return SdkWuFan;
    }(platform.SdkBase));
    platform.SdkWuFan = SdkWuFan;
    __reflect(SdkWuFan.prototype, "platform.SdkWuFan");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 闲来
    //--------------------------------------------------
    var SdkXianLai = (function (_super) {
        __extends(SdkXianLai, _super);
        function SdkXianLai() {
            var _this = _super.call(this, platform.XL) || this;
            _this._channleId = 10031;
            return _this;
        }
        SdkXianLai.prototype.getScripts = function () {
            return ["https://download.xianlaivip.com/h5gamesdk/xlh5sdk-0.0.8.js"];
        };
        //{
        //  errCode: 0,
        //  errDesc: "",
        //  data: {
        //         "openId": "123456",
        //         "nickName": "andy",
        //         "sex": 1,
        //         "headImgUrl": "http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/0"
        //     }
        // }
        SdkXianLai.prototype.start = function () {
            var _this = this;
            window.XLH5SDK.init();
            this.addButton();
            var params = platform.getUrlParams();
            this._userId = this._roleId = params.openId;
            this._accessToken = params.accessToken;
            this._time = params.timestamp;
            this._sign = params.sign;
            this._ext = window.location.href.substr(window.location.href.indexOf("?") + 1).replace(/&/g, ' ');
            (window.eventDispatcher) = this.eventHandler.bind(this);
            window.addEventListener('XLH5SDKbackground', function () {
                _this.stage.dispatchEventWith(egret.Event.DEACTIVATE);
            });
            window.addEventListener('XLH5SDKforeground', function () {
                _this.stage.dispatchEventWith(egret.Event.ACTIVATE);
            });
            window.addEventListener('XLH5SDKdiamondchanged', function () {
                _this.dispatchEventWith('paySuccess');
            });
            this.end(null);
            // new HttpLoader().request(getPhpPath('getUserInfo') + '?openId=' + params.openId + '&accessToken=' + this._accessToken, this, (str: string) => {
            //     var data = JSON.parse(str);
            //     if (data && data.errCode == 0) {
            //         this._userId = this._roleId = data.openId;
            //         this._roleName = data.nickName;s
            //         this._time = (new Date().getSeconds()).toString();
            //         this.end(null);
            //     } else {
            //         console.error(data.err_msg);
            //     }
            // }, egret.URLRequestMethod.GET);
            return true;
        };
        SdkXianLai.prototype.eventHandler = function (type) {
            switch (type) {
                case 'XLH5SDKbackground':
                    this.stage.dispatchEventWith(egret.Event.DEACTIVATE);
                    break;
                case 'XLH5SDKforeground':
                    this.stage.dispatchEventWith(egret.Event.ACTIVATE);
                    break;
                case 'XLH5SDKdiamondchanged':
                    this.dispatchEventWith('paySuccess');
                    break;
                case 'testEvent':
                    alert('testEvent');
                    break;
            }
        };
        SdkXianLai.prototype.addButton = function () {
            var _this = this;
            this.startPoint = new egret.Point();
            this.touchPoint = new egret.Point();
            this.xlContainer = new egret.DisplayObjectContainer();
            var moveIcon = new egret.Bitmap();
            var moveContianer = new egret.DisplayObjectContainer();
            moveContianer.touchEnabled = true;
            this.xlContainer.addChild(moveContianer);
            moveContianer.addChild(moveIcon);
            moveContianer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.buttonTouchHandler, this);
            var returnContianer = new egret.DisplayObjectContainer();
            returnContianer.touchEnabled = true;
            var returnIcon = new egret.Bitmap();
            this.xlContainer.addChild(returnContianer);
            returnContianer.addChild(returnIcon);
            returnIcon.x = 63;
            returnContianer.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                window.XLH5SDK.closeWebView();
            }, this);
            this.stage = window.shell.layerManager.stage;
            window.shell.layerManager.sdk.addChild(this.xlContainer);
            this.xlContainer.x = this.stage.stageWidth - (63 * 2) - 40;
            this.xlContainer.y = 50;
            RES.getResByUrl('resource/xldrag.png', function (xldrag) {
                moveIcon.texture = xldrag;
                RES.getResByUrl('resource/xlretrun.png', function (xlretrun) {
                    returnIcon.texture = xlretrun;
                }, _this);
            }, this);
        };
        SdkXianLai.prototype.buttonTouchHandler = function (e) {
            switch (e.type) {
                case egret.TouchEvent.TOUCH_BEGIN:
                    if (this.xlContainer.stage) {
                        this.xlContainer.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.buttonTouchHandler, this);
                        this.xlContainer.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.buttonTouchHandler, this);
                        this.startPoint.setTo(this.xlContainer.x, this.xlContainer.y);
                        this.touchPoint.setTo(e.stageX, e.stageY);
                    }
                    break;
                case egret.TouchEvent.TOUCH_MOVE:
                    var tx = this.startPoint.x + (e.stageX - this.touchPoint.x);
                    var ty = this.startPoint.y + (e.stageY - this.touchPoint.y);
                    tx = Math.max(tx, 0);
                    ty = Math.max(ty, 0);
                    tx = Math.min(tx, this.stage.stageWidth - (63 * 2));
                    ty = Math.min(ty, this.stage.stageHeight - 42);
                    this.xlContainer.x = tx;
                    this.xlContainer.y = ty;
                    break;
                case egret.TouchEvent.TOUCH_END:
                    if (this.xlContainer.stage) {
                        this.xlContainer.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.buttonTouchHandler, this);
                        this.xlContainer.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.buttonTouchHandler, this);
                    }
                    break;
            }
        };
        //上报数据
        SdkXianLai.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    break;
                case platform.DATA_ENTER_GAME:
                    break;
                case platform.DATA_LEVEL_UP:
                    // if (gameRoleLevel == 30) {
                    //     this.reportXLActivity();
                    // }
                    break;
            }
        };
        SdkXianLai.prototype.reportXLActivity = function () {
            new platform.HttpLoader().request(platform.getPhpPath('reportActivity') + '?openId=' + this._roleId, this, function (str) {
                var data = JSON.parse(str);
                if (data && data.errCode == 0) {
                    console.log('报告数据成功!');
                }
                else {
                    console.error(data.err_msg);
                }
            }, egret.URLRequestMethod.GET);
        };
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
        SdkXianLai.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var _this = this;
            var params = {};
            params.openId = this._userId;
            params.body = productName;
            params.outTradeNo = platform.generateUUID();
            params.totalFee = price * 10;
            params.notifyUrl = platform.getPhpPath('pay_xl');
            params.feeType = 1; //1钻石 2RMB
            params.attach = params.outTradeNo + "_" + this._userId + "_" + serverId + "_" + params.totalFee + "_" + productId + "_" + productName + "_" + gameRoleName;
            (new platform.HttpLoader()).request(platform.getPhpPath('createOrder'), this, function (str) {
                var data = JSON.parse(str);
                if (data && data.errCode == 0) {
                    window.XLH5SDK.payInDiamond(data.data, function (result) {
                        if (result.status == 0) {
                            egret.log('支付成功!');
                            _this.dispatchEventWith('paySuccess');
                        }
                        else {
                            egret.warn('支付异常!');
                            alert('支付异常!');
                        }
                    });
                }
                else {
                    alert(data.errDesc);
                }
            }, egret.URLRequestMethod.POST, new egret.URLVariables(platform.formatUrlParams(params)));
        };
        /**获取钻石总数 */
        SdkXianLai.prototype.getStoreDiamonds = function (caller, method) {
            var _this = this;
            window.XLH5SDK.getDiamondNum(function (data) {
                if (data.status == 0) {
                    _this._totalDamends = data.diamondNum;
                    method.call(caller, data.diamondNum);
                }
            });
        };
        Object.defineProperty(SdkXianLai.prototype, "totalDamends", {
            /**钻石数量 */
            get: function () {
                return this._totalDamends;
            },
            enumerable: true,
            configurable: true
        });
        return SdkXianLai;
    }(platform.SdkBase));
    platform.SdkXianLai = SdkXianLai;
    __reflect(SdkXianLai.prototype, "platform.SdkXianLai");
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 益游sdk
    //--------------------------------------------------
    var SdkYiYo = (function (_super) {
        __extends(SdkYiYo, _super);
        function SdkYiYo() {
            var _this = _super.call(this, platform.YIYO) || this;
            _this._channleId = 10029;
            _this._appkey = '57f095450db2fe488b5ff0b6247b6f67';
            _this._app_secret = 'a6682dc258dbe3c1ab0e7d8d4dfb6d3c';
            return _this;
        }
        SdkYiYo.prototype.getScripts = function () {
            return ["http://h5.h5youyou.com/assets/v0.1.0/sdk.js"];
        };
        SdkYiYo.prototype.start = function () {
            var params = platform.getUrlParams();
            this._userId = this._roleId = params.userid.toString(); //int	平台账号id (用于初始化sdk中的account的值	是
            this._roleName = params.username; //string	平台账号名	是
            this._isAdult = params.isAdult == 1; //int	 用于防沉迷，0为未填写实名信息，1为已成年，2为未成年	
            this._time = params.time; //int	unix时间戳，精确到秒（10位数字）	是
            this._sign = params.sign; //string	md5(userid+username+vaildCode+time+isAdult+app_secret)
            //按照平台提供的sign去服务端验证，需要把vaildCode,isAdult都带到服务端，太麻烦,所以这里的sign验证改我们自己定义的token验证:userid+time+appkey+app_secret;
            this._token = md5(this._userId + '' + this._time + '' + this._appkey + '' + this._app_secret);
            window.H5youyouSDK.Init({
                "account": this._userId,
                "appkey": this._appkey,
                "vaildCode": params.vaildCode
            });
            this.end(null);
            return true;
        };
        //上报数据
        SdkYiYo.prototype.submitExtraData = function (dataType, appid, //游戏appid
            serverId, serverName, //区服名
            gameRoleUid, gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            var dataName = this.getDataName(dataType);
            switch (dataName) {
                case platform.DATA_ENTER_GAME:
                    window.H5youyouSDK.RoleInfo({
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
        };
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
        SdkYiYo.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
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
            var cporder = platform.generateUUID();
            var ext = productId.toString();
            var param = "cporder=" + cporder + "&userId=" + this._userId + "&serverId=" + serverId + "&roleId=" + gameRoleId + "&price=" + price + "&productId=" + productId + "&appkey=" + this._appkey + "&time=" + time + "&ext=" + ext;
            var url = platform.getPhpPath('createOrder');
            new platform.HttpLoader().request(url + '?' + param, this, function (str) {
                var data = JSON.parse(str);
                if (data.status == 1) {
                    window.H5youyouSDK.Pay({
                        "safeCode": data.code
                    });
                }
                else {
                    egret.error(str);
                }
            }, egret.URLRequestMethod.GET);
        };
        return SdkYiYo;
    }(platform.SdkBase));
    platform.SdkYiYo = SdkYiYo;
    __reflect(SdkYiYo.prototype, "platform.SdkYiYo");
})(platform || (platform = {}));
var platform;
(function (platform) {
    var ShopSetting = (function () {
        function ShopSetting() {
        }
        ShopSetting.prototype.hasMapping = function (type) {
            return !!this._mapping[type];
        };
        ShopSetting.prototype.getMappingName = function (type, isIOS) {
            if (isIOS === void 0) { isIOS = false; }
            return this._mapping[type] ? (isIOS ? this._mapping[type].ios : this._mapping[type].android) : "";
        };
        ShopSetting.prototype.getShopId = function (type, productId, price, isIOS) {
            if (price === void 0) { price = 0; }
            if (isIOS === void 0) { isIOS = false; }
            var mappingName = this.getMappingName(type, isIOS);
            if (!mappingName)
                return productId;
            for (var _i = 0, _a = this._list; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.id == productId) {
                    if (!item.isShouChong)
                        return item[mappingName] ? item[mappingName] : productId;
                    for (var _b = 0, _c = this._list; _b < _c.length; _b++) {
                        var item1 = _c[_b];
                        if (item1.isShouChong) {
                            var content = item1[mappingName];
                            if (content) {
                                var array = content.split(';');
                                for (var _d = 0, array_1 = array; _d < array_1.length; _d++) {
                                    var item2 = array_1[_d];
                                    var array2 = item2.split(':');
                                    if (parseFloat(array2[0]) == price) {
                                        return array2[1];
                                    }
                                }
                            }
                        }
                    }
                    break;
                }
            }
            return productId;
        };
        ShopSetting.prototype.initializeMapping = function (type, caller, method) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    this._mapping = {};
                    this._mapping[platform.NN_H5] = { android: 'nn_normal', ios: '' };
                    this._mapping[platform.NN_ZF_H5] = { android: 'nn_normal', ios: '' };
                    this._mapping[platform.NN_ANDROID] = { android: 'nn_normal', ios: '' };
                    this._mapping[platform.NN_ZF] = { android: 'nn_normal', ios: '' };
                    this._mapping[platform.NN_IOS] = { android: '', ios: 'nn_normal' };
                    this._mapping[platform.JLHW] = { android: 'hw_android', ios: 'hw_ios' };
                    this._mapping[platform.DJSHP] = { android: 'djs_normal', ios: '' };
                    this._mapping[platform.DJSHPS] = { android: 'djs_normal', ios: '' };
                    this._mapping[platform.AWY] = { android: 'awy_normal', ios: '' };
                    this._mapping[platform.WB] = { android: 'wb_android', ios: 'wb_ios' };
                    this._mapping[platform.TY] = { android: 'ty_normal', ios: '' };
                    this._mapping[platform.JLJHIOS] = { android: '', ios: 'jljhios' };
                    this._mapping[platform.MSUWP] = { android: 'uwp', ios: 'uwp' };
                    this._mapping[platform.MS] = { android: 'h5', ios: 'h5' };
                    if (!this.hasMapping(type)) {
                        if (method)
                            method.call(caller);
                        return [2 /*return*/, Promise.resolve()];
                    }
                    return [2 /*return*/, new Promise(function (reslove, reject) {
                            (new platform.HttpLoader()).request(window.config.resource_shell + '/shopsdk.json?' + window.config.vershell, _this, function (data) {
                                _this._list = JSON.parse(data);
                                if (method)
                                    method.call(caller);
                                reslove();
                            }, egret.URLRequestMethod.GET);
                        })];
                });
            });
        };
        return ShopSetting;
    }());
    platform.ShopSetting = ShopSetting;
    __reflect(ShopSetting.prototype, "platform.ShopSetting");
    platform.shopSetting = new ShopSetting();
})(platform || (platform = {}));
var platform;
(function (platform) {
    //--------------------------------------------------
    // 恺英手游sdk
    //--------------------------------------------------
    var SdkKaiYingMG = (function (_super) {
        __extends(SdkKaiYingMG, _super);
        function SdkKaiYingMG() {
            var _this = _super.call(this, platform.MG) || this;
            _this._channleId = 10009;
            _this._sign = 'be03027faeadffc4924af9fe5758f541';
            return _this;
        }
        SdkKaiYingMG.prototype.getJobById = function (id) {
            switch (id) {
                case 1:
                    return "战士";
                case 2:
                    return "法师";
                case 3:
                    return "异能";
            }
            return "";
        };
        SdkKaiYingMG.prototype.getDataType = function (type) {
            switch (type) {
                //选择服务器
                case platform.DATA_SELECT_SERVER: return 1;
                //创角成功
                case platform.DATA_CREATE_ROLE: return 2;
                //进入游戏
                case platform.DATA_ENTER_GAME: return 3;
                //角色升级
                case platform.DATA_LEVEL_UP: return 4;
                //退出游戏
                case platform.DATA_QUIT_GAME: return 5;
                //充值
                case platform.DATA_PAY: return 6;
                //聊天
                case platform.DATA_CHAT: return 7;
                //进入创角界面
                case platform.DATA_CREATE_ROLE_ENTER: return 8;
                //点击创角按钮
                case platform.DATA_CREATE_ROLE_CLICK: return 9;
            }
            return 0;
        };
        SdkKaiYingMG.prototype.start = function () {
            var params = platform.getUrlParams();
            this._userId = params.uid; //平台用户ID
            this._roleId = params.uid; //平台用户ID
            this._time = params.rtime; //登录时间
            this._appId = params.appid;
            this._token = params.token; //
            this.end(params);
            return true;
        };
        //上报数据
        SdkKaiYingMG.prototype.submitExtraData = function (dataType, //上报类型
            appid, //游戏appid
            serverId, //区服Id
            serverName, //区服名
            gameRoleUid, //游戏角色Id（某些情况下为空）
            gameRoleName, //角色名
            gameRoleLevel, //角色等级
            diamonds, //角色元宝数
            time, //请求时间戳，精确到秒即可
            content, //聊天内容
            chattype, //聊天类型
            job, //职业
            gameRoleVipLevel, //游戏中玩家的vip等级
            zhuanshenLevel //游戏中玩家的vip等级
        ) {
            try {
                var paramstr = "appid=" + appid + "&chat_type=" + chattype + "&content=" + content + "&data_type=" + dataType + "&device_type=" + egret.Capabilities.os + "&diamonds=" + diamonds + "&job=" + job + "&level=" + gameRoleLevel + "&role_id=" + gameRoleUid + "&role_name=" + gameRoleName + "&server_id=" + serverId + "&server_name=" + serverName + "&time=" + time + "&uid=" + this._roleId;
                var sign = window['md5']("lkdjfgiDFGKEcvaice83" + paramstr);
                var url = "https://adapi.mg3721.com/service/gameData?" + paramstr + "&sign=" + sign;
                var loader = new egret.HttpRequest();
                loader.open(url, egret.HttpMethod.POST);
                loader.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                loader.send();
            }
            catch (e) {
                console.error("捕获到异常:", e);
            }
            var dataName = this.getDataName(dataType);
            var obj = {};
            switch (dataName) {
                case platform.DATA_CREATE_ROLE:
                    obj['role'] = this._roleId;
                    obj['roleName'] = gameRoleName;
                    obj['server'] = serverId;
                    try {
                        if (this._appId == "52") {
                            js.MGSDKCreateRole(JSON.stringify(obj));
                        }
                        else if (this._appId == "112" || this._appId == "117" || this._appId == "121" || this._appId == "122" || this._appId == "123" || this._appId == "124" || this._appId == "125") {
                            (window.webkit.messageHandlers.MGSDKCreateRole.postMessage(JSON.stringify(obj)));
                        }
                    }
                    catch (e) {
                        console.error("捕获到异常:", e);
                    }
                    break;
                case platform.DATA_ENTER_GAME:
                    var jobName = this.getJobById(job);
                    obj['role'] = this._roleId;
                    obj['roleName'] = gameRoleName;
                    obj['server'] = serverId;
                    obj['level'] = gameRoleLevel;
                    obj['occupation'] = jobName;
                    try {
                        if (this._appId == "52") {
                            js.MGSDKRoleLogin(JSON.stringify(obj));
                        }
                        else if (this._appId == "112" || this._appId == "117" || this._appId == "121" || this._appId == "122" || this._appId == "123" || this._appId == "124" || this._appId == "125") {
                            (window.webkit.messageHandlers.MGSDKRoleLogin.postMessage(JSON.stringify(obj)));
                        }
                    }
                    catch (e) {
                        console.error("捕获到异常:", e);
                    }
                    break;
            }
        };
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
        SdkKaiYingMG.prototype.openCharge = function (serverId, //玩家所在服务器的ID
            serverName, //玩家所在服务器的名称
            gameRoleId, //玩家角色ID
            gameRoleName, //玩家角色名称
            gameRoleLevel, //玩家角色等级
            gameRoleVip, //游戏中玩家的vip等级
            price, //充值金额(单位：分)
            diamonds, //玩家当前身上剩余的游戏币
            buyCount, //购买数量，一般都是1
            productId, //充值商品ID，游戏内的商品ID
            productName, //商品名称，比如100元宝，500钻石...
            productDesc, //商品描述，比如 充值100元宝，赠送20元宝
            extension, //会在支付成功后原样通知到你们回调地址上，长度尽量控制在100以内
            time //请求时间戳，精确到秒即可
        ) {
            var obj = {};
            obj['openUID'] = this._userId;
            obj['amount'] = price;
            obj['appName'] = "MG";
            obj['appOrderID'] = productId;
            obj['appUserID'] = this._roleId;
            obj['appUserName'] = gameRoleName;
            obj['SID'] = serverId;
            obj['productId'] = productId;
            obj['productName'] = productName;
            obj['callback_url'] = "http://pay.90wmoyu.com/platform_mg/pay_mg.php";
            try {
                if (this._appId == "52") {
                    js.MGIAP(JSON.stringify(obj));
                }
                else if (this._appId == "112" || this._appId == "117" || this._appId == "121" || this._appId == "122" || this._appId == "123" || this._appId == "124" || this._appId == "125") {
                    (window.webkit.messageHandlers.MGIAP.postMessage(JSON.stringify(obj)));
                }
            }
            catch (e) {
                console.error(e);
            }
        };
        return SdkKaiYingMG;
    }(platform.SdkBase));
    platform.SdkKaiYingMG = SdkKaiYingMG;
    __reflect(SdkKaiYingMG.prototype, "platform.SdkKaiYingMG");
})(platform || (platform = {}));
