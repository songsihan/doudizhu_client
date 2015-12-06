var skins;
(function (skins) {
    var components;
    (function (components) {
        var UnDepositSkin = (function (_super) {
            __extends(UnDepositSkin, _super);
            function UnDepositSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [];
                this.__4_i();
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.AddItems("__4", "", "last", "")
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.AddItems("__4", "", "last", ""),
                        new egret.gui.SetProperty("__4", "source", "btn_cancel_clicked_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "btn_one_point_disable_png")
                    ])
                ];
            }
            var d = __define,c=UnDepositSkin;p=c.prototype;
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["height", "left", "source", "top", "width"], [41, 0, "btn_cancel_normal_png", 0, 108]);
                return t;
            };
            return UnDepositSkin;
        })(egret.gui.Skin);
        components.UnDepositSkin = UnDepositSkin;
        egret.registerClass(UnDepositSkin,"skins.components.UnDepositSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
