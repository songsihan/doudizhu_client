module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class SoundUtil {
        private static soundRes: any[] = [];
        public static status = 1;
    	public static exeSound(res)
    	{
        	if(SoundUtil.status != 1)
             {
                return;
             }
        	if(MainPanel.getInstance().sound)
             {
                 if(SoundUtil.soundRes[res])
                 {
                     var sound: egret.Sound = SoundUtil.soundRes[res];
                 }
                 else
                 {
                     var sound:egret.Sound = RES.getRes(res);
                     SoundUtil.soundRes[res] = sound;
                 }
                 sound.play(0,1);
             }
    	}
    	
		public static getSimpleSoundRes(value:number)
		{
            return value + "_mp3";
		}
		
		public static playCardSound(cardData:any)
		{//飞机-三顺 飞机带翅膀-三顺带
//            var data = { type: 0,num: cnt,minValue: 0,cardNos: [],with: 0 };
            var _type = cardData.type;
            var _with = cardData.with;
            var res = '';
            if(_type == Constants.CARD_TYPE_SINGLE)
            {
                res = SoundUtil.getSimpleSoundRes(cardData.minValue);
            }
            else if(_type == Constants.CARD_TYPE_DOUBLE)
            {
                res = 'dui'+SoundUtil.getSimpleSoundRes(cardData.minValue);
            }
            else if(_type == Constants.CARD_TYPE_THREE)
            {
                if(_with == 2)
                {
                    res = 'sandaiyidui_mp3';
                }
                else if(_with == 1)
                {
                    res = 'sandaiyi_mp3';
                }
                else
                {
                    res = 'three_mp3';
                }
            }
            else if(_type == Constants.CARD_TYPE_THREE_STRAIGHT)
            {
                res = 'plane_1_mp3';
                SoundUtil.exeSound(res);
                res = 'plane_2_mp3';
            }
            else if(_type == Constants.CARD_TYPE_KING)
            {
                res = 'rocker_1_mp3';
                SoundUtil.exeSound(res);
                res = 'rocket_2_mp3';
            }
            else if(_type == Constants.CARD_TYPE_DOUBLE_STRAIGHT)
            {
                res = 'liandui_mp3';
            }
            else if(_type == Constants.CARD_TYPE_SINGLE_STRAIGHT)
            {
                res = 'shunzi_mp3';
            }
            else if(_type == Constants.CARD_TYPE_BOMB)
            {
                res = 'bomb_1_mp3';
                SoundUtil.exeSound(res);
                res = 'bomb_2_mp3';
            }
            else if(_type == Constants.CARD_TYPE_FOUR_WITH)
            {
                if(_with == 1)
                {
                    res = 'sidaier_mp3';
                }
                else
                {
                    res = 'sidailiangdui_mp3';
                }
            }
            if(res != '')
            {
                SoundUtil.exeSound(res);
            }
		}
		
		public static playSound(_type:any)
		{
            var res = '';
		    if(_type = 1)
		    {
                res = 'buyao1_mp3';
		    }
		    else if(_type = 2)
		    {
		        res = 'call_landlord_mp3';
		    }
            
            if(res != '')
            {
                SoundUtil.exeSound(res);
            }
		}
        
        public static endSound(isWin:boolean)
        {
            var res = '';
            if(isWin)
            {
                res = 'win_mp3';
            }
            else
            {
                res = 'failure_mp3';
            }
                        
            if(res != '')
            {
                SoundUtil.exeSound(res);
            }
        }
        
	}
}
