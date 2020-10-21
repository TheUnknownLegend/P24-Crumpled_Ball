
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
	ground = new Ground(width/2, height-20, width,15);

	dustbin1 = new dustbin(850,410, 15,120 ,PI/3,14);
	dustbin2 = new dustbin(950,410, 15,120 ,PI/3.14);
	dustbin3 = new dustbin(898,466, 15,100 ,PI/0.035);

	paper_ball = new Ball(100,400,30);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);

  drawSprites();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();

  paper_ball.display();

  text(mouseX + ","+mouseY,mouseX,mouseY);
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(paper_ball.body,paper_ball.body.position,{x:500,y:300});
	}
}

