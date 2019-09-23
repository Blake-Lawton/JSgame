var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x330033});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var hero = new PIXI.Sprite(PIXI.Texture.fromImage("ArcherBlake.png"));

hero.health = 100;

hero.position.x = 100;
hero.position.y = 100;
stage.addChild(hero);

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
  renderer.render(stage);
}
animate();
