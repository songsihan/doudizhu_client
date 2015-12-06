var skins;
(function (skins) {
    var components;
    (function (components) {
        var GoOnSkin = (function (_super) {
            __extends(GoOnSkin, _super);
            function GoOnSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [47, 180]);
                this.elementsContent = [this.__4_i()];
                this.__5_i();
                this.__6_i();
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "btn_goon_clicked_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.AddItems("__5", "", "last", ""),
                        new egret.gui.AddItems("__6", "", "last", "")
                    ])
                ];
            }
            var d = __define,c=GoOnSkin;p=c.prototype;
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "btn_goon_normal_png", 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Rect();
                this.__5 = t;
                this.__s(t, ["bottom", "fillColor", "left", "right", "top"], [0, 0xC37221, 0, 0, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__6 = t;
                this.__s(t, ["bold", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter"], [true, 0, "匹配中", "center", 0xEEF2F6, "middle", 0]);
                return t;
            };
            return GoOnSkin;
        })(egret.gui.Skin);
        components.GoOnSkin = GoOnSkin;
        egret.registerClass(GoOnSkin,"skins.components.GoOnSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
