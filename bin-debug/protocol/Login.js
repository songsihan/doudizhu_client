var protocol;
(function (protocol) {
    /**
     *
     * @author
     *
     */
    var Login = (function () {
        function Login() {
        }
        var d = __define,c=Login;p=c.prototype;
        Login.loginReq = function (isReC) {
            if (isReC === void 0) { isReC = 0; }
            var data = {
                type: 'login',
                uid: game.ModelCache.getInstance().playerCache.uid,
                name: game.ModelCache.getInstance().playerCache.name,
                tid: game.ModelCache.getInstance().tableCache.tid,
                score: game.ModelCache.getInstance().playerCache.score,
                uids: game.ModelCache.getInstance().tableCache.uids,
                isReConn: isReC
            };
            return data;
        };
        Login.receive = function (data) {
            var s = data['s'];
            if (s == game.Constants.RESPONSE_FAIL) {
                var data = protocol.Login.loginReq();
                var re = game.WSocket.getInstance().sendJsonMsg(data);
                if (re == false) {
                    game.LogUtil.log('请求异常，重试');
                }
            }
            else if (s == game.Constants.RESPONSE_RECONN_SUCCESS) {
                game.ModelCache.getInstance().initTable(data.tableInfo);
            }
            else {
                game.ModelCache.getInstance().flag = 'login';
            }
        };
        Login.type = 'login';
        return Login;
    })();
    protocol.Login = Login;
    egret.registerClass(Login,"protocol.Login");
})(protocol || (protocol = {}));
