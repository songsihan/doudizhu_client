var skins;
(function (skins) {
    var self;
    (function (self) {
        var NewLoadingSkin = (function (_super) {
            __extends(NewLoadingSkin, _super);
            function NewLoadingSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [480, 800]);
                this.elementsContent = [this.__3_i(), this.line1_i(), this.line2_i(), this.line3_i(), this.__4_i(), this.name1_i(), this.name2_i(), this.pro1_i(), this.pro2_i(), this.pro3_i(), this.name3_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=NewLoadingSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return NewLoadingSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "horizontalCenter", "source", "width", "y"], [false, 84, 0, "icon_logo_png", 94, 105]);
                return t;
            };
            p.line1_i = function () {
                var t = new egret.gui.ProgressBar();
                this.line1 = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "width", "y"], [31, 35, skins.components.ProgressSkin, 194, 242]);
                return t;
            };
            p.line2_i = function () {
                var t = new egret.gui.ProgressBar();
                this.line2 = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "width", "y"], [31, 35, skins.components.ProgressSkin, 194, 312]);
                return t;
            };
            p.line3_i = function () {
                var t = new egret.gui.ProgressBar();
                this.line3 = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "width", "y"], [31, 35, skins.components.ProgressSkin, 194, 382]);
                return t;
            };
            p.name1_i = function () {
                var t = new egret.gui.Label();
                this.name1 = t;
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["楷体", 24, "name1", 245, 237]);
                return t;
            };
            p.name2_i = function () {
                var t = new egret.gui.Label();
                this.name2 = t;
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["楷体", 24, "name2", 245, 307]);
                return t;
            };
            p.name3_i = function () {
                var t = new egret.gui.Label();
                this.name3 = t;
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["楷体", 24, "name3", 245, 377]);
                return t;
            };
            p.pro1_i = function () {
                var t = new egret.gui.Label();
                this.pro1 = t;
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["楷体", 24, "0%", 545, 237]);
                return t;
            };
            p.pro2_i = function () {
                var t = new egret.gui.Label();
                this.pro2 = t;
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["楷体", 24, "0%", 545, 307]);
                return t;
            };
            p.pro3_i = function () {
                var t = new egret.gui.Label();
                this.pro3 = t;
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["楷体", 24, "0%", 545, 377]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "bg_doudizhu_loading_png", 0]);
                return t;
            };
            NewLoadingSkin._skinParts = ["line1", "line2", "line3", "name1", "name2", "pro1", "pro2", "pro3", "name3"];
            return NewLoadingSkin;
        })(egret.gui.Skin);
        self.NewLoadingSkin = NewLoadingSkin;
        egret.registerClass(NewLoadingSkin,"skins.self.NewLoadingSkin");
    })(self = skins.self || (skins.self = {}));
})(skins || (skins = {}));
