gdjs.InfoCode = {};
gdjs.InfoCode.GDTitleObjects1= [];
gdjs.InfoCode.GDTitleObjects2= [];
gdjs.InfoCode.GDBackgroundObjects1= [];
gdjs.InfoCode.GDBackgroundObjects2= [];
gdjs.InfoCode.GDHelpObjects1= [];
gdjs.InfoCode.GDHelpObjects2= [];
gdjs.InfoCode.GDBackObjects1= [];
gdjs.InfoCode.GDBackObjects2= [];

gdjs.InfoCode.conditionTrue_0 = {val:false};
gdjs.InfoCode.condition0IsTrue_0 = {val:false};
gdjs.InfoCode.condition1IsTrue_0 = {val:false};


gdjs.InfoCode.mapOfGDgdjs_46InfoCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.InfoCode.GDBackObjects1});
gdjs.InfoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.InfoCode.GDBackObjects1);

gdjs.InfoCode.condition0IsTrue_0.val = false;
{
gdjs.InfoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InfoCode.mapOfGDgdjs_46InfoCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if (gdjs.InfoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


gdjs.InfoCode.condition0IsTrue_0.val = false;
{
gdjs.InfoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InfoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "song-20220530-124141-5242.mp3", true, 100, 1);
}}

}


};

gdjs.InfoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InfoCode.GDTitleObjects1.length = 0;
gdjs.InfoCode.GDTitleObjects2.length = 0;
gdjs.InfoCode.GDBackgroundObjects1.length = 0;
gdjs.InfoCode.GDBackgroundObjects2.length = 0;
gdjs.InfoCode.GDHelpObjects1.length = 0;
gdjs.InfoCode.GDHelpObjects2.length = 0;
gdjs.InfoCode.GDBackObjects1.length = 0;
gdjs.InfoCode.GDBackObjects2.length = 0;

gdjs.InfoCode.eventsList0(runtimeScene);
return;

}

gdjs['InfoCode'] = gdjs.InfoCode;
