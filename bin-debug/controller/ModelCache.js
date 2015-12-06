var game;
(function (game) {
    /**
     *
     * 数据缓存类
     * @author
     *
     */
    var ModelCache = (function () {
        function ModelCache() {
            this.timerTime = 0;
            this.reqCnt = 0;
            this.flag = 'req';
            this.uidImg = [];
            this.playerCache = new game.Player();
            this.tableCache = new game.Table();
            //用于用户信息初始化
            var self = this;
            liubawan.LiubawanEgretInterface.getInstance().checkUser(function (data) {
                console.info("checkUser back: " + JSON.stringify(data));
                self.initUserInfo(data);
            });
            //TS退出游戏通知事件接口
            liubawan.LiubawanEgretInterface.getInstance().addOnQuitGameListener(function () {
                console.info("onQuitGame");
                game.TimerUtil.getInstance().timer.stop();
                game.WSocket.getInstance().ws.close();
            });
            liubawan.LiubawanEgretInterface.getInstance().addOnSetAudioVolumeListener(function (data) {
                console.info("audio_volume");
                game.SoundUtil.status = (data.volume > 0 ? 1 : 0);
            });
        }
        var d = __define,c=ModelCache;p=c.prototype;
        ModelCache.getInstance = function () {
            if (ModelCache._instance == null) {
                ModelCache._instance = new ModelCache();
            }
            return ModelCache._instance;
        };
        p.initUserInfo = function (data) {
            //            var pid = this.getPid();
            var user = data['user'];
            this.room = data['room'];
            this.initPlayer(user);
            this.setTableId(this.room.roomId);
            this.users = this.room.users;
            game.TimerUtil.getInstance().addObj('url', this);
            var uids = [];
            uids.push(this.users[0].id);
            uids.push(this.users[1].id);
            uids.push(this.users[2].id);
            this.tableCache.uids = uids;
            //            var userInfo_jsonStr = '{"user":{"id":1,"nickName":"艾尔","headImg":"","seatId":1,"groupId":1, "gender":1,"city":"","gold":1000},"room":{"roomId":1,"users":[{"id":1,"nickName":"","headImg":"","seatId":1,"groupId":1,"gender":1,"city":""},{"id":2,"nickName":"","headImg":"","seatId":2,"groupId":2,"gender":1,"city":""}],"roomMaster":1,"gameName":"","gameImg":"","gameId":1,"gameLevel":1,"gameType":1}}';
            //            var userInfo_obj = JSON.parse(userInfo_jsonStr);
            //            console.log(userInfo_obj);
            //            console.log(userInfo_obj.user.id);
        };
        p.exeTimer = function () {
            game.TimerUtil.getInstance().rmObj('url');
            for (var key in this.users) {
                var url = this.users[key].headImg;
                new AssetAdapter().getAsset(url, this.setImg, this, null);
            }
        };
        p.getUsers = function () {
            return this.users;
        };
        p.setImg = function (data, source) {
            this.uidImg[source] = data;
            //    		if(source == 'http://192.168.0.102/icon/2.png')
            //    		{
            //                console.log('match!!!!!!!!!');
            //                this.uidImg[source] = data;
            //    		}
            //            console.log(data);
        };
        p.getImg = function (url) {
            if (this.uidImg[url]) {
                return this.uidImg[url];
            }
            return false;
        };
        p.getPlayer = function () {
            return this.playerCache;
        };
        p.getTableId = function () {
            return this.tableCache.tid;
        };
        p.getTable = function () {
            return this.tableCache;
        };
        p.initPlayer = function (data) {
            this.playerCache.init(data);
        };
        p.initTable = function (data) {
            this.tableCache.init(data);
        };
        p.updateTable = function (data, flag) {
            this.tableCache.updateTable(data, flag);
        };
        p.setScore = function (add) {
            this.playerCache.score += add;
        };
        p.getUid = function () {
            return this.playerCache.uid;
        };
        p.updateTablePlay = function (data) {
            this.tableCache.updateTablePlay(data);
        };
        p.setTableId = function (tid) {
            this.tableCache.tid = tid;
        };
        ModelCache.testUserData = {
            "101": { "id": 101, "nickName": "艾尔", "headImg": "http://oss.68wan.com/wannimei/audio/test/p1.jpg", "gold": 1000 },
            "202": { "id": 202, "nickName": "阿布", "headImg": "http://oss.68wan.com/wannimei/audio/test/p2.jpg", "gold": 3000 },
            "303": { "id": 303, "nickName": "婕拉", "headImg": "http://oss.68wan.com/wannimei/audio/test/p2.jpg", "gold": 5000 }
        };
        ModelCache.testRoomData = {
            "user": { "id": 101, "nickName": "艾尔", "headImg": "http://oss.68wan.com/wannimei/audio/test/p1.jpg", "gold": 1000 },
            "room": { "roomId": 1,
                "users": [
                    { "id": 101, "nickName": "艾尔", "headImg": "http://oss.68wan.com/wannimei/audio/test/p1.jpg", "gold": 1000 },
                    { "id": 202, "nickName": "阿布", "headImg": "http://oss.68wan.com/wannimei/audio/test/p2.jpg", "gold": 3000 },
                    { "id": 303, "nickName": "婕拉", "headImg": "http://oss.68wan.com/wannimei/audio/test/p2.jpg", "gold": 5000 }
                ],
                "roomMaster": 1, "gameName": "", "gameImg": "", "gameId": 1, "gameLevel": 1, "gameType": 1 }
        };
        return ModelCache;
    })();
    game.ModelCache = ModelCache;
    egret.registerClass(ModelCache,"game.ModelCache");
})(game || (game = {}));
