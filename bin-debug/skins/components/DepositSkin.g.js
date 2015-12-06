var skins;
(function (skins) {
    var components;
    (function (components) {
        var DepositSkin = (function (_super) {
            __extends(DepositSkin, _super);
            function DepositSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "btn_hosting_clicked_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "btn_one_point_disable_png")
                    ])
                ];
            }
            var d = __define,c=DepositSkin;p=c.prototype;
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["height", "left", "source", "top", "width"], [41, 0, "btn_hosting_normal_png", 0, 108]);
                return t;
            };
            return DepositSkin;
        })(egret.gui.Skin);
        components.DepositSkin = DepositSkin;
        egret.registerClass(DepositSkin,"skins.components.DepositSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
