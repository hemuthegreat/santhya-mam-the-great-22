var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var ball;

var myEngine,myWorld;
var ground;

function setup() {
  createCanvas(800,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var options = {
    isStatic : true
  }
  ground = Bodies.rectangle(400,380,800,15,options);
  World.add(myWorld,ground);

  options = {
    restitution : 0.99
  }
   ball = Bodies.circle(400,200,10,options)
    World.add(myWorld,ball);
}

function draw() {
  background(255,255,255);  

  Engine.update(myEngine);

  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,800,15);
  ellipseMode(RADIUS);
  fill("pink")
  ellipse(ball.position.x,ball.position.y,10,10)

}