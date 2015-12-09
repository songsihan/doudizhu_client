module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class WSocket {
        public ws: egret.WebSocket;
        private static _instance:WSocket;
        private static status;
        private static lastSendMsg;
        public static reSendCnt: number = 0;
        public static reConn: number = 0;
        public static heartTime: number = 0;
        public static getInstance():any {
            if (WSocket._instance == null) {
                WSocket._instance = new WSocket();
                WSocket._instance.init();
            }
            return WSocket._instance;
        }
        public init():void
        {
            game.LogUtil.log("WSocket init");
            this.ws = new egret.WebSocket();
            this.ws.addEventListener(egret.ProgressEvent.SOCKET_DATA,this.onReceiveMsg,this);
            this.ws.addEventListener(egret.Event.CONNECT,this.onSocketOpen,this);
            this.ws.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
            this.ws.connect(NetConf.SERVER_IP,NetConf.PORT);
            game.TimerUtil.getInstance().addObj('ws',this);
        }
        
        private onReceiveMsg(event:egret.ProgressEvent):void{
            MainPanel.getInstance().end && MainPanel.getInstance().end.removeAllElements();
            var data = this.ws.readUTF();
            var msg = JSON.parse(data);
            game.LogUtil.log("读取数据：" + data);
            var _type = msg.type;
            switch(_type)
            {
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
        }
        
        private onSocketError(event:egret.Event):void{
            if(WSocket.reSendCnt > 10)
            {
                return;
            }
            if(!this.ws.connected)
            {         
                WSocket.reSendCnt++;
                this.ws.connect(NetConf.SERVER_IP,NetConf.PORT);
            }
            else
            {
                WSocket.reSendCnt = 0;
                this.sendJsonMsg(WSocket.lastSendMsg);
                game.LogUtil.log("消息异常，重发请求!!!");
                game.LogUtil.log(WSocket.lastSendMsg);
            }
        }
        
        private onSocketOpen(event:egret.Event):void{
            var data = protocol.Login.loginReq(WSocket.reConn);
            this.sendJsonMsg(data);
            game.LogUtil.log("连接成功!!!");
        }
        
        public sendJsonMsg(msg):boolean{
            if(!this.ws.connected 
                && ModelCache.getInstance().getTable().tableSt == game.Constants.TABLE_IN_GAME)
            {
                this.socketTip(-1);
                this.ws.connect(NetConf.SERVER_IP,NetConf.PORT);
                game.LogUtil.log('掉线重连');
                if(WSocket.reSendCnt >= 10) 
                {
                    this.socketTip(1);
                    //请求异常，不再重连============
                    game.LogUtil.log('请求异常，不再重连');
                    this.ws.close();
                    return false;
                }
            }
            if(JSON.stringify(WSocket.lastSendMsg) == JSON.stringify(msg))
            {
                WSocket.reSendCnt++;
                this.ws.writeUTF(JSON.stringify(msg));
                game.LogUtil.log("发送数据：" + JSON.stringify(msg));
            }
            else
            {
                WSocket.lastSendMsg = msg;
                this.ws.writeUTF(JSON.stringify(msg));
                game.LogUtil.log("发送数据：" + JSON.stringify(msg));
            }
        }
        
        public socketTip(isFail=-1)
        {
            MainPanel.getInstance().end && MainPanel.getInstance().end.removeAllElements();
            var tip = new egret.gui.Button();
            tip.skinName = skins.components.SocketTipSkin;
            tip.label = (isFail == -1) ? "您已掉线，正在重新连接" : "您已掉线，尝试连接失败";
            tip.horizontalCenter = 0;
            game.MainPanel.getInstance().end.addElement(tip);
            
            if(isFail == 1)
            {
                game.LogUtil.log('重连失败');
                game.TimerUtil.getInstance().timer.stop();
                game.WSocket.getInstance().ws.close();
            }
        }
        
        public exeTimer() {
            game.LogUtil.log('WSocket_exeTimer');
            if((new Date().getTime() - WSocket.heartTime) > 1000
                && ModelCache.getInstance().getTable().tableSt == game.Constants.TABLE_IN_GAME)
            {
                WSocket.heartTime = new Date().getTime();
                //心跳请求 请求间隔1秒
                var data = protocol.Test.tReq(-1,-1);
                game.WSocket.getInstance().sendJsonMsg(data);
            }
        }
	}
	
}
