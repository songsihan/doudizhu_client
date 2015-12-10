var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var MainPanel = (function (_super) {
        __extends(MainPanel, _super);
        function MainPanel() {
            _super.call(this);
            //当前玩家所拥有的牌
            this.cardNos = [];
            //已展示的卡牌数量
            this.cardCnt = 0;
            //被选中的卡牌
            this.selectCards = [];
            this.value_x = -1;
            this.putvalue_x = -1;
            this.uidToPos = [];
            this.panelStatus = '';
            this.sound = true;
            this.playTipFlag = false;
            //  指定当前类的皮肤名称
            //  Assign the skin name used by this Component
            this.skinName = skins.self.mainPanelSkin;
        }
        var d = __define,c=MainPanel;p=c.prototype;
        MainPanel.getInstance = function () {
            if (MainPanel._instance == null) {
                MainPanel._instance = new MainPanel();
            }
            return MainPanel._instance;
        };
        //初始化时调用
        p.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
            this.depositBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.deposit, this);
            this.leaveBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.leave, this);
        };
        p.leave = function () {
            game.LogUtil.log('MainPanel_leave');
            game.TimerUtil.getInstance().timer.stop();
            game.WSocket.getInstance().ws.close();
            liubawan.LiubawanEgretInterface.getInstance().quitGameComplete();
        };
        p.deposit = function (chg) {
            if (chg === void 0) { chg = 0; }
            var table = game.ModelCache.getInstance().getTable();
            var player = game.ModelCache.getInstance().getPlayer();
            var st = 1;
            if (chg > 0 && table.playerSt[player.uid] != game.Constants.PLAYER_DEPOSIT) {
                return;
            }
            if (table.playerSt[player.uid] == game.Constants.PLAYER_DEPOSIT) {
                table.playerSt[player.uid] = game.Constants.PLAYER_UN_DEPOSIT;
                MainPanel.getInstance().depositBtn.label = '托 管';
                MainPanel.getInstance().robot3.visible = false;
                st = 0; //未托管
            }
            else {
                table.playerSt[player.uid] = game.Constants.PLAYER_DEPOSIT;
                MainPanel.getInstance().depositBtn.label = '取消托管';
                MainPanel.getInstance().robot3.visible = true;
            }
            var selfevent = new game.SelfEvent(game.SelfEvent.DEPOSIT);
            selfevent.test = st;
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
        };
        /**
         * 玩家登录成功，更新玩家的面板信息
         * game.LogUtil.log(typeof this);this和target为ProxyListener
         * game.LogUtil.log(this);
         */
        p.updatePlayer = function (event) {
            game.LogUtil.log('updatePlayer');
        };
        p.setPng = function () {
            var users = game.ModelCache.getInstance().getUsers();
            var uidToPos = game.MainPanel.getInstance().uidToPos;
            for (var key in users) {
                var pos = uidToPos[users[key].id];
                var img = game.ModelCache.getInstance().getImg(users[key].headImg);
                if (img) {
                    if (pos == 1) {
                        this.png1.source = img;
                    }
                    else if (pos == 2) {
                        this.png2.source = img;
                    }
                    else {
                        this.png3.source = img;
                    }
                }
            }
        };
        /**
         * 牌局建立，初始化牌局的面板信息
         */
        p.initTable = function (event) {
            game.LogUtil.log('initTable');
            var table = game.ModelCache.getInstance().getTable();
            var player = game.ModelCache.getInstance().getPlayer();
            MainPanel.getInstance().name3.text = player.name;
            MainPanel.getInstance().score3.text = player.score;
            //            GameLayer.getInstance().rmLayer(GameLayer.START_LAYER);
            MainPanel.getInstance().robot1.visible = false;
            MainPanel.getInstance().robot2.visible = false;
            MainPanel.getInstance().robot3.visible = false;
            MainPanel.getInstance().player1.visible = false;
            MainPanel.getInstance().player2.visible = false;
            MainPanel.getInstance().player3.visible = false;
            MainPanel.getInstance().leave1.visible = false;
            MainPanel.getInstance().leave2.visible = false;
            MainPanel.getInstance().leave3.visible = false;
            if (game.MainPanel.getInstance().panelStatus == 'reConn'
                || table.tableSt == game.Constants.TABLE_LANDLORD) {
                MainPanel.getInstance().end.removeAllElements();
                MainPanel.getInstance().group1.removeAllElements();
                MainPanel.getInstance().group2.removeAllElements();
                MainPanel.getInstance().landlord.removeAllElements();
                MainPanel.getInstance().now_cards.removeAllElements();
                MainPanel.getInstance().cards.removeAllElements();
                MainPanel.getInstance().cardCnt = 0;
                MainPanel.getInstance().depositBtn.label = '托 管';
                //                MainPanel.getInstance().depositBtn.skinName = skins.components.DepositSkin;
                MainPanel.getInstance().robot3.visible = false;
                MainPanel.getInstance().value_x = -1;
                MainPanel.getInstance().putvalue_x = -1;
                MainPanel.getInstance().p1.source = 'cardback_small_png';
                MainPanel.getInstance().p2.source = 'cardback_small_png';
                MainPanel.getInstance().p3.source = 'cardback_small_png';
                var selfUid = game.ModelCache.getInstance().getUid();
                MainPanel.getInstance().base.text = table.baseSc;
                game.MainPanel.getInstance().multiple.text = table.multiple;
                //                var index = table.uids.indexOf(selfUid);
                var index = game.Func.getArrIndex(table.uids, selfUid);
                var uidToPos = [];
                var uid2Pos = Number(index) - 1;
                var uid1Pos = Number(index) + 1;
                var uid2Pos = uid2Pos < 0 ? 2 : uid2Pos;
                var uid1Pos = uid1Pos > 2 ? 0 : uid1Pos;
                var uid1 = table.uids[uid1Pos];
                var uid2 = table.uids[uid2Pos];
                //                game.LogUtil.log(selfUid+"_"+uid1Pos + "_" + uid2Pos + "_" + index+"_uid1:"+uid1+"_uid2:"+uid2);
                uidToPos[uid1] = 1;
                uidToPos[uid2] = 2;
                uidToPos[selfUid] = 3;
                MainPanel.getInstance().uidToPos = uidToPos;
                MainPanel.getInstance().setPng();
                //玩家手牌
                MainPanel.getInstance().cardNos = table.selfCardNos;
                //其他玩家手牌数
                //其他玩家信息
                var player1 = table.playerInfos[uid1];
                MainPanel.getInstance().name1.text = player1.name;
                MainPanel.getInstance().score1.text = player1.score;
                var size1 = table.cardNums[uid1];
                MainPanel.getInstance().bgSize1.text = size1;
                //                MainPanel.getInstance().cards1.skinName = new skin.CurrCardSkin([],size1);
                var player2 = table.playerInfos[uid2];
                MainPanel.getInstance().name2.text = player2.name;
                MainPanel.getInstance().score2.text = player2.score;
                var size2 = table.cardNums[uid2];
                MainPanel.getInstance().bgSize2.text = size2;
                //                MainPanel.getInstance().cards2.skinName = new skin.CurrCardSkin([],size2);
                game.TimerUtil.getInstance().addObj('me', MainPanel.getInstance(), 100);
            }
        };
        p.exeTimer = function () {
            game.LogUtil.log('initTable_me_exeTimer');
            var cnt = this.cardNos.length;
            if (this.cardCnt < cnt) {
                this.value_x += this.value_x == -1 ? 1 : 36;
                var cardNo = this.cardNos[this.cardCnt];
                var card = new egret.gui.UIAsset();
                card.id = String(cardNo);
                card.height = 106;
                card.width = 68;
                card.verticalCenter = 0;
                card.source = game.CommonData.getCardPng(cardNo);
                card.x = this.value_x;
                card.touchEnabled = true;
                card.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCardClick, this);
                card.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onCardBegin, this);
                card.addEventListener(egret.TouchEvent.TOUCH_END, this.onCardEnd, this);
                this.cards.addElement(card);
                this.cardCnt += 1;
            }
            else {
                game.TimerUtil.getInstance().rmObj('me');
                var table = game.ModelCache.getInstance().getTable();
                var player = game.ModelCache.getInstance().getPlayer();
                var opUid = table.currOpUid;
                if (opUid == player.uid) {
                    var landLayer = new game.LandlordLayer(true);
                    this.landlord.addElement(landLayer);
                }
                else {
                    var landLayer = new game.LandlordLayer(false);
                    var pos = this.uidToPos[opUid];
                    if (pos == 1) {
                        this.group1.addElement(landLayer);
                    }
                    else {
                        this.group2.addElement(landLayer);
                    }
                }
            }
        };
        p.onCardBegin = function (event) {
            this.beginCard = event.target;
        };
        p.onCardEnd = function (event) {
            var endCard = event.target;
            var max = Math.max(endCard.id, this.beginCard.id);
            var min = Math.min(endCard.id, this.beginCard.id);
            if (max == min) {
                return;
            }
            for (var key in MainPanel.getInstance().cards.$children) {
                var no = MainPanel.getInstance().cards.$children[key].id;
                if (no >= min && no <= max) {
                    MainPanel.getInstance().cards.$children[key].verticalCenter += MainPanel.getInstance().cards.$children[key].verticalCenter < 0 ? 10 : -10;
                    if (MainPanel.getInstance().cards.$children[key].verticalCenter == 0) {
                        var index = game.Func.getArrIndex(this.selectCards, MainPanel.getInstance().cards.$children[key]);
                        if (index != -1) {
                            this.selectCards.splice(index, 1);
                        }
                    }
                    else {
                        this.selectCards.splice(0, 0, MainPanel.getInstance().cards.$children[key]);
                    }
                }
            }
            game.LogUtil.log(skin.CardSort.cardsToIds(this.selectCards));
        };
        p.onCardClick = function (event) {
            event.target.verticalCenter = event.target.verticalCenter == 0 ? -10 : 0;
            if (event.target.verticalCenter == 0) {
                //                var index:number = this.selectCards.indexOf(event.target);
                var index = game.Func.getArrIndex(this.selectCards, event.target);
                if (index != -1) {
                    this.selectCards.splice(index, 1);
                }
            }
            else {
                this.selectCards.splice(0, 0, event.target);
            }
            game.LogUtil.log(skin.CardSort.cardsToIds(this.selectCards));
        };
        p.updateTable = function (event) {
            var table = game.ModelCache.getInstance().getTable();
            var player = game.ModelCache.getInstance().getPlayer();
            //            var main = MainPanel.getInstance();
            game.LogUtil.log('updateTable_' + table.tableSt);
            var lUid = table.lUid;
            MainPanel.getInstance().multiple.text = table.multiple;
            //倍数翻倍 效果
            if (table.tableSt == game.Constants.TABLE_IN_GAME) {
                if (MainPanel.getInstance().panelStatus == 'reConn') {
                    MainPanel.getInstance().cardNos = table.selfCardNos;
                    MainPanel.getInstance().resetCards(threeCards);
                }
                if (MainPanel.getInstance().panelStatus == 'cardIsReset') {
                    return;
                }
                MainPanel.getInstance().player1.visible = true;
                MainPanel.getInstance().player2.visible = true;
                MainPanel.getInstance().player3.visible = true;
                MainPanel.getInstance().panelStatus = 'cardIsReset';
                game.TimerUtil.getInstance().rmObj('landlord');
                var threeCards = table.threeCards;
                MainPanel.getInstance().p1.source = game.CommonData.getCardPng(threeCards[0]);
                MainPanel.getInstance().p2.source = game.CommonData.getCardPng(threeCards[1]);
                MainPanel.getInstance().p3.source = game.CommonData.getCardPng(threeCards[2]);
                MainPanel.getInstance().player1.skinName = skins.components.Bitmap_NongMinSkin;
                MainPanel.getInstance().player2.skinName = skins.components.Bitmap_NongMinSkin;
                MainPanel.getInstance().player3.skinName = skins.components.Bitmap_NongMinSkin;
                MainPanel.getInstance().group1.removeAllElements();
                MainPanel.getInstance().group2.removeAllElements();
                MainPanel.getInstance().landlord.removeAllElements();
                if (player.uid == lUid) {
                    MainPanel.getInstance().player3.skinName = skins.components.Bitmap_DiZhuSkin;
                    var threeCards = table.threeCards;
                    MainPanel.getInstance().cardNos = table.selfCardNos;
                    MainPanel.getInstance().resetCards(threeCards);
                    var playLayer = new game.PlayLayer(true);
                    MainPanel.getInstance().landlord.addElement(playLayer);
                }
                else {
                    var playLayer = new game.PlayLayer(false); //初始化计时器显示
                    var pos = MainPanel.getInstance().uidToPos[lUid];
                    if (pos == 1) {
                        MainPanel.getInstance().player1.skinName = skins.components.Bitmap_DiZhuSkin;
                        MainPanel.getInstance().group1.addElement(playLayer);
                        MainPanel.getInstance().bgSize1.text = table.cardNums[lUid];
                    }
                    else {
                        MainPanel.getInstance().player2.skinName = skins.components.Bitmap_DiZhuSkin;
                        MainPanel.getInstance().group2.addElement(playLayer);
                        MainPanel.getInstance().bgSize2.text = table.cardNums[lUid];
                    }
                }
            }
            else {
                //重置已操作玩家显示
                var lastOpUid = table.lastOpUid;
                //                if(lastOpUid != player.uid)
                {
                    var lastPos = MainPanel.getInstance().uidToPos[lastOpUid];
                    var landLayer = new game.LandlordLayer(false, true);
                    if (lastPos == 3) {
                        MainPanel.getInstance().landlord.removeAllElements();
                        MainPanel.getInstance().landlord.addElement(landLayer);
                    }
                    else if (lastPos == 1) {
                        MainPanel.getInstance().group1.removeAllElements();
                        MainPanel.getInstance().group1.addElement(landLayer);
                    }
                    else {
                        MainPanel.getInstance().group2.removeAllElements();
                        MainPanel.getInstance().group2.addElement(landLayer);
                    }
                    //                    landLayer.horizontalCenter = 0;
                    //                    landLayer.label.text = lastOpUid == lUid?"抢地主":"不抢";
                    //                    this.horizontalCenter = 0;
                    landLayer.tip.source =
                        game.CommonData.getLandPng((lastOpUid == lUid) ? table.multiple : 0);
                    game.TimerUtil.getInstance().rmObj('landlord');
                }
                //转换当前操作者到操作状态
                var opUid = table.currOpUid;
                if (opUid == player.uid) {
                    MainPanel.getInstance().landlord.removeAllElements();
                    var landLayer = new game.LandlordLayer(true);
                    MainPanel.getInstance().landlord.addElement(landLayer);
                }
                else {
                    var landLayer = new game.LandlordLayer(false);
                    var pos = MainPanel.getInstance().uidToPos[opUid];
                    if (pos == 1) {
                        MainPanel.getInstance().group1.removeAllElements();
                        MainPanel.getInstance().group1.addElement(landLayer);
                    }
                    else {
                        MainPanel.getInstance().group2.removeAllElements();
                        MainPanel.getInstance().group2.addElement(landLayer);
                    }
                }
            }
        };
        p.updateTablePlay = function (event) {
            var depositUid = event.test; //托管玩家
            var leaveUid = event.test1;
            var table = game.ModelCache.getInstance().getTable();
            var player = game.ModelCache.getInstance().getPlayer();
            game.LogUtil.log('updateTablePlay_' + table.tableSt);
            var lUid = table.lUid;
            game.MainPanel.getInstance().multiple.text = table.multiple;
            //倍数翻倍 效果
            MainPanel.getInstance().end.removeAllElements();
            if (table.tableSt != game.Constants.TABLE_LANDLORD) {
                if (leaveUid != 'no') {
                    var pos = MainPanel.getInstance().uidToPos[depositUid];
                    if (pos == 3) {
                        MainPanel.getInstance().depositBtn.label = '取消托管';
                        MainPanel.getInstance().robot3.visible = false;
                        MainPanel.getInstance().leave3.visible = true;
                    }
                    else if (pos == 1) {
                        MainPanel.getInstance().robot1.visible = false;
                        MainPanel.getInstance().leave1.visible = true;
                    }
                    else if (pos == 2) {
                        MainPanel.getInstance().robot2.visible = false;
                        MainPanel.getInstance().leave2.visible = true;
                    }
                }
                else if (depositUid != 'no') {
                    var pos = MainPanel.getInstance().uidToPos[depositUid];
                    if (pos == 3) {
                        MainPanel.getInstance().depositBtn.label = '取消托管';
                        //                        MainPanel.getInstance().depositBtn.skinName = skins.components.UnDepositSkin;
                        MainPanel.getInstance().robot3.visible = true;
                        MainPanel.getInstance().leave3.visible = false;
                    }
                    else if (pos == 1) {
                        MainPanel.getInstance().robot1.visible = true;
                        MainPanel.getInstance().leave1.visible = false;
                    }
                    else if (pos == 2) {
                        MainPanel.getInstance().robot2.visible = true;
                        MainPanel.getInstance().leave2.visible = false;
                    }
                }
                //重置已操作玩家显示
                if (player.uid == table.lastOpUid) {
                    game.TimerUtil.getInstance().rmObj('play');
                    var panelCards = MainPanel.getInstance().cardNos;
                    var selfCards = table.selfCardNos;
                    if (panelCards.length != selfCards.length) {
                        MainPanel.getInstance().cardNos = skin.CardSort.sort(selfCards);
                    }
                    //                    SoundUtil.playCardSound(table.playCardType);
                    MainPanel.getInstance().landlord.removeAllElements();
                    MainPanel.getInstance().now_cards.removeAllElements();
                    MainPanel.getInstance().selectCards = [];
                    MainPanel.getInstance().resetCards();
                    if (player.uid == table.lastPlayCardUid) {
                        game.SoundUtil.playCardSound(table.playCardType);
                        MainPanel.getInstance().now_cards.skinName = new skin.CurrCardSkin(table.lastCardNos);
                        MainPanel.getInstance().now_cards.horizontalCenter = 0;
                    }
                    else {
                        var tip = new egret.gui.SkinnableComponent();
                        MainPanel.getInstance().landlord.addElement(tip);
                        tip.skinName = game.MainPanel.getInstance().playTipFlag ? skins.components.CardTip1Skin : skins.components.CardTip2Skin;
                        tip.horizontalCenter = 0;
                        tip.verticalCenter = 0;
                    }
                }
                else {
                    game.TimerUtil.getInstance().rmObj('play');
                    var pos = MainPanel.getInstance().uidToPos[table.lastOpUid];
                    if (pos == 1) {
                        MainPanel.getInstance().group1.removeAllElements();
                        if (table.lastOpUid == table.lastPlayCardUid) {
                            game.SoundUtil.playCardSound(table.playCardType);
                            var play_cards = new egret.gui.SkinnableContainer();
                            play_cards.skinName = new skin.CurrCardSkin(table.lastCardNos);
                            MainPanel.getInstance().group1.addElement(play_cards);
                            play_cards.x = 0;
                            var text = (isNaN(table.cardNums[table.lastOpUid]) ? '0' : table.cardNums[table.lastOpUid]);
                            MainPanel.getInstance().bgSize2.text = text;
                        }
                        else {
                            game.SoundUtil.playSound(1);
                            var tip = new egret.gui.SkinnableComponent();
                            MainPanel.getInstance().group1.addElement(tip);
                            tip.skinName = skins.components.CardTip2Skin;
                            tip.horizontalCenter = 0;
                        }
                    }
                    else {
                        MainPanel.getInstance().group2.removeAllElements();
                        if (table.lastOpUid == table.lastPlayCardUid) {
                            game.SoundUtil.playCardSound(table.playCardType);
                            var play_cards = new egret.gui.SkinnableContainer();
                            play_cards.skinName = new skin.CurrCardSkin(table.lastCardNos);
                            MainPanel.getInstance().group2.addElement(play_cards);
                            play_cards.right = 0;
                            var text = (isNaN(table.cardNums[table.lastOpUid]) ? '0' : table.cardNums[table.lastOpUid]);
                            MainPanel.getInstance().bgSize2.text = text;
                        }
                        else {
                            game.SoundUtil.playSound(1);
                            //                            var tipLayer = new TipLayer();
                            var tip = new egret.gui.SkinnableComponent();
                            MainPanel.getInstance().group2.addElement(tip);
                            //                            tipLayer.label.text = "不出";
                            tip.skinName = skins.components.CardTip2Skin;
                            tip.horizontalCenter = 0;
                        }
                    }
                }
                if (table.tableSt == game.Constants.TABLE_END) {
                    if (table.winUid == player.uid) {
                        MainPanel.getInstance().cards.removeAllElements();
                    }
                    //打开结算界面-继续游戏jt请求
                    game.LogUtil.log('table is end!!!');
                    var isWin = false;
                    if (table.winUid == player.uid ||
                        (table.lUid != player.uid && table.winUid != table.lUid)) {
                        isWin = true;
                    }
                    var nowTime = new Date().getTime();
                    while (new Date().getTime() - nowTime <= 2000) {
                        continue;
                    }
                    var endLayer = new game.EndLayer(isWin);
                    MainPanel.getInstance().end.addElement(endLayer);
                    endLayer.horizontalCenter = 0;
                    return;
                }
                //转换当前操作者到操作状态
                var opUid = table.currOpUid;
                if (opUid == player.uid) {
                    MainPanel.getInstance().landlord.removeAllElements();
                    MainPanel.getInstance().now_cards.skinName = new egret.gui.Skin();
                    var playLayer = new game.PlayLayer(true);
                    MainPanel.getInstance().landlord.addElement(playLayer);
                }
                else {
                    var playLayer = new game.PlayLayer(false);
                    var pos = MainPanel.getInstance().uidToPos[opUid];
                    if (pos == 1) {
                        MainPanel.getInstance().group1.removeAllElements();
                        MainPanel.getInstance().group1.addElement(playLayer);
                    }
                    else {
                        MainPanel.getInstance().group2.removeAllElements();
                        MainPanel.getInstance().group2.addElement(playLayer);
                    }
                }
            }
        };
        p.resetCards = function (selectCards) {
            if (selectCards === void 0) { selectCards = []; }
            this.cards.removeAllElements();
            this.value_x = -1;
            for (var key in this.cardNos) {
                this.value_x += this.value_x == -1 ? 1 : 36;
                var cardNo = this.cardNos[key];
                var card = new egret.gui.UIAsset();
                card.height = 106;
                card.width = 68;
                card.verticalCenter = 0;
                card.id = String(cardNo);
                card.source = game.CommonData.getCardPng(cardNo);
                card.x = this.value_x;
                card.touchEnabled = true;
                card.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCardClick, this);
                card.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onCardBegin, this);
                card.addEventListener(egret.TouchEvent.TOUCH_END, this.onCardEnd, this);
                if (game.Func.getArrIndex(selectCards, cardNo) >= 0) {
                    card.verticalCenter -= 10;
                    this.selectCards.splice(0, 0, card);
                }
                this.cards.addElement(card);
            }
        };
        return MainPanel;
    })(egret.gui.SkinnableContainer);
    game.MainPanel = MainPanel;
    egret.registerClass(MainPanel,"game.MainPanel");
})(game || (game = {}));
