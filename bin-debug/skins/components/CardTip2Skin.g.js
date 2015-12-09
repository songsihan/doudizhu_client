var skins;
(function (skins) {
    var components;
    (function (components) {
        var CardTip2Skin = (function (_super) {
            __extends(CardTip2Skin, _super);
            function CardTip2Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [38, 71]);
                this.elementsContent = [this.tip_i(), this.__3_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CardTip2Skin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CardTip2Skin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [32, 0, "word_dontout_png", 0, 64]);
                return t;
            };
            p.tip_i = function () {
                var t = new egret.gui.UIAsset();
                this.tip = t;
                t.setStyle("textAlign", "left");
                t.setStyle("verticalAlign", "middle");
                this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [30, -3.5, 0, 50]);
                return t;
            };
            CardTip2Skin._skinParts = ["tip"];
            return CardTip2Skin;
        })(egret.gui.Skin);
        components.CardTip2Skin = CardTip2Skin;
        egret.registerClass(CardTip2Skin,"skins.components.CardTip2Skin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
