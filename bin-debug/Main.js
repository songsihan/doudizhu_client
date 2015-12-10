var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main;p=c.prototype;
    p.onAddToStage = function (event) {
        //inject the custom material parser
        //注入自定义的素材解析器
        egret.gui.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
        // load skin theme configuration file, you can manually modify the file. And replace the default skin.
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        egret.gui.Theme.load("resource/default.thm.json");
        //Config loading process interface
        // initialize the Resource loading library
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        this.gameInit();
        console.log('1===width:' + this.stage.stageWidth);
        console.log('1===height:' + this.stage.stageHeight);
        console.log('1===scaleMode:' + this.stage.$scaleMode);
        this.doResize();
        console.log('2===width:' + this.stage.stageWidth);
        console.log('2===height:' + this.stage.stageHeight);
        console.log('2===scaleMode:' + this.stage.$scaleMode);
    };
    /**
     * * @param scaleMode 当前的缩放模式
         * @param screenWidth 播放器视口宽度
         * @param screenHeight 播放器视口高度
         * @param contentWidth 初始化内容宽度
         * @param contentHeight 初始化内容高度
         *calculateStageSize(scaleMode: string,screenWidth: number,screenHeight: number,contentWidth: number,contentHeight: number): StageDisplaySize;
    
     */
    p.doResize = function () {
        var wid, hei, radio; //宽,高,像素比  
        //获取窗口宽度  
        if (window && window.innerWidth)
            wid = window.innerWidth;
        else if ((document.body) && (document.body.clientWidth))
            wid = document.body.clientWidth;
        //获取窗口高度  
        if (window && window.innerHeight)
            hei = window.innerHeight;
        else if ((document.body) && (document.body.clientHeight))
            hei = document.body.clientHeight;
        //通过深入Document内部对body进行检测，获取窗口大小  
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
            wid = document.documentElement.clientWidth;
            hei = document.documentElement.clientHeight;
        }
        //设备像素比,这里如果获取不到就自动默认为1,如果有特殊需求可以自行修改  
        radio = window.devicePixelRatio || 1;
        //处理横屏
        var resolution = { width: hei, height: wid };
        console.log("屏幕宽:", resolution.width, "|", "屏幕高:", resolution.height, "|", "设备像素比:", radio);
        //下面赋值给宽高适配手机浏览器
        //        var adapter = new egret.sys.ScreenAdapter();
        //        var _StageDisplaySize = adapter.calculateStageSize(egret.StageScaleMode.SHOW_ALL,resolution.height * radio,resolution.width * radio,resolution.height * radio,resolution.height * radio);
        //        egret.MainContext.instance.stage.stageWidth = resolution.height * radio;
        //        egret.MainContext.instance.stage.stageHeight = resolution.height * radio;
        //        egret.StageDelegate.getInstance().setDesignSize(resolution.width * radio,resolution.height * radio);
    };
    ;
    p.GetQueryString = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return decodeURI(r[2]);
        return null;
    };
    p.gameInit = function () {
        game.LogUtil.log("gameInit");
        //        var globalPid = this.GetQueryString("pid");
        //==>egret.getOption('pid');
        //        game.ModelCache.getInstance().setPid(globalPid);
        //        var globalPid = egret.getOption('pid');
        //        game.ModelCache.testRoomData.user = game.ModelCache.testUserData[globalPid];
        this._listeners = game.ProxyListener.getInstance();
        //        game.ModelCache.getInstance().initUserInfo(game.ModelCache.testRoomData);//测试使用
        this.gameSocket = game.WSocket.getInstance();
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * Loading of configuration file is complete, start to pre-load the preload resource group
     */
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("bgload", 1);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     * preload resource group is loaded
     */
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "bgload") {
            //设置加载进度界面
            this.loadingView = LoadingUI.getInstance();
            this.stage.addChild(this.loadingView);
        }
        else if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createScene();
            var selfUid = game.ModelCache.getInstance().getUid();
            this.loadingView.setProgress(selfUid, 10, 0);
            game.TimerUtil.getInstance().addObj('main', this, 200);
        }
    };
    p.sockeOverTime = function () {
        if (!game.WSocket.getInstance().ws.connected && game.WSocket.reSendCnt > 2) {
            //连接游戏服务器失败-游戏异常提示（重试、退出）
            var tipLayer = new game.TipLayer();
            this.stage.addChild(tipLayer);
            tipLayer.label.text = "服 务 器 连 接 失 败";
            tipLayer.label.bold = true;
            tipLayer.label.size = 35;
            tipLayer.x = 400;
            tipLayer.y = 30;
            tipLayer.verticalCenter = 0;
            game.WSocket.getInstance().ws.close();
            game.TimerUtil.getInstance().rmObj('main');
        }
    };
    p.exeTimer = function () {
        game.LogUtil.log('Main_exeTimer');
        this.sockeOverTime();
        var table = game.ModelCache.getInstance().getTable();
        if (table.tableSt == game.Constants.TABLE_IN_GAME) {
            game.TimerUtil.getInstance().rmObj('main');
            this.stage.removeChild(this.loadingView);
            game.MainPanel.getInstance().panelStatus = 'reConn';
            var selfevent = new game.SelfEvent(game.SelfEvent.INIT_TABLE);
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
            var selfevent = new game.SelfEvent(game.SelfEvent.UPDATE_TABLE);
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
            game.TimerUtil.getInstance().clear();
            game.TimerUtil.getInstance().addObj('ws', game.WSocket.getInstance());
        }
        if (table.tableSt == game.Constants.TABLE_LANDLORD) {
            game.TimerUtil.getInstance().rmObj('main');
            this.stage.removeChild(this.loadingView);
            var selfevent = new game.SelfEvent(game.SelfEvent.INIT_TABLE);
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
            return;
        }
        var nowTime = new Date().getTime();
        if (game.ModelCache.getInstance().flag == 'login') {
            var selfUid = game.ModelCache.getInstance().getUid();
            this.loadingView.setProgress(selfUid, 10, 0);
            game.ModelCache.getInstance().flag = 'join';
            var selfevent = new game.SelfEvent(game.SelfEvent.JT);
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
            game.ModelCache.getInstance().timerTime = nowTime;
            this.sendProgress();
        }
        else if ((nowTime - game.ModelCache.getInstance().timerTime) > 90000
            && game.ModelCache.getInstance().flag == 'join') {
            game.LogUtil.log('牌局建立超时');
            game.TimerUtil.getInstance().rmObj('main');
            game.WSocket.getInstance().ws.close();
            var tipLayer = new game.TipLayer();
            this.stage.addChild(tipLayer);
            tipLayer.label.text = "牌 局 建 立 超 时";
            tipLayer.label.bold = true;
            tipLayer.label.size = 35;
            tipLayer.x = 400;
            tipLayer.y = 30;
        }
        else if (Main.hitNum >= 5) {
            Main.hitNum = 0;
            this.sendProgress();
        }
        this.loadingView.setImg();
        Main.hitNum++;
    };
    p.sendProgress = function () {
        var proValue = this.loadingView.getSelfProValue();
        var addValue = proValue - Main.lastSendPro;
        var data = protocol.Test.tReq(addValue, proValue);
        game.WSocket.getInstance().sendJsonMsg(data);
        Main.lastSendPro = proValue;
    };
    /**
     * 资源组加载出错
     * Resource group loading failed
     */
    p.onResourceLoadError = function (event) {
        //TODO
        game.LogUtil.log("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        //        this.onResourceLoadComplete(event);
        Main.reLoadResCnt++;
        if (Main.reLoadResCnt > 3) {
            var tipLayer = new game.TipLayer();
            this.stage.addChild(tipLayer);
            tipLayer.label.text = "游 戏 加 载 失 败";
            tipLayer.label.bold = true;
            tipLayer.label.size = 35;
            tipLayer.x = 400;
            tipLayer.y = 30;
            game.WSocket.getInstance().ws.close();
            return;
        }
        else {
            RES.loadGroup(event.groupName);
        }
    };
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            var selfUid = game.ModelCache.getInstance().getUid();
            var newAddValue = Math.ceil(event.itemsLoaded * 100 * 0.8 / event.itemsTotal);
            var oldAddValue = Math.ceil(Main.oldItemLoadNum * 100 * 0.8 / event.itemsTotal);
            var addValue = newAddValue - oldAddValue;
            this.loadingView.setProgress(selfUid, addValue, 0);
            Main.oldItemLoadNum = newAddValue;
            this.sendProgress();
        }
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    p.createScene = function () {
        //游戏场景层，游戏场景相关内容可以放在这里面。
        //Game scene layer, the game content related to the scene can be placed inside this layer.
        this.gameLayer = new egret.DisplayObjectContainer();
        this.addChild(this.gameLayer);
        this.guiGameLayer = game.GameLayer.getInstance();
        this.addChild(this.guiGameLayer);
        this.guiGameLayer.showLayer(game.GameLayer.MAIN_LAYER);
    };
    Main.reqCnt = 0;
    Main.reLoadResCnt = 0;
    Main.hitNum = 0;
    Main.oldItemLoadNum = 0;
    Main.lastSendPro = 0;
    return Main;
})(egret.DisplayObjectContainer);
egret.registerClass(Main,"Main");
