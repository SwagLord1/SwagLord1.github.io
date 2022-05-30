gdjs.MenuCode = {};
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];
gdjs.MenuCode.GDNewSprite2Objects1= [];
gdjs.MenuCode.GDNewSprite2Objects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.MenuCode.GDNewSpriteObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.MenuCode.GDNewSprite2Objects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.MenuCode.GDNewSpriteObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.MenuCode.GDNewSprite2Objects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewSprite2Objects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Info", false);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "song-20220530-124141-524.mp3", true, 100, 1);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MenuCode.GDNewSprite2Objects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
