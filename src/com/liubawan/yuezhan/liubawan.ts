module liubawan {
    /**
    *
    * @author 
    *
    */
    export class LiubawanEgretCallback {
        constructor() {
        }
        //充值回调
        onPay: Function;
        //获取用户信息回调
        onCheckUser: Function;
        //准备回调
        onReady: Function;
        //静音回调
        onSetAudioVolume: Function;
        //用户金豆变化通知
        onGoldChange: Function;
        //用户退出游戏通知
        onQuitGame:Function;
        //未定义行为
        onCallback: Function;
    }
}

module liubawan {
    /**
    *
    * @author 
    *
    */
    export class Config {
        constructor() {
        }
        static TYPE_CHECK_USER: number = 1;
        static TYPE_PAY: number = 2;
        static TYPE_READY: number = 3;
        static TYPE_SET_AUDIO_VOLUME: number = 4;
        static TYPE_MONEY_CHANGE: number = 5;
        static TYPE_QUIT_GAME: number = 6;
    }
}

module liubawan {
    /**
    *
    * @author 
    *
    */
    export class Util {
        static DEBUG: boolean = false;
        static isRuntime(): boolean { 
            return egret.MainContext.runtimeType == egret.MainContext.RUNTIME_NATIVE;
        }
        static info(msg): void { 
            if(Util.DEBUG){ 
                console.info(msg);
            }
        }
        static enableDebug(enabled:boolean): void { 
            Util.DEBUG = enabled;
        }
    }
}

module liubawan {
    /**
    *
    * @author 
    *
    */
    export class LiubawanEgretInterface {
        private static mInterface: LiubawanEgretInterface = new LiubawanEgretInterface();
        /**
        * 获取接口实例
        */ 
        public static getInstance(): LiubawanEgretInterface{
            return LiubawanEgretInterface.mInterface;
        }
        private callback:LiubawanEgretCallback;
        private userInfo: string;
        constructor() {
            this.init();
        }
                	
        private init(): void { 
            this.enableDebug(false);
            this.callback = new LiubawanEgretCallback();
            if(!Util.isRuntime()){ 
                var b = new RegExp("(^|&)" + "data" + "=([^&]*)(&|$)", "i");
                var c = window.location.search.substr(1).match(b);
                this.userInfo = null != c ? decodeURI(decodeURIComponent(decodeURI(c[2]))) : null
                Util.info("userInfo: " + this.userInfo);
                window["Liubawan_App_Interface"] = {};
                window["Liubawan_App_Interface"].invokeGame = LiubawanEgretInterface.onCallback;
            }
            egret.ExternalInterface.addCallback("egret_game_yuezhan", LiubawanEgretInterface.onCallback);
        }
                    
        /**
        * 请求用户信息
        */ 
        public checkUser(callback:Function): void { 
            Util.info("checkUser");
            if(typeof this.callback != "undefined"){ 
                this.callback.onCheckUser = callback;
            }
            var type = Config.TYPE_CHECK_USER;
            var msg:string = '{"type":' + type + '}';
            if(Util.isRuntime()){
                LiubawanEgretInterface.callRuntime(type, msg);
            } else { 
                LiubawanEgretInterface.callH5(type, msg);
            }
        }
                    
        /**
        * 发起充值请求
        */ 
        public pay(param, callback:Function): void { 
            Util.info("pay");
            if(typeof this.callback != "undefined"){
                this.callback.onPay = callback;
            }
            var type = Config.TYPE_PAY;
            var msg: any = {};
            msg.type = Config.TYPE_PAY;
            if(param != null){ 
                msg.data = param;
            }
            if(Util.isRuntime()){
                LiubawanEgretInterface.callRuntime(type, msg);
            } else { 
                LiubawanEgretInterface.callH5(type, msg);
            }
        }
        /**
        * 通知平台静音状态变化
        * @volume 当前音量大小百分比
        */ 
        public onAudioVolumeChanged(volume: Number): void { 
            Util.info("onAudioVolumeChanged");
            var type = Config.TYPE_SET_AUDIO_VOLUME;
            var msg: any = {};
            msg.type = Config.TYPE_SET_AUDIO_VOLUME;
            msg.data = {};
            msg.data.volume = volume;
            if(Util.isRuntime()){
                LiubawanEgretInterface.callRuntime(type, JSON.stringify(msg));
            } else { 
                LiubawanEgretInterface.callH5(type, JSON.stringify(msg));
            }
        }
        /**
        * 注册再来一局回调事件
        */ 
        public addOnReadyListener(callback:Function): void { 
            Util.info("addOnReadyListener");
            if(typeof this.callback != "undefined"){
                this.callback.onReady = callback;
            }
        }
        /**
        * 注册设置音量大小回调事件
        */ 
        public addOnSetAudioVolumeListener(callback:Function): void { 
            Util.info("addOnSetAudioVolumeListener");
            if(typeof this.callback != "undefined"){
                this.callback.onSetAudioVolume = callback;
            }
        }
                
        /**
        * 注册用户金钱变化回调事件
        */ 
        public addOnGoldChangeListener(callback:Function): void {
            Util.info("addOnGoldChangeListener");
            if(typeof this.callback != "undefined"){
                this.callback.onGoldChange = callback;
            }
        }
                
        /**
        * 游戏收到退出游戏通知后，退出行为处理结束后通知平台
        */ 
        public quitGameComplete(): void { 
            Util.info("quitGameComplete");
            var type = Config.TYPE_QUIT_GAME;
            var msg: any = {};
            msg.type = Config.TYPE_QUIT_GAME;
            if(Util.isRuntime()){
                LiubawanEgretInterface.callRuntime(type, JSON.stringify(msg));
            } else { 
                LiubawanEgretInterface.callH5(type, JSON.stringify(msg));
            }
        }
                
        /**
        * 注册用户主动关闭游戏回调事件
        */ 
        public addOnQuitGameListener(callback:Function): void {
            Util.info("addOnQuitGameListener");
            if(typeof this.callback != "undefined"){
                this.callback.onQuitGame = callback;
            }
        }
                
        /**
        * 开启关闭调试模式，默认开启
        */ 
        public enableDebug(enabled:boolean): void { 
            Util.enableDebug(enabled);
        }
                
        private static callRuntime(type:number, msg): void { 
            Util.info("callRuntime:" + msg);
            egret.ExternalInterface.call("egret_app_yuezhan",msg);
        }
                
        private static callH5(type:number, msg): void { 
            Util.info("callH5:" + msg);
            if(window["Liubawan_Game_Interface"]) {
                try {
                    var result = window["Liubawan_Game_Interface"].invokeApp(msg);
                    if(result && type == Config.TYPE_CHECK_USER) {
                        LiubawanEgretInterface.onCallback(result)
                        }
                    } catch (Error){
                        Util.info("接口未定义");
                    }
                } else { 
                    if(type == Config.TYPE_CHECK_USER) {
                        if(LiubawanEgretInterface.mInterface.userInfo  == null){ 
                            Util.info("url 里面没有参数");
                            return;
                        }
                        if(typeof LiubawanEgretInterface.mInterface.callback.onCheckUser != "undefined"){ 
                            try {
                                var param = JSON.parse(LiubawanEgretInterface.mInterface.userInfo);
                                Util.info("onCheckUser:" + JSON.stringify(param));
                                LiubawanEgretInterface.mInterface.callback.onCheckUser(param);
                            } catch (Error){
                            }
                        }
                    } else { 
                        Util.info("接口未定义");
                    }
                }
            }
            private static onCallback(msg): void { 
                Util.info(msg);
                var callback = LiubawanEgretInterface.mInterface.callback;
                if(typeof callback == "undefined"){
                    return;
                }
                try {
                    var param = JSON.parse(msg);
                    switch(param.type){ 
                        case Config.TYPE_CHECK_USER:
                        if(typeof callback.onCheckUser != "undefined") {
                            Util.info("onCheckUser:" + JSON.stringify(param.data));
                            callback.onCheckUser(param.data);
                        }
                        break;
                        case Config.TYPE_PAY:
                        if(typeof callback.onPay != "undefined") {
                            Util.info("onPay:" + JSON.stringify(param.data));
                            callback.onPay(param.data);
                        }
                        break;
                        case Config.TYPE_READY:
                        if(typeof callback.onReady != "undefined") {
                            Util.info("onReady");
                            callback.onReady(param.data);
                        }
                        break;
                        case Config.TYPE_SET_AUDIO_VOLUME:
                        if(typeof callback.onSetAudioVolume != "undefined") {
                            Util.info("onSetAudioVolume:" + JSON.stringify(param.data));
                            callback.onSetAudioVolume(param.data);
                        }
                        break;
                        case Config.TYPE_MONEY_CHANGE:
                        if(typeof callback.onGoldChange != "undefined") {
                            Util.info("onGoldChange:" + JSON.stringify(param.data));
                            callback.onGoldChange(param.data);
                        }
                        break;
                        case Config.TYPE_QUIT_GAME:
                        if(typeof callback.onQuitGame != "undefined") {
                            Util.info("onQuitGame");
                            callback.onQuitGame();
                        }
                        break;
                        default:
                        if(typeof callback.onCallback != "undefined") {
                            Util.info("onCallback");
                            callback.onCallback(param.data);
                        }
                        break;
                    }
                } catch(Error) { 
                }
            }
        }
    }
    