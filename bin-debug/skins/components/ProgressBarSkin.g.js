var skins;
(function (skins) {
    var components;
    (function (components) {
        var ProgressBarSkin = (function (_super) {
            __extends(ProgressBarSkin, _super);
            function ProgressBarSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.track_i(), this.thumb_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ProgressBarSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ProgressBarSkin._skinParts;
                }
            );
            p.thumb_i = function () {
                var t = new egret.gui.UIAsset();
                this.thumb = t;
                this.__s(t, ["height", "source", "verticalCenter", "x"], [23, "bg_loading_2_png", -1, 2]);
                return t;
            };
            p.track_i = function () {
                var t = new egret.gui.UIAsset();
                this.track = t;
                this.__s(t, ["height", "source", "verticalCenter"], [25, "bg_loading_1_png", 0]);
                return t;
            };
            ProgressBarSkin._skinParts = ["track", "thumb"];
            return ProgressBarSkin;
        })(egret.gui.Skin);
        components.ProgressBarSkin = ProgressBarSkin;
        egret.registerClass(ProgressBarSkin,"skins.components.ProgressBarSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
