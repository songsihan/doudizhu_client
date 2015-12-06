var skin;
(function (skin) {
    var CurrCardSkin = (function (_super) {
        __extends(CurrCardSkin, _super);
        function CurrCardSkin(_cardNos, size) {
            if (size === void 0) { size = 0; }
            _super.call(this);
            /**和组件中的定义相对应，确定皮肤应该具备哪些部件*/
            this.skinParts = ["contentGroup"];
            this.putvalue_x = -1;
            this.size = 0;
            this.cardNos = _cardNos;
            this.size = size;
        }
        var d = __define,c=CurrCardSkin;p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            if (this.size > 0) {
                for (var i = 0; i < this.size; i++) {
                    this.addCardUI(i);
                }
            }
            else {
                for (var pos in this.cardNos) {
                    this.addCardUI(this.cardNos[pos]);
                }
            }
            //contentGroup必须有，否则你添加到SkinnableContainer的对象是显示不出来的
            this.contentGroup = new egret.gui.Group();
            this.addElement(this.contentGroup);
        };
        p.addCardUI = function (cardNo) {
            var card = new egret.gui.UIAsset();
            if (this.size > 0) {
                this.putvalue_x += this.putvalue_x == -1 ? 1 : 3;
                card.height = 35;
                card.width = 20;
                card.source = "cardback_small_png";
            }
            else {
                this.putvalue_x += this.putvalue_x == -1 ? 1 : 18;
                card.height = 88;
                card.width = 66;
                card.source = game.CommonData.getCardPng(cardNo);
            }
            card.verticalCenter = 0;
            card.x = this.putvalue_x;
            this.addElement(card);
        };
        return CurrCardSkin;
    })(egret.gui.Skin);
    skin.CurrCardSkin = CurrCardSkin;
    egret.registerClass(CurrCardSkin,"skin.CurrCardSkin");
})(skin || (skin = {}));
