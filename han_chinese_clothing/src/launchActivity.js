(function()
{
    var Sprite  = Laya.Sprite;
    var Stage   = Laya.Stage;
    var Texture = Laya.Texture;
    var Browser = Laya.Browser;
    var Handler = Laya.Handler;
    var WebGL   = Laya.WebGL;
    var texture1 = "../laya/assets/res/images/bottoms_1.png";
    var texture2 = "../laya/assets/res/images/bottoms_2.png";
    var model = "../laya/assets/res/images/model.png";
    var flag = false;
    var ape;
    (function()
    {
        // 不支持WebGL时自动切换至Canvas
        // Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
        Laya.init(750,1334,WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#aaaaaa";
        // initModel();
        // Laya.loader.load([texture1, texture2], Handler.create(this, initModel));
        Laya.loader.load(model, Handler.create(this, initModel));
    })();
    //初始化模特图片
    function initModel(){
        var ape_model = new Sprite();
        Laya.stage.addChild(ape_model);
        ape_model.scale(0.3,0.3);
        ape_model.pos(10, 30);
        var textureUrl = model ;
        var texture = Laya.loader.getRes(textureUrl);
        ape_model.graphics.drawTexture(texture,0,0);
        ape_model.size(texture.width, texture.height);
    }
    function onAssetsLoaded()
    {
        ape = new Sprite();
        Laya.stage.addChild(ape);
        ape.pivot(375, 200);
        ape.scale(0.3,0.3);
        ape.pos(0, 0);
        // 显示默认纹理
        switchTexture();
        ape.on("click", this, switchTexture);
    }
    function switchTexture()
    {
        var textureUrl = (flag = !flag) ? texture1 : texture2;
        // 更换纹理
        ape.graphics.clear();
        var texture = Laya.loader.getRes(textureUrl);
        ape.graphics.drawTexture(texture, 0, 0);
        // 设置交互区域
        ape.size(texture.width, texture.height);
    }
})();