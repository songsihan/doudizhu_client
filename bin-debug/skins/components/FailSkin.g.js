var skins;
(function (skins) {
    var components;
    (function (components) {
        var FailSkin = (function (_super) {
            __extends(FailSkin, _super);
            function FailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [76, 504]);
                this.elementsContent = [this.__3_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FailSkin;p=c.prototype;
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "fail_png", 0]);
                return t;
            };
            return FailSkin;
        })(egret.gui.Skin);
        components.FailSkin = FailSkin;
        egret.registerClass(FailSkin,"skins.components.FailSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
