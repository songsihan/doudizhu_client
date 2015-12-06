module protocol {
	/**
	 *
	 * @author 
	 *
	 */
	export class Landlord {
        public static type = 'll';
        public static failCnt = 0;//失败计数
    	public static llReq(event:game.SelfEvent):void{
//        	if(Landlord.failCnt >= 3)
//             {
//                Landlord.failCnt = 0;
//             }
            game.LogUtil.log("llReq");
            var data = {
                type: 'll',
                op:event.test,
                uid:game.ModelCache.getInstance().getUid()
            };
            game.WSocket.getInstance().sendJsonMsg(data);
    	}
    	
        public static receive(data)
        {
            if(data['s'] == game.Constants.RESPONSE_SUCCESS)
            {
                game.ModelCache.getInstance().updateTable(data,false);
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
        }
	}
}
