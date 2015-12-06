var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var LogUtil = (function () {
        function LogUtil() {
        }
        var d = __define,c=LogUtil;p=c.prototype;
        LogUtil.log = function (str) {
            liubawan.LiubawanEgretInterface.getInstance().enableDebug(true);
            liubawan.Util.info(str);
        };
        return LogUtil;
    })();
    game.LogUtil = LogUtil;
    egret.registerClass(LogUtil,"game.LogUtil");
})(game || (game = {}));
