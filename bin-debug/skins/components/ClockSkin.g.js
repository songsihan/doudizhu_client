var skins;
(function (skins) {
    var components;
    (function (components) {
        var ClockSkin = (function (_super) {
            __extends(ClockSkin, _super);
            function ClockSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [60, 50]);
                this.elementsContent = [this.__3_i(), this.clabel_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ClockSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ClockSkin._skinParts;
                }
            );
            p.clabel_i = function () {
                var t = new egret.gui.Label();
                this.clabel = t;
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial Black", 30, -0.5, 13, "10", "center", 0x000001, "middle", 5, 31]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "clock_png", 0]);
                return t;
            };
            ClockSkin._skinParts = ["clabel"];
            return ClockSkin;
        })(egret.gui.Skin);
        components.ClockSkin = ClockSkin;
        egret.registerClass(ClockSkin,"skins.components.ClockSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
