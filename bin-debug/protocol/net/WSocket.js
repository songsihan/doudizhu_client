var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var WSocket = (function () {
        function WSocket() {
        }
        var d = __define,c=WSocket;p=c.prototype;
        WSocket.getInstance = function () {
            if (WSocket._instance == null) {
                WSocket._instance = new WSocket();
                WSocket._instance.init();
            }
            return WSocket._instance;
        };
        p.init = function () {
            game.LogUtil.log("WSocket init");
            this.ws = new egret.WebSocket();
            this.ws.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMsg, this);
            this.ws.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
            this.ws.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
            this.ws.connect(game.NetConf.SERVER_IP, game.NetConf.PORT);
        };
        p.onReceiveMsg = function (event) {
            var data = this.ws.readUTF();
            var msg = JSON.parse(data);
            game.LogUtil.log("读取数据：" + data);
            var _type = msg.type;
            switch (_type) {
                case 'test':
                    protocol.Test.receive(msg);
                    break;
                case 'login':
                    protocol.Login.receive(msg);
                    break;
                case 'jt':
                    protocol.JoinTable.receive(msg);
                    break;
                case 'll':
                    protocol.Landlord.receive(msg);
                    break;
                case 'play':
                    protocol.Play.receive(msg);
                    break;
                case 'chgSt':
                    protocol.ChgPlaySt.receive(msg);
                    break;
            }
        };
        p.onSocketError = function (event) {
            if (WSocket.reSendCnt > 5) {
                return;
            }
            if (!this.ws.connected) {
                WSocket.reSendCnt++;
                this.ws.connect(game.NetConf.SERVER_IP, game.NetConf.PORT);
            }
            else {
                WSocket.reSendCnt = 0;
                this.sendJsonMsg(WSocket.lastSendMsg);
                game.LogUtil.log("消息异常，重发请求!!!");
                game.LogUtil.log(WSocket.lastSendMsg);
            }
        };
        p.onSocketOpen = function (event) {
            var data = protocol.Login.loginReq(WSocket.reConn);
            this.sendJsonMsg(data);
            game.LogUtil.log("连接成功!!!");
        };
        p.sendJsonMsg = function (msg) {
            if (!this.ws.connected
                && game.ModelCache.getInstance().getTable().tableSt == game.Constants.TABLE_IN_GAME) {
                var btn = new egret.gui.Button();
                btn.skinName = skins.components.ButtonTplSkin;
                btn.label = '掉线重连';
                game.MainPanel.getInstance().end.addElement(btn);
                btn.horizontalCenter = 0;
                btn.alpha = 0.8;
                btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reConn, this);
                game.LogUtil.log('掉线重连');
            }
            if (JSON.stringify(WSocket.lastSendMsg) == JSON.stringify(msg)) {
                if (WSocket.reSendCnt >= 10) {
                    //请求异常，不再重连============
                    game.LogUtil.log('请求异常，不再重连');
                    this.ws.close();
                    return false;
                }
                WSocket.reSendCnt++;
                this.ws.writeUTF(JSON.stringify(msg));
                game.LogUtil.log("发送数据：" + JSON.stringify(msg));
            }
            else {
                WSocket.lastSendMsg = msg;
                this.ws.writeUTF(JSON.stringify(msg));
                game.LogUtil.log("发送数据：" + JSON.stringify(msg));
            }
        };
        p.reConn = function () {
            game.LogUtil.log('reConn');
            game.MainPanel.getInstance().end.removeAllElements();
            WSocket.reConn = 1;
            WSocket.reSendCnt = 0;
            this.ws.connect(game.NetConf.SERVER_IP, game.NetConf.PORT);
            game.TimerUtil.getInstance().addObj('ws', this, 200);
        };
        p.exeTimer = function () {
            game.LogUtil.log('WSocket_exeTimer');
            if (!this.ws.connected && WSocket.reSendCnt >= 2) {
                //重连失败，是否重试
                var btn = new egret.gui.Button();
                btn.skinName = skins.components.ButtonTplSkin;
                btn.label = '重连失败';
                game.MainPanel.getInstance().end.addElement(btn);
                btn.horizontalCenter = 0;
                btn.enabled = false;
                game.LogUtil.log('重连失败');
                game.TimerUtil.getInstance().timer.stop();
                game.WSocket.getInstance().clear();
            }
        };
        WSocket.reSendCnt = 0;
        WSocket.reConn = 0;
        return WSocket;
    })();
    game.WSocket = WSocket;
    egret.registerClass(WSocket,"game.WSocket");
})(game || (game = {}));
