var bullet,wall;
var thickness,speed,weight;


function setup() {
  createCanvas(1600,400);

  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  thickness=Math.round(random(22,83)); 

  bullet=createSprite(200, 200, 50, 10);
  bullet.velocityX=speed;
  bullet.shapeColor="white";

  wall=createSprite(1300,200,thickness,200);
  wall.shapeColor="grey";
}

function draw() {
  background("black");

  wall.depth=bullet.depth-1;
  
  if(wall.x - bullet.x < wall.width/2 + bullet.width/2)
  {
   bullet.velocityX=0;
   var damage= ((0.5 * weight * speed * speed)/thickness*thickness*thickness);

   if(damage>10)
   {
    wall.shapeColor="red";
   }

   if(damage<10)
   {
     wall.shapeColor="green";
   }
  }

  drawSprites();
}

