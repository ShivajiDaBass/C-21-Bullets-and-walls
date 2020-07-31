var wall, thickness, buller, speed, wieght,d;

function setup() {
createCanvas(1600,400);


thickness = random(22,83);
wall = createSprite(1200,200,thickness,height/2);
speed = random(223,321);
weight = random(30,52);  
bullet = createSprite(50,200,25,10);
bullet.velocityX = speed;

}

function draw() {
  background(80,80,80);  
  
bullet.collide(wall);
d = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

if ( bullet.x >800 && d >10) {
	bullet.shapeColor = ("Red");
}

if (bullet.x >800 && d <10) {
	bullet.shapeColor = color("Green");
}
  drawSprites();
}