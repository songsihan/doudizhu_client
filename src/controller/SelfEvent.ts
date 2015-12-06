module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class SelfEvent extends egret.Event{
        public static TEST: string = "test";
        //协议请求
        public static JT: string = "jt";
        public static LL: string = "ll";
        public static PLAY: string = "play";
        public static DEPOSIT: string = "deposit";    
    	
        //ui更新
        public static UPDATE_PLAYER: string = "updatePlayer";
        public static INIT_TABLE: string = "initTable";
        public static UPDATE_TABLE: string = "updateTable";
        public static UPDATE_TABLE_PLAY: string = "updateTablePlay";
        
        public test: any;
        public test1: any;
		public constructor(type:string,bulle:boolean = false,cancel:boolean = false) {
            super(type,bulle,cancel);
		}
	}
}
