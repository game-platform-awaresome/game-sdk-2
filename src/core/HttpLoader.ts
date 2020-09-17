module platform {

	export class HttpLoader extends egret.URLLoader {
		private _url: string;
		private _caller: any;
		private _complete: Function;
		constructor() {
			super();
		}

		public request(url: string, caller: any, complete: Function, requestMethod: string = egret.URLRequestMethod.GET, data: egret.URLVariables = null) {
			this._url = url;
			this._caller = caller;
			this._complete = complete;
			this.dataFormat = egret.URLLoaderDataFormat.TEXT;
			var urlRequest: egret.URLRequest = new egret.URLRequest(url);
			urlRequest.method = requestMethod;
			urlRequest.data = data;
			this.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
			this.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadError, this);
			this.load(urlRequest);
		}

		private onLoadComplete(e: egret.Event) {
			this.removeEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
			this.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadError, this);
			if (this._complete) this._complete.call(this._caller, this.data);
			this._complete = null;
			this._caller = null;
		}

		private onLoadError(e: egret.IOErrorEvent) {
			this.removeEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
			this.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadError, this);
			this._complete.call(this._caller, null);
			this._complete = null;
			this._caller = null;
			console.error("Http错误:", this._url);
		}
	}
}