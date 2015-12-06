module skin {
    
	export class CurrCardSkin extends egret.gui.Skin
    {
        /**和组件中的定义相对应，确定皮肤应该具备哪些部件*/
        public skinParts:Array<string> = ["contentGroup"];
        /**对于SkinnableContainer来说，contentGroup是必须有的*/
        public contentGroup:egret.gui.Group;
        
        public cardNos: number[];
        public putvalue_x:number = -1;
        public size: number = 0;
        public constructor(_cardNos:number[],size:number=0) {
            super();
            this.cardNos = _cardNos;
            this.size = size;
        }
        public createChildren(): void {
            super.createChildren();
            if(this.size > 0)
            {
                for(var i = 0;i < this.size;i++)
                {
                    this.addCardUI(i);
                }
            }
            else
            {
                for(var pos in this.cardNos)
                {
                    this.addCardUI(this.cardNos[pos]);
                }
            }
            //contentGroup必须有，否则你添加到SkinnableContainer的对象是显示不出来的
            this.contentGroup = new egret.gui.Group();
            this.addElement(this.contentGroup);
        }
        
        private addCardUI(cardNo:number):void
        {                          
                                                
            var card: egret.gui.UIAsset = new egret.gui.UIAsset();
            if(this.size >0)
            {
                this.putvalue_x += this.putvalue_x == -1?1:3;
                card.height = 35;
                card.width = 20;
                card.source = "cardback_small_png";
            }
            else
            {
                this.putvalue_x += this.putvalue_x == -1?1:18;
                card.height = 88;
                card.width = 66;
                card.source = game.CommonData.getCardPng(cardNo);
            }
            card.verticalCenter = 0;
            card.x = this.putvalue_x;
            this.addElement(card);
        }
    }
}
