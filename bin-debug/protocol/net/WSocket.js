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
            game.TimerUtil.getInstance().addObj('ws', this);
        };
        p.onReceiveMsg = function (event) {
            game.MainPanel.getInstance().end && game.MainPanel.getInstance().end.removeAllElements();
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
            if (WSocket.reSendCnt > 10) {
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
                this.socketTip(-1);
                this.ws.connect(game.NetConf.SERVER_IP, game.NetConf.PORT);
                game.LogUtil.log('掉线重连');
                if (WSocket.reSendCnt >= 10) {
                    this.socketTip(1);
                    //请求异常，不再重连============
                    game.LogUtil.log('请求异常，不再重连');
                    this.ws.close();
                    return false;
                }
            }
            if (JSON.stringify(WSocket.lastSendMsg) == JSON.stringify(msg)) {
                var nowTime = new Date().getTime();
                while (new Date().getTime() - nowTime >= 300) {
                    continue;
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
        p.socketTip = function (isFail) {
            if (isFail === void 0) { isFail = -1; }
            game.MainPanel.getInstance().end && game.MainPanel.getInstance().end.removeAllElements();
            var tip = new egret.gui.Button();
            tip.skinName = skins.components.SocketTipSkin;
            tip.label = (isFail == -1) ? "您已掉线，正在重新连接" : "您已掉线，尝试连接失败";
            tip.horizontalCenter = 0;
            game.MainPanel.getInstance().end.addElement(tip);
            if (isFail == 1) {
                game.LogUtil.log('重连失败');
                game.TimerUtil.getInstance().timer.stop();
                game.WSocket.getInstance().ws.close();
            }
        };
        p.exeTimer = function () {
            game.LogUtil.log('WSocket_exeTimer');
            if ((new Date().getTime() - WSocket.heartTime) > 1000
                && game.ModelCache.getInstance().getTable().tableSt == game.Constants.TABLE_IN_GAME) {
                WSocket.heartTime = new Date().getTime();
                //心跳请求 请求间隔1秒
                var data = protocol.Test.tReq(-1, -1);
                game.WSocket.getInstance().sendJsonMsg(data);
            }
        };
        WSocket.reSendCnt = 0;
        WSocket.reConn = 0;
        WSocket.heartTime = 0;
        return WSocket;
    })();
    game.WSocket = WSocket;
    egret.registerClass(WSocket,"game.WSocket");
})(game || (game = {}));
