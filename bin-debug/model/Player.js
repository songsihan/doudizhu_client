var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var Player = (function () {
        function Player() {
        }
        var d = __define,c=Player;p=c.prototype;
        //{ "id": 101, "nickName":"艾尔","headImg":"192.168.0.102/icon/1.png","gold":1000},
        p.init = function (data) {
            this.uid = data.id;
            this.score = data.gold;
            this.name = data.nickName;
            this.img = data.headImg;
        };
        return Player;
    })();
    game.Player = Player;
    egret.registerClass(Player,"game.Player");
})(game || (game = {}));
