
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boxImg;

function preload(){
	boxImg = loadImage("dustbin.png")
}

function setup() {
	createCanvas(800, 190);


	engine = Engine.create();
	world = engine.world;

	box = new Box(600, 150 ,10, 40);
	box1 = new Dustbin(630, 170 ,60, 10);
	box3 = new Box(660, 150 ,10, 40);
	paper = new Paper(100, 50, 10);
	ground = new Ground(400, 180, 1000, 10)

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(225);


	
	box.display();
	box1.display();
	box3.display();
	ground.display();
  
	paper.display();
	box1.display();
  
	drawSprites();
   
  }


  function keyPressed(){
	  if (keyCode === UP_ARROW){
		  Matter.Body.applyForce(paper.body, paper.body.position, { x : 20, y : -10} )
	  }
  }



