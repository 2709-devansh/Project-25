var ball;
var ground1;
var side1,side2,side3;
var imgBall;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1350, 670);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper(200,500,60,60);
	ground1 = new ground(670,675,1350,50);
	side1 = new side(1150,640,200,20);
	side2 = new side(1050,540,20,220);
	side3 = new side(1250,540,20,220);	

	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background("turquoise");  
  drawSprites();
  ball.display(); 
  ground1.display();
  side1.display();
  side2.display();
  side3.display();  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:2550,y:-2550});
	 }
   }