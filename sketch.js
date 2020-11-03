
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
	world = engine.world;

	ground = new GROUND(700,320,70,70);
	paper = new PAPER(150,240,20,20);
	glass = new GLASS(700,240,70,70);
	
}

function draw(){
    background(0);
	Engine.update(engine);
	ground.display();
	paper.display();
	glass.display();
}