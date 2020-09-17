module platform {
	export const ML = 'ml';
	export const TW = 'tw';
	export const P9377 = '9377';
	export const KY = 'ky';
	/**上士 */
	export const SS = 'ss';
	/**爱微游 */
	export const AWY = 'awy';
	/**独角兽http */
	export const DJSHP = 'djshp';
	/**独角兽https */
	export const DJSHPS = 'djshps'
	/**疯狂游乐场 */
	export const FKYLC = 'fkylc';
	/**90海外 */
	export const JLHW = '90hw'
	/**恺英手游 */
	export const MG = 'mg'
	/**高热手机端 */
	export const GR = 'gr'
	/**高热平台 */
	export const GRH5 = 'grh5'
	/**350 */
	export const P350 = '350'
	/**1377 */
	export const P1377 = '1377'
	/**悟饭 */
	export const WF = 'wf'
	/**彩虹马 */
	export const CHM = 'chm'
	/**九翎聚合 */
	export const JLJH = 'jljh'
	/**九翎聚合ios */
	export const JLJHIOS = 'jljhios'
	/**sy9377ios */
	export const JSQQI = 'jsqqi'
	/**sy9377安卓 */
	export const JSQQA = 'jsqqa'
	/**915 */
	export const P915 = '915'
	/**玩吧 */
	export const WB = 'wb'
	/**三七 */
	export const P37 = '37'
	/**牛牛 */
	export const NN_H5 = 'nn_h5'
	/**牛牛 */
	export const NN_ANDROID = 'nn_android'
	/**牛牛 */
	export const NN_ZF = 'nn_zf'
	/**牛牛 */
	export const NN_ZF_H5 = 'nn_zf_h5'
	/**牛牛 */
	export const NN_IOS = 'nn_ios'
	/**哆可梦 */
	export const DKM = 'dkm'
	/**9130 */
	export const P9130 = '9130';
	/**益游 */
	export const YIYO = 'yiyo';
	/**垦丁 */
	export const KD = 'kd';
	/**闲来 */
	export const XL = 'xl';
	/**热血 */
	export const RX = 'rx';
	/**途游 */
	export const TY = 'ty';
	/**嗨玩 */
	export const HAW = 'haw';
	/**多瑙 */
	export const DN = 'dn';
	/**G123-日本 */
	export const G123 = 'g123';
	/**顺网 */
	export const SWWEB = 'swweb';
	export const SWH5 = 'swh5';
	/**微软MSUWP-MG */
	export const MSUWP = 'msuwp';
	/**微软MS-MG */
	export const MS = 'ms';
	/**Tai平台JJ */
	export const TAI = 'tai';
	//--------------------------------------------------
	export const DATA_SELECT_SERVER = 'data_select_server';
	export const DATA_CREATE_ROLE = 'data_create_role';
	export const DATA_ENTER_GAME = 'data_enter_game';
	export const DATA_LEVEL_UP = 'data_level_up';
	export const DATA_QUIT_GAME = 'data_quit_game';
	export const DATA_PAY = 'data_pay';
	export const DATA_CHAT = 'data_chat';
	export const DATA_CREATE_ROLE_ENTER = 'data_create_role_enter';
	export const DATA_CREATE_ROLE_CLICK = 'data_create_role_click';

	export let sdk: SdkBase;
	/**打开SDK */
	export let enable = async function (type: string, caller?: any, method?: Function): Promise<any> {
		if (!type) {
			if (method) method.call(caller);
			return Promise.resolve();
		}
		await shopSetting.initializeMapping(type);
		this.sdk = createSdk(type);
		var scripts = this.sdk.getScripts();
		if (!scripts || !scripts.length) {
			if (method) method.call(caller);
			return Promise.resolve();
		}
		return new Promise((reslove, reject) => {
			loadSdkFile(scripts, this, function () {
				if (method) method.call(caller);
				reslove();
			});
		});
	}

	export let createSdk = function (type) {
		switch (type) {
			case ML: return new SdkManlin();
			case TW: return new SdkTanwan();
			case P9377: return new Sdk9377();
			case KY: return new SdkKaiYing();
			case SS: return new SdkShangShi();
			case JLHW: return new SdkJiuLinHaiWai();
			case AWY: return new SdkAiWeiYou();
			case DJSHP: return new SdkDuJiaoShou(DJSHP);
			case DJSHPS: return new SdkDuJiaoShou(DJSHPS);
			case FKYLC: return new SdkFengKuang();
			case MG: return new SdkKaiYingMG();
			case GR: return new SdkGaoRe();
			case P350: return new Sdk350();
			case GRH5: return new SdkGaoReH5();
			case JLJH: return new SdkJuHe();
			case JLJHIOS: return new SdkJuHeIOS();
			case P1377: return new Sdk1377();
			case WF: return new SdkWuFan();
			case CHM: return new SdkCaiHongMa();
			case JSQQI: return new SdkSYJsqqI();
			case P915: return new Sdk915();
			case WB: return new SdkWanBa();
			case JSQQA: return new SdkSYJsqqA();
			case P37: return new Sdk37();
			case NN_ANDROID: return new SdkNiuNiuAndroid(NN_ANDROID);
			case NN_ZF: return new SdkNiuNiuAndroid(NN_ZF);
			case NN_IOS: return new SdkNiuNiuIOS();
			case NN_H5: return new SdkNiuNiuH5(NN_H5);
			case NN_ZF_H5: return new SdkNiuNiuH5(NN_ZF_H5);
			case DKM: return new SdkDkm();
			case P9130: return new Sdk9130();
			case YIYO: return new SdkYiYo();
			case KD: return new SdkKenDing();
			case XL: return new SdkXianLai();
			case RX: return new SdkReXue();
			case TY: return new SdkTuYou();
			case HAW: return new SdkHaiWan();
			case DN: return new SdkDuoNao();
			case G123: return new SdkG123();
			case SWWEB: return new SdkShunWangWeb();
			case SWH5: return new SdkShunWangH5();
			case MSUWP: return new SdkMSUWP();
			case MS: return new SdkMS();
			case TAI: return new SdkTai();
		}
		return null;
	}

	function loadJS(src, caller, callback) {
		var s = document.createElement('script');
		s.async = false;
		s.src = src;
		s.addEventListener('load', function () {
			s.parentNode.removeChild(s);
			s.removeEventListener('load', (arguments as any).callee, false);
			callback.call(caller);
		}, false);
		document.body.appendChild(s);
	}

	export function loadSdkFile(scripts, caller, callback) {
		function loadFile() {
			if (!scripts.length) {
				callback.call(caller);
				return;
			}
			loadJS(scripts.shift(), this, loadFile);
		}
		loadFile();
	};

	export function getUrlParams() {
		var result: any = {};
		var name, value;
		var str = window.location.href; //取得整个地址栏
		var num = str.indexOf("?")
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

	export function generateUUID() {
		var d = new Date().getTime();
		var uuid = 'xxxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
		return uuid;
	};

	export function getPhpPath(name: string): string {
		return `${(window as any).config.ssl ? 'https' : 'http'}://${(window as any).config.ip}/${(window as any).config.platform}/${name}.php`;
	}

	export function formatUrlParams(params: any): string {
		var result = '';
		for (var key in params) {
			result += key + '=' + params[key] + '&';
		}
		return result.substring(0, result.length - 1);
	}
	//--------------------------------------------------
}