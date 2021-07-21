var path,pathIMG;
var RunnerIMG;
var Runner;
var invisibleground;

function preload(){
  //pre-load images
  pathIMG = loadImage("path.png")
  RunnerIMG1 = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathIMG);
  path.velocityY = 2.5;
  path.scale=1.2;


  Runner = createSprite(120,200)
  Runner.addAnimation("movingRunner",RunnerIMG1)
  Runner.scale= 0.15;


}

function draw() {
  background("pink");
  path.velocityY = 2.5;
  if(path.y > 400){
   path.y = height/2

   gaming()
  }

  drawSprites();
}

function gaming(){

  Runner.x = World.mouseX 
}




