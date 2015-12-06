var skins;
(function (skins) {
    var components;
    (function (components) {
        var playSkin = (function (_super) {
            __extends(playSkin, _super);
            function playSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.playBtn_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("playBtn", "source", "btn_out_card_clicked_png")
                    ]),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=playSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return playSkin._skinParts;
                }
            );
            p.playBtn_i = function () {
                var t = new egret.gui.UIAsset();
                this.playBtn = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "btn_outcard_normal_png", 0]);
                return t;
            };
            playSkin._skinParts = ["playBtn"];
            return playSkin;
        })(egret.gui.Skin);
        components.playSkin = playSkin;
        egret.registerClass(playSkin,"skins.components.playSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
