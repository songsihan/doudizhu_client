
class LoadingUI extends egret.gui.SkinnableComponent {

    /**
    * 进度条
    */
    public png1: egret.gui.UIAsset;
    public name1: egret.gui.Label;
    public pro1:egret.gui.Label;
    public value1 = 0;//进度值 满值100
        
    public png2: egret.gui.UIAsset;
    public name2: egret.gui.Label;
    public pro2:egret.gui.Label;
    public value2 = 0;
        
    public png3: egret.gui.UIAsset;
    public name3: egret.gui.Label;
    public pro3:egret.gui.Label;
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
        this.skinName = skins.self.LoadingSkin;
    }
    //初始化时调用
    public partAdded(partName:string, instance:any):void {
        
        super.partAdded(partName, instance);
        var users = game.ModelCache.getInstance().getUsers();
        var _png1 = game.ModelCache.getInstance().getImg(users[0].headImg);
        if(_png1)
        {
            this.png1.source = _png1;
        }
        if(users[0].nickName)
        {
            this.name1.text = users[0].nickName;
        }
        
        var _png2 = game.ModelCache.getInstance().getImg(users[1].headImg);
        if(_png2)
        {
            this.png2.source = _png2;
        }
        if(users[1].nickName)
        {
            this.name2.text  = users[1].nickName;
        }
        
        var _png3 = game.ModelCache.getInstance().getImg(users[2].headImg);
        if(_png3)
        {
            this.png3.source = _png3;
        }
        if(users[2].nickName)
        {
            this.name3.text  = users[2].nickName;
        }
    }
    
    /**
     * 进度 = 资源加载80% + 玩家数据初始化10% + 房间创建10%
     */ 
    public setProgress(uid:number,addValue:number,oldVale:number):void {
        var users = game.ModelCache.getInstance().getUsers(); 
        if(uid == users[0].id)
        {
            if(oldVale > 0) this.value1 = oldVale;
            this.value1 = Math.min(100,this.value1 + addValue);
            this.pro1.text = this.value1 + "%";
        } 
        else if(uid == users[1].id)
        {
            if(oldVale > 0) this.value2 = oldVale;
            this.value2 = Math.min(100,this.value2 + addValue);
            this.pro2.text = this.value2 + "%";
        }
        else if(uid == users[2].id)
        {
            if(oldVale > 0) this.value3 = oldVale;
            this.value3 = Math.min(100,this.value3 + addValue);
            this.pro3.text = this.value3 + "%";
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
        var users = game.ModelCache.getInstance().getUsers();
        var _png1 = game.ModelCache.getInstance().getImg(users[0].headImg);
        if(_png1)
        {
            this.png1.source = _png1;
        }     
        var _png2 = game.ModelCache.getInstance().getImg(users[1].headImg);
        if(_png2)
        {
            this.png2.source = _png2;
        }
        var _png3 = game.ModelCache.getInstance().getImg(users[2].headImg);
        if(_png3)
        {
            this.png3.source = _png3;
        }
    }
    
}
