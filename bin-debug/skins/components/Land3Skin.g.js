var skins;
(function (skins) {
    var components;
    (function (components) {
        var Land3Skin = (function (_super) {
            __extends(Land3Skin, _super);
            function Land3Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.landBtn_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("landBtn", "source", "btn_three_point_clicked_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("landBtn", "source", "btn_three_point_disable_png")
                    ])
                ];
            }
            var d = __define,c=Land3Skin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Land3Skin._skinParts;
                }
            );
            p.landBtn_i = function () {
                var t = new egret.gui.UIAsset();
                this.landBtn = t;
                this.__s(t, ["height", "left", "source", "top", "width"], [35, 0, "btn_three_point_normal_png", 0, 85]);
                return t;
            };
            Land3Skin._skinParts = ["landBtn"];
            return Land3Skin;
        })(egret.gui.Skin);
        components.Land3Skin = Land3Skin;
        egret.registerClass(Land3Skin,"skins.components.Land3Skin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
