var skins;
(function (skins) {
    var components;
    (function (components) {
        var ContainerSkin = (function (_super) {
            __extends(ContainerSkin, _super);
            function ContainerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [34, 78]);
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ContainerSkin;p=c.prototype;
            return ContainerSkin;
        })(egret.gui.Skin);
        components.ContainerSkin = ContainerSkin;
        egret.registerClass(ContainerSkin,"skins.components.ContainerSkin");
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
