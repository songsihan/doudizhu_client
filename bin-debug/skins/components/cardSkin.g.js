var skins;
(function (skins) {
    var components;
    (function (components) {
        var cardSkin = (function (_super) {
            __extends(cardSkin, _super);
            function cardSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [53, 41]);
                this.elementsContent = [this.png_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=cardSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return cardSkin._skinParts;
                }
            );
            p.png_i = function () {
                var t = new egret.gui.UIAsset();
                this.png = t;
                this.__s(t, ["height", "left", "source", "top", "width"], [53, 0, "cardback_small_png", 0, 41]);
                return t;
            };
            cardSkin._skinParts = ["png"];
            return cardSkin;
        })(egret.gui.Skin);
        components.cardSkin = cardSkin;
        egret.registerClass(cardSkin,"skins.components.cardSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
