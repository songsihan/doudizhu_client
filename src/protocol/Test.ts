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
                oldVal:oldValue
            };
           game.WSocket.getInstance().sendJsonMsg(data);
	    }
    	
        
        public static receive(data)
        {
            if(data['s'] == game.Constants.RESPONSE_SUCCESS){
                LoadingUI.getInstance().setProgress(data['uid'],data['addVal'],data['oldVal']);
            } 
        }
	}
}
