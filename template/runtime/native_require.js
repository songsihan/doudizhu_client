
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/res/res.js",
	"libs/modules/gui/gui.js",
	"libs/modules/socket/socket.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/com/liubawan/yuezhan/liubawan.js",
	"bin-debug/common/CardSort.js",
	"bin-debug/common/CardUtl.js",
	"bin-debug/common/CommonData.js",
	"bin-debug/common/Constants.js",
	"bin-debug/common/LogUtil.js",
	"bin-debug/common/SoundUtil.js",
	"bin-debug/controller/ModelCache.js",
	"bin-debug/controller/ProxyListener.js",
	"bin-debug/controller/SelfEvent.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/model/Player.js",
	"bin-debug/model/Table.js",
	"bin-debug/protocol/ChgPlaySt.js",
	"bin-debug/protocol/JoinTable.js",
	"bin-debug/protocol/Landlord.js",
	"bin-debug/protocol/Login.js",
	"bin-debug/protocol/net/NetConf.js",
	"bin-debug/protocol/net/WSocket.js",
	"bin-debug/protocol/Play.js",
	"bin-debug/protocol/Test.js",
	"bin-debug/skins/components/Bitmap_DiZhuSkin.g.js",
	"bin-debug/skins/components/Bitmap_NongMinSkin.g.js",
	"bin-debug/skins/components/ButtonSkin.g.js",
	"bin-debug/skins/components/ButtonTplSkin.g.js",
	"bin-debug/skins/components/cardSkin.g.js",
	"bin-debug/skins/components/CardTip1Skin.g.js",
	"bin-debug/skins/components/CardTip2Skin.g.js",
	"bin-debug/skins/components/CardTip3Skin.g.js",
	"bin-debug/skins/components/ClockSkin.g.js",
	"bin-debug/skins/components/ContainerSkin.g.js",
	"bin-debug/skins/components/DepositSkin.g.js",
	"bin-debug/skins/components/FailSkin.g.js",
	"bin-debug/skins/components/GoOnSkin.g.js",
	"bin-debug/skins/components/Land1Skin.g.js",
	"bin-debug/skins/components/Land2Skin.g.js",
	"bin-debug/skins/components/Land3Skin.g.js",
	"bin-debug/skins/components/LandlordSkin.g.js",
	"bin-debug/skins/components/LandSkin.g.js",
	"bin-debug/skins/components/LeaveSkin.g.js",
	"bin-debug/skins/components/playerPlaySkin.g.js",
	"bin-debug/skins/components/playSkin.g.js",
	"bin-debug/skins/components/ProgressBarSkin.g.js",
	"bin-debug/skins/components/ProgressSkin.g.js",
	"bin-debug/skins/components/promptSkin.g.js",
	"bin-debug/skins/components/readySkin.g.js",
	"bin-debug/skins/components/resetPlaySkin.g.js",
	"bin-debug/skins/components/retrySkin.g.js",
	"bin-debug/skins/components/SocketTipSkin.g.js",
	"bin-debug/skins/components/StartSkin.g.js",
	"bin-debug/skins/components/TipSkin.g.js",
	"bin-debug/skins/components/UnDepositSkin.g.js",
	"bin-debug/skins/components/unLandSkin.g.js",
	"bin-debug/skins/components/unPlaySkin.g.js",
	"bin-debug/skins/components/WinSkin.g.js",
	"bin-debug/skins/self/CurrCardSkin.js",
	"bin-debug/skins/self/EndSkin.g.js",
	"bin-debug/skins/self/LoadingSkin.g.js",
	"bin-debug/skins/self/LoadingUISkin.g.js",
	"bin-debug/skins/self/mainPanelSkin.g.js",
	"bin-debug/skins/self/NewLoadingSkin.g.js",
	"bin-debug/skins/self/PopWindow.js",
	"bin-debug/skins/self/_mainPanelSkin.g.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/utils/Func.js",
	"bin-debug/utils/TimerUtil.js",
	"bin-debug/views/EndLayer.js",
	"bin-debug/views/GameLayer.js",
	"bin-debug/views/LandlordLayer.js",
	"bin-debug/views/MainPanel.js",
	"bin-debug/views/PlayLayer.js",
	"bin-debug/views/StartLayer.js",
	"bin-debug/views/TipLayer.js",
	"bin-debug/views/_MainPanel.js",
	//----auto game_file_list end----
];

var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "fixedWidth",
		contentWidth: 800,
		contentHeight: 480,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};