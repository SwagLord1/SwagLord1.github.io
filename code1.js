gdjs.LoseCode = {};
gdjs.LoseCode.GDNewTiledSpriteObjects1= [];
gdjs.LoseCode.GDNewTiledSpriteObjects2= [];
gdjs.LoseCode.GDCongratsObjects1= [];
gdjs.LoseCode.GDCongratsObjects2= [];
gdjs.LoseCode.GDNewTextInputObjects1= [];
gdjs.LoseCode.GDNewTextInputObjects2= [];
gdjs.LoseCode.GDNewSpriteObjects1= [];
gdjs.LoseCode.GDNewSpriteObjects2= [];
gdjs.LoseCode.GDEnterObjects1= [];
gdjs.LoseCode.GDEnterObjects2= [];

gdjs.LoseCode.conditionTrue_0 = {val:false};
gdjs.LoseCode.condition0IsTrue_0 = {val:false};
gdjs.LoseCode.condition1IsTrue_0 = {val:false};


gdjs.LoseCode.eventsList0 = function(runtimeScene) {

{


gdjs.LoseCode.condition0IsTrue_0.val = false;
{
gdjs.LoseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
}if (gdjs.LoseCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.LoseCode.GDNewTextInputObjects1);
{runtimeScene.getVariables().getFromIndex(0).setString((( gdjs.LoseCode.GDNewTextInputObjects1.length === 0 ) ? "" :gdjs.LoseCode.GDNewTextInputObjects1[0].getString()));
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "66430692-0728-45dc-b95f-acce9fe5c4f4", true);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "66430692-0728-45dc-b95f-acce9fe5c4f4", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}}

}


{


gdjs.LoseCode.condition0IsTrue_0.val = false;
{
gdjs.LoseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.LoseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{


gdjs.LoseCode.condition0IsTrue_0.val = false;
{
gdjs.LoseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LoseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "song-20220529-233024-304.mp3", true, 100, 1);
}}

}


};

gdjs.LoseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoseCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.LoseCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.LoseCode.GDCongratsObjects1.length = 0;
gdjs.LoseCode.GDCongratsObjects2.length = 0;
gdjs.LoseCode.GDNewTextInputObjects1.length = 0;
gdjs.LoseCode.GDNewTextInputObjects2.length = 0;
gdjs.LoseCode.GDNewSpriteObjects1.length = 0;
gdjs.LoseCode.GDNewSpriteObjects2.length = 0;
gdjs.LoseCode.GDEnterObjects1.length = 0;
gdjs.LoseCode.GDEnterObjects2.length = 0;

gdjs.LoseCode.eventsList0(runtimeScene);
return;

}

gdjs['LoseCode'] = gdjs.LoseCode;
