var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var StartLayer = (function (_super) {
        __extends(StartLayer, _super);
        function StartLayer() {
            _super.call(this);
            this.add = 100;
            this.sendTime = 0;
            this.skinName = skins.components.StartSkin;
        }
        var d = __define,c=StartLayer;p=c.prototype;
        //初始化时调用
        p.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
            game.TimerUtil.getInstance().addObj('sl', this);
        };
        p.exeTimer = function () {
            game.LogUtil.log('StartLayer_exeTimer');
            //            this.label.text = t;
            if (this.val > 100000 || this.val < -100000) {
                this.add = -this.add;
            }
            this.val += this.add;
            this.label.textColor += this.add;
            var nowTime = new Date().getTime(); //毫秒
            var table = game.ModelCache.getInstance().getTable();
            if (table.tableSt == game.Constants.TABLE_LANDLORD) {
                game.TimerUtil.getInstance().rmObj('sl');
            }
            if ((nowTime - this.sendTime) >= 5000) {
                this.sendTime = nowTime;
                var selfevent = new game.SelfEvent(game.SelfEvent.JT);
                game.ProxyListener.getInstance().dispatchEvent(selfevent);
            }
        };
        return StartLayer;
    })(egret.gui.SkinnableContainer);
    game.StartLayer = StartLayer;
    egret.registerClass(StartLayer,"game.StartLayer");
})(game || (game = {}));
