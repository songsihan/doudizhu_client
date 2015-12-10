module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class PlayLayer extends egret.gui.SkinnableContainer{
        public clabel: egret.gui.Label;
        public label: egret.gui.Label;
        public playBtn: egret.gui.Button;
        public unPlayBtn: egret.gui.Button;
        public promptBtn: egret.gui.Button;
        public promptArr: any[]=[];
        public promptIndex: number = 0;
		public constructor(isSelf:Boolean) {
            super();
            if(isSelf)
            {
                this.skinName = skins.components.playerPlaySkin;
            }
            else
            {
                this.skinName = skins.components.ClockSkin;
            }
		}
        //初始化时调用
        public partAdded(partName:string, instance:any):void {
            super.partAdded(partName, instance);
            TimerUtil.getInstance().addObj('play',this,1000);
            var table = game.ModelCache.getInstance().getTable(); Math.ceil
            var passSecond = Math.ceil(new Date().getTime() / 1000 - table.rTime);
            var leftSecond = Math.max(0,20 - passSecond);
            this.clabel.text = String(leftSecond);
            var lastCardNos: number[] = game.ModelCache.getInstance().getTable().lastCardNos;
            if(lastCardNos.length == 0)
            {
                this.unPlayBtn.enabled = false;
                this.promptBtn.enabled = false;
            }
            else
            {
                this.unPlayBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onUnPlay,this);
                this.promptBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.prompt,this);
            }
            this.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onPlay,this);
        }
        
        public onPlay(){
            this.label.text = '';
            game.LogUtil.log('onPlay');

            MainPanel.getInstance().deposit(1);
            var selectCardNos = game.MainPanel.getInstance().selectCards;
            if(selectCardNos.length > 0)
            {
                selectCardNos = skin.CardSort.sortById(selectCardNos);
                var _cardNos = [];
                for(var key in selectCardNos)
                {
                    selectCardNos[key].verticalCenter = -10;
                    _cardNos.push(Number(selectCardNos[key].id));
                }
                var lastCardNos: number[] = game.ModelCache.getInstance().getTable().lastCardNos;
                var cardsData = skin.CardUtil.checkPlayCards(lastCardNos,_cardNos);
//                                game.LogUtil.error("cardNos:"+_cardNos);
                                
                //                game.LogUtil.log("len:"+_cardNos.length);
                //                game.LogUtil.log("cardNosToNums");
                //                game.LogUtil.log(skin.CardUtil.cardNosToNums(_cardNos));
                
//                                game.LogUtil.error("getCardsData");
//                                game.LogUtil.error(skin.CardUtil.getCardsData(_cardNos));
                                
                //                var v = skin.CardUtil.checkCards(_cardNos);
                //                game.LogUtil.log("_cardNos");
                //                game.LogUtil.log(v==false?false:v);
                if(cardsData == false)
                {
                    var tip = new egret.gui.SkinnableComponent();
                    tip.height = 35;
                    game.MainPanel.getInstance().landlord.addElement(tip);
                    tip.skinName = skins.components.CardTip3Skin;
                    tip.horizontalCenter = 0;
                    return;
                }
//                SoundUtil.playCardSound(cardsData);
                MainPanel.getInstance().landlord.removeAllElements();
                MainPanel.getInstance().now_cards.removeAllElements();
                TimerUtil.getInstance().rmObj('play');
                
                var selfevent: game.SelfEvent = new game.SelfEvent(SelfEvent.PLAY);
                selfevent.test = {
                    op: 1,cards: _cardNos
                };
                game.ProxyListener.getInstance().dispatchEvent(selfevent);
                
                MainPanel.getInstance().now_cards.skinName = new skin.CurrCardSkin(_cardNos);
                MainPanel.getInstance().now_cards.horizontalCenter = 0;                
                MainPanel.getInstance().selectCards = [];
                MainPanel.getInstance().cardNos = Func.mini(MainPanel.getInstance().cardNos,_cardNos);
                MainPanel.getInstance().resetCards();
                game.LogUtil.log("playCardNos:" + _cardNos);
            }
        }
        
        public prompt() {
            this.label.text = '';
            if(this.promptArr.length == 0) {
                var lastCardNos: number[] = game.ModelCache.getInstance().getTable().lastCardNos;
                var table = ModelCache.getInstance().getTable();
                var player = ModelCache.getInstance().getPlayer();
                var cardNos = MainPanel.getInstance().cardNos;
                var cards: egret.gui.Group = MainPanel.getInstance().cards;
                this.promptArr = skin.CardUtil.getPromptCards(lastCardNos,cardNos);
            }
            if(this.promptArr == null || this.promptArr.length == 0) {
                this.onUnPlay(1);
                return;
            }
            game.LogUtil.log(this.promptArr);
            var currPrompt: number[] = this.promptArr[this.promptIndex];
//            game.LogUtil.log("currPrompt:" + currPrompt);
            MainPanel.getInstance().selectCards = [];
            for(var key in MainPanel.getInstance().cards.$children)
            {
//                game.LogUtil.log(MainPanel.getInstance().cards);
                var no = MainPanel.getInstance().cards.$children[key].id
                var index = Func.getArrIndex(currPrompt,no);
//                game.LogUtil.log('index_no_len:' + index + "  " + no+" "+this.promptArr.length);
                if(index >= 0)
                {
                    MainPanel.getInstance().cards.$children[key].verticalCenter = -10;
                    MainPanel.getInstance().selectCards.push(MainPanel.getInstance().cards.$children[key]);
                }
                else
                {
                    MainPanel.getInstance().cards.$children[key].verticalCenter = 0;
                }
            }       
            this.promptIndex++;
            this.promptIndex = (this.promptIndex >= this.promptArr.length ? 0 : this.promptIndex);
//            game.LogUtil.log('prompt index:'+this.promptIndex+" len:"+this.promptArr.length);
            
        }
        public onUnPlay(isTip:number = 0){
            game.LogUtil.log('unPlay');
            TimerUtil.getInstance().rmObj('play');
            MainPanel.getInstance().landlord.removeAllElements();
            MainPanel.getInstance().now_cards.removeAllElements();
            var selfevent: game.SelfEvent = new game.SelfEvent(SelfEvent.PLAY);
            selfevent.test = {
                op: 1,cards: []
            };
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
            
            game.MainPanel.getInstance().playTipFlag = (isTip > 0);
            var tip = new egret.gui.SkinnableComponent();
            game.MainPanel.getInstance().landlord.addElement(tip);
            tip.skinName = (isTip > 0) ? skins.components.CardTip1Skin : skins.components.CardTip2Skin;
            tip.horizontalCenter = 0;
            tip.verticalCenter = 0;
            for(var key in MainPanel.getInstance().cards.$children) 
            {
                if(MainPanel.getInstance().cards.$children[key].verticalCenter < 0) 
                {
                    MainPanel.getInstance().cards.$children[key].verticalCenter = 0;
                }
            }                
            MainPanel.getInstance().selectCards = [];
        }
        
        public exeTimer(){
            game.LogUtil.log('PlayLayer_exeTimer');
            if(this.clabel)
            {
//                this.clabel.text = String(Number(this.clabel.text)-1);
//                game.LogUtil.log('text:' + this.clabel.text);
                
                var num: number = Number(this.clabel.text) - 1;
                if(num < 10)
                {
                    this.clabel.text = '0'+String(num);
                }
                else
                {
                    this.clabel.text = String(num);
                }
                var table = game.ModelCache.getInstance().getTable();
                if(table.tableSt != Constants.TABLE_IN_GAME)
                {
                    TimerUtil.getInstance().rmObj('play');
                    return;
                }
                var player = game.ModelCache.getInstance().getPlayer();
                var st = table.playerSt[player.uid];
//                game.LogUtil.log(st + "==="+table.currOpUid+" uid:"+player.uid);
                if(table.currOpUid == player.uid && st == Constants.PLAYER_DEPOSIT)
                {
                    this.removeAllElements();
                    TimerUtil.getInstance().rmObj('play');
                    return;
                }
                if(num <= 0)
                {
                    this.removeAllElements();
                    TimerUtil.getInstance().rmObj('play');
                }
            }
            
        }
	}
}
