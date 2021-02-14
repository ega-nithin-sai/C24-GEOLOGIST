
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer;
var stone;
var ball;
var iron;
var sand1,sand2,sand3,sand4,sand5;

function setup() {
	createCanvas(800, 700);


	gameEngine = Engine.create();
	gameWorld = gameEngine.world;

	//Create the Bodies Here.

	hammer = new Hammer();
	ground = new Ground(400,650);
	stone = new Stone(200,200,75,75);
	ball = new Rubber(300,200,25);
	iron = new Iron(400,350,100,100);

	sand1 = new Sand(150,20);
	sand2 = new Sand(155,20);
	sand3 = new Sand(160,20);
	sand4 = new Sand(165,20);
	sand5 = new Sand(170,20);

	sand6 = new Sand(175,20);
	sand7 = new Sand(180,20);
	sand8 = new Sand(185,20);
	sand9 = new Sand(190,20);
	sand10 = new Sand(195,20);

	sand11 = new Sand(200,20);
	sand12 = new Sand(205,20);
	sand13 = new Sand(210,20);
	sand14 = new Sand(215,20);
	sand15 = new Sand(220,20);

	sand16 = new Sand(225,20);
	sand17 = new Sand(230,20);
	sand18 = new Sand(235,20);
	sand19 = new Sand(240,20);
	sand20 = new Sand(245,20);

	Engine.run(gameEngine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  drawSprites();
 
  ground.display();
  hammer.display();
  stone.display();
  ball.display();
  iron.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();

  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();

  sand11.display();
  sand12.display();
  sand13.display();
  sand14.display();
  sand15.display();

  sand16.display();
  sand17.display();
  sand18.display();
  sand19.display();
  sand20.display();
}



