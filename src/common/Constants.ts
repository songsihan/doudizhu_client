module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class Constants {
        
        //54张牌，元素 = 牌值 * 10 + 花色
        //161为小王、162为大王
        public static cardNos = [
            31,32,33,34,
            41,42,43,44,
            51,52,53,54,
            61,62,63,64,
            71,72,73,74,
            81,82,83,84,
            91,92,93,94,
            101,102,103,104,
            111,112,113,114,
            121,122,123,124,
            131,132,133,134,
            141,142,143,144,
            151,152,153,154,
            161,
            171
        ];
        
        public static LANDLORD_TIME = 10;
        
        public static PLAY_TIME = 10;
        
        public static PLAYER_UN_DEPOSIT = 1;//未托管
        public static PLAYER_DEPOSIT = 2;//托管
        public static PLAYER_LEAVE = -1;//已离开牌局 结算时不处于游戏中状态则离开 TODO
        
        public static TABLE_LANDLORD = 1;//叫地主阶段
        public static TABLE_IN_GAME = 2;//游戏中
        public static TABLE_END = 3;//游戏结算
        
        public static RESPONSE_SUCCESS = 1;//操作成功
        public static RESPONSE_FAIL = -1;//操作失败
        public static RESPONSE_NO_PLAYER = -2;//用户不存在
        public static RESPONSE_RECONN_FAIL = -3;//重连失败
        public static RESPONSE_MATCHING = 3;//匹配中
        public static RESPONSE_RE_JOIN = 4;//牌局不存在重新匹配 玩家下线，重新匹配
        public static RESPONSE_RE_TABLE = 5;//重置牌局
        public static RESPONSE_RECONN_SUCCESS = 6;//重连成功
        
        //Landlord
        public static LANDLORD_RESET_TABLE = 1;//重置牌局
        public static LANDLORD_NEXT_CHOOSE = 2;//下一个叫地主
        public static LANDLORD_ENSURE = 3;//确定地主
        public static LANDLORD_RE_JOIN = 4;//重新匹配
        
        //CardType
        public static CARD_TYPE_KING = 1;//火箭
        public static CARD_TYPE_BOMB = 2;//炸弹
        public static CARD_TYPE_SINGLE = 3;//单支
        public static CARD_TYPE_DOUBLE = 4;//对子
        public static CARD_TYPE_THREE = 5;//三条
        public static CARD_TYPE_THREE_WITH = 6;//三带一手
        public static CARD_TYPE_SINGLE_STRAIGHT = 7;//单顺
        public static CARD_TYPE_DOUBLE_STRAIGHT = 8;//双牌straight
        public static CARD_TYPE_THREE_STRAIGHT = 9;//三顺
        public static CARD_TYPE_THREE_STRAIGHT_WITH = 10;//飞机带翅膀
        public static CARD_TYPE_FOUR_WITH = 11;//四带二
	}
}
