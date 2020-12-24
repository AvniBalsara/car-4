var zenia,tourus,cyclap,baleno, wall1;
var partition1,partition2,partition3;
var speed , weight;

function setup(){
   createCanvas(1600,400);

   speed=random(55,90);
   weight=random(400,1500);

   zenia=createSprite(400,50,50,50);
   zenia.shapeColor=color(255);
   zenia.velocityX=speed;

   tourus=createSprite(400,150,50,50);
   tourus.shapeColor=color(255);
   tourus.velocityX=speed;

   cyclap=createSprite(400,250,50,50);
   cyclap.shapeColor=color(255);
   cyclap.velocityX=speed;

   baleno=createSprite(400,350,50,50);
   baleno.shapeColor=color(255);
   baleno.velocityX=speed;


   wall1=createSprite(1500,200,60,400);
   wall1.shapeColor=color(80,80,80);

   partition1=createSprite(800,100,1600,10);
   partition1.shapeColor=color("white");

   partition2=createSprite(800,200,1600,10);
   partition2.shapeColor=color("white");

   partition3=createSprite(800,300,1600,10);
   partition3.shapeColor=color("white");

}

function draw(){
background(0);

if(wall1.x-zenia.x<(zenia.width+wall1.width)/2)
{
  zenia.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180)
  {
    zenia.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>100)
   {
    zenia.shapeColor=color(230,230,0);
   }

  if(deformation<100)
  {
    zenia.shapeColor=color(0,255,0);
  }
}




if(wall1.x-zenia.x<(zenia.width+wall1.width)/2)
{
  zenia.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180)
  {
    zenia.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>100)
   {
    zenia.shapeColor=color(230,230,0);
   }

  if(deformation<100)
  {
    zenia.shapeColor=color(0,255,0);
  }
}



if(wall1.x-tourus.x<(tourus.width+wall1.width)/2)
{
  tourus.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180)
  {
    tourus.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>100)
   {
    tourus.shapeColor=color(230,230,0);
   }

  if(deformation<100)
  {
    tourus.shapeColor=color(0,255,0);
  }
}


if(wall1.x-cyclap.x<(cyclap.width+wall1.width)/2)
{
  cyclap.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180)
  {
    cyclap.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>100)
   {
    cyclap.shapeColor=color(230,230,0);
   }

  if(deformation<100)
  {
    cyclap.shapeColor=color(0,255,0);
  }
}


if(wall1.x-baleno.x<(baleno.width+wall1.width)/2)
{
  baleno.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180)
  {
    baleno.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>100)
   {
    baleno.shapeColor=color(230,230,0);
   }

  if(deformation<100)
  {
    baleno.shapeColor=color(0,255,0);
  }
}
  drawSprites();
}
