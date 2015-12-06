var skins;
(function (skins) {
    var components;
    (function (components) {
        var TipSkin = (function (_super) {
            __extends(TipSkin, _super);
            function TipSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [60, 225]);
                this.elementsContent = [this.tip_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=TipSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return TipSkin._skinParts;
                }
            );
            p.tip_i = function () {
                var t = new egret.gui.UIAsset();
                this.tip = t;
                t.setStyle("textAlign", "left");
                t.setStyle("verticalAlign", "middle");
                this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [30, -3.5, 0, 50]);
                return t;
            };
            TipSkin._skinParts = ["tip"];
            return TipSkin;
        })(egret.gui.Skin);
        components.TipSkin = TipSkin;
        egret.registerClass(TipSkin,"skins.components.TipSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
