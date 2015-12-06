var liubawan;
(function (liubawan) {
    /**
    *
    * @author
    *
    */
    var LiubawanEgretCallback = (function () {
        function LiubawanEgretCallback() {
        }
        var d = __define,c=LiubawanEgretCallback;p=c.prototype;
        return LiubawanEgretCallback;
    })();
    liubawan.LiubawanEgretCallback = LiubawanEgretCallback;
    egret.registerClass(LiubawanEgretCallback,"liubawan.LiubawanEgretCallback");
})(liubawan || (liubawan = {}));
var liubawan;
(function (liubawan) {
    /**
    *
    * @author
    *
    */
    var Config = (function () {
        function Config() {
        }
        var d = __define,c=Config;p=c.prototype;
        Config.TYPE_CHECK_USER = 1;
        Config.TYPE_PAY = 2;
        Config.TYPE_READY = 3;
        Config.TYPE_SET_AUDIO_VOLUME = 4;
        Config.TYPE_MONEY_CHANGE = 5;
        Config.TYPE_QUIT_GAME = 6;
        return Config;
    })();
    liubawan.Config = Config;
    egret.registerClass(Config,"liubawan.Config");
})(liubawan || (liubawan = {}));
var liubawan;
(function (liubawan) {
    /**
    *
    * @author
    *
    */
    var Util = (function () {
        function Util() {
        }
        var d = __define,c=Util;p=c.prototype;
        Util.isRuntime = function () {
            return egret.MainContext.runtimeType == egret.MainContext.RUNTIME_NATIVE;
        };
        Util.info = function (msg) {
            if (Util.DEBUG) {
                console.info(msg);
            }
        };
        Util.enableDebug = function (enabled) {
            Util.DEBUG = enabled;
        };
        Util.DEBUG = false;
        return Util;
    })();
    liubawan.Util = Util;
    egret.registerClass(Util,"liubawan.Util");
})(liubawan || (liubawan = {}));
var liubawan;
(function (liubawan) {
    /**
    *
    * @author
    *
    */
    var LiubawanEgretInterface = (function () {
        function LiubawanEgretInterface() {
            this.init();
        }
        var d = __define,c=LiubawanEgretInterface;p=c.prototype;
        /**
        * 获取接口实例
        */
        LiubawanEgretInterface.getInstance = function () {
            return LiubawanEgretInterface.mInterface;
        };
        p.init = function () {
            this.enableDebug(false);
            this.callback = new liubawan.LiubawanEgretCallback();
            if (!liubawan.Util.isRuntime()) {
                var b = new RegExp("(^|&)" + "data" + "=([^&]*)(&|$)", "i");
                var c = window.location.search.substr(1).match(b);
                this.userInfo = null != c ? decodeURI(decodeURIComponent(decodeURI(c[2]))) : null;
                liubawan.Util.info("userInfo: " + this.userInfo);
                window["Liubawan_App_Interface"] = {};
                window["Liubawan_App_Interface"].invokeGame = LiubawanEgretInterface.onCallback;
            }
            egret.ExternalInterface.addCallback("egret_game_yuezhan", LiubawanEgretInterface.onCallback);
        };
        /**
        * 请求用户信息
        */
        p.checkUser = function (callback) {
            liubawan.Util.info("checkUser");
            if (typeof this.callback != "undefined") {
                this.callback.onCheckUser = callback;
            }
            var type = liubawan.Config.TYPE_CHECK_USER;
            var msg = '{"type":' + type + '}';
            if (liubawan.Util.isRuntime()) {
                LiubawanEgretInterface.callRuntime(type, msg);
            }
            else {
                LiubawanEgretInterface.callH5(type, msg);
            }
        };
        /**
        * 发起充值请求
        */
        p.pay = function (param, callback) {
            liubawan.Util.info("pay");
            if (typeof this.callback != "undefined") {
                this.callback.onPay = callback;
            }
            var type = liubawan.Config.TYPE_PAY;
            var msg = {};
            msg.type = liubawan.Config.TYPE_PAY;
            if (param != null) {
                msg.data = param;
            }
            if (liubawan.Util.isRuntime()) {
                LiubawanEgretInterface.callRuntime(type, msg);
            }
            else {
                LiubawanEgretInterface.callH5(type, msg);
            }
        };
        /**
        * 通知平台静音状态变化
        * @volume 当前音量大小百分比
        */
        p.onAudioVolumeChanged = function (volume) {
            liubawan.Util.info("onAudioVolumeChanged");
            var type = liubawan.Config.TYPE_SET_AUDIO_VOLUME;
            var msg = {};
            msg.type = liubawan.Config.TYPE_SET_AUDIO_VOLUME;
            msg.data = {};
            msg.data.volume = volume;
            if (liubawan.Util.isRuntime()) {
                LiubawanEgretInterface.callRuntime(type, JSON.stringify(msg));
            }
            else {
                LiubawanEgretInterface.callH5(type, JSON.stringify(msg));
            }
        };
        /**
        * 注册再来一局回调事件
        */
        p.addOnReadyListener = function (callback) {
            liubawan.Util.info("addOnReadyListener");
            if (typeof this.callback != "undefined") {
                this.callback.onReady = callback;
            }
        };
        /**
        * 注册设置音量大小回调事件
        */
        p.addOnSetAudioVolumeListener = function (callback) {
            liubawan.Util.info("addOnSetAudioVolumeListener");
            if (typeof this.callback != "undefined") {
                this.callback.onSetAudioVolume = callback;
            }
        };
        /**
        * 注册用户金钱变化回调事件
        */
        p.addOnGoldChangeListener = function (callback) {
            liubawan.Util.info("addOnGoldChangeListener");
            if (typeof this.callback != "undefined") {
                this.callback.onGoldChange = callback;
            }
        };
        /**
        * 游戏收到退出游戏通知后，退出行为处理结束后通知平台
        */
        p.quitGameComplete = function () {
            liubawan.Util.info("quitGameComplete");
            var type = liubawan.Config.TYPE_QUIT_GAME;
            var msg = {};
            msg.type = liubawan.Config.TYPE_QUIT_GAME;
            if (liubawan.Util.isRuntime()) {
                LiubawanEgretInterface.callRuntime(type, JSON.stringify(msg));
            }
            else {
                LiubawanEgretInterface.callH5(type, JSON.stringify(msg));
            }
        };
        /**
        * 注册用户主动关闭游戏回调事件
        */
        p.addOnQuitGameListener = function (callback) {
            liubawan.Util.info("addOnQuitGameListener");
            if (typeof this.callback != "undefined") {
                this.callback.onQuitGame = callback;
            }
        };
        /**
        * 开启关闭调试模式，默认开启
        */
        p.enableDebug = function (enabled) {
            liubawan.Util.enableDebug(enabled);
        };
        LiubawanEgretInterface.callRuntime = function (type, msg) {
            liubawan.Util.info("callRuntime:" + msg);
            egret.ExternalInterface.call("egret_app_yuezhan", msg);
        };
        LiubawanEgretInterface.callH5 = function (type, msg) {
            liubawan.Util.info("callH5:" + msg);
            if (window["Liubawan_Game_Interface"]) {
                try {
                    var result = window["Liubawan_Game_Interface"].invokeApp(msg);
                    if (result && type == liubawan.Config.TYPE_CHECK_USER) {
                        LiubawanEgretInterface.onCallback(result);
                    }
                }
                catch (Error) {
                    liubawan.Util.info("接口未定义");
                }
            }
            else {
                if (type == liubawan.Config.TYPE_CHECK_USER) {
                    if (LiubawanEgretInterface.mInterface.userInfo == null) {
                        liubawan.Util.info("url 里面没有参数");
                        return;
                    }
                    if (typeof LiubawanEgretInterface.mInterface.callback.onCheckUser != "undefined") {
                        try {
                            var param = JSON.parse(LiubawanEgretInterface.mInterface.userInfo);
                            liubawan.Util.info("onCheckUser:" + JSON.stringify(param));
                            LiubawanEgretInterface.mInterface.callback.onCheckUser(param);
                        }
                        catch (Error) {
                        }
                    }
                }
                else {
                    liubawan.Util.info("接口未定义");
                }
            }
        };
        LiubawanEgretInterface.onCallback = function (msg) {
            liubawan.Util.info(msg);
            var callback = LiubawanEgretInterface.mInterface.callback;
            if (typeof callback == "undefined") {
                return;
            }
            try {
                var param = JSON.parse(msg);
                switch (param.type) {
                    case liubawan.Config.TYPE_CHECK_USER:
                        if (typeof callback.onCheckUser != "undefined") {
                            liubawan.Util.info("onCheckUser:" + JSON.stringify(param.data));
                            callback.onCheckUser(param.data);
                        }
                        break;
                    case liubawan.Config.TYPE_PAY:
                        if (typeof callback.onPay != "undefined") {
                            liubawan.Util.info("onPay:" + JSON.stringify(param.data));
                            callback.onPay(param.data);
                        }
                        break;
                    case liubawan.Config.TYPE_READY:
                        if (typeof callback.onReady != "undefined") {
                            liubawan.Util.info("onReady");
                            callback.onReady(param.data);
                        }
                        break;
                    case liubawan.Config.TYPE_SET_AUDIO_VOLUME:
                        if (typeof callback.onSetAudioVolume != "undefined") {
                            liubawan.Util.info("onSetAudioVolume:" + JSON.stringify(param.data));
                            callback.onSetAudioVolume(param.data);
                        }
                        break;
                    case liubawan.Config.TYPE_MONEY_CHANGE:
                        if (typeof callback.onGoldChange != "undefined") {
                            liubawan.Util.info("onGoldChange:" + JSON.stringify(param.data));
                            callback.onGoldChange(param.data);
                        }
                        break;
                    case liubawan.Config.TYPE_QUIT_GAME:
                        if (typeof callback.onQuitGame != "undefined") {
                            liubawan.Util.info("onQuitGame");
                            callback.onQuitGame();
                        }
                        break;
                    default:
                        if (typeof callback.onCallback != "undefined") {
                            liubawan.Util.info("onCallback");
                            callback.onCallback(param.data);
                        }
                        break;
                }
            }
            catch (Error) {
            }
        };
        LiubawanEgretInterface.mInterface = new LiubawanEgretInterface();
        return LiubawanEgretInterface;
    })();
    liubawan.LiubawanEgretInterface = LiubawanEgretInterface;
    egret.registerClass(LiubawanEgretInterface,"liubawan.LiubawanEgretInterface");
})(liubawan || (liubawan = {}));
