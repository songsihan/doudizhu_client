var skins;
(function (skins) {
    var components;
    (function (components) {
        var Land1Skin = (function (_super) {
            __extends(Land1Skin, _super);
            function Land1Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.landBtn_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("landBtn", "source", "btn_one_point_clicked_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("landBtn", "source", "btn_one_point_disable_png")
                    ])
                ];
            }
            var d = __define,c=Land1Skin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Land1Skin._skinParts;
                }
            );
            p.landBtn_i = function () {
                var t = new egret.gui.UIAsset();
                this.landBtn = t;
                this.__s(t, ["height", "left", "source", "top", "width"], [35, 0, "btn_one_point_normal_png", 0, 85]);
                return t;
            };
            Land1Skin._skinParts = ["landBtn"];
            return Land1Skin;
        })(egret.gui.Skin);
        components.Land1Skin = Land1Skin;
        egret.registerClass(Land1Skin,"skins.components.Land1Skin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
