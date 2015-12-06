var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var EndLayer = (function (_super) {
        __extends(EndLayer, _super);
        //        public parentCon: egret.gui.SkinnableContainer;
        function EndLayer(isWin) {
            _super.call(this);
            this.checkTime = 0;
            this.isWin = false;
            this.skinName = skins.self.EndSkin;
            this.isWin = isWin;
            game.SoundUtil.endSound(this.isWin);
            //            this.parentCon = parentCon;
        }
        var d = __define,c=EndLayer;p=c.prototype;
        //初始化时调用
        p.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
            //            this.goon.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goonFunc,this);
            this.result.skinName = this.isWin ? skins.components.WinSkin : skins.components.FailSkin;
        };
        p.goonFunc = function () {
            //            this.goon.enabled = false;
            //            var data = protocol.Login.loginReq();
            //            WSocket.getInstance().sendJsonMsg(data);
            //            WSocket.getInstance().init();
            //            this.parent.removeElement(this);
            //            TimerUtil.getInstance().addObj('end',this,1000);
        };
        p.exeTimer = function () {
            game.LogUtil.log('EndLayer_exeTimer');
            var nowTime = new Date().getTime();
            if (nowTime - this.checkTime >= 3000) {
                this.checkTime = nowTime;
                var selfevent = new game.SelfEvent(game.SelfEvent.JT);
                game.ProxyListener.getInstance().dispatchEvent(selfevent);
                var table = game.ModelCache.getInstance().getTable();
                if (table.tableSt != game.Constants.TABLE_END) {
                    game.TimerUtil.getInstance().rmObj('end');
                }
            }
        };
        return EndLayer;
    })(egret.gui.SkinnableContainer);
    game.EndLayer = EndLayer;
    egret.registerClass(EndLayer,"game.EndLayer");
})(game || (game = {}));
