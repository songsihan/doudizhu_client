var skins;
(function (skins) {
    var components;
    (function (components) {
        var WinSkin = (function (_super) {
            __extends(WinSkin, _super);
            function WinSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [76, 504]);
                this.elementsContent = [this.__3_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=WinSkin;p=c.prototype;
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "success_png", 0]);
                return t;
            };
            return WinSkin;
        })(egret.gui.Skin);
        components.WinSkin = WinSkin;
        egret.registerClass(WinSkin,"skins.components.WinSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
