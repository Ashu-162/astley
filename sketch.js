var sword, SwordImg;

var PLAY = 1;
var END = 0;
var gameState = 1;

var score;
var fruitGroup, enemyGroup;

var fruit, fruit1, fruit2, fruit3, fruit4;

var monster, alien1, alien2;

var gameOverImg;

function preload() {
  swordImg = loadImage("sword.png");


  fruit1 = loadImage("fruit1.png")
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");

  monsterImg = loadAnimation("alien1.png", "alien2.png");

  gameOverImg = loadImage("gameover.png");

}


function setup() {
  sword = createSprite(200, 200, 20, 20)
  sword.addImage(swordImg, "sword.png")
  sword.scale = 0.5;

  score = 0;

  fruitGroup = new Group();
  enemyGroup = new Group();
}

function draw() {
  background("white");
  drawSprites();
  text("Score: " + score, 200, 50);

  fruits();
  enemy();

  if (gameState === PLAY) {
    sword.y = World.mouseY;
    sword.x = World.mouseX;

  }

  if (fruitGroup.isTouching(sword)) {
    fruitGroup.destroyEach();
    score = score + 2;
  }

  if (enemyGroup.isTouching(sword)) {
    gameState = END;
    sword.x = 200;
    sword.y = 200;
    sword.addImage(gameOverImg);
    sword.scale = 1;
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.setVelocityXEach = (0);
    enemyGroup.setVelocityXEach = (0);
    score=0
  }


















}

function fruits() {
  if (World.frameCount % 80 === 0) {
    fruit = createSprite(400, 200, 20, 20)
    fruit.scale = 0.2
    r = Math.round(random(1, 4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 3) {
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }

    fruit.y = Math.round(random(50, 340));

    fruit.velocityX = -7;
    fruit.setLifetime = 100;
    fruitGroup.add(fruit);



  }




}


function enemy() {
  if (World.frameCount % 200 === 0) {
    monster = createSprite(400, 200, 20, 20);
    monster.addAnimation("moving", monsterImg);
    monster.y = Math.round(random(100, 300));
    monster.velocityX = -8;
    monster.setLifetime = 50;

    enemyGroup.add(monster);



  }







}