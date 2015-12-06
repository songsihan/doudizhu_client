var skins;
(function (skins) {
    var components;
    (function (components) {
        var Bitmap_DiZhuSkin = (function (_super) {
            __extends(Bitmap_DiZhuSkin, _super);
            function Bitmap_DiZhuSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.__4_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Bitmap_DiZhuSkin;p=c.prototype;
            p.__3_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["bottom", "fillAlpha", "left", "right", "top"], [0, 0, 0, 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "dizhu_png", 0]);
                return t;
            };
            return Bitmap_DiZhuSkin;
        })(egret.gui.Skin);
        components.Bitmap_DiZhuSkin = Bitmap_DiZhuSkin;
        egret.registerClass(Bitmap_DiZhuSkin,"skins.components.Bitmap_DiZhuSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
