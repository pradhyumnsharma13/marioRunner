var bg, bgImg;
var mario, wizards, bloops, princess, turtles;
var ground
var fireball, fireballgroup, coins, coinsgroup;
var score=0
function preload() {



}

function setup() {


  createCanvas(windowWidth, windowHeight);

  ground = createSprite(windowWidth / 2, windowHeight - 100, windowWidth, 20)



  mario = createSprite(30, windowHeight - 300, 50, 50);
  mario.scale = 0.3
  mario.debug = true
  mario.setCollider("rectangle", 0, 0, 300, 300)

  coinsgroup = new Group();
  

}

function draw() {
  background("lightblue");
  if (keyDown("right")) {
    mario.x = mario.x + 10

  }
  if (keyDown("left")) {
    mario.x = mario.x - 10

  }
  if (keyDown("shift")) {
    console.log("printdata")
    // setInterval(shootfireball(),5000)
    shootfireball()
  }

  console.log(mario.y)
  if (keyDown("up") && mario.y >=600)  {

    mario.velocityY = -15

  }
  mario.velocityY = mario.velocityY + 0.9
  mario.collide(ground)

  if(mario.x>windowWidth-150){

    mario.x = windowWidth-150

  }
  // if any sprite inside the coinsgroup - if it is touching player
  //1. destroy coin
  //2. score +1
  // for loop = coinsGroup = [] = 0 to coinsgroup.length
  // 
if(coinsgroup.isTouching(mario)){
  for(var i=0;i<coinsgroup.length;i++){
    if(coinsgroup[i].isTouching(mario))
    {
      coinsgroup[i].destroy();
      score=score+1
    }
  }
}

  coingen()
  drawSprites();

  textSize(30);
  text("score = "+score,1780,30)
  text("X : " + mouseX + " Y : " + mouseY, 50, 30)

}
function shootfireball() {
  setInterval(function () {
    if (frameCount % 20 === 0) {
      fireball = createSprite(mario.x, mario.y, 20, 20)
      fireball.velocityX = 10
    }
  }, 5000)


}
function coingen() {
  if (frameCount % 50 === 0) {
    coins = createSprite(windowWidth + 10, 100, 20, 20)
    coins.velocityX = -5
    // random ( start,end)
    coins.y = Math.round(random(420, windowHeight - 200))
    coins.shapeColor = rgb(243, 236, 52)

    coinsgroup.add(coins)
  }
}
