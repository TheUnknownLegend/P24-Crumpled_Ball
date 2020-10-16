
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper_ball;
var ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	ground=createSprite(width/2, height-20, width,15);
	ground.shapeColor=color("orange")

	dustbin1 = new dustbin(800,375, 20,150 ,PI/2);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);

  drawSprites();

  dustbin1.display();

  text(mouseX + ","+mouseY,mouseX,mouseY);
}



