var skins;
(function (skins) {
    var components;
    (function (components) {
        var LeaveSkin = (function (_super) {
            __extends(LeaveSkin, _super);
            function LeaveSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [33, 120]);
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "btn_outgame_clicked_png")
                    ]),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=LeaveSkin;p=c.prototype;
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [-14, 0, -60, "btn_outgame_normal_png", 0]);
                return t;
            };
            return LeaveSkin;
        })(egret.gui.Skin);
        components.LeaveSkin = LeaveSkin;
        egret.registerClass(LeaveSkin,"skins.components.LeaveSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
