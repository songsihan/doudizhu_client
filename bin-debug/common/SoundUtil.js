var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var SoundUtil = (function () {
        function SoundUtil() {
        }
        var d = __define,c=SoundUtil;p=c.prototype;
        SoundUtil.exeSound = function (res) {
            if (SoundUtil.status != 1) {
                return;
            }
            if (game.MainPanel.getInstance().sound) {
                if (SoundUtil.soundRes[res]) {
                    var sound = SoundUtil.soundRes[res];
                }
                else {
                    var sound = RES.getRes(res);
                    SoundUtil.soundRes[res] = sound;
                }
                sound.play(0, 1);
            }
        };
        SoundUtil.getSimpleSoundRes = function (value) {
            return value + "_mp3";
        };
        SoundUtil.playCardSound = function (cardData) {
            //            var data = { type: 0,num: cnt,minValue: 0,cardNos: [],with: 0 };
            var _type = cardData.type;
            var _with = cardData.with;
            var res = '';
            if (_type == game.Constants.CARD_TYPE_SINGLE) {
                res = SoundUtil.getSimpleSoundRes(cardData.minValue);
            }
            else if (_type == game.Constants.CARD_TYPE_DOUBLE) {
                res = 'dui' + SoundUtil.getSimpleSoundRes(cardData.minValue);
            }
            else if (_type == game.Constants.CARD_TYPE_THREE) {
                if (_with == 2) {
                    res = 'sandaiyidui_mp3';
                }
                else if (_with == 1) {
                    res = 'sandaiyi_mp3';
                }
                else {
                    res = 'three_mp3';
                }
            }
            else if (_type == game.Constants.CARD_TYPE_THREE_STRAIGHT) {
                res = 'plane_1_mp3';
                SoundUtil.exeSound(res);
                res = 'plane_2_mp3';
            }
            else if (_type == game.Constants.CARD_TYPE_KING) {
                res = 'rocker_1_mp3';
                SoundUtil.exeSound(res);
                res = 'rocket_2_mp3';
            }
            else if (_type == game.Constants.CARD_TYPE_DOUBLE_STRAIGHT) {
                res = 'liandui_mp3';
            }
            else if (_type == game.Constants.CARD_TYPE_SINGLE_STRAIGHT) {
                res = 'shunzi_mp3';
            }
            else if (_type == game.Constants.CARD_TYPE_BOMB) {
                res = 'bomb_1_mp3';
                SoundUtil.exeSound(res);
                res = 'bomb_2_mp3';
            }
            else if (_type == game.Constants.CARD_TYPE_FOUR_WITH) {
                if (_with == 1) {
                    res = 'sidaier_mp3';
                }
                else {
                    res = 'sidailiangdui_mp3';
                }
            }
            if (res != '') {
                SoundUtil.exeSound(res);
            }
        };
        SoundUtil.playSound = function (_type) {
            var res = '';
            if (_type = 1) {
                res = 'buyao1_mp3';
            }
            else if (_type = 2) {
                res = 'call_landlord_mp3';
            }
            if (res != '') {
                SoundUtil.exeSound(res);
            }
        };
        SoundUtil.endSound = function (isWin) {
            var res = '';
            if (isWin) {
                res = 'win_mp3';
            }
            else {
                res = 'failure_mp3';
            }
            if (res != '') {
                SoundUtil.exeSound(res);
            }
        };
        SoundUtil.soundRes = [];
        SoundUtil.status = 1;
        return SoundUtil;
    })();
    game.SoundUtil = SoundUtil;
    egret.registerClass(SoundUtil,"game.SoundUtil");
})(game || (game = {}));
