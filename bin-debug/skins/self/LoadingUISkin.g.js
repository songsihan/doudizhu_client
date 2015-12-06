var skins;
(function (skins) {
    var self;
    (function (self) {
        var LoadingUISkin = (function (_super) {
            __extends(LoadingUISkin, _super);
            function LoadingUISkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [480, 800]);
                this.elementsContent = [this.__3_i(), this.pro1_i(), this.__4_i(), this.png1_i(), this.name1_i(), this.state1_i(), this.pro2_i(), this.png2_i(), this.name2_i(), this.state2_i(), this.pro3_i(), this.png3_i(), this.name3_i(), this.state3_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=LoadingUISkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return LoadingUISkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [224, -24, "bg_logo_png", 438, 10]);
                return t;
            };
            p.name1_i = function () {
                var t = new egret.gui.Label();
                this.name1 = t;
                this.__s(t, ["text", "x", "y"], ["name1", 249, 242]);
                return t;
            };
            p.name2_i = function () {
                var t = new egret.gui.Label();
                this.name2 = t;
                this.__s(t, ["text", "x", "y"], ["name2", 249, 322]);
                return t;
            };
            p.name3_i = function () {
                var t = new egret.gui.Label();
                this.name3 = t;
                this.__s(t, ["text", "x", "y"], ["name3", 248, 400]);
                return t;
            };
            p.png1_i = function () {
                var t = new egret.gui.UIAsset();
                this.png1 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [82, "icon1_png", 89, 140, 211]);
                return t;
            };
            p.png2_i = function () {
                var t = new egret.gui.UIAsset();
                this.png2 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [82, "icon2_png", 89, 140, 300]);
                return t;
            };
            p.png3_i = function () {
                var t = new egret.gui.UIAsset();
                this.png3 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [82, "icon3_png", 89, 139, 388]);
                return t;
            };
            p.pro1_i = function () {
                var t = new egret.gui.ProgressBar();
                this.pro1 = t;
                t.setStyle("textColor", 0x4AB2D7);
                this.__s(t, ["height", "horizontalCenter", "skinName", "verticalCenter", "width"], [14, -24, skins.components.ProgressBarSkin, 51, 254]);
                return t;
            };
            p.pro2_i = function () {
                var t = new egret.gui.ProgressBar();
                this.pro2 = t;
                t.setStyle("textColor", 0x4AB2D7);
                this.__s(t, ["height", "skinName", "verticalCenter", "width", "x", "y"], [14, skins.components.ProgressBarSkin, 130, 254, 249, 10]);
                return t;
            };
            p.pro3_i = function () {
                var t = new egret.gui.ProgressBar();
                this.pro3 = t;
                t.setStyle("textColor", 0x4AB2D7);
                this.__s(t, ["height", "skinName", "verticalCenter", "width", "x", "y"], [14, skins.components.ProgressBarSkin, 212, 254, 249, 20]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "bg_blue_png", 0]);
                return t;
            };
            p.state1_i = function () {
                var t = new egret.gui.Label();
                this.state1 = t;
                this.__s(t, ["bold", "fontFamily", "size", "text", "textColor", "x", "y"], [true, "Arial Narrow", 25, "加载中", 0xDBA549, 556, 242]);
                return t;
            };
            p.state2_i = function () {
                var t = new egret.gui.Label();
                this.state2 = t;
                this.__s(t, ["bold", "fontFamily", "size", "text", "textColor", "x", "y"], [true, "Arial Narrow", 25, "加载中", 0xDBA549, 556, 322]);
                return t;
            };
            p.state3_i = function () {
                var t = new egret.gui.Label();
                this.state3 = t;
                this.__s(t, ["bold", "fontFamily", "size", "text", "textColor", "x", "y"], [true, "Arial Narrow", 25, "加载中", 0xDBA549, 556, 400]);
                return t;
            };
            LoadingUISkin._skinParts = ["pro1", "png1", "name1", "state1", "pro2", "png2", "name2", "state2", "pro3", "png3", "name3", "state3"];
            return LoadingUISkin;
        })(egret.gui.Skin);
        self.LoadingUISkin = LoadingUISkin;
        egret.registerClass(LoadingUISkin,"skins.self.LoadingUISkin");
    })(self = skins.self || (skins.self = {}));
})(skins || (skins = {}));
