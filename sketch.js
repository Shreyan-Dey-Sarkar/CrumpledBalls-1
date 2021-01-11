const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body; 
//const Render = Matter.Render; 
var PaperBall; 
var ground; 
var box1,box2,box3; 
function preload() { } 

function setup() { 
  createCanvas(1700, 700);
  engine = Engine.create(); 
  world = engine.world; 
  PaperBall = new Paper(200,200,25); 
  ground = new Ground(0,690,1600,20); 
  box1 = new Box(860,570,20,100); 
  box2 = new Box(600,570,20,100); 
  box3 = new Box(600,670,280,20); 
  Engine.run(engine); 
} 
  function draw() { 
    background(0); 
    // Engine.update(engine); 
    PaperBall.display(); 
    ground.display(); box1.display(); 
    box2.display(); box3.display(); 
    // drawSprites(); 
    // keyPressed(); 
  } 
  function keyPressed() { 
    if (keyCode === UP_ARROW) Body.applyForce(PaperBall.body,PaperBall.body.position,{x:78,y:-88}) 
  }
