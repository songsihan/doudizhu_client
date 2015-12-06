var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var PopWindow = (function (_super) {
        __extends(PopWindow, _super);
        function PopWindow() {
            _super.call(this);
        }
        var d = __define,c=PopWindow;p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.win = new egret.gui.TitleWindow();
            this.win.skinName = skins.components.retrySkin;
            egret.gui.PopUpManager.addPopUp(this.win, true, true);
        };
        return PopWindow;
    })(egret.gui.Group);
    game.PopWindow = PopWindow;
    egret.registerClass(PopWindow,"game.PopWindow");
})(game || (game = {}));
