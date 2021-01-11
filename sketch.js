
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = []
var plinkos = []
var divisions = []

var divisionheight = 300

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground1 = new Ground(240,725,480,10)
	
   for(var k = 0;k<=width;k = k+80){
	   divisions.push(new Division(k,height-divisionheight/2,5,divisionheight));
   }

   for(var j=40;j<=width;j=j+50){
	   plinkos.push(new Plinko(j,75,10));
   }

   for(var j=15;j<=width-10;j=j+50){
	plinkos.push(new Plinko(j,175,10));
}

for(var j=40;j<=width;j=j+50){
	plinkos.push(new Plinko(j,275,10));
}

for(var j=15;j<=width-10;j=j+50){
	plinkos.push(new Plinko(j,375,10));
}


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  

  ground1.display();
  
  if(frameCount%60===0){
	  particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }

for( k = 0;k<divisions.length;k++){
	
	divisions[k].display();
}

for(  i =0;i<plinkos.length;i++){

plinkos[i].display();
}

for( j=0;j<particles.length;j++){
	particles[j].display();
}


  drawSprites();
 
}

