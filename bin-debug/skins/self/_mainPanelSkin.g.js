var skins;
(function (skins) {
    var self;
    (function (self) {
        var _mainPanelSkin = (function (_super) {
            __extends(_mainPanelSkin, _super);
            function _mainPanelSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [600, 800]);
                this.elementsContent = [this.__3_i(), this.bt0_i(), this.bt2_i(), this.bgSize2_i(), this.score3_i(), this.name3_i(), this.name2_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.cards_i(), this.bt1_i(), this.player1_i(), this.player3_i(), this.player2_i(), this.__7_i(), this.name1_i(), this.score1_i(), this.score2_i(), this.bgSize1_i(), this.bg1_i(), this.bg2_i(), this.__8_i(), this.__9_i(), this.now_cards_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=_mainPanelSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return _mainPanelSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [17, "gold_png", 17, 14, 440]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [17, "gold_png", 17, 700, 221]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [88, 0, 196, 6]);
                t.elementsContent = [this.p1_i(), this.p2_i(), this.p3_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [17, "gold_png", 17, 14, 221]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.SkinnableComponent();
                this.__s(t, ["height", "skinName", "width", "x", "y"], [76, skins.components.readySkin, 88, 130, 184]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.SkinnableComponent();
                this.__s(t, ["height", "skinName", "width", "x", "y"], [76, skins.components.readySkin, 88, 588, 184]);
                return t;
            };
            p.bg1_i = function () {
                var t = new egret.gui.SkinnableComponent();
                this.bg1 = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [53, skins.components.cardSkin, 41, 33, 260]);
                return t;
            };
            p.bg2_i = function () {
                var t = new egret.gui.SkinnableComponent();
                this.bg2 = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [53, skins.components.cardSkin, 41, 724, 260]);
                return t;
            };
            p.bgSize1_i = function () {
                var t = new egret.gui.Label();
                this.bgSize1 = t;
                this.__s(t, ["height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [22, 10, "0", "center", "middle", 21, 75, 274]);
                return t;
            };
            p.bgSize2_i = function () {
                var t = new egret.gui.Label();
                this.bgSize2 = t;
                this.__s(t, ["height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [22, 10, "0", "center", "middle", 21, 700, 274]);
                return t;
            };
            p.bt0_i = function () {
                var t = new egret.gui.Button();
                this.bt0 = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.components.ButtonSkin, 341, 172]);
                return t;
            };
            p.bt1_i = function () {
                var t = new egret.gui.Button();
                this.bt1 = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.components.ButtonSkin, 340, 103]);
                return t;
            };
            p.bt2_i = function () {
                var t = new egret.gui.Button();
                this.bt2 = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.components.ButtonSkin, 340, 138]);
                return t;
            };
            p.cards_i = function () {
                var t = new egret.gui.Group();
                this.cards = t;
                this.__s(t, ["height", "horizontalCenter", "y"], [88, 0, 503]);
                return t;
            };
            p.name1_i = function () {
                var t = new egret.gui.Label();
                this.name1 = t;
                this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [true, "Arial Baltic", 19, 12, "玩家1", "center", "middle", 80, 17, 238]);
                return t;
            };
            p.name2_i = function () {
                var t = new egret.gui.Label();
                this.name2 = t;
                this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [true, "Arial Baltic", 22, 12, "玩家2", "center", "middle", 80, 704, 237]);
                return t;
            };
            p.name3_i = function () {
                var t = new egret.gui.Label();
                this.name3 = t;
                this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [true, "Arial Baltic", 19, 12, "玩家3", "center", "middle", 80, 17, 457]);
                return t;
            };
            p.now_cards_i = function () {
                var t = new egret.gui.SkinnableContainer();
                this.now_cards = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "width", "y"], [76, 0, skins.components.ContainerSkin, 88, 390]);
                return t;
            };
            p.p1_i = function () {
                var t = new egret.gui.UIAsset();
                this.p1 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 132, "cardback_small_png", 0]);
                return t;
            };
            p.p2_i = function () {
                var t = new egret.gui.UIAsset();
                this.p2 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top", "y"], [0, 66, 66, "cardback_small_png", 0, 10]);
                return t;
            };
            p.p3_i = function () {
                var t = new egret.gui.UIAsset();
                this.p3 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top", "y"], [0, 132, 0, "cardback_small_png", 0, 20]);
                return t;
            };
            p.player1_i = function () {
                var t = new egret.gui.SkinnableComponent();
                this.player1 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.components.Bitmap_NongMinSkin, 14, 138]);
                return t;
            };
            p.player2_i = function () {
                var t = new egret.gui.SkinnableComponent();
                this.player2 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.components.Bitmap_NongMinSkin, 700, 138]);
                return t;
            };
            p.player3_i = function () {
                var t = new egret.gui.SkinnableComponent();
                this.player3 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.components.Bitmap_NongMinSkin, 14, 357]);
                return t;
            };
            p.score1_i = function () {
                var t = new egret.gui.Label();
                this.score1 = t;
                this.__s(t, ["height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [17, 10, "0", "center", "middle", 68, 27, 221]);
                return t;
            };
            p.score2_i = function () {
                var t = new egret.gui.Label();
                this.score2 = t;
                this.__s(t, ["height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [17, 10, "0", "center", "middle", 68, 713, 221]);
                return t;
            };
            p.score3_i = function () {
                var t = new egret.gui.Label();
                this.score3 = t;
                this.__s(t, ["height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [17, 10, "0", "center", "middle", 68, 27, 440]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "bg_blue_big_png", 0]);
                return t;
            };
            _mainPanelSkin._skinParts = ["bt0", "bt2", "bgSize2", "score3", "name3", "name2", "p1", "p2", "p3", "cards", "bt1", "player1", "player3", "player2", "name1", "score1", "score2", "bgSize1", "bg1", "bg2", "now_cards"];
            return _mainPanelSkin;
        })(egret.gui.Skin);
        self._mainPanelSkin = _mainPanelSkin;
        egret.registerClass(_mainPanelSkin,"skins.self._mainPanelSkin");
    })(self = skins.self || (skins.self = {}));
})(skins || (skins = {}));
