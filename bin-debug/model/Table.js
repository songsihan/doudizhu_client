var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var Table = (function () {
        function Table() {
            this.tableSt = 0;
        }
        var d = __define,c=Table;p=c.prototype;
        p.init = function (data) {
            this.baseSc = data.baseSc;
            this.tableSt = data.tableSt;
            this.multiple = data.multiple;
            this.lUid = data.lUid;
            this.currOpUid = data.currOpUid;
            this.lastOpUid = data.lastOpUid;
            this.lastCardNos = data.lastCardNos;
            this.playerSt = data.playerSt;
            this.selfCardNos = data.selfCardNos;
            this.threeCards = data.threeCards;
            this.uids = data.uids;
            this.rTime = data.rTime;
            this.cardNums = data.cardNums;
            this.playerInfos = data.playerInfos;
            LoadingUI.getInstance().loadingEnd();
        };
        p.updateTable = function (data, flag) {
            if (flag) {
                //添加tip--渐渐消失。流局-牌局重置
                this.init(data);
                return;
            }
            this.lUid = data.lUid;
            this.rTime = data.rTime;
            this.multiple = data.multiple;
            if (data.st == game.Constants.LANDLORD_ENSURE) {
                this.tableSt = data.tableSt;
                var selfUid = game.ModelCache.getInstance().getUid();
                if (selfUid != this.lUid) {
                    this.cardNums[this.lUid] += 3;
                }
                else {
                    this.selfCardNos = this.selfCardNos.concat(this.threeCards);
                    this.selfCardNos = skin.CardSort.sort(this.selfCardNos);
                }
            }
            else {
                this.currOpUid = data.currOpUid;
                this.lastOpUid = data.lastOpUid;
            }
            var selfevent = new game.SelfEvent(game.SelfEvent.UPDATE_TABLE);
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
        };
        p.updateTablePlay = function (data) {
            //            if(flag){
            //                //添加tip--渐渐消失。流局-牌局重置
            //                this.init(data);
            //                return;
            //            }
            var depositUid = data.depositUid;
            var leaveUid = data.leaveUid;
            this.lastPlayCardUid = data.lastPlayCardUid;
            this.currOpUid = data.currOpUid;
            this.lastOpUid = data.lastOpUid;
            this.tableSt = data.tableSt;
            this.rTime = data.rTime;
            this.multiple = data.multiple;
            this.isBomb = data.isBomb;
            this.lastCardNos = data.lastCardNos;
            if (leaveUid != 'no') {
                this.playerSt[depositUid] = game.Constants.PLAYER_LEAVE;
            }
            else if (depositUid != 'no') {
                this.playerSt[depositUid] = game.Constants.PLAYER_DEPOSIT;
            }
            if (this.lastOpUid == this.lastPlayCardUid) {
                this.playCardType = data.playCardType;
                var selfUid = game.ModelCache.getInstance().getUid();
                if (selfUid == this.lastPlayCardUid) {
                    this.selfCardNos = game.Func.mini(this.selfCardNos, this.lastCardNos);
                }
                else {
                    this.cardNums[this.lastPlayCardUid] -= this.lastCardNos.length;
                }
            }
            if (this.tableSt == game.Constants.TABLE_END) {
                this.winUid = data.winUid;
                this.isSpring = data.isSpring;
            }
            var selfevent = new game.SelfEvent(game.SelfEvent.UPDATE_TABLE_PLAY);
            selfevent.test = depositUid;
            selfevent.test1 = leaveUid;
            game.ProxyListener.getInstance().dispatchEvent(selfevent);
        };
        return Table;
    })();
    game.Table = Table;
    egret.registerClass(Table,"game.Table");
})(game || (game = {}));
