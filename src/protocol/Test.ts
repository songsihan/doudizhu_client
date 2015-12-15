module protocol {
	/**
	 * 用于同步进度
	 * 用于长连接保活
	 * @author 
	 *
	 */
	export class Test {
        public static type = 'test';
    	
	    public static tReq(addValue:number,oldValue:number)
	    {
            var data = {
                type: 'test',
                uid:game.ModelCache.getInstance().getUid(),
                addVal:addValue,
                oldVal:oldValue,
                st: addValue == 0 ? Main.isReady : 0
            };
           game.WSocket.getInstance().sendJsonMsg(data);
	    }
    	
        
        public static receive(data)
        {
            if(data['s'] == game.Constants.RESPONSE_SUCCESS){
                if(data['uid'] == -1)
                {
                    LoadingUI.getInstance().loadingEnd();
                    Main.isReady = 2;
                }
                else
                {
                    LoadingUI.getInstance().setProgress(data['uid'],data['addVal'],data['oldVal']);
                }
            } 
        }
	}
}
