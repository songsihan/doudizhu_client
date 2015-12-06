var protocol;
(function (protocol) {
    /**
     *
     * @author
     *
     */
    var JoinTable = (function () {
        function JoinTable() {
        }
        var d = __define,c=JoinTable;p=c.prototype;
        JoinTable.jtReq = function () {
            var data = {
                type: 'jt',
                uid: game.ModelCache.getInstance().getUid()
            };
            game.WSocket.getInstance().sendJsonMsg(data);
        };
        JoinTable.receive = function (data) {
            if (data['s'] == game.Constants.RESPONSE_SUCCESS) {
                if (game.ModelCache.getInstance().flag != 'll') {
                    game.ModelCache.getInstance().flag = 'll';
                    game.ModelCache.getInstance().initTable(data.tableInfo);
                }
            }
        };
        JoinTable.type = 'jt';
        return JoinTable;
    })();
    protocol.JoinTable = JoinTable;
    egret.registerClass(JoinTable,"protocol.JoinTable");
})(protocol || (protocol = {}));
