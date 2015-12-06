module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class Player {
    	
        public uid;
        public img;
        public score;
        public name;
        public tableId;
        public winNum;
        public failNum;
		public constructor() {
		}
        
        //{ "id": 101, "nickName":"艾尔","headImg":"192.168.0.102/icon/1.png","gold":1000},
		public init(data){
            this.uid = data.id;
            this.score = data.gold;
            this.name = data.nickName;
            this.img = data.headImg;
		}
		
	}
}
