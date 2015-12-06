var game;
(function (game) {
    /**
    * 视图显示层
    */
    var GameLayer = (function (_super) {
        __extends(GameLayer, _super);
        function GameLayer() {
            _super.call(this);
            this.MainIsInit = false;
        }
        var d = __define,c=GameLayer;p=c.prototype;
        GameLayer.getInstance = function () {
            if (GameLayer._instance == null) {
                GameLayer._instance = new GameLayer();
                GameLayer._instance.init();
            }
            return GameLayer._instance;
        };
        p.init = function () {
            this.mainLayer = game.MainPanel.getInstance();
            this.tipLayer = new game.TipLayer();
            this.startLayer = new game.StartLayer();
        };
        p.showLayer = function (name, msg) {
            if (msg === void 0) { msg = ''; }
            var layer;
            switch (name) {
                case GameLayer.MAIN_LAYER:
                    layer = this.mainLayer;
                    break;
                case GameLayer.TIP_LAYER:
                    layer = this.tipLayer;
                    break;
                case GameLayer.START_LAYER:
                    layer = this.startLayer;
                    break;
            }
            if (layer) {
                this.addElement(layer);
                if (name == GameLayer.MAIN_LAYER) {
                    this.MainIsInit = true;
                }
            }
        };
        p.rmLayer = function (name) {
            var layer;
            switch (name) {
                case GameLayer.MAIN_LAYER:
                    layer = this.mainLayer;
                    break;
                case GameLayer.TIP_LAYER:
                    layer = this.tipLayer;
                    break;
                case GameLayer.START_LAYER:
                    layer = this.startLayer;
                    break;
            }
            if (this.getElementIndex(layer) > 0) {
                this.removeElement(layer);
            }
        };
        GameLayer.MAIN_LAYER = "main";
        GameLayer.ROOM_LAYER = "room";
        GameLayer.TIP_LAYER = "tip";
        GameLayer.START_LAYER = "start";
        return GameLayer;
    })(egret.gui.UIStage);
    game.GameLayer = GameLayer;
    egret.registerClass(GameLayer,"game.GameLayer");
})(game || (game = {}));
