var skins;
(function (skins) {
    var components;
    (function (components) {
        var resetPlaySkin = (function (_super) {
            __extends(resetPlaySkin, _super);
            function resetPlaySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.unLandBtn_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("unLandBtn", "source", "btn_don'trob_normal_png")
                    ]),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=resetPlaySkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return resetPlaySkin._skinParts;
                }
            );
            p.unLandBtn_i = function () {
                var t = new egret.gui.UIAsset();
                this.unLandBtn = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "btn_don'trob_clicked_png", 0]);
                return t;
            };
            resetPlaySkin._skinParts = ["unLandBtn"];
            return resetPlaySkin;
        })(egret.gui.Skin);
        components.resetPlaySkin = resetPlaySkin;
        egret.registerClass(resetPlaySkin,"skins.components.resetPlaySkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
