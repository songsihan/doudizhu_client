var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var TipLayer = (function (_super) {
        __extends(TipLayer, _super);
        function TipLayer() {
            _super.call(this);
            this.skinName = skins.components.readySkin;
        }
        var d = __define,c=TipLayer;p=c.prototype;
        return TipLayer;
    })(egret.gui.SkinnableContainer);
    game.TipLayer = TipLayer;
    egret.registerClass(TipLayer,"game.TipLayer");
})(game || (game = {}));
