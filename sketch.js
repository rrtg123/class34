const Engine=Matter.Engine
const World=Matter.World
const Constraint=Matter.Constraint
const Bodies=Matter.Bodies

var engine,world
var building1,building2,building3,ground1,chain1,ball1

function setup(){
    createCanvas(900,600)
engine=Engine.create()
world=engine.world;

building1=new building(500,100,50,50)
building2=new building(500+50,100,50,50)
building3=new building(500,100-50,50,50)
building4=new building(500+50,100-50,50,50)
building5=new building(500,100-100,50,50)
building6=new building(500+50,100-10,50,50)
ground1=new Ground(450,590,width,10)
ball1=new Ball(200,100,50,50)
//chain1=new Chain()
Engine.run(engine)

}
function draw(){
    background(0,0,0)
    Engine.update(engine)
building1.display();
building2.display();
building3.display();
building4.display();
building5.display();
building6.display();
ground1.display();
ball1.display();
}