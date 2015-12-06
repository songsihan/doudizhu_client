module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class TipLayer extends egret.gui.SkinnableContainer{
        public label: egret.gui.Label;
		public constructor() {
            super();
            this.skinName = skins.components.readySkin;
		}
	}
}
