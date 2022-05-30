gdjs.MainCode = {};
gdjs.MainCode.GDShipObjects1= [];
gdjs.MainCode.GDShipObjects2= [];
gdjs.MainCode.GDSpaceObjects1= [];
gdjs.MainCode.GDSpaceObjects2= [];
gdjs.MainCode.GDBulletObjects1= [];
gdjs.MainCode.GDBulletObjects2= [];
gdjs.MainCode.GDRockObjects1= [];
gdjs.MainCode.GDRockObjects2= [];
gdjs.MainCode.GDNewTextObjects1= [];
gdjs.MainCode.GDNewTextObjects2= [];
gdjs.MainCode.GDscuffedObjects1= [];
gdjs.MainCode.GDscuffedObjects2= [];
gdjs.MainCode.GDhelpObjects1= [];
gdjs.MainCode.GDhelpObjects2= [];
gdjs.MainCode.GDUpObjects1= [];
gdjs.MainCode.GDUpObjects2= [];
gdjs.MainCode.GDDownObjects1= [];
gdjs.MainCode.GDDownObjects2= [];
gdjs.MainCode.GDShootObjects1= [];
gdjs.MainCode.GDShootObjects2= [];
gdjs.MainCode.GDBaseObjects1= [];
gdjs.MainCode.GDBaseObjects2= [];
gdjs.MainCode.GDEnemyShipObjects1= [];
gdjs.MainCode.GDEnemyShipObjects2= [];
gdjs.MainCode.GDShieldObjects1= [];
gdjs.MainCode.GDShieldObjects2= [];

gdjs.MainCode.conditionTrue_0 = {val:false};
gdjs.MainCode.condition0IsTrue_0 = {val:false};
gdjs.MainCode.condition1IsTrue_0 = {val:false};
gdjs.MainCode.condition2IsTrue_0 = {val:false};


gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRockObjects1Objects = Hashtable.newFrom({"Rock": gdjs.MainCode.GDRockObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDShieldObjects1Objects = Hashtable.newFrom({"Shield": gdjs.MainCode.GDShieldObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDShieldObjects1Objects = Hashtable.newFrom({"Shield": gdjs.MainCode.GDShieldObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs.MainCode.GDDownObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDShootObjects1Objects = Hashtable.newFrom({"Shoot": gdjs.MainCode.GDShootObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDUpObjects1Objects = Hashtable.newFrom({"Up": gdjs.MainCode.GDUpObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDShieldObjects1Objects = Hashtable.newFrom({"Shield": gdjs.MainCode.GDShieldObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDShootObjects1Objects = Hashtable.newFrom({"Shoot": gdjs.MainCode.GDShootObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDUpObjects1Objects = Hashtable.newFrom({"Up": gdjs.MainCode.GDUpObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs.MainCode.GDDownObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRockObjects1Objects = Hashtable.newFrom({"Rock": gdjs.MainCode.GDRockObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.asyncCallback8253828 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.MainCode.GDNewTextObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("Rock"), gdjs.MainCode.GDRockObjects2);

{for(var i = 0, len = gdjs.MainCode.GDRockObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDRockObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{for(var i = 0, len = gdjs.MainCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDNewTextObjects2[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MainCode.GDRockObjects1) asyncObjectsList.addObject("Rock", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MainCode.asyncCallback8253828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRockObjects1Objects = Hashtable.newFrom({"Rock": gdjs.MainCode.GDRockObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBaseObjects1Objects = Hashtable.newFrom({"Base": gdjs.MainCode.GDBaseObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyShipObjects1Objects = Hashtable.newFrom({"EnemyShip": gdjs.MainCode.GDEnemyShipObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyShipObjects1Objects = Hashtable.newFrom({"EnemyShip": gdjs.MainCode.GDEnemyShipObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDShipObjects1Objects = Hashtable.newFrom({"Ship": gdjs.MainCode.GDShipObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyShipObjects1Objects = Hashtable.newFrom({"EnemyShip": gdjs.MainCode.GDEnemyShipObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDShipObjects1Objects = Hashtable.newFrom({"Ship": gdjs.MainCode.GDShipObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyShipObjects1Objects = Hashtable.newFrom({"EnemyShip": gdjs.MainCode.GDEnemyShipObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBaseObjects1Objects = Hashtable.newFrom({"Base": gdjs.MainCode.GDBaseObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyShipObjects1Objects = Hashtable.newFrom({"EnemyShip": gdjs.MainCode.GDEnemyShipObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRockObjects1Objects = Hashtable.newFrom({"Rock": gdjs.MainCode.GDRockObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDShipObjects1Objects = Hashtable.newFrom({"Ship": gdjs.MainCode.GDShipObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRockObjects1Objects = Hashtable.newFrom({"Rock": gdjs.MainCode.GDRockObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDShipObjects1Objects = Hashtable.newFrom({"Ship": gdjs.MainCode.GDShipObjects1});
gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "song-20220529-231559-930.mp3", true, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "stopshootingme");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawnrocks");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawnships");
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "spawnrocks") >= 1;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDRockObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRockObjects1Objects, gdjs.randomInRange(1132, 1132), gdjs.randomInRange(100, 500), "");
}{for(var i = 0, len = gdjs.MainCode.GDRockObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDRockObjects1[i].addPolarForce(180, 100, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawnrocks");
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.MainCode.GDShipObjects1);
{for(var i = 0, len = gdjs.MainCode.GDShipObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDShipObjects1[i].addForce(0, -(250), 0);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.MainCode.GDShipObjects1);
{for(var i = 0, len = gdjs.MainCode.GDShipObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDShipObjects1[i].addForce(0, 250, 0);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopshootingme") >= 0.5;
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.MainCode.GDShipObjects1);
gdjs.MainCode.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects, (( gdjs.MainCode.GDShipObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDShipObjects1[0].getPointX("ShipX")) + 1, (( gdjs.MainCode.GDShipObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDShipObjects1[0].getPointY("ShipY")), "Layer");
}{for(var i = 0, len = gdjs.MainCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBulletObjects1[i].addForce(200, 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "stopshootingme");
}{gdjs.evtTools.sound.playSound(runtimeScene, "laserShoot.wav", false, 100, 1);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.MainCode.GDShipObjects1);
{for(var i = 0, len = gdjs.MainCode.GDShipObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDShipObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.MainCode.GDShipObjects1);
{for(var i = 0, len = gdjs.MainCode.GDShipObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDShipObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(0), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Shield"), gdjs.MainCode.GDShieldObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDShieldObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.MainCode.GDShipObjects1);
{for(var i = 0, len = gdjs.MainCode.GDShipObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDShipObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(0), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Shield"), gdjs.MainCode.GDShieldObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDShieldObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.MainCode.GDShipObjects1);
{for(var i = 0, len = gdjs.MainCode.GDShipObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDShipObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.MainCode.GDDownObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDDownObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.MainCode.GDShipObjects1);
{for(var i = 0, len = gdjs.MainCode.GDShipObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDShipObjects1[i].addForce(0, 250, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Shoot"), gdjs.MainCode.GDShootObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDShootObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopshootingme") >= 0.5;
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.MainCode.GDShipObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "stopshootingme");
}{for(var i = 0, len = gdjs.MainCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBulletObjects1[i].addForce(200, 0, 1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects, (( gdjs.MainCode.GDShipObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDShipObjects1[0].getPointX("ShipX")) + 1, (( gdjs.MainCode.GDShipObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDShipObjects1[0].getPointY("ShipY")), "Layer");
}{gdjs.evtTools.sound.playSound(runtimeScene, "laserShoot.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.MainCode.GDUpObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDUpObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.MainCode.GDShipObjects1);
{for(var i = 0, len = gdjs.MainCode.GDShipObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDShipObjects1[i].addForce(0, -(250), 0);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDDownObjects1.length = 0;

gdjs.MainCode.GDShieldObjects1.length = 0;

gdjs.MainCode.GDShootObjects1.length = 0;

gdjs.MainCode.GDUpObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDShieldObjects1Objects, 64, 512, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDShootObjects1Objects, 128, 512, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDUpObjects1Objects, 192, 512, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDDownObjects1Objects, 256, 512, "UI");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.MainCode.GDRockObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRockObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDBulletObjects1 */
/* Reuse gdjs.MainCode.GDRockObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "hitHurt.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDRockObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDRockObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.MainCode.GDRockObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDRockObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.MainCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Base"), gdjs.MainCode.GDBaseObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.MainCode.GDRockObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRockObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBaseObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lose", false);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "spawnships") >= 10;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.MainCode.GDShipObjects1);
gdjs.MainCode.GDEnemyShipObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyShipObjects1Objects, 1088, 288, "");
}{for(var i = 0, len = gdjs.MainCode.GDEnemyShipObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDEnemyShipObjects1[i].addForceTowardPosition((( gdjs.MainCode.GDShipObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDShipObjects1[0].getPointX("")), (( gdjs.MainCode.GDShipObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDShipObjects1[0].getPointY("")), 300, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawnships");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.MainCode.GDEnemyShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.MainCode.GDShipObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyShipObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDShipObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lose", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.MainCode.GDEnemyShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.MainCode.GDShipObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyShipObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDShipObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDEnemyShipObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.MainCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.MainCode.GDEnemyShipObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDEnemyShipObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(20);
}{for(var i = 0, len = gdjs.MainCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNewTextObjects1[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "hitHurt.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Base"), gdjs.MainCode.GDBaseObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.MainCode.GDEnemyShipObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyShipObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBaseObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lose", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.MainCode.GDEnemyShipObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyShipObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDBulletObjects1 */
/* Reuse gdjs.MainCode.GDEnemyShipObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.MainCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.MainCode.GDEnemyShipObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDEnemyShipObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MainCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(20);
}{for(var i = 0, len = gdjs.MainCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNewTextObjects1[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "hitHurt.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.MainCode.GDRockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.MainCode.GDShipObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRockObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDShipObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), false);
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lose", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.MainCode.GDRockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.MainCode.GDShipObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRockObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDShipObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDRockObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDRockObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDRockObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "hitHurt.wav", false, 100, 1);
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDShipObjects1.length = 0;
gdjs.MainCode.GDShipObjects2.length = 0;
gdjs.MainCode.GDSpaceObjects1.length = 0;
gdjs.MainCode.GDSpaceObjects2.length = 0;
gdjs.MainCode.GDBulletObjects1.length = 0;
gdjs.MainCode.GDBulletObjects2.length = 0;
gdjs.MainCode.GDRockObjects1.length = 0;
gdjs.MainCode.GDRockObjects2.length = 0;
gdjs.MainCode.GDNewTextObjects1.length = 0;
gdjs.MainCode.GDNewTextObjects2.length = 0;
gdjs.MainCode.GDscuffedObjects1.length = 0;
gdjs.MainCode.GDscuffedObjects2.length = 0;
gdjs.MainCode.GDhelpObjects1.length = 0;
gdjs.MainCode.GDhelpObjects2.length = 0;
gdjs.MainCode.GDUpObjects1.length = 0;
gdjs.MainCode.GDUpObjects2.length = 0;
gdjs.MainCode.GDDownObjects1.length = 0;
gdjs.MainCode.GDDownObjects2.length = 0;
gdjs.MainCode.GDShootObjects1.length = 0;
gdjs.MainCode.GDShootObjects2.length = 0;
gdjs.MainCode.GDBaseObjects1.length = 0;
gdjs.MainCode.GDBaseObjects2.length = 0;
gdjs.MainCode.GDEnemyShipObjects1.length = 0;
gdjs.MainCode.GDEnemyShipObjects2.length = 0;
gdjs.MainCode.GDShieldObjects1.length = 0;
gdjs.MainCode.GDShieldObjects2.length = 0;

gdjs.MainCode.eventsList1(runtimeScene);
return;

}

gdjs['MainCode'] = gdjs.MainCode;
