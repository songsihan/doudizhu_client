var skins;
(function (skins) {
    var components;
    (function (components) {
        var unLandSkin = (function (_super) {
            __extends(unLandSkin, _super);
            function unLandSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.unLandBtn_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("unLandBtn", "source", "btn_dont_call_clicked_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("unLandBtn", "source", "btn_dont_call_disable_png")
                    ])
                ];
            }
            var d = __define,c=unLandSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return unLandSkin._skinParts;
                }
            );
            p.unLandBtn_i = function () {
                var t = new egret.gui.UIAsset();
                this.unLandBtn = t;
                this.__s(t, ["height", "left", "source", "top", "width"], [35, 0, "btn_dont_call_normal_png", 0, 85]);
                return t;
            };
            unLandSkin._skinParts = ["unLandBtn"];
            return unLandSkin;
        })(egret.gui.Skin);
        components.unLandSkin = unLandSkin;
        egret.registerClass(unLandSkin,"skins.components.unLandSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
