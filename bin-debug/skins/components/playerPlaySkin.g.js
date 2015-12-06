var skins;
(function (skins) {
    var components;
    (function (components) {
        var playerPlaySkin = (function (_super) {
            __extends(playerPlaySkin, _super);
            function playerPlaySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [120, 465]);
                this.elementsContent = [this.__3_i(), this.unPlayBtn_i(), this.promptBtn_i(), this.playBtn_i(), this.__4_i(), this.clabel_i(), this.label_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=playerPlaySkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return playerPlaySkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "verticalCenter", "width", "x"], [60, "clock_png", 0, 56, 7]);
                return t;
            };
            p.clabel_i = function () {
                var t = new egret.gui.Label();
                this.clabel = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x"], ["Arial Black", 15, "10", "center", 0x000000, "middle", 4, 26, 22]);
                return t;
            };
            p.label_i = function () {
                var t = new egret.gui.Label();
                this.label = t;
                this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "size", "textColor", "width", "y"], [true, "楷体", 33, 0, 30, 0xC3760D, 279, 5]);
                return t;
            };
            p.playBtn_i = function () {
                var t = new egret.gui.Button();
                this.playBtn = t;
                this.__s(t, ["height", "label", "skinName", "verticalCenter", "width", "x", "y"], [35, "按钮", skins.components.playSkin, 0.5, 85, 323, 10]);
                return t;
            };
            p.promptBtn_i = function () {
                var t = new egret.gui.Button();
                this.promptBtn = t;
                this.__s(t, ["height", "label", "skinName", "verticalCenter", "width", "x"], [35, "按钮", skins.components.promptSkin, 0.5, 85, 217]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.__s(t, ["x", "y"], [-29, -10]);
                return t;
            };
            p.unPlayBtn_i = function () {
                var t = new egret.gui.Button();
                this.unPlayBtn = t;
                this.__s(t, ["height", "horizontalCenter", "label", "skinName", "verticalCenter", "width"], [35, -80, "按钮", skins.components.unPlaySkin, 0.5, 85]);
                return t;
            };
            playerPlaySkin._skinParts = ["unPlayBtn", "promptBtn", "playBtn", "clabel", "label"];
            return playerPlaySkin;
        })(egret.gui.Skin);
        components.playerPlaySkin = playerPlaySkin;
        egret.registerClass(playerPlaySkin,"skins.components.playerPlaySkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
