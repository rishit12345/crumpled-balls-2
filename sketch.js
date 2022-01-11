
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var ground
var dustbin
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 paper= new Paper(100,50,20)
 ground= new Ground(400,670,800,10)
 dustbin= new Dustbin()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display()
  ground.display()
  dustbin.display()
  drawSprites();
 
}
function keyPressed() {
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-65});
	}
}



