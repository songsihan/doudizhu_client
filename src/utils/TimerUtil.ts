module game {
	/**
	 * 
	 * 系统唯一定时器
	 * @author 
	 *
	 */
	export class TimerUtil{
    	
    	public timer: egret.Timer;
        private static _instance:TimerUtil;
        public objs: any[] = [];
        public keys: any[] = [];
        
        public static getInstance():any {
            if (TimerUtil._instance == null) {
                TimerUtil._instance = new TimerUtil();
            }
            return TimerUtil._instance;
        }
		public constructor() {
            this.timer = new egret.Timer(500,0);
            this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
		    
            this.timer.start();
        }
		
		public timerFunc()
		{
            var _objs = this.objs;
            for(var i = 0;i < _objs.length;i++)
            {
                _objs[i].exeTimer();
            }
		}
		public timerComFunc()
		{
		    
		}
		
		public addObj(key,obj,interval:number = 500):void{
    		if(interval != 500)
    		{
                this.timer.delay = interval;
    		}
    		var index = Func.getArrIndex(this.keys,key);
    		if(index > -1)
    		{
        		this.keys.splice(index,1);
        		this.objs.splice(index,1);
    		}
    		this.keys.push(key);
    		this.objs.push(obj);
//            console.log("keys:" + this.keys);
		}
		public rmObj(key):void{
            var index = Func.getArrIndex(this.keys,key);
            if(index >= 0)
            {
                this.keys.splice(index,1);
                this.objs.splice(index,1);
            }
		}
		public clear():void{
            this.keys = [];
            this.objs = [];
		}
	}
}
