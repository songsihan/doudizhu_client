var skins;
(function (skins) {
    var components;
    (function (components) {
        var Land2Skin = (function (_super) {
            __extends(Land2Skin, _super);
            function Land2Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 85;
                this.elementsContent = [this.landBtn_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("landBtn", "source", "btn_two_point_clicked_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("landBtn", "source", "btn_two_point_disable_png")
                    ])
                ];
            }
            var d = __define,c=Land2Skin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Land2Skin._skinParts;
                }
            );
            p.landBtn_i = function () {
                var t = new egret.gui.UIAsset();
                this.landBtn = t;
                this.__s(t, ["height", "left", "source", "top", "width"], [35, 0, "btn_two_point_normal_png", 0, 85]);
                return t;
            };
            Land2Skin._skinParts = ["landBtn"];
            return Land2Skin;
        })(egret.gui.Skin);
        components.Land2Skin = Land2Skin;
        egret.registerClass(Land2Skin,"skins.components.Land2Skin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
