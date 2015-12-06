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
        }
        
        private onReceiveMsg(event:egret.ProgressEvent):void{
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
            if(WSocket.reSendCnt > 5)
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
                var btn = new egret.gui.Button();
                btn.skinName = skins.components.ButtonTplSkin;
                btn.label = '掉线重连';
                MainPanel.getInstance().end.addElement(btn);
                btn.horizontalCenter = 0;
                btn.alpha = 0.8;
                btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.reConn,this);
                game.LogUtil.log('掉线重连');
            }
            if(JSON.stringify(WSocket.lastSendMsg) == JSON.stringify(msg))
            {
                if(WSocket.reSendCnt >= 10)
                {
                    //请求异常，不再重连============
                    game.LogUtil.log('请求异常，不再重连');
                    this.ws.close();
                    return false;
                }
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
        
        public reConn():void
        {       
            game.LogUtil.log('reConn');
            MainPanel.getInstance().end.removeAllElements();
            WSocket.reConn = 1;
            WSocket.reSendCnt = 0;
            this.ws.connect(NetConf.SERVER_IP,NetConf.PORT);
            game.TimerUtil.getInstance().addObj('ws',this,200);
        }
        public exeTimer() {
            game.LogUtil.log('WSocket_exeTimer');
            if(!this.ws.connected && WSocket.reSendCnt >= 2)
            {
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
        }
	}
	
}
