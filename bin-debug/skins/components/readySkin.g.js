var skins;
(function (skins) {
    var components;
    (function (components) {
        var readySkin = (function (_super) {
            __extends(readySkin, _super);
            function readySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [76, 88]);
                this.elementsContent = [this.label_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=readySkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return readySkin._skinParts;
                }
            );
            p.label_i = function () {
                var t = new egret.gui.Label();
                this.label = t;
                this.__s(t, ["bold", "fontFamily", "horizontalCenter", "size", "text", "textColor", "verticalCenter"], [true, "楷体", 0, 30, "准备", 0xC3760D, 1]);
                return t;
            };
            readySkin._skinParts = ["label"];
            return readySkin;
        })(egret.gui.Skin);
        components.readySkin = readySkin;
        egret.registerClass(readySkin,"skins.components.readySkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
