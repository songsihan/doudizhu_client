var skins;
(function (skins) {
    var self;
    (function (self) {
        var LoadingSkin = (function (_super) {
            __extends(LoadingSkin, _super);
            function LoadingSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [480, 800]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.png1_i(), this.name1_i(), this.png2_i(), this.name2_i(), this.png3_i(), this.name3_i(), this.pro1_i(), this.pro2_i(), this.pro3_i(), this.__5_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=LoadingSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return LoadingSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [84, 0, "icon_logo_png", 94, 121]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [94, "mask0_png", 461, 175, 225]);
                return t;
            };
            p.name1_i = function () {
                var t = new egret.gui.Label();
                this.name1 = t;
                this.__s(t, ["size", "text", "x", "y"], [25, "name1", 205, 317]);
                return t;
            };
            p.name2_i = function () {
                var t = new egret.gui.Label();
                this.name2 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [0, 25, "name2", 317]);
                return t;
            };
            p.name3_i = function () {
                var t = new egret.gui.Label();
                this.name3 = t;
                this.__s(t, ["size", "text", "x", "y"], [25, "name3", 525, 317]);
                return t;
            };
            p.png1_i = function () {
                var t = new egret.gui.UIAsset();
                this.png1 = t;
                this.__s(t, ["alpha", "height", "source", "width", "x", "y"], [0.5, 82, "icon1_png", 89, 196, 231]);
                return t;
            };
            p.png2_i = function () {
                var t = new egret.gui.UIAsset();
                this.png2 = t;
                this.__s(t, ["alpha", "height", "horizontalCenter", "source", "width", "y"], [0.5, 82, 0, "icon2_png", 89, 231]);
                return t;
            };
            p.png3_i = function () {
                var t = new egret.gui.UIAsset();
                this.png3 = t;
                this.__s(t, ["alpha", "height", "source", "width", "x", "y"], [0.5, 82, "icon3_png", 89, 516, 230]);
                return t;
            };
            p.pro1_i = function () {
                var t = new egret.gui.Label();
                this.pro1 = t;
                this.__s(t, ["size", "text", "x", "y"], [25, "0%", 221, 261]);
                return t;
            };
            p.pro2_i = function () {
                var t = new egret.gui.Label();
                this.pro2 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [-2, 25, "0%", 261]);
                return t;
            };
            p.pro3_i = function () {
                var t = new egret.gui.Label();
                this.pro3 = t;
                this.__s(t, ["size", "text", "x", "y"], [25, "0%", 542, 261]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "bg_doudizhu_loading_png", 0]);
                return t;
            };
            LoadingSkin._skinParts = ["png1", "name1", "png2", "name2", "png3", "name3", "pro1", "pro2", "pro3"];
            return LoadingSkin;
        })(egret.gui.Skin);
        self.LoadingSkin = LoadingSkin;
        egret.registerClass(LoadingSkin,"skins.self.LoadingSkin");
    })(self = skins.self || (skins.self = {}));
})(skins || (skins = {}));
