var skins;
(function (skins) {
    var self;
    (function (self) {
        var EndSkin = (function (_super) {
            __extends(EndSkin, _super);
            function EndSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [120, 400]);
                this.elementsContent = [this.__3_i(), this.result_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=EndSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return EndSkin._skinParts;
                }
            );
            p.result_i = function () {
                var t = new egret.gui.SkinnableComponent();
                this.result = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "width", "y"], [48, 0.5, skins.components.WinSkin, 323, 42]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top", "visible"], [0, 0, 0, "bg_blue_png", 0, false]);
                return t;
            };
            EndSkin._skinParts = ["result"];
            return EndSkin;
        })(egret.gui.Skin);
        self.EndSkin = EndSkin;
        egret.registerClass(EndSkin,"skins.self.EndSkin");
    })(self = skins.self || (skins.self = {}));
})(skins || (skins = {}));
