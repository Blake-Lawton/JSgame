var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(200, 200, {backgroundColor: 0x0000ff});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var hero = new PIXI.Sprite(PIXI.Texture.fromImage("ArcherBlake.png"));
var arrow = new PIXI.Sprite(PIXI.Texture.fromImage("arrow.png"));
var arrow2 = new PIXI.Sprite(PIXI.Texture.fromImage("arrow.png"));
var arrow3 = new PIXI.Sprite(PIXI.Texture.fromImage("arrow.png"));
var arrow4 = new PIXI.Sprite(PIXI.Texture.fromImage("arrow.png"));
var arrow5 = new PIXI.Sprite(PIXI.Texture.fromImage("arrow.png"));
var start = new PIXI.Sprite(PIXI.Texture.fromImage("Start.png"))
var finish = new PIXI.Sprite(PIXI.Texture.fromImage("Finish.png"))
var border = new PIXI.Sprite(PIXI.Texture.fromImage("Border.png"))
hero.health = 100;

start.position.x = 155;
start.position.y = 150;
stage.addChild(start);

finish.position.x = 490;
finish.position.y = 500;
stage.addChild(finish);

border.position.x = 180;
border.position.y = 170;
stage.addChild(border);

hero.position.x = 190;
hero.position.y = 180;
stage.addChild(hero);

arrow.position.x = 390;
arrow.position.y = 500;
stage.addChild(arrow);

arrow2.position.x = 500;
arrow2.position.y = 350;
stage.addChild(arrow2);

arrow3.position.x = 350;
arrow3.position.y = 370;
stage.addChild(arrow3);

arrow4.position.x = 450;
arrow4.position.y = 450;
stage.addChild(arrow4);

arrow5.position.x = 450;
arrow5.position.y = 400;
stage.addChild(arrow5);

function keydownEventHandler(e) {

  if (e.keyCode == 87) { // W key
    hero.position.y -= 10;
  }

  if (e.keyCode == 83) { // S key
    hero.position.y += 10;
  }

  if (e.keyCode == 65) { // A key
    hero.position.x -= 10;
  }

  if (e.keyCode == 68) { // D key
    hero.position.x += 10;
  }
}

document.addEventListener('keydown', keydownEventHandler);


function animate() {
  requestAnimationFrame(animate);


  arrow.rotation += .05;
  arrow2.rotation += .05;
  arrow3.rotation += .05;
  arrow4.rotation += .05;
  arrow5.rotation += .05;

  renderer.render(stage);
}
animate();
