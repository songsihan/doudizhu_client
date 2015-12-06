module game {
    
    
	export class CommonData {
    	        
    	
    	  public static getLandPng(multiple:number)
    	  {
    	      if(multiple == 1)
    	      {
                  return 'word_one_point_png';
    	      }
    	      else if(multiple == 2)
    	      {
        	      return 'word_two_point_png';
    	      }
    	      else if(multiple == 3)
    	      {
        	      return 'word_three_point_png';
    	      }
    	      else
    	      {
        	      return 'word_no_call_png';
    	      }
    	  }
    	
        /**
         * 卡牌
         * 101~113 plum
         * 201~213 redheart
         * 301~313 spades
         * 401~413 square
         */ 
        public static getCardPng(cardNo:number)
        {
            
            if(cardNo == 161 )
            {
                return 'joker_2_png';
            }
            if(cardNo == 171)
            {
                return 'joker_1_png';
            }
            
            var cardType: number = Math.floor(cardNo%10);
            var cardNum: number = Math.floor(cardNo/10);
//            game.LogUtil.log(cardNo + ':'+cardType + '_' + cardNum);
            var cardType_s: string;
            var cardNum_s: string;
            switch(cardType)
            {
                case 1:
                    cardType_s = "plum";
                    break;
                case 2:
                    cardType_s = "redheart";
                    break;
                case 3:
                    cardType_s = "spades";
                    break;
                case 4:
                    cardType_s = "square";
                    break;
            }
            switch(cardNum)
            {
                case 11:
                    cardNum_s = 'J';
                    break;
                case 12:
                    cardNum_s = 'Q';
                    break;
                case 13:
                    cardNum_s = 'K';
                    break;
                case 14:
                    cardNum_s = 'A';
                    break;
                case 15:
                    cardNum_s = '2';
                    break;
                default:
                    cardNum_s = String(cardNum);
                    break;
            }
            
            return cardType_s + cardNum_s + '_png';
        }
    	
	}
}
