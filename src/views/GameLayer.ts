module game {
    /**
    * 视图显示层
    */
	export class GameLayer extends egret.gui.UIStage {
        
        
        public static MAIN_LAYER:string = "main";
        public static ROOM_LAYER:string = "room";
        public static TIP_LAYER:string = "tip";
        public static START_LAYER:string = "start";
        
        public container: egret.gui.SkinnableContainer;
        
        private mainLayer: game.MainPanel;
        private tipLayer: game.TipLayer;
        private startLayer: game.StartLayer;
        
        public MainIsInit: boolean = false;
        constructor() {
            super();
        }
        
        private static _instance:GameLayer;
        
        public static getInstance():any {
            if (GameLayer._instance == null) {
                GameLayer._instance = new GameLayer();
                GameLayer._instance.init();
            }
            return GameLayer._instance;
        }
        
        private init():void {
            this.mainLayer = game.MainPanel.getInstance();
            this.tipLayer = new game.TipLayer();
            this.startLayer = new game.StartLayer();
        }
        
        public showLayer(name:string,msg:string = ''){
            var layer: egret.gui.SkinnableContainer;
            switch(name)
            {
                case GameLayer.MAIN_LAYER:
                    layer = this.mainLayer;
                    break;
                case GameLayer.TIP_LAYER:
                    layer = this.tipLayer;
                    break;
                case GameLayer.START_LAYER:
                    layer = this.startLayer;
                    break;
            }
            if(layer)
            {
                this.addElement(layer);
                if(name == GameLayer.MAIN_LAYER)
                {
                    this.MainIsInit = true;
                }
            }
        }
        public rmLayer(name:string){
            var layer: egret.gui.SkinnableContainer;
            switch(name)
            {
                case GameLayer.MAIN_LAYER:
                layer = this.mainLayer;
                break;
                case GameLayer.TIP_LAYER:
                layer = this.tipLayer;
                break;
                case GameLayer.START_LAYER:
                layer = this.startLayer;
                break;
            }
            if(this.getElementIndex(layer) > 0)
            {
                this.removeElement(layer);
            }
        }
        /**
         * game.GameLayer.getInstance().addElement(card);
         * game.GameLayer.getInstance().removeElement(this);
         */ 
	}
}
