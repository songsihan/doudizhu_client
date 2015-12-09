var skins;
(function (skins) {
    var self;
    (function (self) {
        var mainPanelSkin = (function (_super) {
            __extends(mainPanelSkin, _super);
            function mainPanelSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [480, 800]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.leave1_i(), this.bg3_i(), this.bg2_i(), this.__5_i(), this.bgSize2_i(), this.leave2_i(), this.leave3_i(), this.robot3_i(), this.robot2_i(), this.score3_i(), this.name3_i(), this.name2_i(), this.bg1_i(), this.__6_i(), this.__7_i(), this.multiple_i(), this.cards_i(), this.player1_i(), this.player3_i(), this.player2_i(), this.name1_i(), this.score1_i(), this.score2_i(), this.group1_i(), this.group2_i(), this.now_cards_i(), this.__8_i(), this.base_i(), this.landlord_i(), this.png3_i(), this.png2_i(), this.png1_i(), this.__9_i(), this.robot1_i(), this.depositBtn_i(), this.__10_i(), this.bgSize1_i(), this.end_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=mainPanelSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return mainPanelSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [11, "g_png", 9, 655, 49]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [11, "g_png", 9, 82, 44]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [57, "mask1_png", 60, 8, 14]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [53, "mask2_png", 61, 729, 21]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [79, "mask3_png", 91, 1, 223]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "bg_blue_big_png", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["fillAlpha", "fillColor", "height", "horizontalCenter", "strokeAlpha", "width", "y"], [1, 0x003352, 72, -10.5, 0, 259, 3]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["fillColor", "height", "strokeAlpha", "strokeWeight", "width", "x", "y"], [0x155D95, 51, 0.22, 3, 36, 743, 90]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [63, -61, 142, 6]);
                t.elementsContent = [this.p1_i(), this.p2_i(), this.p3_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                t.setStyle("size", 30);
                this.__s(t, ["height", "source", "width", "x", "y"], [21, "word_multiple_png", 61, 417, 12]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [11, "g_png", 9, 19, 324]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [21, "word_end_point_png", 61, 418, 43]);
                return t;
            };
            p.base_i = function () {
                var t = new egret.gui.Label();
                this.base = t;
                this.__s(t, ["bold", "size", "text", "textColor", "width", "x", "y"], [true, 22, "5", 0xF1AB20, 32, 489, 40]);
                return t;
            };
            p.bg1_i = function () {
                var t = new egret.gui.UIAsset();
                this.bg1 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [32, "bg_black_statistical_1_png", 82, 73, 26]);
                return t;
            };
            p.bg2_i = function () {
                var t = new egret.gui.UIAsset();
                this.bg2 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [32, "bg_black_statistical_1_png", 82, 644, 31]);
                return t;
            };
            p.bg3_i = function () {
                var t = new egret.gui.UIAsset();
                this.bg3 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [32, "bg_black_statistical_1_png", 82, 12, 307]);
                return t;
            };
            p.bgSize1_i = function () {
                var t = new egret.gui.Label();
                this.bgSize1 = t;
                this.__s(t, ["bold", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, 29, 22, "0", "center", 0xF8F7F6, "middle", 39, 17, 100]);
                return t;
            };
            p.bgSize2_i = function () {
                var t = new egret.gui.Label();
                this.bgSize2 = t;
                this.__s(t, ["bold", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, 29, 22, "0", "center", 0xF8F7F6, "middle", 36, 743, 101]);
                return t;
            };
            p.cards_i = function () {
                var t = new egret.gui.Group();
                this.cards = t;
                this.__s(t, ["height", "horizontalCenter", "y"], [88, 0, 375]);
                return t;
            };
            p.depositBtn_i = function () {
                var t = new egret.gui.Button();
                this.depositBtn = t;
                this.__s(t, ["alpha", "height", "label", "skinName", "width", "x", "y"], [0.8, 43, "取消托管", skins.components.ButtonTplSkin, 107, 682, 296]);
                return t;
            };
            p.end_i = function () {
                var t = new egret.gui.Group();
                this.end = t;
                this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [154, 0.5, -56, 319]);
                return t;
            };
            p.group1_i = function () {
                var t = new egret.gui.Group();
                this.group1 = t;
                this.__s(t, ["height", "width", "x", "y"], [76, 88, 85, 101]);
                return t;
            };
            p.group2_i = function () {
                var t = new egret.gui.Group();
                this.group2 = t;
                this.__s(t, ["height", "width", "x", "y"], [76, 88, 622, 105]);
                return t;
            };
            p.landlord_i = function () {
                var t = new egret.gui.Group();
                this.landlord = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [51, -32, 340, 263]);
                return t;
            };
            p.leave1_i = function () {
                var t = new egret.gui.UIAsset();
                this.leave1 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [25, "leave_png", 30, 167, 31]);
                return t;
            };
            p.leave2_i = function () {
                var t = new egret.gui.UIAsset();
                this.leave2 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [25, "leave_png", 30, 604, 34]);
                return t;
            };
            p.leave3_i = function () {
                var t = new egret.gui.UIAsset();
                this.leave3 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [25, "leave_png", 30, 97, 236]);
                return t;
            };
            p.multiple_i = function () {
                var t = new egret.gui.Label();
                this.multiple = t;
                this.__s(t, ["bold", "size", "text", "textColor", "width", "x", "y"], [true, 22, "1", 0xF4BB4A, 32, 488, 9]);
                return t;
            };
            p.name1_i = function () {
                var t = new egret.gui.Label();
                this.name1 = t;
                this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [true, "Arial Baltic", 19, 12, "玩家1", "center", "middle", 80, 76, 25]);
                return t;
            };
            p.name2_i = function () {
                var t = new egret.gui.Label();
                this.name2 = t;
                this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [true, "Arial Baltic", 22, 12, "玩家2", "center", "middle", 80, 649, 28]);
                return t;
            };
            p.name3_i = function () {
                var t = new egret.gui.Label();
                this.name3 = t;
                this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [true, "Arial Baltic", 19, 12, "玩家3", "center", "middle", 80, 11, 305]);
                return t;
            };
            p.now_cards_i = function () {
                var t = new egret.gui.SkinnableContainer();
                this.now_cards = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "width", "y"], [76, 0, skins.components.ContainerSkin, 88, 273]);
                return t;
            };
            p.p1_i = function () {
                var t = new egret.gui.UIAsset();
                this.p1 = t;
                this.__s(t, ["height", "source", "width", "y"], [63, "cardback_small_png", 45, 0]);
                return t;
            };
            p.p2_i = function () {
                var t = new egret.gui.UIAsset();
                this.p2 = t;
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [63, 0.5, "cardback_small_png", 45, 0]);
                return t;
            };
            p.p3_i = function () {
                var t = new egret.gui.UIAsset();
                this.p3 = t;
                this.__s(t, ["height", "right", "source", "width", "y"], [63, 0, "cardback_small_png", 45, 0]);
                return t;
            };
            p.player1_i = function () {
                var t = new egret.gui.SkinnableComponent();
                this.player1 = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [28, skins.components.Bitmap_NongMinSkin, 34, 19, 148]);
                return t;
            };
            p.player2_i = function () {
                var t = new egret.gui.SkinnableComponent();
                this.player2 = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [28, skins.components.Bitmap_NongMinSkin, 34, 742, 148]);
                return t;
            };
            p.player3_i = function () {
                var t = new egret.gui.SkinnableComponent();
                this.player3 = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [28, skins.components.Bitmap_NongMinSkin, 34, 94, 274]);
                return t;
            };
            p.png1_i = function () {
                var t = new egret.gui.UIAsset();
                this.png1 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [50, "icon1_png", 53, 14, 17]);
                return t;
            };
            p.png2_i = function () {
                var t = new egret.gui.UIAsset();
                this.png2 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [50, "icon2_png", 53, 731, 22]);
                return t;
            };
            p.png3_i = function () {
                var t = new egret.gui.UIAsset();
                this.png3 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [75, "icon3_png", 75, 15, 226]);
                return t;
            };
            p.robot1_i = function () {
                var t = new egret.gui.UIAsset();
                this.robot1 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [28, "robot_png", 34, 167, 27]);
                return t;
            };
            p.robot2_i = function () {
                var t = new egret.gui.UIAsset();
                this.robot2 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [28, "robot_png", 34, 602, 31]);
                return t;
            };
            p.robot3_i = function () {
                var t = new egret.gui.UIAsset();
                this.robot3 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [28, "robot_png", 34, 96, 234]);
                return t;
            };
            p.score1_i = function () {
                var t = new egret.gui.Label();
                this.score1 = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [17, 10, "0", "center", 0xCDA16E, "middle", 59, 85, 42]);
                return t;
            };
            p.score2_i = function () {
                var t = new egret.gui.Label();
                this.score2 = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [17, 10, "0", "center", 0xF2D92E, "middle", 68, 658, 47]);
                return t;
            };
            p.score3_i = function () {
                var t = new egret.gui.Label();
                this.score3 = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [17, 10, "0", "center", 0xF1B824, "middle", 58, 21, 323]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["fillColor", "height", "strokeAlpha", "strokeWeight", "width", "x", "y"], [0x155D95, 51, 0.22, 3, 36, 19, 90]);
                return t;
            };
            mainPanelSkin._skinParts = ["leave1", "bg3", "bg2", "bgSize2", "leave2", "leave3", "robot3", "robot2", "score3", "name3", "name2", "bg1", "p1", "p2", "p3", "multiple", "cards", "player1", "player3", "player2", "name1", "score1", "score2", "group1", "group2", "now_cards", "base", "landlord", "png3", "png2", "png1", "robot1", "depositBtn", "bgSize1", "end"];
            return mainPanelSkin;
        })(egret.gui.Skin);
        self.mainPanelSkin = mainPanelSkin;
        egret.registerClass(mainPanelSkin,"skins.self.mainPanelSkin");
    })(self = skins.self || (skins.self = {}));
})(skins || (skins = {}));
