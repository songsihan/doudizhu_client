var protocol;
(function (protocol) {
    /**
     *
     * @author
     *
     */
    var Play = (function () {
        function Play() {
        }
        var d = __define,c=Play;p=c.prototype;
        Play.playReq = function (event) {
            var data = {
                type: 'play',
                uid: game.ModelCache.getInstance().getUid(),
                playCardNos: event.test['cards'],
                op: event.test['op']
            };
            game.WSocket.getInstance().sendJsonMsg(data);
        };
        Play.receive = function (data) {
            if (data['s'] == game.Constants.RESPONSE_SUCCESS) {
                game.ModelCache.getInstance().updateTablePlay(data);
            }
            //            else if(data['s'] == game.Constants.RESPONSE_MATCHING){
            //                                                
            //                game.GameLayer.getInstance().showLayer(game.GameLayer.START_LAYER);
            //            }  
        };
        Play.type = 'play';
        return Play;
    })();
    protocol.Play = Play;
    egret.registerClass(Play,"protocol.Play");
})(protocol || (protocol = {}));
