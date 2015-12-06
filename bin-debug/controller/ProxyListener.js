var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var ProxyListener = (function (_super) {
        __extends(ProxyListener, _super);
        function ProxyListener() {
            _super.call(this);
            this._requestCount = 0;
            this.addEventListener(game.SelfEvent.JT, protocol.JoinTable.jtReq, this);
            this.addEventListener(game.SelfEvent.LL, protocol.Landlord.llReq, this);
            this.addEventListener(game.SelfEvent.PLAY, protocol.Play.playReq, this);
            this.addEventListener(game.SelfEvent.DEPOSIT, protocol.ChgPlaySt.chgStReq, this);
            this.addEventListener(game.SelfEvent.UPDATE_PLAYER, game.MainPanel.getInstance().updatePlayer, this);
            this.addEventListener(game.SelfEvent.INIT_TABLE, game.MainPanel.getInstance().initTable, this);
            this.addEventListener(game.SelfEvent.UPDATE_TABLE, game.MainPanel.getInstance().updateTable, this);
            this.addEventListener(game.SelfEvent.UPDATE_TABLE_PLAY, game.MainPanel.getInstance().updateTablePlay, this);
        }
        var d = __define,c=ProxyListener;p=c.prototype;
        ProxyListener.getInstance = function () {
            if (ProxyListener._instance == null) {
                ProxyListener._instance = new ProxyListener();
            }
            return ProxyListener._instance;
        };
        return ProxyListener;
    })(egret.DisplayObjectContainer);
    game.ProxyListener = ProxyListener;
    egret.registerClass(ProxyListener,"game.ProxyListener");
})(game || (game = {}));
