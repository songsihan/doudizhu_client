module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class Table {
    	
        public tid;
        public baseSc;
        public tableSt = 0;
        public multiple;
        public lUid;
        public currOpUid;
        public lastOpUid;
        public playerSt;
        public selfCardNos;
        public cardNums;
        public playerInfos;
        public threeCards;
        public uids;
        public rTime;
        public playerCardNos;
        public lastCardNos:number[];
        public lastPlayCardUid;
        public winUid;
        public playCardType;
        public isBomb;
        public isSpring;
        
		public constructor() {
            
		}
		public init(data)
		{
            this.baseSc = data.baseSc;
            this.tableSt= data.tableSt;
            this.multiple= data.multiple;
            this.lUid= data.lUid;
            this.currOpUid= data.currOpUid;
            this.lastOpUid= data.lastOpUid;
            this.lastCardNos= data.lastCardNos;
            this.playerSt= data.playerSt;
            this.selfCardNos= data.selfCardNos;
            this.threeCards= data.threeCards;
            this.uids= data.uids;
            this.rTime= data.rTime;
            this.cardNums = data.cardNums;
            this.playerInfos = data.playerInfos;

		}
            
		public updateTable(data,flag)
		{
    		if(flag){
    		    //添加tip--渐渐消失。流局-牌局重置
                this.init(data);
                return;
    		}
    		this.lUid = data.lUid;
    		this.rTime = data.rTime;
    		this.multiple = data.multiple;
    		if(data.st == Constants.LANDLORD_ENSURE)
    		{
                this.tableSt = data.tableSt;
                var selfUid = ModelCache.getInstance().getUid();
                if(selfUid != this.lUid)
                {
                    this.cardNums[this.lUid] += 3;
                }
                else
                {                    
                    this.selfCardNos = this.selfCardNos.concat(this.threeCards);
                    this.selfCardNos = skin.CardSort.sort(this.selfCardNos);
                }
    		}
    		else
    		{
    		    this.currOpUid = data.currOpUid;
    		    this.lastOpUid = data.lastOpUid;
    		}
            
            var selfevent: game.SelfEvent = new game.SelfEvent(SelfEvent.UPDATE_TABLE);
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
		}
        public updateTablePlay(data)
        {
//            if(flag){
//                //添加tip--渐渐消失。流局-牌局重置
//                this.init(data);
//                return;
//            }
            
            var depositUid = data.depositUid;
            var leaveUid = data.leaveUid;
            this.lastPlayCardUid = data.lastPlayCardUid;
            this.currOpUid = data.currOpUid;
            this.lastOpUid = data.lastOpUid;
            this.tableSt = data.tableSt;
            this.rTime = data.rTime;
            this.multiple = data.multiple;
            this.isBomb = data.isBomb;
            this.lastCardNos = data.lastCardNos;
            if(leaveUid != 'no')
            {
                this.playerSt[depositUid] = game.Constants.PLAYER_LEAVE;
            }
            else if(depositUid != 'no')
            {
                this.playerSt[depositUid] = game.Constants.PLAYER_DEPOSIT;
            }
            if(this.lastOpUid == this.lastPlayCardUid)
            {
                this.playCardType = data.playCardType;
                var selfUid = ModelCache.getInstance().getUid();
                if(selfUid == this.lastPlayCardUid)
                {
                    this.selfCardNos = Func.mini(this.selfCardNos,this.lastCardNos);
                }
                else
                {
                    this.cardNums[this.lastPlayCardUid] = data['lastOpCardNum'];
                }
            }
            if(this.tableSt == game.Constants.TABLE_END)
            {
                this.winUid = data.winUid;
                this.isSpring = data.isSpring; 
            }
            
            var selfevent: game.SelfEvent = new game.SelfEvent(SelfEvent.UPDATE_TABLE_PLAY);
            selfevent.test = depositUid;
            selfevent.test1 = leaveUid;
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
        }
	}
}
