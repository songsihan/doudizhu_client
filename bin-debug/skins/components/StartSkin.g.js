var skins;
(function (skins) {
    var components;
    (function (components) {
        var StartSkin = (function (_super) {
            __extends(StartSkin, _super);
            function StartSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [600, 800]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.label_i()];
                this.states = [
                    new egret.gui.State("normal", [
                        new egret.gui.SetProperty("label", "horizontalCenter", 0),
                        new egret.gui.SetProperty("label", "verticalCenter", 0),
                        new egret.gui.SetProperty("label", "textColor", 0x2768A4)
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("label", "verticalCenter", 0.5),
                        new egret.gui.SetProperty("label", "x", 110)
                    ])
                ];
            }
            var d = __define,c=StartSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return StartSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["fillAlpha", "fillColor", "height", "horizontalCenter", "verticalCenter", "width"], [1, 0x6BB0E2, 81, 0, -0.5, 384]);
                return t;
            };
            p.label_i = function () {
                var t = new egret.gui.Label();
                this.label = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["楷体", 0.5, 50, "玩 家 匹 配 中", "center", 0x27A42B, "middle", 0, 455]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["bottom", "fillAlpha", "left", "right", "top"], [0, 0, 0, 0, 0]);
                return t;
            };
            StartSkin._skinParts = ["label"];
            return StartSkin;
        })(egret.gui.Skin);
        components.StartSkin = StartSkin;
        egret.registerClass(StartSkin,"skins.components.StartSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
