
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var Pendulum;
var rope1;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(width/2,height/4,width/7,20);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	Pendulum1=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);

	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	rope1=new rope(Pendulum1.body,roofObject.body,-bobDiameter*2, 0)



	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display()	
  Pendulum1.display();
 

}

function keyPressed() {
  	if (keyCode === LEFT_ARROW) {

    	Matter.Body.applyForce(Pendulum1.body,Pendulum1.body.position,{x:-50,y:-45});

  	}
}



function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}






