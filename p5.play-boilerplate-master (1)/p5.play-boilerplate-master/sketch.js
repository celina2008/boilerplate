
const Bodies=Matter.Bodies
const World=Matter.World
const Engine=Matter.Engine

var world,engine
var box
var ground
function setup() {
  createCanvas(800,400);
 engine=Engine.create()
world=engine.world
var option={
  restitution:2
}
box=Bodies.rectangle(400,200,50,50,option)
World.add(world,box)
var option={
  isStatic:true

}
ground=Bodies.rectangle(400,300,800,10,option)
World.add(world,ground)



console.log()
}

function draw() {

  Engine.update(engine)

  background(255,255,255);  
  rectMode(CENTER)
rect(box.position.x,box.position.y,50,50)

rect(ground.position.x,ground.position.y,800,10)

  drawSprites();
}