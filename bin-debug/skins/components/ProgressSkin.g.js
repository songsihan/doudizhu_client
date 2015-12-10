var skins;
(function (skins) {
    var components;
    (function (components) {
        var ProgressSkin = (function (_super) {
            __extends(ProgressSkin, _super);
            function ProgressSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [11, 185]);
                this.elementsContent = [this.track_i(), this.thumb_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ProgressSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ProgressSkin._skinParts;
                }
            );
            p.thumb_i = function () {
                var t = new egret.gui.Rect();
                this.thumb = t;
                this.__s(t, ["fillColor", "height", "verticalCenter", "width", "x"], [0x2ECC71, 11, 0, 24, 0]);
                return t;
            };
            p.track_i = function () {
                var t = new egret.gui.Rect();
                this.track = t;
                this.__s(t, ["fillColor", "height", "verticalCenter", "width", "x"], [0x3C3F3F, 11, 0, 185, 0]);
                return t;
            };
            ProgressSkin._skinParts = ["track", "thumb"];
            return ProgressSkin;
        })(egret.gui.Skin);
        components.ProgressSkin = ProgressSkin;
        egret.registerClass(ProgressSkin,"skins.components.ProgressSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
