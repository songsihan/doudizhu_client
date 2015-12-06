module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class _MainPanel extends egret.gui.SkinnableContainer{
               
    	//地主牌
        public p1: egret.gui.UIAsset;
        public p2: egret.gui.UIAsset;
        public p3: egret.gui.UIAsset;
        
        //玩家信息
        public player1: egret.gui.SkinnableComponent;
        public name1: egret.gui.Label;
        public score1: egret.gui.Label;
        
        public player2: egret.gui.SkinnableComponent;
        public name2: egret.gui.Label;
        public score2: egret.gui.Label;
                
        public player3: egret.gui.SkinnableComponent;
        public name3: egret.gui.Label;
        public score3: egret.gui.Label;
        
        public cards: egret.gui.Group;
        
        public bt1: egret.gui.Button;
        public bt2: egret.gui.Button;
        
        //卡牌图片
        public bg1: egret.gui.SkinnableComponent;
        public bg2: egret.gui.SkinnableComponent;
    	//卡牌数量
        public bgSize1: egret.gui.Label;
        public bgSize2: egret.gui.Label;
                
        //当前所出牌
        public now_cards: egret.gui.SkinnableContainer;
        
        public num: number;
        public value_x: number = -1;
        public putvalue_x: number = -1;
        
        public cardNos: number[] = [
            31,32,33,34,
            41,42,43,44,
            51,52,53,54,
            61,62,63,64,
            71,72,73,74,
            81,82,83,84,
            91,92,93,94,
            101,102,103,104,
            111,112,113,114,
            121,122,123,124,
            131,132,133,134,
            141,142,143,144,
            151,152,153,154,
            161,162
        ];
        public unCardNos: number[]=[];
        
		public constructor() {
    		super();
    		//  指定当前类的皮肤名称
    		//  Assign the skin name used by this Component
    		this.skinName = skins.self.mainPanelSkin;
		}
        
        public bt0: egret.gui.Button;
		//初始化时调用
        public partAdded(partName:string, instance:any):void {
            super.partAdded(partName, instance);
            //console.log('t1'); 
            //console.log('t2');
            this.bt1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
            this.bt2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick2, this);
            this.bt0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick0, this);
            this.addEventListener(game.SelfEvent.TEST,this.onTestEvent,this);
                                   
        }
        public onTestEvent(event:game.SelfEvent):void{
            console.log("data:" + event.test+' onTestEvent!!!!');
        }
        
        private selectCards: any[] = [];
        
        private onButtonClick0(event:egret.TouchEvent):void {
//            this.alpha = this.alpha == 0.5?1:0.5;
            
            var card: egret.gui.IVisualElement = this.cards.getElementAt(1);
//            card.verticalCenter -= 20;
//            this.cards.removeElement(card);
//            this.cards.addElementAt(card,1);
            console.log(this.hasEventListener(game.SelfEvent.TEST));
            var selfevent: game.SelfEvent = new game.SelfEvent(SelfEvent.TEST);
            selfevent.test = 100;
            this.dispatchEvent(selfevent);
            
        }
        private onButtonClick(event:egret.TouchEvent):void {
            //Math   Date
//            this.p1.source = this.p1.source == "cardback_small_png" ? "spades10_png":"cardback_small_png";
//            this.p2.source = this.p2.source == "cardback_small_png" ? "redheart10_png":"cardback_small_png";
//            this.p3.source = this.p3.source == "cardback_small_png" ? "plum10_png":"cardback_small_png";
            this.player1.skinName = this.player1.skinName == skins.components.Bitmap_NongMinSkin ? skins.components.Bitmap_DiZhuSkin : skins.components.Bitmap_NongMinSkin;
            this.name1.text = <string><any>Math.floor(Date.now()/1000);
            this.num = Number(this.score1.text) + 10;
//            console.log('num type:'+ typeof this.num)
            this.score1.text = <string><any>this.num; 
//            this.p1.$update();
//            this.p2.$update();
//            this.p3.$update();
//            console.log('t3:' + this.p1.source);
//            egret.gui.Alert.show("echo bt " + event.target);
            this.value_x += this.value_x == -1?1:18;
            var index: number = Math.floor(Math.random() * this.cardNos.length);
            var cardNo:number = this.cardNos[index];
            this.unCardNos.push(cardNo);
            this.cardNos.splice(index,1);
//            console.log(cardNo + ' cardNos:' + this.cardNos.toString());
            var card: egret.gui.UIAsset = new egret.gui.UIAsset();
            card.height = 88;
            card.width = 66;
            card.verticalCenter = 0;
            card.source = CommonData.getCardPng(cardNo);
            card.x = this.value_x;
            card.touchEnabled = true;
            card.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCardClick,this);
            card.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onCardMove,this);
            this.cards.addElement(card);
        
            this.bg1.skinName = this.bg1.skinName == '' ? skins.components.cardSkin : '';
//            console.log('source:' + this.bg1.skinName);            
            this.bgSize1.text = this.bgSize1.text == '' ? '0' : '';
        }
        
        public onCardClick(event:egret.FocusEvent):void{
            event.target.verticalCenter += event.target.verticalCenter < 0?10:-10;
            if(event.target.verticalCenter > 0)
            {
                var index:number = this.selectCards.indexOf(event.target);
                alert(index);
                this.selectCards.splice(index,1);
            }
            else
            {
                this.selectCards.splice(0,0,event.target);
            }
        }
        public onCardMove(event:egret.FocusEvent):void{
            event.target.verticalCenter += event.target.verticalCenter < 0?10:-10;
        }
        
        //当前出的卡牌
        private onButtonClick2(event:egret.TouchEvent):void {
            
            console.log('index:' + this.getElementIndex(this.now_cards));            
            if(this.getElementIndex(this.now_cards)>=0)
            {
                this.removeElement(this.now_cards);
            }
            var cardNos: number[] = [];
            for (var i=0;i<5;i++)
            {                
                var index: number = Math.floor(Math.random() * this.unCardNos.length);
                var cardNo:number = this.unCardNos[index];
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
            
        }
        
	}
}
