var skin;
(function (skin) {
    /**
     *
     * @author
     *
     */
    var CardUtil = (function () {
        function CardUtil() {
        }
        var d = __define,c=CardUtil;p=c.prototype;
        CardUtil.getPromptCards = function (lastCardNos, cardNos) {
            var lastCard = CardUtil.checkCards(lastCardNos);
            var lastType = lastCard.type;
            var minVal = lastCard.minValue;
            var num = lastCard.num;
            var _with = lastCard.with;
            if (lastType == game.Constants.CARD_TYPE_KING) {
                return [];
            }
            var index1 = game.Func.getArrIndex(cardNos, 161);
            var index2 = game.Func.getArrIndex(cardNos, 171);
            var king = [];
            var bombs = [];
            var promptArr = [];
            var _promptArr = [];
            if (index1 >= 0 && index2 >= 0) {
                king = [161, 171];
            }
            var bombData = { type: game.Constants.CARD_TYPE_BOMB, num: 4, minValue: 2 };
            bombs = CardUtil.getPromptBaseCards(lastType == game.Constants.CARD_TYPE_BOMB ? lastCard : bombData, cardNos);
            if (bombs.length > 0) {
                _promptArr = _promptArr.concat(bombs);
            }
            if (king.length > 0) {
                _promptArr.push(king);
            }
            if (lastType == game.Constants.CARD_TYPE_FOUR_WITH) {
                var _lastCard = lastCard;
                _lastCard.type = game.Constants.CARD_TYPE_BOMB;
                promptArr = CardUtil.getPromptBaseCards(_lastCard, cardNos);
                var cardWith = [];
                if (_lastCard.with == 1) {
                    var singleWithData = { type: game.Constants.CARD_TYPE_SINGLE, num: 1, minValue: 2 };
                    var singleWith = CardUtil.getPromptBaseCards(singleWithData, cardNos);
                    if (singleWith.length >= 2) {
                        for (var _single in singleWith) {
                            cardWith.push(_single[0]);
                            if (cardWith.length == 2) {
                                break;
                            }
                        }
                        if (cardWith.length != 2) {
                            return _promptArr;
                        }
                    }
                    else {
                        return _promptArr;
                    }
                }
                else if (_lastCard.with == 2) {
                    var doubleWithData = { type: game.Constants.CARD_TYPE_DOUBLE, num: 1, minValue: 2 };
                    var doubleWith = CardUtil.getPromptBaseCards(_lastCard, cardNos);
                    if (doubleWith.length >= 2) {
                        for (var _double in doubleWith) {
                            cardWith.push(_double[0], _double[1]);
                            if (cardWith.length == 4) {
                                break;
                            }
                        }
                        if (cardWith.length != 4) {
                            return _promptArr;
                        }
                    }
                    else {
                        return _promptArr;
                    }
                }
                var len = promptArr.length;
                for (var i = 0; i < len; i++) {
                    promptArr[i] = promptArr[i].concat(cardWith);
                }
            }
            else if (lastType == game.Constants.CARD_TYPE_THREE_STRAIGHT_WITH) {
                var _lastCard = lastCard;
                _lastCard.type = game.Constants.CARD_TYPE_THREE_STRAIGHT;
                promptArr = CardUtil.getPromptBaseCards(_lastCard, cardNos);
                var cardWith = [];
                if (_lastCard.with == 1) {
                    var singleWithData = { type: game.Constants.CARD_TYPE_SINGLE, num: 1, minValue: 2 };
                    var singleWith = CardUtil.getPromptBaseCards(singleWithData, cardNos);
                    if (singleWith.length >= num) {
                        for (var i = 0; i < singleWith.length; i++) {
                            //确保所带的牌不是宿主牌
                            cardWith.push(singleWith[i][0]);
                            if (cardWith.length == num) {
                                break;
                            }
                        }
                        if (cardWith.length != num) {
                            return _promptArr;
                        }
                    }
                    else {
                        return _promptArr;
                    }
                }
                else if (_lastCard.with == 2) {
                    var doubleWithData = { type: game.Constants.CARD_TYPE_DOUBLE, num: 1, minValue: 2 };
                    var doubleWith = CardUtil.getPromptBaseCards(doubleWithData, cardNos);
                    if (doubleWith.length >= 2 * num) {
                        for (var i = 0; i < doubleWith.length; i++) {
                            cardWith.push(doubleWith[i][0]);
                            cardWith.push(doubleWith[i][1]);
                            if (cardWith.length == 2 * num) {
                                break;
                            }
                        }
                        if (cardWith.length != 2 * num) {
                            return _promptArr;
                        }
                    }
                    else {
                        return _promptArr;
                    }
                }
                var len = promptArr.length;
                for (var i = 0; i < len; i++) {
                    promptArr[i] = promptArr[i].concat(cardWith);
                }
            }
            else if (lastType == game.Constants.CARD_TYPE_THREE && _with > 0) {
                var _lastCard = lastCard;
                _lastCard.type = game.Constants.CARD_TYPE_THREE;
                promptArr = CardUtil.getPromptBaseCards(_lastCard, cardNos);
                var cardWith = [];
                if (_lastCard.with == 1) {
                    var singleWithData = { type: game.Constants.CARD_TYPE_SINGLE, num: 1, minValue: 2 };
                    var singleWith = CardUtil.getPromptBaseCards(singleWithData, cardNos);
                    if (singleWith.length >= num) {
                        cardWith.push(singleWith[0][0]);
                        if (cardWith.length != 1) {
                            return _promptArr;
                        }
                    }
                    else {
                        return _promptArr;
                    }
                }
                else if (_lastCard.with == 2) {
                    var doubleWithData = { type: game.Constants.CARD_TYPE_DOUBLE, num: 1, minValue: 2 };
                    var doubleWith = CardUtil.getPromptBaseCards(doubleWithData, cardNos);
                    if (doubleWith.length >= 2) {
                        cardWith.push(doubleWith[0][0]);
                        cardWith.push(doubleWith[0][1]);
                        if (cardWith.length != 2) {
                            return _promptArr;
                        }
                    }
                    else {
                        return _promptArr;
                    }
                }
                var len = promptArr.length;
                for (var i = 0; i < len; i++) {
                    promptArr[i] = promptArr[i].concat(cardWith);
                }
            }
            else {
                promptArr = CardUtil.getPromptBaseCards(lastCard, cardNos);
            }
            //            game.LogUtil.log("promptArr:" + promptArr + " bombs:" + bombs);
            if (bombs.length > 0) {
                promptArr = promptArr.concat(bombs);
            }
            if (king.length > 0) {
                promptArr.push(king);
            }
            //            game.LogUtil.log("promptArr:" + promptArr + " bombs:" + bombs);
            return promptArr;
        };
        /**
         *  获得提示所需的基础牌，不包含所带的牌
         */
        CardUtil.getPromptBaseCards = function (lastCard, cardNos) {
            //{ type: 0,num: num,minValue: (currValue + 1),cardNos:cardNos};
            var promptArr = [];
            var cardInfo = CardUtil.cardNosToNums(cardNos);
            var cardNums = cardInfo['num']; //卡牌值对应数量
            var valNos = cardInfo['valNos']; //卡牌值对应卡牌编号
            var cardValues = cardInfo['values']; //卡牌对应的值
            var maxSameVal = cardInfo['maxSameVal']; //最多相同的值
            var maxLen = cardInfo['maxLen']; //最多相同的数量
            var lastType = lastCard.type;
            var minVal = lastCard.minValue;
            var num = lastCard.num;
            if (lastType == game.Constants.CARD_TYPE_BOMB) {
                promptArr = CardUtil.getSimplePrompt(minVal, cardNums, valNos, promptArr, 4);
            }
            if (lastType == game.Constants.CARD_TYPE_SINGLE) {
                promptArr = CardUtil.getSimplePrompt(minVal, cardNums, valNos, promptArr, 1);
            }
            else if (lastType == game.Constants.CARD_TYPE_DOUBLE) {
                promptArr = CardUtil.getSimplePrompt(minVal, cardNums, valNos, promptArr, 2);
            }
            else if (lastType == game.Constants.CARD_TYPE_THREE) {
                promptArr = CardUtil.getSimplePrompt(minVal, cardNums, valNos, promptArr, 3);
            }
            else if (lastType == game.Constants.CARD_TYPE_SINGLE_STRAIGHT) {
                promptArr = CardUtil.getStraightPrompt(minVal, num, cardNums, valNos, promptArr, 1);
            }
            else if (lastType == game.Constants.CARD_TYPE_DOUBLE_STRAIGHT) {
                promptArr = CardUtil.getStraightPrompt(minVal, num, cardNums, valNos, promptArr, 2);
            }
            else if (lastType == game.Constants.CARD_TYPE_THREE_STRAIGHT) {
                promptArr = CardUtil.getStraightPrompt(minVal, num, cardNums, valNos, promptArr, 3);
            }
            return promptArr;
        };
        CardUtil.getSimplePrompt = function (minVal, cardNums, valNos, promptArr, size) {
            var promptNos = [];
            for (var _val in cardNums) {
                if (_val > minVal && cardNums[_val] > (size - 1)) {
                    var nos = valNos[_val];
                    promptNos.push(nos);
                }
            }
            promptNos = skin.CardSort.sortSimpleCard(promptNos, -1);
            for (var key in promptNos) {
                nos = promptNos[key];
                if (nos.length > size) {
                    nos.splice(0, nos.length - size);
                }
                promptArr.push(nos);
            }
            return promptArr;
        };
        /**
         * 简单牌提示：单牌 对牌 三张 四张 size一次为1,2,3,4
         */
        CardUtil.getSimplePrompt_old = function (minVal, cardNums, valNos, promptArr, size) {
            for (var _val in cardNums) {
                if (_val > minVal && cardNums[_val] > (size - 1)) {
                    var nos = valNos[_val];
                    if (nos.length > size) {
                        nos.splice(0, nos.length - size);
                    }
                    promptArr.push(nos);
                }
            }
            return promptArr;
        };
        /**
         * size 1为单顺 2为双顺 3为三顺
         */
        CardUtil.getStraightPrompt = function (minVal, num, cardNums, valNos, promptArr, size) {
            var startVal = minVal <= 2 ? 2 : minVal;
            var endVal = 15 - (num <= 5 ? 5 : num);
            while (startVal + 1 <= endVal) {
                var nos = [];
                for (var _val = startVal + 1; _val < 15; _val++) {
                    if (cardNums[_val] >= size) {
                        var _nos = valNos[_val];
                        for (var i = 0; i < size; i++) {
                            nos.splice(0, 0, _nos[i]);
                        }
                        if (nos.length == num * size) {
                            promptArr.push(nos);
                            startVal = startVal + 1;
                            break;
                        }
                    }
                    else {
                        startVal = _val;
                        break;
                    }
                }
            }
            return promptArr;
        };
        CardUtil.checkPlayCards = function (lastCardNos, currCardNos) {
            var currCard = CardUtil.checkCards(currCardNos);
            if (lastCardNos.length == 0) {
                return currCard ? currCard : false;
            }
            //            game.LogUtil.error("lastCardNos:"+lastCardNos);
            var lastCard = CardUtil.checkCards(lastCardNos);
            //            game.LogUtil.error("lastCard:"+lastCard);
            if (currCard && currCard.type == game.Constants.CARD_TYPE_KING) {
                return currCard;
            }
            if (currCard && lastCard.type != game.Constants.CARD_TYPE_KING) {
                if (currCard.type == game.Constants.CARD_TYPE_BOMB
                    && lastCard.type != game.Constants.CARD_TYPE_BOMB) {
                    return currCard;
                }
                if (currCard.type != game.Constants.CARD_TYPE_BOMB
                    && lastCard.type == game.Constants.CARD_TYPE_BOMB) {
                    return false;
                }
                if (currCard.type == lastCard.type && currCard.num == lastCard.num
                    && currCard.with == lastCard.with
                    && currCard.minValue > lastCard.minValue) {
                    return currCard;
                }
            }
            return false;
        };
        CardUtil.checkCards = function (currCardNos) {
            if (currCardNos.length == 0) {
                return false;
            }
            var data = CardUtil.getCardsData(currCardNos);
            if (data == false) {
                return false;
            }
            var moreCardNos = game.Func.mini(currCardNos, data.cardNos);
            //            game.LogUtil.log("more:" + moreCardNos + " cards:" + currCardNos);
            var type = data.type;
            var cnt = moreCardNos.length;
            if (type == game.Constants.CARD_TYPE_KING) {
                if (cnt > 0) {
                    return false;
                }
                return data;
            }
            else if (type == game.Constants.CARD_TYPE_BOMB) {
                if (cnt == 0) {
                    return data;
                }
                else if (cnt == 2) {
                    data.with = 1;
                    data.type = game.Constants.CARD_TYPE_FOUR_WITH;
                    return data;
                }
                else if (cnt == 4) {
                    data.with = 2;
                    data.type = game.Constants.CARD_TYPE_FOUR_WITH;
                    var cardInfo = CardUtil.cardNosToNums(moreCardNos);
                    var cardNums = cardInfo['num']; //卡牌值对应数量
                    for (var key in cardNums) {
                        if (cardNums[key] > 0 && cardNums[key] != 2) {
                            return false;
                        }
                    }
                    return data;
                }
                return false;
            }
            else if (type == game.Constants.CARD_TYPE_THREE) {
                if (cnt == 0) {
                    return data;
                }
                else if (cnt == 1) {
                    data.with = 1;
                    return data;
                }
                else if (cnt == 2) {
                    data.with = 2;
                    var cardInfo = CardUtil.cardNosToNums(moreCardNos);
                    var maxLen = cardInfo['maxLen'];
                    if (maxLen != 2) {
                        return false;
                    }
                    return data;
                }
                return false;
            }
            else if (type == game.Constants.CARD_TYPE_THREE_STRAIGHT) {
                var num = data.num;
                if (cnt == 0) {
                    return data;
                }
                else if (cnt == num) {
                    data.with = 1;
                    return data;
                }
                else if (cnt == (num * 2)) {
                    data.with = 2;
                    var cardInfo = CardUtil.cardNosToNums(moreCardNos);
                    var cardNums = cardInfo['nums'];
                    for (var key in cardNums) {
                        if (cardNums[key] > 0 && cardNums[key] != 2) {
                            return false;
                        }
                    }
                    return data;
                }
                return false;
            }
            else {
                if (cnt == 0) {
                    return data;
                }
                return false;
            }
        };
        /**
         * 弃用
        * 校验多余卡牌
        */
        CardUtil.checkMoreCards = function (cnt, moreCardNos) {
            if (cnt == 0 || cnt == 2) {
                return true;
            }
            else if (cnt == 4) {
                var cardInfo = CardUtil.cardNosToNums(moreCardNos);
                var cardNums = cardInfo['num']; //卡牌值对应数量
                for (var key in cardNums) {
                    if (cardNums[key] != 2) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        };
        /**
         * with 0不带 1单带 2双带
         */
        CardUtil.getCardsData = function (currCardNos) {
            var cnt = currCardNos.length;
            var data = { type: 0, num: cnt, minValue: 0, cardNos: [], with: 0 };
            var cardInfo = CardUtil.cardNosToNums(currCardNos);
            var cardNums = cardInfo['num']; //卡牌值对应数量
            var cardValues = cardInfo['values']; //卡牌对应的值
            var maxSameVal = cardInfo['maxSameVal']; //最多相同的值
            var maxLen = cardInfo['maxLen']; //最多相同的数量
            if (cardNums[16] == 1 && cardNums[17] == 1) {
                data.type = game.Constants.CARD_TYPE_KING;
                data.cardNos = [161, 171];
            }
            else if (maxLen == 4) {
                data.type = game.Constants.CARD_TYPE_BOMB;
                data.minValue = maxSameVal;
                data.cardNos = [maxSameVal * 10 + 1, maxSameVal * 10 + 2, maxSameVal * 10 + 3, maxSameVal * 10 + 4];
            }
            else if (maxLen == 3) {
                data = CardUtil.getStraight(currCardNos, maxSameVal, cardValues, maxLen, cardNums);
                data.type = data.num > 1 ? game.Constants.CARD_TYPE_THREE_STRAIGHT : game.Constants.CARD_TYPE_THREE;
            }
            else if (maxLen == 2) {
                data = CardUtil.getStraight(currCardNos, maxSameVal, cardValues, maxLen, cardNums);
                if (data.num == 2) {
                    return false;
                }
                data.type = data.num > 1 ? game.Constants.CARD_TYPE_DOUBLE_STRAIGHT : game.Constants.CARD_TYPE_DOUBLE;
            }
            else {
                data = CardUtil.getStraight(currCardNos, maxSameVal, cardValues, maxLen, cardNums);
                if (data.num > 1 && data.num < 5) {
                    return false;
                }
                data.type = data.num > 1 ? game.Constants.CARD_TYPE_SINGLE_STRAIGHT : game.Constants.CARD_TYPE_SINGLE;
            }
            return data;
        };
        //cardValues判断是否存在
        CardUtil.getStraight = function (currCardNos, maxSameVal, cardValues, straightNum, cardNums) {
            var cardNos = [];
            var num = 0;
            var currValue = maxSameVal;
            var index = game.Func.getArrIndex(cardValues, currValue);
            while (index >= 0 && cardNums[currValue] == straightNum) {
                for (var key in cardValues) {
                    if (cardValues[key] == currValue) {
                        cardNos.push(currCardNos[key]);
                    }
                }
                currValue -= 1;
                num += 1;
                index = game.Func.getArrIndex(cardValues, currValue);
            }
            return { type: 0, num: num, minValue: (currValue + 1), cardNos: cardNos };
        };
        CardUtil.cardNosToNums = function (currCardNos) {
            var cardNums = []; //卡牌值对应数量
            var cardValues = []; //卡牌对应的值
            var valNos = []; //卡牌值对应的卡牌
            var maxLen = 0;
            var sameVal = 0;
            for (var i = 1; i <= 17; i++) {
                cardNums[i] = 0;
                valNos[i] = [];
            }
            for (var key in currCardNos) {
                var no = currCardNos[key];
                var val = (no - (no % 10)) / 10;
                cardNums[val] += 1;
                valNos[val].push(no);
                cardValues[key] = val;
                if (maxLen < cardNums[val]) {
                    maxLen = cardNums[val];
                    sameVal = val;
                }
            }
            var re = [];
            re['num'] = cardNums;
            re['values'] = cardValues;
            re['maxSameVal'] = sameVal;
            re['maxLen'] = maxLen;
            re['valNos'] = valNos;
            return re;
        };
        return CardUtil;
    })();
    skin.CardUtil = CardUtil;
    egret.registerClass(CardUtil,"skin.CardUtil");
})(skin || (skin = {}));
