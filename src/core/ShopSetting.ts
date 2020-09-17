module platform {
    export class ShopSetting {
        private _mapping: any;
        private _list: any[];
        public constructor() {

        }

        public hasMapping(type: string): boolean {
            return !!this._mapping[type];
        }

        public getMappingName(type: string, isIOS: boolean = false): string {
            return this._mapping[type] ? (isIOS ? this._mapping[type].ios : this._mapping[type].android) : "";
        }

        public getShopId(type: string, productId: string, price: number = 0, isIOS: boolean = false) {
            var mappingName = this.getMappingName(type, isIOS);
            if (!mappingName) return productId;
            for (var item of this._list) {
                if (item.id == productId) {
                    if (!item.isShouChong) return item[mappingName] ? item[mappingName] : productId;
                    for (var item1 of this._list) {
                        if (item1.isShouChong) {
                            var content = item1[mappingName];
                            if (content) {
                                var array = content.split(';');
                                for (var item2 of array) {
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
        }

        public async initializeMapping(type: string, caller?:any, method?:Function) {
            this._mapping = {};
            this._mapping[NN_H5] = { android: 'nn_normal', ios: '' };
            this._mapping[NN_ZF_H5] = { android: 'nn_normal', ios: '' };
            this._mapping[NN_ANDROID] = { android: 'nn_normal', ios: '' };
            this._mapping[NN_ZF] = { android: 'nn_normal', ios: '' };
            this._mapping[NN_IOS] = { android: '', ios: 'nn_normal' };
            this._mapping[JLHW] = { android: 'hw_android', ios: 'hw_ios' };
            this._mapping[DJSHP] = { android: 'djs_normal', ios: '' };
            this._mapping[DJSHPS] = { android: 'djs_normal', ios: '' };
            this._mapping[AWY] = { android: 'awy_normal', ios: '' };
            this._mapping[WB] = { android: 'wb_android', ios: 'wb_ios' };
            this._mapping[TY] = { android: 'ty_normal', ios: '' };
            this._mapping[JLJHIOS] = { android: '', ios: 'jljhios' };
            this._mapping[MSUWP] = { android: 'uwp', ios: 'uwp' };
            this._mapping[MS] = { android: 'h5', ios: 'h5' };
            
            if (!this.hasMapping(type)) {
                if(method) method.call(caller);
                return Promise.resolve();
            }
            return new Promise((reslove, reject) => {
                (new HttpLoader()).request((window as any).config.resource_shell+'/shopsdk.json?' + (window as any).config.vershell, this, (data: string) => {
                    this._list = JSON.parse(data);
                    if(method) method.call(caller);
                    reslove();
                }, egret.URLRequestMethod.GET);
            });
        }
    }
    export let shopSetting: ShopSetting = new ShopSetting();
}