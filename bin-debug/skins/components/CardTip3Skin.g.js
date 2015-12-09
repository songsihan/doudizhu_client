var skins;
(function (skins) {
    var components;
    (function (components) {
        var CardTip3Skin = (function (_super) {
            __extends(CardTip3Skin, _super);
            function CardTip3Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [36, 243]);
                this.elementsContent = [this.tip_i(), this.tip0_i(), this.tip1_i(), this.__3_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CardTip3Skin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CardTip3Skin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [30, 0, "word_no_rule_png", 0, 200, 20, 20]);
                return t;
            };
            p.tip0_i = function () {
                var t = new egret.gui.UIAsset();
                this.tip0 = t;
                t.setStyle("textAlign", "left");
                t.setStyle("verticalAlign", "middle");
                this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width", "x", "y"], [30, -3.5, 0, 50, 10, 10]);
                return t;
            };
            p.tip1_i = function () {
                var t = new egret.gui.UIAsset();
                this.tip1 = t;
                t.setStyle("textAlign", "left");
                t.setStyle("verticalAlign", "middle");
                this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width", "x", "y"], [30, -3.5, 0, 50, 20, 20]);
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
            CardTip3Skin._skinParts = ["tip", "tip0", "tip1"];
            return CardTip3Skin;
        })(egret.gui.Skin);
        components.CardTip3Skin = CardTip3Skin;
        egret.registerClass(CardTip3Skin,"skins.components.CardTip3Skin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
