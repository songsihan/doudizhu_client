module protocol {
	/**
	 *
	 * @author 
	 *
	 */
	export class Login {
        public static type = 'login';
    	
    	public static loginReq(isReC:number = 0):any
    	{
            var data = {
                type: 'login',
                uid: game.ModelCache.getInstance().playerCache.uid,
                name: game.ModelCache.getInstance().playerCache.name,
                tid: game.ModelCache.getInstance().tableCache.tid,
                score: game.ModelCache.getInstance().playerCache.score,
                uids: game.ModelCache.getInstance().tableCache.uids,
                isReConn:isReC
            };
            return data;
    	}
    	
    	public static receive(data)
    	{
         var s = data['s'];
    	   if(s == game.Constants.RESPONSE_FAIL)
         {
             var data = protocol.Login.loginReq();
             var re = game.WSocket.getInstance().sendJsonMsg(data);
             if(re == false)
             {
                 game.LogUtil.log('请求异常，重试');
             }
             
         }
         else if(s == game.Constants.RESPONSE_RECONN_SUCCESS)
         {
               game.ModelCache.getInstance().initTable(data.tableInfo);
         }
         else
         {
               game.ModelCache.getInstance().flag = 'login';
         }
    	}
	}
}
