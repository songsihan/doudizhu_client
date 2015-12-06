module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class LandlordLayer extends egret.gui.SkinnableContainer{
        public clabel: egret.gui.Label;
        public land1Btn: egret.gui.Button;
        public land2Btn: egret.gui.Button;
        public land3Btn: egret.gui.Button;
        public unLandBtn: egret.gui.Button;
        public label: egret.gui.Label;
        public tip: egret.gui.UIAsset;
        public isLl: Boolean = false;
		public constructor(isSelf:Boolean,isTip:Boolean = false) {
            super();
            if(isTip)
            {
                this.skinName = skins.components.TipSkin;
            }
            else if(isSelf)
            {
                this.skinName = skins.components.LandlordSkin;
                this.isLl = true;
            }
            else
            {
                this.skinName = skins.components.ClockSkin;
            }
		}
        //初始化时调用
        public partAdded(partName:string, instance:any):void {
            super.partAdded(partName, instance);
            TimerUtil.getInstance().addObj('landlord',this,1000);                    
            this.land1Btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onLand1,this);
            this.land2Btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onLand2,this);
            this.land3Btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onLand3,this);
            this.unLandBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.unLand,this);
            game.LogUtil.log("maxPoint:" + MainPanel.getInstance().maxPoint);
            var table = ModelCache.getInstance().getTable();
            if(table.lUid > 0 && table.multiple == 1)
            {
                this.land1Btn.enabled = false;
            }
            else if(table.multiple == 2)
            {
                this.land1Btn.enabled = false;
                this.land2Btn.enabled = false;
            }
        }
        
        public onLand1(){
            game.LogUtil.log("onLand1");
            var selfevent: game.SelfEvent = new game.SelfEvent(SelfEvent.LL);
            selfevent.test = 1;
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
            
            this.removeAllElements();
            this.skinName = skins.components.TipSkin;
            this.horizontalCenter = 0;
            this.tip.source = 'word_one_point_png';
            TimerUtil.getInstance().rmObj('landlord');
        }
        public onLand2(){
            game.LogUtil.log("onLand2");
            var selfevent: game.SelfEvent = new game.SelfEvent(SelfEvent.LL);
            selfevent.test = 2;
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
                        
            this.removeAllElements();
            this.skinName = skins.components.TipSkin;
            this.horizontalCenter = 0;
            this.tip.source = 'word_two_point_png';
            TimerUtil.getInstance().rmObj('landlord');
        }
        public onLand3(){
            game.LogUtil.log("onLand3");
            var selfevent: game.SelfEvent = new game.SelfEvent(SelfEvent.LL);
            selfevent.test = 3;
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
            
            this.removeAllElements();
            this.skinName = skins.components.TipSkin;
            this.horizontalCenter = 0;
            this.tip.source = 'word_three_point_png';
            TimerUtil.getInstance().rmObj('landlord');
        }
        
        public unLand(){
            var selfevent: game.SelfEvent = new game.SelfEvent(SelfEvent.LL);
            selfevent.test = 0;
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
            
            this.removeAllElements();
            this.skinName = skins.components.TipSkin;
            this.horizontalCenter = 0;
            this.tip.source = 'word_no_call_png';
            TimerUtil.getInstance().rmObj('landlord');
        }
        
        public exeTimer(){
            game.LogUtil.log('LandlordLayer_exeTimer');
            if(this.clabel)
            {
                var num: number = Number(this.clabel.text) - 1;
                if(num < 10)
                {
                    this.clabel.text = '0'+String(num);
                }
                else
                {
                    this.clabel.text = String(num);
                }
//                game.LogUtil.log(this.clabel.text);
                            
                if(num <= 0)
                {
                    TimerUtil.getInstance().rmObj('landlord');
                    if(this.isLl)
                    {        
                        this.removeAllElements();
                        this.skinName = skins.components.TipSkin;
                        this.horizontalCenter = 0;
                        this.tip.source = 'word_no_call_png';
                        TimerUtil.getInstance().rmObj('landlord');
                    }
//                    this.visible = false;
                }
            }
            
        }
	}
}
