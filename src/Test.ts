class Test extends eui.Component  
{  
    constructor()  
    {  
        super();  
        this.skinName = "game_main_Skin";  
    }  
  
    public text: eui.EditableText;  
    public icon01: eui.Image;  
    public icon02: eui.Image;  
    public icon03: eui.Image;  
    public icon04: eui.Image;  
    public icon05: eui.Image;  
    public icon06: eui.Image;  
    public icon07: eui.Image;  
    public icon08: eui.Image;  
    public random: eui.Label;  
    public childrenCreated()  
    {  
        super.childrenCreated();  
        this.icon01.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onTap, this );  
        this.icon02.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onTap, this );  
        this.icon03.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onTap, this );  
        this.icon04.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onTap, this );  
        this.icon05.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onTap, this );  
        this.icon06.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onTap, this );  
        this.icon07.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onTap, this );  
        this.icon08.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onTap, this );  
        this.random.addEventListener( egret.TouchEvent.TOUCH_TAP, () =>  
        {  
            this.str += this.random.name.split( ',' )[Math.floor( Math.random() * 5 )];  
            this.text.textFlow = ( new egret.HtmlTextParser ).parser( this.str );  
        }, this );  
        this.str += this.text.text;  
    }  
  
    private str: string = "";  
    private offsetX: number = 0;  
    private offsetY: number = 0;  
    private onTap( e: egret.TouchEvent )  
    {  
        //获取表情  
        var bitmap: egret.Bitmap = new egret.Bitmap( RES.getRes( e.target.name ) );  
          
        //记录下当前文本的高度- -  
        var h = this.text.height;  
          
        //在文本里添加上表情的关键字  
        this.text.text += e.target.name;  
          
        //记录一下关键字的位置  
        var idx = this.text.text.indexOf( e.target.name );  
          
        //关于位置的信息都获取到了  所以去掉关键字  置空  
        this.text.text = this.text.text.replace( e.target.name, "" );  
          
        //用跟表情大小相同的字号  中文空格 代替表情  使后续文字连续    
        this.str += `<font size = "${bitmap.width}">　</font>`;  
          
        //用富文本填充  这里解释为什么this.str 是 +=   因为...   this.text.textFlow不能是+=  
        this.text.textFlow = ( new egret.HtmlTextParser ).parser( this.str );  
  
        //这里判断如果换行的话就将 X 的位置重置  Y 是总高度  
        if ( this.text.textHeight != h && this.text.textHeight - ( bitmap.width - this.text.size ) != h )  
        {  
            this.offsetX -= this.text.textWidth;  
            this.offsetY = h;  
        }  
          
        //根据关键字位置  偏移量 计算 表情的x y  
        var x = this.text.localToGlobal().x + this.text.size * idx + this.offsetX;  
        var y = this.text.localToGlobal().y + this.offsetY;  
		egret.log(this.text.localToGlobal().y);
  
        this.offsetX += bitmap.width - this.text.size;  
          
        //添加上表情  结束- -  
        bitmap.x = x;  
        bitmap.y = y;  
        this.addChild( bitmap );  
    }  
}