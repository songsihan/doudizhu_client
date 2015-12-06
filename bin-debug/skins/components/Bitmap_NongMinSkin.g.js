var skins;
(function (skins) {
    var components;
    (function (components) {
        var Bitmap_NongMinSkin = (function (_super) {
            __extends(Bitmap_NongMinSkin, _super);
            function Bitmap_NongMinSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.__4_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Bitmap_NongMinSkin;p=c.prototype;
            p.__3_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["bottom", "fillAlpha", "left", "right", "top"], [0, 0, 0, 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "nongmin_png", 0]);
                return t;
            };
            return Bitmap_NongMinSkin;
        })(egret.gui.Skin);
        components.Bitmap_NongMinSkin = Bitmap_NongMinSkin;
        egret.registerClass(Bitmap_NongMinSkin,"skins.components.Bitmap_NongMinSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
