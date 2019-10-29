PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

var gameport = document.getElementById("gameport");

var renderer = new PIXI.autoDetectRenderer({width: 400, height: 400, backgroundColor: 0x00000});
gameport.appendChild(renderer.view);


var stage = new PIXI.Container();




var hero = new PIXI.Sprite(PIXI.Texture.fromImage("ArcherBlake.png"));
var arrow1 = new PIXI.Sprite(PIXI.Texture.fromImage("arrow.png"));
var arrow2 = new PIXI.Sprite(PIXI.Texture.fromImage("arrow.png"));
var arrow3 = new PIXI.Sprite(PIXI.Texture.fromImage("arrow.png"));
var arrow4 = new PIXI.Sprite(PIXI.Texture.fromImage("arrow.png"));
var arrow5 = new PIXI.Sprite(PIXI.Texture.fromImage("arrow.png"));
var start = new PIXI.Sprite(PIXI.Texture.fromImage("Start.png"))
var finish = new PIXI.Sprite(PIXI.Texture.fromImage("Finish.png"))
var startArt = new PIXI.Sprite(PIXI.Texture.fromImage("startArt.png"));
var startButton = new PIXI.Sprite(PIXI.Texture.fromImage("startButton.png"));
var tutButton = new PIXI.Sprite(PIXI.Texture.fromImage("instructButton.png"));
var credits = new PIXI.Sprite(PIXI.Texture.fromImage("credits.png"));
var menuHero = new PIXI.Sprite(PIXI.Texture.fromImage("ArcherBlake1.png"));
var backArrow = new PIXI.Sprite(PIXI.Texture.fromImage("backArrow.png"));
var map = new PIXI.Sprite(PIXI.Texture.fromImage("mainMap.png"));


//-------------------Sound---------------------------

// PIXI.loader
//   .add("8bitNoise.mp3")
//   .load(ready);
//
// var sound;
// function ready() {
//   sound = PIXI.audioManager.getAudio("8bitNoise.mp3");
// }
//
// function mouseHandler(e) {
//   sound.play();
// }

//-------------------starting Art----------------------
  startArt.position.x = 0;
  startArt.position.y = 0;
  stage.addChild(startArt);

  let text4 = new PIXI.Text('Archer Hero!');
  text4.position.set(100,50);
  stage.addChild(text4);

  menuHero.position.set(180, 300);
  stage.addChild(menuHero);

//--------------------tutorial------------------------
  tutButton.position.set(100, 200);
  stage.addChild(tutButton);
  tutButton.interactive = true;
  tutButton.buttonMode = true;
  tutButton.on('mousedown', tutorialButton);

  function tutorialButton()
  {


    startButton.visible = false;
    tutButton.visible = false;
    credits.visible = false;

    backArrow.visible = true;

    text1.visible = true;
    text2.visible = true;
    text3.visible = true;
    text7.visible = true;

    backArrow.position.set(0, 350);
    stage.addChild(backArrow);
    backArrow.interactive = true;
    backArrow.buttonMode = true;
    backArrow.on('mousedown', resetMenu);



  }
  let text1 = new PIXI.Text('* Instructions');
  text1.position.set(0,90);
  stage.addChild(text1);

  let text2 = new PIXI.Text('* Use the W A S D keys to move');
  text2.position.set(0,140);
  stage.addChild(text2);

  let text3 = new PIXI.Text('* Reach the checkered flag to win!');
  text3.position.set(0,245);
  stage.addChild(text3);

  let text7 = new PIXI.Text('* Dont touch the lava, torches, or \n   water');
  text7.position.set(0,190);
  stage.addChild(text7);

  text1.visible = false;
  text2.visible = false;
  text3.visible = false;
  text7.visible = false;

  //-----------------Credits---------------------------
  credits.position.set(100, 300);
  stage.addChild(credits);
  credits.interactive = true;
  credits.buttonMode = true;
  credits.on('mousedown', creditButton);

  function creditButton()
  {


    startButton.visible = false;
    tutButton.visible = false;
    credits.visible = false;

    backArrow.visible = true;

    text5.visible = true;

    backArrow.position.set(0, 350);
    stage.addChild(backArrow);
    backArrow.interactive = true;
    backArrow.buttonMode = true;
    backArrow.on('mousedown', resetMenu);


  }

  let text5 = new PIXI.Text('Everything done by: Blake Lawton');
  text5.position.set(0, 200);
  stage.addChild(text5);

  text5.visible = false;

//-----------------start button---------------------------
  startButton.position.set(100, 100);
  stage.addChild(startButton);
  startButton.interactive = true;
  startButton.buttonMode = true;
  startButton.on('mousedown', startGame);
  // startButton.on('mousedown', mouseHandler);

  map.position.x = 0;
  map.position.y = 0;
  stage.addChild(map)
  map.visible = false;

  function startGame()
  {
    map.visible = true;
    startArt.visible = false;
    startButton.visible = false;
    tutButton.visible = false;
    credits.visible = false;
    menuHero.visible = false;

    start.position.x = -20;
    start.position.y = -20;
    stage.addChild(start);

    finish.position.x = 700;
    finish.position.y = 720;

    stage.addChild(finish);

    hero.position.x = 20;
    hero.position.y = 10;
    stage.addChild(hero);

    arrow1.position.x = 300;
    arrow1.position.y = 100;
    stage.addChild(arrow1);

    arrow2.position.x = 680;
    arrow2.position.y = 300;
    stage.addChild(arrow2);

    arrow3.position.x = 720;
    arrow3.position.y = 300;
    stage.addChild(arrow3);
    arrow3.visible = false;

    arrow4.position.x = 750;
    arrow4.position.y = 300;
    stage.addChild(arrow4);

    arrow5.position.x = 180;
    arrow5.position.y = 540;
    stage.addChild(arrow5);



  }

function resetMenu()
{
  startButton.visible = true;
  tutButton.visible = true;
  credits.visible = true;
  menuHero.visible = true;
  text1.visible = false;
  text2.visible = false;
  text3.visible = false;
  text5.visible = false;
  text7.visible = false;
  backArrow.visible = false;

  tutButton.position.set(100, 200);
  stage.addChild(tutButton);
  tutButton.interactive = true;
  tutButton.buttonMode = true;
  tutButton.on('mousedown', tutorial);

  credits.position.set(100, 300);
  stage.addChild(credits);

  menuHero.position.set(180, 300);
  stage.addChild(menuHero);

  let text = new PIXI.Text('Archer Hero!');
  text.position.set(100,50);
  stage.addChild(text);

  startButton.position.set(100, 100);
  stage.addChild(startButton);
  startButton.interactive = true;
  startButton.buttonMode = true;
  startButton.on('mousedown', startGame);
}

//------------Collision----------------










//-----------end Game Screen-------------
let text6 = new PIXI.Text('Congrats! You won!');
text6.position.set(0, 200);
stage.addChild(text6);
text6.visible = false;

function endGame()
{
  map.visible = false;
  text4.visible = false;
  startArt.visible = true;
  finish.visible = false;
  start.visible = false;
  arrow1.visible = false;
  arrow2.visible = false;
  arrow3.visible = false;
  arrow4.visible = false;
  arrow5.visible = false;
  hero.visible= false;
  menuHero.visible= true;

  text6.visible = true;

}



// PIXI.loader
//   .add("assets.json")
//   .load(endScreen);
//
//   function endScreen()
//   {
//     var heroRight = new PIXI.Sprite(PIXI.Texture.fromFrame("ArcherBlake2.png"));
//     var heroLeft = new PIXI.Sprite(PIXI.Texture.fromFrame("ArcherBlake3.png"));
//     var heroUp = new PIXI.Sprite(PIXI.Texture.fromFrame("ArcherBlake4.png"));
//     var heroDown = new PIXI.Sprite(PIXI.Texture.fromFrame("ArcherBlake1.png"));
//   }






function left() {
  createjs.Tween.get(arrow3.position).to({x: 200}, 4000, createjs.Ease.cubicOut).call(right);

}

function right() {
  createjs.Tween.get(arrow3.position).to({x: 350}, 4000, createjs.Ease.cubicInOut).call(left);
}

right();





function keydownEventHandler(e) {

  if (e.keyCode == 87) { // W key
    hero.position.y -= 10;
    arrow1.position.y += 12;
    arrow2.position.y += 12;

    arrow4.position.y += 12;
    arrow5.position.y += 12;
    start.position.y +=12;
    finish.position.y += 12;
    map.position.y += 12;
  }

  if (e.keyCode == 83) { // S key
    hero.position.y += 10;
    arrow1.position.y -= 12;
    arrow2.position.y -= 12;

    arrow4.position.y -= 12;
    arrow5.position.y -= 12;
    start.position.y -=12;
    finish.position.y -= 12;
    map.position.y -=12;
  }

  if (e.keyCode == 65) { // A key
    hero.position.x -= 10;
    arrow1.position.x += 12;
    arrow2.position.x += 12;

    arrow4.position.x += 12;
    arrow5.position.x += 12;
    start.position.x +=12;
    finish.position.x += 12;
    map.position.x += 12;
  }

  if (e.keyCode == 68) { // D key
    hero.position.x += 10;
    arrow1.position.x -= 12;
    arrow2.position.x -= 12;

    arrow4.position.x -= 12;
    arrow5.position.x -= 12;
    start.position.x -=12;
    finish.position.x -= 12;
    map.position.x -= 12;
  }
}

document.addEventListener('keydown', keydownEventHandler);




function animate() {
  arrow1.rotation -=.05;
  arrow2.rotation -=.05;
  arrow4.rotation -=.05;
  arrow5.rotation -=.05;

  if(hero.position.x >= 330 && hero.position.y >= 330  )
  {
    endGame();
  }

  requestAnimationFrame(animate);

  renderer.render(stage);


}
animate();
