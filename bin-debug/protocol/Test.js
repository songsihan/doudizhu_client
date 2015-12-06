var protocol;
(function (protocol) {
    /**
     * 用于同步进度
     * 用于长连接保活
     * @author
     *
     */
    var Test = (function () {
        function Test() {
        }
        var d = __define,c=Test;p=c.prototype;
        Test.tReq = function (addValue, oldValue) {
            var data = {
                type: 'test',
                uid: game.ModelCache.getInstance().getUid(),
                addVal: addValue,
                oldVal: oldValue
            };
            game.WSocket.getInstance().sendJsonMsg(data);
        };
        Test.receive = function (data) {
            if (data['s'] == game.Constants.RESPONSE_SUCCESS) {
                LoadingUI.getInstance().setProgress(data['uid'], data['addVal'], data['oldVal']);
            }
        };
        Test.type = 'test';
        return Test;
    })();
    protocol.Test = Test;
    egret.registerClass(Test,"protocol.Test");
})(protocol || (protocol = {}));
