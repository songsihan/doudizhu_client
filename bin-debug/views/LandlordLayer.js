var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var LandlordLayer = (function (_super) {
        __extends(LandlordLayer, _super);
        function LandlordLayer(isSelf, isTip) {
            if (isTip === void 0) { isTip = false; }
            _super.call(this);
            this.isLl = false;
            if (isTip) {
                this.skinName = skins.components.TipSkin;
            }
            else if (isSelf) {
                this.skinName = skins.components.LandlordSkin;
                this.isLl = true;
            }
            else {
                this.skinName = skins.components.ClockSkin;
            }
        }
        var d = __define,c=LandlordLayer;p=c.prototype;
        //初始化时调用
        p.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
            game.TimerUtil.getInstance().addObj('landlord', this, 1000);
            this.land1Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLand1, this);
            this.land2Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLand2, this);
            this.land3Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLand3, this);
            this.unLandBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.unLand, this);
            game.LogUtil.log("maxPoint:" + game.MainPanel.getInstance().maxPoint);
            var table = game.ModelCache.getInstance().getTable();
            if (table.lUid > 0 && table.multiple == 1) {
                this.land1Btn.enabled = false;
            }
            else if (table.multiple == 2) {
                this.land1Btn.enabled = false;
                this.land2Btn.enabled = false;
            }
        };
        p.onLand1 = function () {
            game.LogUtil.log("onLand1");
            var selfevent = new game.SelfEvent(game.SelfEvent.LL);
            selfevent.test = 1;
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
            this.removeAllElements();
            this.skinName = skins.components.TipSkin;
            this.horizontalCenter = 0;
            this.tip.source = 'word_one_point_png';
            game.TimerUtil.getInstance().rmObj('landlord');
        };
        p.onLand2 = function () {
            game.LogUtil.log("onLand2");
            var selfevent = new game.SelfEvent(game.SelfEvent.LL);
            selfevent.test = 2;
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
            this.removeAllElements();
            this.skinName = skins.components.TipSkin;
            this.horizontalCenter = 0;
            this.tip.source = 'word_two_point_png';
            game.TimerUtil.getInstance().rmObj('landlord');
        };
        p.onLand3 = function () {
            game.LogUtil.log("onLand3");
            var selfevent = new game.SelfEvent(game.SelfEvent.LL);
            selfevent.test = 3;
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
            this.removeAllElements();
            this.skinName = skins.components.TipSkin;
            this.horizontalCenter = 0;
            this.tip.source = 'word_three_point_png';
            game.TimerUtil.getInstance().rmObj('landlord');
        };
        p.unLand = function () {
            var selfevent = new game.SelfEvent(game.SelfEvent.LL);
            selfevent.test = 0;
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
            this.removeAllElements();
            this.skinName = skins.components.TipSkin;
            this.horizontalCenter = 0;
            this.tip.source = 'word_no_call_png';
            game.TimerUtil.getInstance().rmObj('landlord');
        };
        p.exeTimer = function () {
            game.LogUtil.log('LandlordLayer_exeTimer');
            if (this.clabel) {
                var num = Number(this.clabel.text) - 1;
                if (num < 10) {
                    this.clabel.text = '0' + String(num);
                }
                else {
                    this.clabel.text = String(num);
                }
                //                game.LogUtil.log(this.clabel.text);
                if (num <= 0) {
                    game.TimerUtil.getInstance().rmObj('landlord');
                    if (this.isLl) {
                        this.removeAllElements();
                        this.skinName = skins.components.TipSkin;
                        this.horizontalCenter = 0;
                        this.tip.source = 'word_no_call_png';
                        game.TimerUtil.getInstance().rmObj('landlord');
                    }
                }
            }
        };
        return LandlordLayer;
    })(egret.gui.SkinnableContainer);
    game.LandlordLayer = LandlordLayer;
    egret.registerClass(LandlordLayer,"game.LandlordLayer");
})(game || (game = {}));
