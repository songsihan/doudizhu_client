module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class PopWindow extends egret.gui.Group{
        private win:egret.gui.TitleWindow;
        
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            this.win = new egret.gui.TitleWindow();
            this.win.skinName = skins.components.retrySkin;
            egret.gui.PopUpManager.addPopUp(this.win,true,true);
        }
	}
}
