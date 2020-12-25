var player,key,door,keyimg,doorimg;

function preload(){
    keyimg=loadImage("key.png")
    doorimg=loadImage("door.png")

}

function setup(){
createCanvas(windowWidth-30,windowHeight-30)
player=createSprite(209,58,15,15)
key=createSprite(1174,39,5,5)
key.addImage(keyimg)
key.scale=0.1
door=createSprite(13,623,20,40)
door.addImage(doorimg)
door.scale=0.2

line1=createSprite(40,20,)
line2=createSprite(150,20,150,200)
line3=createSprite(150,120,350,120)
line4=createSprite(150,300,400,300)
line5=createSprite(7,376,200,376)
line6=createSprite(400,14,400,300)
line7=createSprite(252,200,252,441)
line8=createSprite(7,480,490,480)
line9=createSprite(390,350,390,470)
line10=createSprite(450,50,450,465)
line11=createSprite(501,15,501,445)
line12=createSprite(490,480,490,650)
line13=createSprite(500,440,650,440)
line14=createSprite(490,650,800,650)
line15=createSprite(536,456,536,600)
line16=createSprite(575,500,575,649)
line17=createSprite(612,448,612,600)
line18=createSprite(650,440,800,440)
line19=createSprite(799,550,799,649)
line20=createSprite(727,496,850,496)
line21=createSprite(850,300,850,496)
line22=createSprite(850,496,1495,496)
line23=createSprite(550,295,850,295)
line24=createSprite(500,360,800,360)
}
function draw(){
background(100,12,74)
console.log(mouseX)
console.log(mouseY)
strokeWeight(15)

if (keyDown("UP_ARROW")){
player.y-=4

}
if (keyDown("DOWN_ARROW")){
    player.y+=4
    
}
if (keyDown("RIGHT_ARROW")){
    player.x+=4
        
}
if (keyDown("LEFT_ARROW")){
     player.x-=4
            
}

//if (player.collide(key)){
key.shapeColour="red";
//}


if(player.isTouching(door)){
    background(0)
}
if(player.isTouching(line1)){
background(0)
}
drawSprites();
}

