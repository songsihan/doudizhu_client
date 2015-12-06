var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var _MainPanel = (function (_super) {
        __extends(_MainPanel, _super);
        function _MainPanel() {
            _super.call(this);
            this.value_x = -1;
            this.putvalue_x = -1;
            this.cardNos = [
                31, 32, 33, 34,
                41, 42, 43, 44,
                51, 52, 53, 54,
                61, 62, 63, 64,
                71, 72, 73, 74,
                81, 82, 83, 84,
                91, 92, 93, 94,
                101, 102, 103, 104,
                111, 112, 113, 114,
                121, 122, 123, 124,
                131, 132, 133, 134,
                141, 142, 143, 144,
                151, 152, 153, 154,
                161, 162
            ];
            this.unCardNos = [];
            this.selectCards = [];
            //  指定当前类的皮肤名称
            //  Assign the skin name used by this Component
            this.skinName = skins.self.mainPanelSkin;
        }
        var d = __define,c=_MainPanel;p=c.prototype;
        //初始化时调用
        p.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
            //console.log('t1'); 
            //console.log('t2');
            this.bt1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
            this.bt2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick2, this);
            this.bt0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick0, this);
            this.addEventListener(game.SelfEvent.TEST, this.onTestEvent, this);
        };
        p.onTestEvent = function (event) {
            console.log("data:" + event.test + ' onTestEvent!!!!');
        };
        p.onButtonClick0 = function (event) {
            //            this.alpha = this.alpha == 0.5?1:0.5;
            var card = this.cards.getElementAt(1);
            //            card.verticalCenter -= 20;
            //            this.cards.removeElement(card);
            //            this.cards.addElementAt(card,1);
            console.log(this.hasEventListener(game.SelfEvent.TEST));
            var selfevent = new game.SelfEvent(game.SelfEvent.TEST);
            selfevent.test = 100;
            this.dispatchEvent(selfevent);
        };
        p.onButtonClick = function (event) {
            //Math   Date
            //            this.p1.source = this.p1.source == "cardback_small_png" ? "spades10_png":"cardback_small_png";
            //            this.p2.source = this.p2.source == "cardback_small_png" ? "redheart10_png":"cardback_small_png";
            //            this.p3.source = this.p3.source == "cardback_small_png" ? "plum10_png":"cardback_small_png";
            this.player1.skinName = this.player1.skinName == skins.components.Bitmap_NongMinSkin ? skins.components.Bitmap_DiZhuSkin : skins.components.Bitmap_NongMinSkin;
            this.name1.text = Math.floor(Date.now() / 1000);
            this.num = Number(this.score1.text) + 10;
            //            console.log('num type:'+ typeof this.num)
            this.score1.text = this.num;
            //            this.p1.$update();
            //            this.p2.$update();
            //            this.p3.$update();
            //            console.log('t3:' + this.p1.source);
            //            egret.gui.Alert.show("echo bt " + event.target);
            this.value_x += this.value_x == -1 ? 1 : 18;
            var index = Math.floor(Math.random() * this.cardNos.length);
            var cardNo = this.cardNos[index];
            this.unCardNos.push(cardNo);
            this.cardNos.splice(index, 1);
            //            console.log(cardNo + ' cardNos:' + this.cardNos.toString());
            var card = new egret.gui.UIAsset();
            card.height = 88;
            card.width = 66;
            card.verticalCenter = 0;
            card.source = game.CommonData.getCardPng(cardNo);
            card.x = this.value_x;
            card.touchEnabled = true;
            card.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCardClick, this);
            card.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onCardMove, this);
            this.cards.addElement(card);
            this.bg1.skinName = this.bg1.skinName == '' ? skins.components.cardSkin : '';
            //            console.log('source:' + this.bg1.skinName);            
            this.bgSize1.text = this.bgSize1.text == '' ? '0' : '';
        };
        p.onCardClick = function (event) {
            event.target.verticalCenter += event.target.verticalCenter < 0 ? 10 : -10;
            if (event.target.verticalCenter > 0) {
                var index = this.selectCards.indexOf(event.target);
                alert(index);
                this.selectCards.splice(index, 1);
            }
            else {
                this.selectCards.splice(0, 0, event.target);
            }
        };
        p.onCardMove = function (event) {
            event.target.verticalCenter += event.target.verticalCenter < 0 ? 10 : -10;
        };
        //当前出的卡牌
        p.onButtonClick2 = function (event) {
            console.log('index:' + this.getElementIndex(this.now_cards));
            if (this.getElementIndex(this.now_cards) >= 0) {
                this.removeElement(this.now_cards);
            }
            var cardNos = [];
            for (var i = 0; i < 5; i++) {
                var index = Math.floor(Math.random() * this.unCardNos.length);
                var cardNo = this.unCardNos[index];
                cardNos.push(cardNo);
            }
            skin.CardSort.sort(cardNos);
            this.now_cards.skinName = new skin.CurrCardSkin(cardNos);
            this.now_cards.horizontalCenter = 0;
            //            this.addElement(this.now_cards);
            //            this.now_cards.skinName = skins.components.ContainerSkin;
            //            this.now_cards.width = 388;
            //            this.now_cards.height = 76;
            //            this.now_cards.y = 389;
            //            this.now_cards.horizontalCenter = 0;
            //contentGroup必须有，否则你添加到SkinnableContainer的对象是显示不出来的
            //            this.contentGroup = new egret.gui.Group();
            //            this.now_cards.addElement(new egret.gui.Group());
        };
        return _MainPanel;
    })(egret.gui.SkinnableContainer);
    game._MainPanel = _MainPanel;
    egret.registerClass(_MainPanel,"game._MainPanel");
})(game || (game = {}));
