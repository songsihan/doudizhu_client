var skins;
(function (skins) {
    var components;
    (function (components) {
        var CardTip1Skin = (function (_super) {
            __extends(CardTip1Skin, _super);
            function CardTip1Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [30, 200]);
                this.elementsContent = [this.tip_i(), this.__3_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CardTip1Skin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CardTip1Skin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [30, 0, "word_nocardbig_png", 0, 200]);
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
            CardTip1Skin._skinParts = ["tip"];
            return CardTip1Skin;
        })(egret.gui.Skin);
        components.CardTip1Skin = CardTip1Skin;
        egret.registerClass(CardTip1Skin,"skins.components.CardTip1Skin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
