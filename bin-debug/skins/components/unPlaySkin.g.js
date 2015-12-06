var skins;
(function (skins) {
    var components;
    (function (components) {
        var unPlaySkin = (function (_super) {
            __extends(unPlaySkin, _super);
            function unPlaySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.unPlayBtn_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("unPlayBtn", "source", "btn_dont_out_clicked_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("unPlayBtn", "source", "btn_dont_out_disable_png")
                    ])
                ];
            }
            var d = __define,c=unPlaySkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return unPlaySkin._skinParts;
                }
            );
            p.unPlayBtn_i = function () {
                var t = new egret.gui.UIAsset();
                this.unPlayBtn = t;
                this.__s(t, ["height", "left", "source", "top", "width"], [35, 0, "btn_dont_out_normal_png", 0, 85]);
                return t;
            };
            unPlaySkin._skinParts = ["unPlayBtn"];
            return unPlaySkin;
        })(egret.gui.Skin);
        components.unPlaySkin = unPlaySkin;
        egret.registerClass(unPlaySkin,"skins.components.unPlaySkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
