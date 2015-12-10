var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var NetConf = (function () {
        function NetConf() {
        }
        var d = __define,c=NetConf;p=c.prototype;
        //        public static SERVER_IP: string = "192.168.0.108";
        //        public static SERVER_IP: string = "127.0.0.1";
        NetConf.SERVER_IP = "123.56.103.94";
        //        public static SERVER_IP: string = "192.168.56.102";
        //        public static SERVER_IP: string = "123.57.53.64";
        NetConf.PORT = 8282;
        return NetConf;
    })();
    game.NetConf = NetConf;
    egret.registerClass(NetConf,"game.NetConf");
})(game || (game = {}));
