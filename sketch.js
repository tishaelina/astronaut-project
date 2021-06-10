function preload(){
  bg = loadImage("iss.png");
  bathImage = loadAnimation("bath1.png","bath2.png");
  astImage = loadAnimation("sleep.png");
  brushingImg = loadAnimation("brush.png");
  movingImg = loadAnimation("move.png","move1.png");
  drinkingImg = loadAnimation("drink1.png","drink2.png");
  eatingImg = loadAnimation("eat1.png","eat2.png");
  gymmingImg = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");


}
function setup() {
  createCanvas(800,400);
  ast = createSprite(300, 230);
  ast.addAnimation("sleeping",astImage);
  ast.scale = 0.1;
  ast.depth+1;

  
}

function draw() {
  background(bg);  
   edges = createEdgeSprites();
   ast.bounceOff(edges);
   
   if(keyDown("UP_ARROW")){
     ast.addAnimation("brushing",brushingImg);
     ast.changeAnimation("brushing");
     ast.y = 350;
     ast.velocityY = 0;
     ast.velocityX = 0;
   }

   if(keyDown("DOWN_ARROW")){
     ast.addAnimation("gymming",gymmingImg);
     ast.changeAnimation("gymming");
     ast.y = 350;
     ast.velocityX = 0;
     ast.velocityY = 0;
   }

   if(keyDown("LEFT_ARROW")){
     ast.addAnimation("eating",eatingImg);
     ast.changeAnimation("eating");
     ast.y = 350;
     ast.velocityY = 0;
     ast.velocityX = 0;
   }

   if(keyDown("RIGHT_ARROW")){
     ast.addAnimation("bathing",bathImage);
     ast.changeAnimation("bathing");
     ast.y = 350;
     ast.velocityY = 0;
     ast.velocityX = 0;
   }

   if(keyDown("m")){
     ast.addAnimation("moving",movingImg);
     ast.changeAnimation("moving");
     ast.velocityX = 1;
     ast.velocityY = 1;
   }
 
   textSize(20);
  fill("white");
  text("INSTRUCTIONS:",20,35);

  textSize(15);
  fill("white");
  text("UPARROW = BRUSHING",20,60)
  textSize(15);
  fill("white");
  text("DOWNARROW = GYMMING",20,80);

  textSize(15);
  fill("white");
  text("LEFTARROW = EATING",20,100);

  textSize(15);
  fill("white");
  text("RIGHTARROW = BATHING",20,120);
  
  textSize(15);
  fill("white");
  text("M = MOVING",20,140);
  drawSprites();
}