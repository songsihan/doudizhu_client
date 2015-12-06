var skin;
(function (skin) {
    /**
     *
     * @author
     *
     */
    var CardSort = (function () {
        function CardSort() {
        }
        var d = __define,c=CardSort;p=c.prototype;
        CardSort.sort = function (cardNos) {
            cardNos.sort(function (a, b) { return a < b ? 1 : -1; }); //从大到小排序
            return cardNos;
        };
        //isDesc = 1 从大到小排序 isDesc = -1从小到大排序
        CardSort.sortSimpleCard = function (cardNos, isDesc) {
            if (isDesc === void 0) { isDesc = 1; }
            cardNos.sort(function (a, b) {
                if (Number(a.length) < Number(b.length)) {
                    return isDesc;
                }
                else if (Number(a.length) > Number(b.length)) {
                    return -isDesc;
                }
                else {
                    return a[0] < b[0] ? isDesc : -isDesc;
                }
            });
            return cardNos;
        };
        //从大到小排序
        CardSort.sortById = function (cardNos, isDesc) {
            if (isDesc === void 0) { isDesc = 1; }
            cardNos.sort(function (a, b) { return Number(a.id) < Number(b.id) ? isDesc : -isDesc; });
            return cardNos;
        };
        //从小到大排序
        CardSort.sortByArrLen = function (cardNos) {
            cardNos.sort(function (a, b) { return Number(a.length) < Number(b.length) ? -1 : 1; });
            return cardNos;
        };
        CardSort.cardsToIds = function (cardNos) {
            var ids = [];
            for (var key in cardNos) {
                ids.push(cardNos[key].id);
            }
            return ids;
        };
        return CardSort;
    })();
    skin.CardSort = CardSort;
    egret.registerClass(CardSort,"skin.CardSort");
})(skin || (skin = {}));
