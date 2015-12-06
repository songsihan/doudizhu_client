module protocol {
	/**
	 *
	 * @author 
	 *
	 */
	export class JoinTable {
        public static type = 'jt';
    	
	    public static jtReq()
	    {
            var data = {
                type: 'jt',
                uid:game.ModelCache.getInstance().getUid()
            };
           game.WSocket.getInstance().sendJsonMsg(data);
	    }
    	
        
        public static receive(data)
        {
            if(data['s'] == game.Constants.RESPONSE_SUCCESS){
                if(game.ModelCache.getInstance().flag != 'll')
                {
                    game.ModelCache.getInstance().flag = 'll';
                    game.ModelCache.getInstance().initTable(data.tableInfo);
                }
            }
        }
	}
}
