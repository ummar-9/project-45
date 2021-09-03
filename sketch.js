var man, manImage1, manImage2, manImage3, manImage4;
var zombie, zombieImage1, zombieImage2, zombieImage3;
var ground,backgroundImg;
var invisibleGround;
var score = 0;
var PLAY = 1;
var gameState= PLAY;

function preload(){
manImage1 = loadAnimation("assets/man1.png","assets/man2.png","assets/man3.png","assets/man4.png");
backgroundImg = loadImage("assets/track.jpg")
}
function setup(){
  createCanvas(1200,700);


  invisibleGround = createSprite(600,650,1200,20);
  invisibleGround.visibility = false;


ground = createSprite(600,350,1400,700);
ground.addImage(backgroundImg);
ground.scale = 1.5;
ground.x = ground.width/2



man = createSprite(600,550,20,20);
man.addAnimation("man",manImage1);


}

function draw(){
background(0);
if(gameState===PLAY){
ground.velocityX = -5;
if(ground.x<0){
ground.x = ground.width/2;
}
if(keyDown("space")&&man.collide(invisibleGround)){
man.velocityY = -13;
}
man.velocityY = man.velocityY+ 0.5; 


}
man.collide(invisibleGround);
drawSprites()
}