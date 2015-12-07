var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var PlayLayer = (function (_super) {
        __extends(PlayLayer, _super);
        function PlayLayer(isSelf) {
            _super.call(this);
            this.promptArr = [];
            this.promptIndex = 0;
            if (isSelf) {
                this.skinName = skins.components.playerPlaySkin;
            }
            else {
                this.skinName = skins.components.ClockSkin;
            }
        }
        var d = __define,c=PlayLayer;p=c.prototype;
        //初始化时调用
        p.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
            game.TimerUtil.getInstance().addObj('play', this, 1000);
            this.clabel.text = String(25);
            var lastCardNos = game.ModelCache.getInstance().getTable().lastCardNos;
            if (lastCardNos.length == 0) {
                this.unPlayBtn.enabled = false;
                this.promptBtn.enabled = false;
            }
            else {
                this.unPlayBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onUnPlay, this);
                this.promptBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.prompt, this);
            }
            this.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlay, this);
        };
        p.onPlay = function () {
            this.label.text = '';
            game.LogUtil.log('onPlay');
            var selectCardNos = game.MainPanel.getInstance().selectCards;
            if (selectCardNos.length > 0) {
                selectCardNos = skin.CardSort.sortById(selectCardNos);
                var _cardNos = [];
                for (var key in selectCardNos) {
                    selectCardNos[key].verticalCenter = -10;
                    _cardNos.push(Number(selectCardNos[key].id));
                }
                var lastCardNos = game.ModelCache.getInstance().getTable().lastCardNos;
                var cardsData = skin.CardUtil.checkPlayCards(lastCardNos, _cardNos);
                //                                game.LogUtil.error("cardNos:"+_cardNos);
                //                game.LogUtil.log("len:"+_cardNos.length);
                //                game.LogUtil.log("cardNosToNums");
                //                game.LogUtil.log(skin.CardUtil.cardNosToNums(_cardNos));
                //                                game.LogUtil.error("getCardsData");
                //                                game.LogUtil.error(skin.CardUtil.getCardsData(_cardNos));
                //                var v = skin.CardUtil.checkCards(_cardNos);
                //                game.LogUtil.log("_cardNos");
                //                game.LogUtil.log(v==false?false:v);
                if (cardsData == false) {
                    var tip = new egret.gui.UIAsset();
                    tip.height = 35;
                    game.MainPanel.getInstance().landlord.addElement(tip);
                    tip.source = 'word_no_rule_png';
                    tip.horizontalCenter = 0;
                    return;
                }
                //                SoundUtil.playCardSound(cardsData);
                game.MainPanel.getInstance().landlord.removeAllElements();
                game.MainPanel.getInstance().now_cards.removeAllElements();
                game.TimerUtil.getInstance().rmObj('play');
                var selfevent = new game.SelfEvent(game.SelfEvent.PLAY);
                selfevent.test = {
                    op: 1, cards: _cardNos
                };
                game.ProxyListener.getInstance().dispatchEvent(selfevent);
                game.MainPanel.getInstance().now_cards.skinName = new skin.CurrCardSkin(_cardNos);
                game.MainPanel.getInstance().now_cards.horizontalCenter = 0;
                game.MainPanel.getInstance().selectCards = [];
                game.MainPanel.getInstance().cardNos = game.Func.mini(game.MainPanel.getInstance().cardNos, _cardNos);
                game.MainPanel.getInstance().resetCards();
                game.LogUtil.log("playCardNos:" + _cardNos);
            }
        };
        p.prompt = function () {
            this.label.text = '';
            if (this.promptArr.length == 0) {
                var lastCardNos = game.ModelCache.getInstance().getTable().lastCardNos;
                var table = game.ModelCache.getInstance().getTable();
                var player = game.ModelCache.getInstance().getPlayer();
                var cardNos = game.MainPanel.getInstance().cardNos;
                var cards = game.MainPanel.getInstance().cards;
                this.promptArr = skin.CardUtil.getPromptCards(lastCardNos, cardNos);
            }
            if (this.promptArr == null || this.promptArr.length == 0) {
                this.onUnPlay(1);
                return;
            }
            game.LogUtil.log(this.promptArr);
            var currPrompt = this.promptArr[this.promptIndex];
            //            game.LogUtil.log("currPrompt:" + currPrompt);
            game.MainPanel.getInstance().selectCards = [];
            for (var key in game.MainPanel.getInstance().cards.$children) {
                //                game.LogUtil.log(MainPanel.getInstance().cards);
                var no = game.MainPanel.getInstance().cards.$children[key].id;
                var index = game.Func.getArrIndex(currPrompt, no);
                //                game.LogUtil.log('index_no_len:' + index + "  " + no+" "+this.promptArr.length);
                if (index >= 0) {
                    game.MainPanel.getInstance().cards.$children[key].verticalCenter = -10;
                    game.MainPanel.getInstance().selectCards.push(game.MainPanel.getInstance().cards.$children[key]);
                }
                else {
                    game.MainPanel.getInstance().cards.$children[key].verticalCenter = 0;
                }
            }
            this.promptIndex++;
            this.promptIndex = (this.promptIndex >= this.promptArr.length ? 0 : this.promptIndex);
            //            game.LogUtil.log('prompt index:'+this.promptIndex+" len:"+this.promptArr.length);
        };
        p.onUnPlay = function (isTip) {
            if (isTip === void 0) { isTip = 0; }
            console.log(isTip);
            game.LogUtil.log('unPlay');
            game.TimerUtil.getInstance().rmObj('play');
            game.MainPanel.getInstance().landlord.removeAllElements();
            game.MainPanel.getInstance().now_cards.removeAllElements();
            var selfevent = new game.SelfEvent(game.SelfEvent.PLAY);
            selfevent.test = {
                op: 1, cards: []
            };
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
            game.MainPanel.getInstance().playTipFlag = (isTip > 0);
            var tip = new egret.gui.UIAsset();
            game.MainPanel.getInstance().landlord.addElement(tip);
            tip.source = (isTip > 0) ? 'word_nocardbig_png' : 'word_dontout_png';
            tip.horizontalCenter = 0;
            tip.verticalCenter = 0;
            tip.height = 35;
            for (var key in game.MainPanel.getInstance().cards.$children) {
                if (game.MainPanel.getInstance().cards.$children[key].verticalCenter < 0) {
                    game.MainPanel.getInstance().cards.$children[key].verticalCenter = 0;
                }
            }
            game.MainPanel.getInstance().selectCards = [];
        };
        p.exeTimer = function () {
            game.LogUtil.log('PlayLayer_exeTimer');
            if (this.clabel) {
                //                this.clabel.text = String(Number(this.clabel.text)-1);
                //                game.LogUtil.log('text:' + this.clabel.text);
                var num = Number(this.clabel.text) - 1;
                if (num < 10) {
                    this.clabel.text = '0' + String(num);
                }
                else {
                    this.clabel.text = String(num);
                }
                var table = game.ModelCache.getInstance().getTable();
                if (table.tableSt != game.Constants.TABLE_IN_GAME) {
                    game.TimerUtil.getInstance().rmObj('play');
                    return;
                }
                var player = game.ModelCache.getInstance().getPlayer();
                var st = table.playerSt[player.uid];
                //                game.LogUtil.log(st + "==="+table.currOpUid+" uid:"+player.uid);
                if (table.currOpUid == player.uid && st == game.Constants.PLAYER_DEPOSIT) {
                    var selfevent = new game.SelfEvent(game.SelfEvent.PLAY);
                    selfevent.test = {
                        op: 0, cards: []
                    };
                    game.ProxyListener.getInstance().dispatchEvent(selfevent);
                    this.removeAllElements();
                    game.TimerUtil.getInstance().rmObj('play');
                    return;
                }
                if (num <= 0) {
                    this.removeAllElements();
                    game.TimerUtil.getInstance().rmObj('play');
                }
            }
        };
        return PlayLayer;
    })(egret.gui.SkinnableContainer);
    game.PlayLayer = PlayLayer;
    egret.registerClass(PlayLayer,"game.PlayLayer");
})(game || (game = {}));
