var skins;
(function (skins) {
    var components;
    (function (components) {
        var LandSkin = (function (_super) {
            __extends(LandSkin, _super);
            function LandSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.landBtn_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("landBtn", "source", "btn_roblandlord_normal_png")
                    ]),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=LandSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return LandSkin._skinParts;
                }
            );
            p.landBtn_i = function () {
                var t = new egret.gui.UIAsset();
                this.landBtn = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "btn_roblandlord_clicked_png", 0]);
                return t;
            };
            LandSkin._skinParts = ["landBtn"];
            return LandSkin;
        })(egret.gui.Skin);
        components.LandSkin = LandSkin;
        egret.registerClass(LandSkin,"skins.components.LandSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
