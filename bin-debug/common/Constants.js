var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var Constants = (function () {
        function Constants() {
        }
        var d = __define,c=Constants;p=c.prototype;
        //54张牌，元素 = 牌值 * 10 + 花色
        //161为小王、162为大王
        Constants.cardNos = [
            31, 32, 33, 34,
            41, 42, 43, 44,
            51, 52, 53, 54,
            61, 62, 63, 64,
            71, 72, 73, 74,
            81, 82, 83, 84,
            91, 92, 93, 94,
            101, 102, 103, 104,
            111, 112, 113, 114,
            121, 122, 123, 124,
            131, 132, 133, 134,
            141, 142, 143, 144,
            151, 152, 153, 154,
            161,
            171
        ];
        Constants.LANDLORD_TIME = 10;
        Constants.PLAY_TIME = 10;
        Constants.PLAYER_UN_DEPOSIT = 1; //未托管
        Constants.PLAYER_DEPOSIT = 2; //托管
        Constants.PLAYER_LEAVE = -1; //已离开牌局 结算时不处于游戏中状态则离开 TODO
        Constants.TABLE_LANDLORD = 1; //叫地主阶段
        Constants.TABLE_IN_GAME = 2; //游戏中
        Constants.TABLE_END = 3; //游戏结算
        Constants.RESPONSE_SUCCESS = 1; //操作成功
        Constants.RESPONSE_FAIL = -1; //操作失败
        Constants.RESPONSE_NO_PLAYER = -2; //用户不存在
        Constants.RESPONSE_RECONN_FAIL = -3; //重连失败
        Constants.RESPONSE_MATCHING = 3; //匹配中
        Constants.RESPONSE_RE_JOIN = 4; //牌局不存在重新匹配 玩家下线，重新匹配
        Constants.RESPONSE_RE_TABLE = 5; //重置牌局
        Constants.RESPONSE_RECONN_SUCCESS = 6; //重连成功
        //Landlord
        Constants.LANDLORD_RESET_TABLE = 1; //重置牌局
        Constants.LANDLORD_NEXT_CHOOSE = 2; //下一个叫地主
        Constants.LANDLORD_ENSURE = 3; //确定地主
        Constants.LANDLORD_RE_JOIN = 4; //重新匹配
        //CardType
        Constants.CARD_TYPE_KING = 1; //火箭
        Constants.CARD_TYPE_BOMB = 2; //炸弹
        Constants.CARD_TYPE_SINGLE = 3; //单支
        Constants.CARD_TYPE_DOUBLE = 4; //对子
        Constants.CARD_TYPE_THREE = 5; //三条
        Constants.CARD_TYPE_THREE_WITH = 6; //三带一手
        Constants.CARD_TYPE_SINGLE_STRAIGHT = 7; //单顺
        Constants.CARD_TYPE_DOUBLE_STRAIGHT = 8; //双牌straight
        Constants.CARD_TYPE_THREE_STRAIGHT = 9; //三顺
        Constants.CARD_TYPE_THREE_STRAIGHT_WITH = 10; //飞机带翅膀
        Constants.CARD_TYPE_FOUR_WITH = 11; //四带二
        return Constants;
    })();
    game.Constants = Constants;
    egret.registerClass(Constants,"game.Constants");
})(game || (game = {}));
