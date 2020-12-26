var bullet, wall;
var speed, weight,thickness;


function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(20,85);
  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);
  wall = createSprite(1400,200,thickness,height/2);
  wall.shapeColor = color(50,50,50);
}

function draw() {
  background(0);
if (isTouching(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

  if (damage>10){
    wall.shapeColor="red"
  }
  if (damage<10){
    wall.shapeColor="green"
  }

}
  drawSprites();
}
function isTouching(object1,object2) {
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
return true;
}
else {
return false;
}
}