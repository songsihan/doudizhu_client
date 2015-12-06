module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class LogUtil {
    	public static log(str:any)
    	{
            liubawan.LiubawanEgretInterface.getInstance().enableDebug(true);
            liubawan.Util.info(str);
    	}
    	
	}
}
