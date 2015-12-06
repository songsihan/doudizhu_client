var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var SelfEvent = (function (_super) {
        __extends(SelfEvent, _super);
        function SelfEvent(type, bulle, cancel) {
            if (bulle === void 0) { bulle = false; }
            if (cancel === void 0) { cancel = false; }
            _super.call(this, type, bulle, cancel);
        }
        var d = __define,c=SelfEvent;p=c.prototype;
        SelfEvent.TEST = "test";
        //协议请求
        SelfEvent.JT = "jt";
        SelfEvent.LL = "ll";
        SelfEvent.PLAY = "play";
        SelfEvent.DEPOSIT = "deposit";
        //ui更新
        SelfEvent.UPDATE_PLAYER = "updatePlayer";
        SelfEvent.INIT_TABLE = "initTable";
        SelfEvent.UPDATE_TABLE = "updateTable";
        SelfEvent.UPDATE_TABLE_PLAY = "updateTablePlay";
        return SelfEvent;
    })(egret.Event);
    game.SelfEvent = SelfEvent;
    egret.registerClass(SelfEvent,"game.SelfEvent");
})(game || (game = {}));
