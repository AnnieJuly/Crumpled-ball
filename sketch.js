
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100,640,20);
	bin = new Bin(500,625,25,100);
	ground = new Ground(400,350,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  bin.display();
  paper.display();

  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) { 
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145})
 } }
