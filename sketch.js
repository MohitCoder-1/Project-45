//var ground;
var man, man_running;
var robber,robberImg;

function preload() {
  man_running = loadAnimation("walk.png","run.png");
  robberImg = loadImage("robber.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);
  //ground = createSprite(windowHeight-10,windowHeight-10,windowWidth+100,windowHeight/2);
  man = createSprite(40,30,50,50);
  man.addAnimation("running",man_running);
  robber = createSprite(40,40,30,50);
  robber.addImage("robber",robberImg);
  
}

function draw() {
  background("#B3F8FF");  

  /*ground.velocityY = 1;
  if(ground.y > windowHeight) {
    ground.y = ground.height/2;
  }*/

  drawSprites();
}