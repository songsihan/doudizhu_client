module protocol {
	/**
	 *
	 * @author 
	 *
	 */
	export class Play {
        public static type = 'play';
    	
    	public static playReq(event:game.SelfEvent):void
    	{
            var data = {
                type: 'play',
                uid:game.ModelCache.getInstance().getUid(),
                playCardNos:event.test['cards'],
                op:event.test['op']
            };
            game.WSocket.getInstance().sendJsonMsg(data);
    	}
    	
    	public static receive(data)
    	{
            if(data['s'] == game.Constants.RESPONSE_SUCCESS){
                game.ModelCache.getInstance().updateTablePlay(data);
            } 
//            else if(data['s'] == game.Constants.RESPONSE_MATCHING){
//                                                
//                game.GameLayer.getInstance().showLayer(game.GameLayer.START_LAYER);
//            }  
    	}
	}
}
