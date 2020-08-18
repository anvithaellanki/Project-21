var bullet, wall;
var speed, weight;
var thickness=random (22,83);
function setup() {
  createCanvas(1600,400);
 //wall.shapeColor color ("80,80,80");
 bullet.velocityX= speed;
}

function draw() {
  background(255,255,255);
  createCanvas(1600,400);
  if (wall.x-bullet.x < (bullet.width +wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if (deformation>180)
    {
      bullet.shapeColor=color("red");
    }
    if (deformation<180 && deformation>100);
  {
    bullet.shapeColor>color("yellow");
  }
  if (deformation<100)
  {
    bullet.shapeColor=color("green");
  }

  }

  if(collide(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness*thickness);

    if (damage> 10)
    {
      wall.shapeColor=color (255,0,0);
    }

    if (damage<10)
    {
      wall.shapeColor(0,255,0);
    }

  }

  collide();
  drawSprites();
}

function collide (leftbullet,leftwall)
{
  bulletRightEdge+leftbullet.x + leftbullet.width;
  wallLeftEdge=leftwall.x;
  if (bulletRightEdge>= wallLeftEdge)
  {
    return true
  }
  return false;
}