var cat,cat1,cat2,cat3,cat4;
var mouse,mouse1,mouse2,mouse3,mouse4;
var ground,groundImage;

function preload() {
    groundImage=loadImage("images/garden.png")
    mouse1=loadImage("images/jerryThree.png");
    cat1=loadImage("images/tomOne.png");
    cat4=loadImage("images/tomFour.png");

    cat2=loadAnimation("images/tomThree.png","images/tomTwo.png")
}

function setup(){
    createCanvas(600,600);
    ground=createSprite(300,300,600,600);
    ground.addImage(groundImage);

    cat=createSprite(400,500,20,20);
    cat.addImage("stand",cat1)
    cat.addImage("stop",cat4)
    cat.addAnimation("run",cat2)
    cat.scale=0.1

    mouse=createSprite(30,500,20,20);
    mouse.addImage(mouse1);
    mouse.scale=0.1

}

function draw() {
background(groundImage);

if(cat.x<100){
    cat.velocityX=0;
    cat.changeImage("stop");
}
    
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
cat.changeAnimation("run")
cat.velocityX=-3
}
}




