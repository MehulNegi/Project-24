
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
}

function setup() {
	createCanvas(1366, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin (1115,240,20,230);
	ground = new Ground (683,height-30,1370,20);
	dustbin2 = new Dustbin (935,240,20,230);
	dustbin3 = new Dustbin (1025,352,200,15);
	paper = new Paper(200,350,50);



	Engine.run(engine);
  
}


function draw() {
  background(0, 255, 204);
  
  rectMode(CENTER);
  
  dustbin1.display();
  ground.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
 
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:390,y:-740});  
	}
}

