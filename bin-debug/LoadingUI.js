var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        _super.call(this);
        this.value1 = 0; //进度值 满值100
        this.value2 = 0;
        this.value3 = 0;
        this.skinName = skins.self.NewLoadingSkin;
    }
    var d = __define,c=LoadingUI;p=c.prototype;
    LoadingUI.getInstance = function () {
        if (LoadingUI._instance == null) {
            LoadingUI._instance = new LoadingUI();
        }
        return LoadingUI._instance;
    };
    //初始化时调用
    p.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        var users = game.ModelCache.getInstance().getUsers();
        var selfUid = game.ModelCache.getInstance().getUid();
        //        var _png1 = game.ModelCache.getInstance().getImg(users[0].headImg);
        //        if(_png1)
        //        {
        //            this.png1.source = _png1;
        //        }
        if (users[0].nickName) {
            this.name1.text = this.getName(users[0].nickName);
            if (users[0].id == selfUid) {
                this.name1.textColor = 0xffaf40;
            }
        }
        //        var _png2 = game.ModelCache.getInstance().getImg(users[1].headImg);
        //        if(_png2)
        //        {
        //            this.png2.source = _png2;
        //        }
        if (users[1].nickName) {
            this.name2.text = this.getName(users[1].nickName);
            if (users[1].id == selfUid) {
                this.name2.textColor = 0xffaf40;
            }
        }
        //        var _png3 = game.ModelCache.getInstance().getImg(users[2].headImg);
        //        if(_png3)
        //        {
        //            this.png3.source = _png3;
        //        }
        if (users[2].nickName) {
            this.name3.text = this.getName(users[2].nickName);
            if (users[2].id == selfUid) {
                this.name3.textColor = 0xffaf40;
            }
        }
        this.line1.maximum = 100;
        this.line2.maximum = 100;
        this.line3.maximum = 100;
    };
    p.loadingEnd = function () {
        this.line1.value = 100;
        this.pro1.text = 100 + "%";
        this.line2.value = 100;
        this.pro2.text = 100 + "%";
        this.line3.value = 100;
        this.pro3.text = 100 + "%";
    };
    /**
     * 进度 = 资源加载80% + 玩家数据初始化10% + 房间创建10%
     */
    p.setProgress = function (uid, addValue, oldVale) {
        var users = game.ModelCache.getInstance().getUsers();
        if (addValue < 0) {
            return;
        }
        if (uid == users[0].id) {
            if (oldVale > 0)
                this.value1 = oldVale;
            this.value1 = Math.min(100, this.value1 + addValue);
            var _value1 = Math.max(0, this.value1 - 1);
            this.line1.value = _value1;
            this.pro1.text = _value1 + "%";
        }
        else if (uid == users[1].id) {
            if (oldVale > 0)
                this.value2 = oldVale;
            this.value2 = Math.min(100, this.value2 + addValue);
            var _value2 = Math.max(0, this.value2 - 1);
            this.line2.value = _value2;
            this.pro2.text = _value2 + "%";
        }
        else if (uid == users[2].id) {
            if (oldVale > 0)
                this.value3 = oldVale;
            this.value3 = Math.min(100, this.value3 + addValue);
            var _value3 = Math.max(0, this.value3 - 1);
            this.line3.value = _value3;
            this.pro3.text = _value3 + "%";
        }
    };
    p.getSelfProValue = function () {
        var users = game.ModelCache.getInstance().getUsers();
        var selfUid = game.ModelCache.getInstance().getUid();
        if (selfUid == users[0].id) {
            return this.value1;
        }
        else if (selfUid == users[1].id) {
            return this.value2;
        }
        else if (selfUid == users[2].id) {
            return this.value3;
        }
        return 0;
    };
    p.setImg = function () {
        //        var users = game.ModelCache.getInstance().getUsers();
        //        var _png1 = game.ModelCache.getInstance().getImg(users[0].headImg);
        //        if(_png1)
        //        {
        //            this.png1.source = _png1;
        //        }     
        //        var _png2 = game.ModelCache.getInstance().getImg(users[1].headImg);
        //        if(_png2)
        //        {
        //            this.png2.source = _png2;
        //        }
        //        var _png3 = game.ModelCache.getInstance().getImg(users[2].headImg);
        //        if(_png3)
        //        {
        //            this.png3.source = _png3;
        //        }
    };
    p.getName = function (str, len, hasDot) {
        if (len === void 0) { len = 4; }
        if (hasDot === void 0) { hasDot = true; }
        var newLength = 0;
        var newStr = "";
        var chineseRegex = /[^\x00-\xff]/g;
        var singleChar = "";
        var strLength = str.replace(chineseRegex, "**").length;
        for (var i = 0; i < strLength; i++) {
            singleChar = str.charAt(i).toString();
            if (singleChar.match(chineseRegex) != null) {
                newLength += 2;
            }
            else {
                newLength++;
            }
            if (newLength > len) {
                break;
            }
            newStr += singleChar;
        }
        if (hasDot && strLength > len) {
            newStr += "...";
        }
        return newStr;
    };
    return LoadingUI;
})(egret.gui.SkinnableComponent);
egret.registerClass(LoadingUI,"LoadingUI");
