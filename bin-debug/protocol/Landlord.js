var protocol;
(function (protocol) {
    /**
     *
     * @author
     *
     */
    var Landlord = (function () {
        function Landlord() {
        }
        var d = __define,c=Landlord;p=c.prototype;
        Landlord.llReq = function (event) {
            //        	if(Landlord.failCnt >= 3)
            //             {
            //                Landlord.failCnt = 0;
            //             }
            game.LogUtil.log("llReq");
            var data = {
                type: 'll',
                op: event.test,
                uid: game.ModelCache.getInstance().getUid()
            };
            game.WSocket.getInstance().sendJsonMsg(data);
        };
        Landlord.receive = function (data) {
            if (data['s'] == game.Constants.RESPONSE_SUCCESS) {
                game.ModelCache.getInstance().updateTable(data, false);
            }
            //            else if(data['s'] = game.Constants.RESPONSE_RE_JOIN)
            //            {
            //                game.ModelCache.getInstance().getTable().tableSt = 0;        
            //                gamefalseameLayer.getInstance().showLayer(game.GameLayer.START_LAYER);
            //            }
            //            else if(data['s'] == game.Constants.LANDLORD_RESET_TABLE)
            //            {
            //                game.ModelCache.getInstance().initTable(data.tableInfo);
            //            }
            //            else
            //            {
            //                Landlord.failCnt++;
            //                if(Landlord.failCnt >= 3)//失败超过3次数，则重新进入匹配状态
            //                {
            //                    var selfevent: game.SelfEvent = new game.SelfEvent(game.SelfEvent.JT);
            //                    game.ProxyListener.getInstance().dispatchEvent(selfevent);
            //                                    
            //                    game.GameLayer.getInstance().showLayer(game.GameLayer.START_LAYER);
            //                }
            //            }
        };
        Landlord.type = 'll';
        Landlord.failCnt = 0; //失败计数
        return Landlord;
    })();
    protocol.Landlord = Landlord;
    egret.registerClass(Landlord,"protocol.Landlord");
})(protocol || (protocol = {}));
