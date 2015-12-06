module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class ProxyListener extends egret.DisplayObjectContainer{
        private _requestCount: number = 0;
        
        private static _instance:ProxyListener;
                
        public static getInstance():any {
            if (ProxyListener._instance == null) {
                ProxyListener._instance = new ProxyListener();
            }
            return ProxyListener._instance;
        }
        
		public constructor() {
            super();
            this.addEventListener(game.SelfEvent.JT,protocol.JoinTable.jtReq,this);
            this.addEventListener(game.SelfEvent.LL,protocol.Landlord.llReq,this);
            this.addEventListener(game.SelfEvent.PLAY,protocol.Play.playReq,this);
            this.addEventListener(game.SelfEvent.DEPOSIT,protocol.ChgPlaySt.chgStReq,this);
                        
            this.addEventListener(game.SelfEvent.UPDATE_PLAYER,game.MainPanel.getInstance().updatePlayer,this);
            this.addEventListener(game.SelfEvent.INIT_TABLE,game.MainPanel.getInstance().initTable,this);
            this.addEventListener(game.SelfEvent.UPDATE_TABLE,game.MainPanel.getInstance().updateTable,this);
            this.addEventListener(game.SelfEvent.UPDATE_TABLE_PLAY,game.MainPanel.getInstance().updateTablePlay,this);
                                  
		}
		
	}
}
