const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var plinkos = [];
var particles = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  boundry1 = createSprite(240, 798, 480, 5);
  boundry1.shapeColor = "brown"
  boundry2 = createSprite(240, 2, 480, 5);
  boundry2.shapeColor = "brown"
  boundry3 = createSprite(2, 400, 5, 800);
  boundry3.shapeColor = "brown"
  boundry4 = createSprite(478, 400, 5, 800);
  boundry4.shapeColor = "brown"
  ground = new Ground(240,791,480,10)
  division1 = new Divisions(5,650,10,300)
  division2 = new Divisions(85,650,10,300)
  division3 = new Divisions(165,650,10,300)
  division4 = new Divisions(245,650,10,300)
  division5 = new Divisions(325,650,10,300)
  division6 = new Divisions(405,650,10,300)
  division7 = new Divisions(475,650,10,300)
  for (var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for (var j = 15; j<=width; j=j+50){
    plinkos.push(new Plinko(j,175))
  }
  for (var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275))
  }
  for (var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  }
}

function draw() {

  background(0); 
  Engine.update(engine)
  ground.display();
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  division6.display()
  division7.display()

  for (var a = 0; a< plinkos.length;a++){
  plinkos[a].display();}

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  

  drawSprites();
}