var skins;
(function (skins) {
    var components;
    (function (components) {
        var promptSkin = (function (_super) {
            __extends(promptSkin, _super);
            function promptSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.promptBtn_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("promptBtn", "source", "btn_tip_clicked_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("promptBtn", "source", "btn_tip_disable_png")
                    ])
                ];
            }
            var d = __define,c=promptSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return promptSkin._skinParts;
                }
            );
            p.promptBtn_i = function () {
                var t = new egret.gui.UIAsset();
                this.promptBtn = t;
                this.__s(t, ["height", "left", "source", "top", "width"], [35, 0, "btn_tip_normal_png", 0, 85]);
                return t;
            };
            promptSkin._skinParts = ["promptBtn"];
            return promptSkin;
        })(egret.gui.Skin);
        components.promptSkin = promptSkin;
        egret.registerClass(promptSkin,"skins.components.promptSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
