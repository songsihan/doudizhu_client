var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonSkin = (function (_super) {
            __extends(ButtonSkin, _super);
            function ButtonSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [33, 120]);
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "btn_calllandlord_clicked_png")
                    ]),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ButtonSkin;p=c.prototype;
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "btn_calllandlord_normal_png", 0]);
                return t;
            };
            return ButtonSkin;
        })(egret.gui.Skin);
        components.ButtonSkin = ButtonSkin;
        egret.registerClass(ButtonSkin,"skins.components.ButtonSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
