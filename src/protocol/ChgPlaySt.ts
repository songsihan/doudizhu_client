module protocol {
	/**
	 *
	 * @author 
	 *
	 */
	export class ChgPlaySt {
        public static type = 'chgSt';
        
    	public static chgStReq(event:game.SelfEvent):void
    	{
            var data = {
                type: 'chgSt',
                uid:game.ModelCache.getInstance().getUid(),
                op:event.test,
            };
            game.WSocket.getInstance().sendJsonMsg(data);
    	}
    	
    	public static receive(data)
    	{
            if(data['s'] == game.Constants.RESPONSE_SUCCESS){
                var st = data['st'];
                var uid = data['uid'];
                game.ModelCache.getInstance().getTable().playerSt[uid] = st;
                var flag = st == game.Constants.PLAYER_DEPOSIT ? true : false;
                
                var pos = game.MainPanel.getInstance().uidToPos[uid];
                if(pos == 3)
                {
//                    game.MainPanel.getInstance().depositBtn.skinName =
//                        flag?skins.components.UnDepositSkin:skins.components.DepositSkin;
                    game.MainPanel.getInstance().depositBtn.label = flag?'取消托管':'托 管';
                    game.MainPanel.getInstance().robot3.visible = flag;
                    game.MainPanel.getInstance().leave3.visible = false;
                }
                else if(pos == 1)
                {
                    game.MainPanel.getInstance().robot1.visible = flag;
                    game.MainPanel.getInstance().leave1.visible = false;
                }
                else if(pos == 2)
                {
                    game.MainPanel.getInstance().robot2.visible = flag;
                    game.MainPanel.getInstance().leave2.visible = false;
                }
            } 
    	}
	}
}
