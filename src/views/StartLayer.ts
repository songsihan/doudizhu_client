module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class StartLayer extends egret.gui.SkinnableContainer{
        public label: egret.gui.Label;
        private val: number;
        private add: number = 100;
        private sendTime: number = 0;
		public constructor() {
            super();
            this.skinName = skins.components.StartSkin;
		}
        //初始化时调用
        public partAdded(partName:string, instance:any):void {
            super.partAdded(partName, instance);
            TimerUtil.getInstance().addObj('sl',this);
        }
        public exeTimer(){
            
            game.LogUtil.log('StartLayer_exeTimer');
//            this.label.text = t;
            if(this.val > 100000 || this.val < -100000)
            {
                this.add = -this.add;
            }
            this.val += this.add;
            this.label.textColor += this.add;
            var nowTime = new Date().getTime();//毫秒
            var table = ModelCache.getInstance().getTable();
            if(table.tableSt == Constants.TABLE_LANDLORD)
            {
                TimerUtil.getInstance().rmObj('sl');
            }
            if((nowTime - this.sendTime) >= 5000)//5秒发送一次匹配请求
            {
                this.sendTime = nowTime;
                var selfevent: game.SelfEvent = new game.SelfEvent(SelfEvent.JT);
                game.ProxyListener.getInstance().dispatchEvent(selfevent);
            }
        }
	}
}
