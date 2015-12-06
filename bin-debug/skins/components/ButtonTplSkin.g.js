var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonTplSkin = (function (_super) {
            __extends(ButtonTplSkin, _super);
            function ButtonTplSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [54, 184]);
                this.elementsContent = [this.__4_i(), this.labelDisplay_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "btn_blue_clicked_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "btn_green_disable_png")
                    ])
                ];
            }
            var d = __define,c=ButtonTplSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ButtonTplSkin._skinParts;
                }
            );
            p.labelDisplay_i = function () {
                var t = new egret.gui.Label();
                this.labelDisplay = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "verticalAlign", "verticalCenter", "width"], ["楷体", 0, 26, "重试", "center", "middle", 0, 128]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "btn_blue_normal_png", 0]);
                return t;
            };
            ButtonTplSkin._skinParts = ["labelDisplay"];
            return ButtonTplSkin;
        })(egret.gui.Skin);
        components.ButtonTplSkin = ButtonTplSkin;
        egret.registerClass(ButtonTplSkin,"skins.components.ButtonTplSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
