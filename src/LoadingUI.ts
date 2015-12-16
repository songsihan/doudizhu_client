
class LoadingUI extends egret.gui.SkinnableComponent {

    /**
    * 进度条
    */
    public png1: egret.gui.UIAsset;
    public name1: egret.gui.Label;
    public pro1:egret.gui.Label;
    public line1:egret.gui.ProgressBar;
    public value1 = 0;//进度值 满值100
        
    public png2: egret.gui.UIAsset;
    public name2: egret.gui.Label;
    public pro2:egret.gui.Label;
    public line2:egret.gui.ProgressBar;
    public value2 = 0;
        
    public png3: egret.gui.UIAsset;
    public name3: egret.gui.Label;
    public pro3:egret.gui.Label;
    public line3:egret.gui.ProgressBar;
    public value3 = 0;
    
    private static _instance:LoadingUI;             
    public static getInstance():any {
        if (LoadingUI._instance == null) {
            LoadingUI._instance = new LoadingUI();
        }
        return LoadingUI._instance;
    }
    
    public constructor(){
        super();
        this.skinName = skins.self.NewLoadingSkin;
    }
    //初始化时调用
    public partAdded(partName:string, instance:any):void {
        
        super.partAdded(partName, instance);
        var users = game.ModelCache.getInstance().getUsers(); 
        var selfUid = game.ModelCache.getInstance().getUid();
//        var _png1 = game.ModelCache.getInstance().getImg(users[0].headImg);
//        if(_png1)
//        {
//            this.png1.source = _png1;
//        }
        if(users[0].nickName)
        {
            this.name1.text = this.getName(users[0].nickName);
            if(users[0].id == selfUid)
            {
                this.name1.textColor = 0xffaf40;
            }
        }
        
//        var _png2 = game.ModelCache.getInstance().getImg(users[1].headImg);
//        if(_png2)
//        {
//            this.png2.source = _png2;
//        }
        if(users[1].nickName)
        {
            this.name2.text = this.getName(users[1].nickName);
            if(users[1].id == selfUid) {
                this.name2.textColor = 0xffaf40;
            }
        }
        
//        var _png3 = game.ModelCache.getInstance().getImg(users[2].headImg);
//        if(_png3)
//        {
//            this.png3.source = _png3;
//        }
        if(users[2].nickName)
        {
            this.name3.text = this.getName(users[2].nickName);
            if(users[2].id == selfUid) {
                this.name3.textColor = 0xffaf40;
            }
        }
        
        this.line1.maximum = 100;
        this.line2.maximum = 100;
        this.line3.maximum = 100;
    }
    
    public loadingEnd()
    {
        this.line1.value = 100;
        this.pro1.text = 100 + "%";
        this.line2.value = 100;
        this.pro2.text = 100 + "%";
        this.line3.value = 100;
        this.pro3.text = 100 + "%";
    }
    
    /**
     * 进度 = 资源加载80% + 玩家数据初始化10% + 房间创建10%
     */ 
    public setProgress(uid:number,addValue:number,oldVale:number):void {
        var users = game.ModelCache.getInstance().getUsers(); 
        if(addValue < 0)
        {
            return;
        }
        if(uid == users[0].id)
        {
            if(oldVale > 0 && oldVale+addValue <= this.value1)
            {
                return;
            }
            if(oldVale > this.value1) this.value1 = oldVale;
            this.value1 = Math.min(100,this.value1 + addValue);
            var _value1 = Math.max(0,this.value1 - 1);
            this.line1.value = _value1;
            this.pro1.text = _value1 + "%"; 
//            oldVale > 0 && console.error("===_value1:" + _value1 + " addValue:" + addValue + " oldVal:" + oldVale);           
        } 
        else if(uid == users[1].id)
        {
            if(oldVale > 0 && oldVale + addValue <= this.value2) 
            {
                return;
            }
            if(oldVale > this.value2) this.value2 = oldVale;
            this.value2 = Math.min(100,this.value2 + addValue);
            var _value2 = Math.max(0,this.value2 - 1);
            this.line2.value = _value2;
            this.pro2.text = _value2 + "%";
//            oldVale > 0 && console.error("===_value2:" + _value2 + " addValue:" + addValue + " oldVal:" + oldVale);
        }
        else if(uid == users[2].id)
        {
            if(oldVale > 0 && oldVale + addValue <= this.value3) 
            {
                return;
            }
            if(oldVale > this.value3) this.value3 = oldVale;
            this.value3 = Math.min(100,this.value3 + addValue);
            var _value3 = Math.max(0,this.value3 - 1);
            this.line3.value = _value3;
            this.pro3.text = _value3 + "%";
//            oldVale > 0 && console.error("===_value3:" + _value3 + " addValue:" + addValue + " oldVal:" + oldVale);
        }
    }
    
    public getSelfProValue()
    {
        var users = game.ModelCache.getInstance().getUsers();
        var selfUid = game.ModelCache.getInstance().getUid();
        if(selfUid == users[0].id)
        {
            return this.value1;
        }
        else if(selfUid == users[1].id)
        {
            return this.value2;
        }
        else if(selfUid == users[2].id)
        {
            return this.value3;
        }
        return 0;
    }
    
    public setImg()
    {
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
    }
    
    private getName(str, len = 4, hasDot = true)
    {
        var newLength = 0; 
        var newStr = ""; 
        var chineseRegex = /[^\x00-\xff]/g; 
        var singleChar = ""; 
        var strLength = str.replace(chineseRegex,"**").length; 
        for(var i = 0;i < strLength;i++) 
        { 
            singleChar = str.charAt(i).toString(); 
            if(singleChar.match(chineseRegex) != null) 
            { 
                newLength += 2; 
            }     
            else 
            { 
                newLength++; 
            } 
            if(newLength > len) 
            { 
                break; 
            } 
            newStr += singleChar; 
        } 
        
        if(hasDot && strLength > len) 
        { 
            newStr += "..."; 
        } 
        return newStr; 
    }
}
