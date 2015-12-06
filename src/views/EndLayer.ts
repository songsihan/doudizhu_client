module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class EndLayer extends egret.gui.SkinnableContainer{
        public result: egret.gui.SkinnableComponent;
//        public leave: egret.gui.Button;
        public goon: egret.gui.Button;
        public checkTime: number = 0;
        public isWin:boolean = false;
//        public parentCon: egret.gui.SkinnableContainer;
		public constructor(isWin:boolean) {
            super();
            this.skinName = skins.self.EndSkin;
            this.isWin = isWin;
            SoundUtil.endSound(this.isWin);
//            this.parentCon = parentCon;
        }
        //初始化时调用
        public partAdded(partName:string, instance:any):void {
            super.partAdded(partName, instance);                   
//            this.goon.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goonFunc,this);
            this.result.skinName = this.isWin?skins.components.WinSkin:skins.components.FailSkin;
            		
        }
        public goonFunc(){
//            this.goon.enabled = false;
            
//            var data = protocol.Login.loginReq();
//            WSocket.getInstance().sendJsonMsg(data);
//            WSocket.getInstance().init();
//            this.parent.removeElement(this);
//            TimerUtil.getInstance().addObj('end',this,1000);
        }
        
        public exeTimer(){
            game.LogUtil.log('EndLayer_exeTimer');
            var nowTime = new Date().getTime();
            if(nowTime - this.checkTime >= 3000)
            { 
                this.checkTime = nowTime;
                var selfevent: game.SelfEvent = new game.SelfEvent(SelfEvent.JT);
                game.ProxyListener.getInstance().dispatchEvent(selfevent);
                
                var table = game.ModelCache.getInstance().getTable();
                if(table.tableSt != game.Constants.TABLE_END)
                {                    
                    TimerUtil.getInstance().rmObj('end');
//                    this.parentCon.removeElement(this);
                }
            }
            
        }
	}
}
