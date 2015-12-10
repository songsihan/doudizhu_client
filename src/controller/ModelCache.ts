module game {
	/**
	 *
	 * 数据缓存类
	 * @author 
	 *
	 */
	export class ModelCache {
    	
        private playerCache: game.Player;
        
        private tableCache: game.Table;
        
        private static _instance:ModelCache;
                
        public timerTime: number = 0;
        public reqCnt: number = 0;
        public flag: string = 'req';
        public uidImg: any[] = [];
        
        private users;
        private room;
        public static getInstance():any {
            if (ModelCache._instance == null) {
                ModelCache._instance = new ModelCache();
            }
            return ModelCache._instance;
        }
		public constructor() {
            this.playerCache = new game.Player();
            this.tableCache = new game.Table();
                
            //用于用户信息初始化
            var self:any = this;
            liubawan.LiubawanEgretInterface.getInstance().checkUser(function(data) { 
                console.info("checkUser back: " + JSON.stringify(data));
                self.initUserInfo(data);
            });
            
            //TS退出游戏通知事件接口
            liubawan.LiubawanEgretInterface.getInstance().addOnQuitGameListener(function() {
                console.info("onQuitGame");
                game.TimerUtil.getInstance().timer.stop();
                game.WSocket.getInstance().ws.close();
            });
            liubawan.LiubawanEgretInterface.getInstance().addOnSetAudioVolumeListener(function(data) {
                console.info("audio_volume");
                game.SoundUtil.status = (data.volume > 0?1:0);
            });
            
		}
		
        public static testUserData = {
            "101": { "id": 101, "nickName":"艾尔艾尔艾尔艾尔","headImg":"http://oss.68wan.com/wannimei/audio/test/p1.jpg","gold":1000},
            "202": { "id": 202, "nickName":"阿布","headImg":"http://oss.68wan.com/wannimei/audio/test/p2.jpg","gold":3000},
            "303": { "id": 303, "nickName":"婕拉","headImg":"http://oss.68wan.com/wannimei/audio/test/p2.jpg","gold":5000}
        };
        public static testRoomData = {
            "user":{ "id": 101, "nickName":"艾尔艾尔艾尔艾尔","headImg":"http://oss.68wan.com/wannimei/audio/test/p1.jpg","gold":1000},
            "room":{"roomId":1,
                "users":[
                    { "id": 101, "nickName":"艾尔艾尔艾尔艾尔","headImg":"http://oss.68wan.com/wannimei/audio/test/p1.jpg","gold":1000},
                    { "id": 202, "nickName":"阿布","headImg":"http://oss.68wan.com/wannimei/audio/test/p2.jpg","gold":3000},
                    { "id": 303, "nickName":"婕拉","headImg":"http://oss.68wan.com/wannimei/audio/test/p2.jpg","gold":5000}
                ],
            "roomMaster":1,"gameName":"","gameImg":"","gameId":1,"gameLevel":1,"gameType":1}
            }
            
		public initUserInfo(data:Object)
		{
//            var pid = this.getPid();
            var user =data['user'];
            this.room = data['room'];
            this.initPlayer(user);
            this.setTableId(this.room.roomId);
            this.users = this.room.users;
            TimerUtil.getInstance().addObj('url',this);
            var uids = [];
            uids.push(this.users[0].id);
            uids.push(this.users[1].id);
            uids.push(this.users[2].id);
            this.tableCache.uids = uids;
            
//            var userInfo_jsonStr = '{"user":{"id":1,"nickName":"艾尔","headImg":"","seatId":1,"groupId":1, "gender":1,"city":"","gold":1000},"room":{"roomId":1,"users":[{"id":1,"nickName":"","headImg":"","seatId":1,"groupId":1,"gender":1,"city":""},{"id":2,"nickName":"","headImg":"","seatId":2,"groupId":2,"gender":1,"city":""}],"roomMaster":1,"gameName":"","gameImg":"","gameId":1,"gameLevel":1,"gameType":1}}';
//            var userInfo_obj = JSON.parse(userInfo_jsonStr);
//            console.log(userInfo_obj);
//            console.log(userInfo_obj.user.id);
        }
        public exeTimer()
        {
            TimerUtil.getInstance().rmObj('url');
            for(var key in this.users)
            {          
                var url = this.users[key].headImg;
                new AssetAdapter().getAsset(url,this.setImg,this,null);
            }
        }
		
        public getUsers()
        {
            return this.users;
        }
        
		private setImg(data,source)
		{
    		this.uidImg[source] = data;
//    		if(source == 'http://192.168.0.102/icon/2.png')
//    		{
//                console.log('match!!!!!!!!!');
//                this.uidImg[source] = data;
//    		}
//            console.log(data);
		}
		
		public getImg(url)
		{
		    if(this.uidImg[url])
		    {
                return this.uidImg[url];
		    }
            return false;
		}
		
		public getPlayer():game.Player{
            return this.playerCache;
		}
		        
		public getTableId():game.Table{
    		return this.tableCache.tid;
		}
        
        public getTable():game.Table{
            return this.tableCache;
        }
        public initPlayer(data):void{
            this.playerCache.init(data);
        }
        public initTable(data):void{
            this.tableCache.init(data);
        }
        public updateTable(data,flag):void{
            this.tableCache.updateTable(data,flag);
        }
        public setScore(add):void{
            this.playerCache.score += add;
        }
        public getUid():number{
            return this.playerCache.uid;
        }
        
        public updateTablePlay(data):void{
            this.tableCache.updateTablePlay(data);
        }
        public setTableId(tid):void{
            this.tableCache.tid = tid;
        }
	}
}
