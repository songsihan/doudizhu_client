var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        _super.call(this);
        this.value1 = 0; //进度值 满值100
        this.value2 = 0;
        this.value3 = 0;
        this.skinName = skins.self.LoadingSkin;
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
        var _png1 = game.ModelCache.getInstance().getImg(users[0].headImg);
        if (_png1) {
            this.png1.source = _png1;
        }
        if (users[0].nickName) {
            this.name1.text = users[0].nickName;
        }
        var _png2 = game.ModelCache.getInstance().getImg(users[1].headImg);
        if (_png2) {
            this.png2.source = _png2;
        }
        if (users[1].nickName) {
            this.name2.text = users[1].nickName;
        }
        var _png3 = game.ModelCache.getInstance().getImg(users[2].headImg);
        if (_png3) {
            this.png3.source = _png3;
        }
        if (users[2].nickName) {
            this.name3.text = users[2].nickName;
        }
    };
    /**
     * 进度 = 资源加载80% + 玩家数据初始化10% + 房间创建10%
     */
    p.setProgress = function (uid, addValue, oldVale) {
        var users = game.ModelCache.getInstance().getUsers();
        if (uid == users[0].id) {
            if (oldVale > 0)
                this.value1 = oldVale;
            this.value1 = Math.min(100, this.value1 + addValue);
            this.pro1.text = this.value1 + "%";
        }
        else if (uid == users[1].id) {
            if (oldVale > 0)
                this.value2 = oldVale;
            this.value2 = Math.min(100, this.value2 + addValue);
            this.pro2.text = this.value2 + "%";
        }
        else if (uid == users[2].id) {
            if (oldVale > 0)
                this.value3 = oldVale;
            this.value3 = Math.min(100, this.value3 + addValue);
            this.pro3.text = this.value3 + "%";
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
        var users = game.ModelCache.getInstance().getUsers();
        var _png1 = game.ModelCache.getInstance().getImg(users[0].headImg);
        if (_png1) {
            this.png1.source = _png1;
        }
        var _png2 = game.ModelCache.getInstance().getImg(users[1].headImg);
        if (_png2) {
            this.png2.source = _png2;
        }
        var _png3 = game.ModelCache.getInstance().getImg(users[2].headImg);
        if (_png3) {
            this.png3.source = _png3;
        }
    };
    return LoadingUI;
})(egret.gui.SkinnableComponent);
egret.registerClass(LoadingUI,"LoadingUI");
