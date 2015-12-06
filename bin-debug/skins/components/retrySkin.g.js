var skins;
(function (skins) {
    var components;
    (function (components) {
        var retrySkin = (function (_super) {
            __extends(retrySkin, _super);
            function retrySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [47, 180]);
                this.elementsContent = [];
                this.__4_i();
                this.__5_i();
                this.__6_i();
                this.__7_i();
                this.__8_i();
                this.__9_i();
                this.__10_i();
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.AddItems("__6", "", "last", ""),
                        new egret.gui.AddItems("__7", "", "last", ""),
                        new egret.gui.AddItems("__8", "", "last", "")
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.AddItems("__4", "", "last", ""),
                        new egret.gui.AddItems("__5", "", "last", ""),
                        new egret.gui.SetProperty("__6", "source", "btn_goon_clicked_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.AddItems("__6", "", "last", ""),
                        new egret.gui.AddItems("__9", "", "last", ""),
                        new egret.gui.AddItems("__10", "", "last", "")
                    ])
                ];
            }
            var d = __define,c=retrySkin;p=c.prototype;
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__10 = t;
                this.__s(t, ["bold", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter"], [true, 0, "重 试", "center", 0xEEF2F6, "middle", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Rect();
                this.__4 = t;
                this.__s(t, ["bottom", "fillColor", "left", "right", "top", "x", "y"], [0, 0xE8790A, 0, 0, 0, 20, 20]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__5 = t;
                this.__s(t, ["bold", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "x", "y"], [true, 0, "重 试", "center", 0xEEF2F6, "middle", 0, 20, 20]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__6 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "btn_goon_normal_png", 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Rect();
                this.__7 = t;
                this.__s(t, ["bottom", "fillColor", "left", "right", "top", "x", "y"], [0, 0xC37221, 0, 0, 0, 10, 10]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__8 = t;
                this.__s(t, ["bold", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "x", "y"], [true, 0, "重 试", "center", 0xEEF2F6, "middle", 0, 10, 10]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Rect();
                this.__9 = t;
                this.__s(t, ["bottom", "fillColor", "left", "right", "top"], [0, 0xC37221, 0, 0, 0]);
                return t;
            };
            return retrySkin;
        })(egret.gui.Skin);
        components.retrySkin = retrySkin;
        egret.registerClass(retrySkin,"skins.components.retrySkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
