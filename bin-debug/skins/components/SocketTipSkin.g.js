var skins;
(function (skins) {
    var components;
    (function (components) {
        var SocketTipSkin = (function (_super) {
            __extends(SocketTipSkin, _super);
            function SocketTipSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [64, 358]);
                this.elementsContent = [this.labelDisplay_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=SocketTipSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return SocketTipSkin._skinParts;
                }
            );
            p.labelDisplay_i = function () {
                var t = new egret.gui.Label();
                this.labelDisplay = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "verticalCenter"], [0, 24, "您已掉线，正在重新连接", 0xFFAF40, 0]);
                return t;
            };
            SocketTipSkin._skinParts = ["labelDisplay"];
            return SocketTipSkin;
        })(egret.gui.Skin);
        components.SocketTipSkin = SocketTipSkin;
        egret.registerClass(SocketTipSkin,"skins.components.SocketTipSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
