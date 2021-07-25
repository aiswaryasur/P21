var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1 = createSprite(300,590,150,20);
block1.shapeColor = "blue"
 
block2 = createSprite(430,590,150,20);
block2.shapeColor = "orange"

block3 = createSprite(590,590,150,20);
block3.shapeColor = "red"

block4 = createSprite(730,590,150,20);
block4.shapeColor = "green"

    //create box sprite and give velocity
    ball = createSprite(random(20,750),100, 40,40); 
    ball.shapeColor = rgb(255,255,255);
     ball.velocityX = 4;
      ball.velocityY = 9;
}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    ball.bounceOff(edges);
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
     ball.shapeColor = "blue";
      music.play(); 
    }
    if(block2.isTouching(ball)){ 
    ball.shapeColor = "orange"; 
    ball.velocityX = 0; 
    ball.velocityY = 0;
     music.stop();
     }
     if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
         
       }
       if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
          
       } 
    drawSprites();
    //create edgeSprite
    


    //add condition to check if box touching surface and make it box
}
