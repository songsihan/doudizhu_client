var game;
(function (game) {
    /**
     *
     * 系统唯一定时器
     * @author
     *
     */
    var TimerUtil = (function () {
        function TimerUtil() {
            this.objs = [];
            this.keys = [];
            this.timer = new egret.Timer(500, 0);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
            this.timer.start();
        }
        var d = __define,c=TimerUtil;p=c.prototype;
        TimerUtil.getInstance = function () {
            if (TimerUtil._instance == null) {
                TimerUtil._instance = new TimerUtil();
            }
            return TimerUtil._instance;
        };
        p.timerFunc = function () {
            var _objs = this.objs;
            for (var i = 0; i < _objs.length; i++) {
                _objs[i].exeTimer();
            }
        };
        p.timerComFunc = function () {
        };
        p.addObj = function (key, obj, interval) {
            if (interval === void 0) { interval = 500; }
            if (interval != 500) {
                this.timer.delay = interval;
            }
            var index = game.Func.getArrIndex(this.keys, key);
            if (index > -1) {
                this.keys.splice(index, 1);
                this.objs.splice(index, 1);
            }
            this.keys.push(key);
            this.objs.push(obj);
            //            console.log("keys:" + this.keys);
        };
        p.rmObj = function (key) {
            var index = game.Func.getArrIndex(this.keys, key);
            if (index >= 0) {
                this.keys.splice(index, 1);
                this.objs.splice(index, 1);
            }
        };
        p.clear = function () {
            this.keys = [];
            this.objs = [];
        };
        return TimerUtil;
    })();
    game.TimerUtil = TimerUtil;
    egret.registerClass(TimerUtil,"game.TimerUtil");
})(game || (game = {}));
