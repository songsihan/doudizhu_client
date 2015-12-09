var skins;
(function (skins) {
    var components;
    (function (components) {
        var LandlordSkin = (function (_super) {
            __extends(LandlordSkin, _super);
            function LandlordSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 549;
                this.elementsContent = [this.__3_i(), this.land1Btn_i(), this.land2Btn_i(), this.land3Btn_i(), this.__4_i(), this.clabel_i(), this.unLandBtn_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=LandlordSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return LandlordSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [60, "clock_png", 56, 7, 2]);
                return t;
            };
            p.clabel_i = function () {
                var t = new egret.gui.Label();
                this.clabel = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial Black", 15, "10", "center", 0x000000, "middle", 26, 22, 26]);
                return t;
            };
            p.land1Btn_i = function () {
                var t = new egret.gui.Button();
                this.land1Btn = t;
                this.__s(t, ["height", "horizontalCenter", "label", "skinName", "verticalCenter", "width"], [35, -151, "按钮", skins.components.Land1Skin, 0.5, 85]);
                return t;
            };
            p.land2Btn_i = function () {
                var t = new egret.gui.Button();
                this.land2Btn = t;
                this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [55, "按钮", skins.components.Land2Skin, 111, 182, 23]);
                return t;
            };
            p.land3Btn_i = function () {
                var t = new egret.gui.Button();
                this.land3Btn = t;
                this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [55, "按钮", skins.components.Land3Skin, 111, 283, 23]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.__s(t, ["x", "y"], [-29, -10]);
                return t;
            };
            p.unLandBtn_i = function () {
                var t = new egret.gui.Button();
                this.unLandBtn = t;
                this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [55, "按钮", skins.components.unLandSkin, 111, 384, 23]);
                return t;
            };
            LandlordSkin._skinParts = ["land1Btn", "land2Btn", "land3Btn", "clabel", "unLandBtn"];
            return LandlordSkin;
        })(egret.gui.Skin);
        components.LandlordSkin = LandlordSkin;
        egret.registerClass(LandlordSkin,"skins.components.LandlordSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
