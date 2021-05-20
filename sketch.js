const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var ground,ball;

function setup() {
  var canvas = createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;

   //creating ground
   var options_ground={
    isStatic: true
  }
    ground=Bodies.rectangle(300,380,600,20,options_ground);
    World.add(world,ground); 

//creating a ball object
  var options_ball={
    restitution:1.0
  }
  ball=Bodies.circle(300,80,25,options_ball)
  World.add(world,ball);
}

function draw() {  
  background(180);  
  Engine.update(engine);
  //ground display
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,30);
  stroke(48,22,8)
  fill ("orange");
  //ball display
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25); 
  fill ("green")
}