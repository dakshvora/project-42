
  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var umbrella;
var drops=[]
var maxDrops = 100;

function preload(){
    i1= loadImage("images/thunderbolt/1.png")
    i2= loadImage("images/thunderbolt/2.png")
    i3= loadImage("images/thunderbolt/3.png")
    i4= loadImage("images/thunderbolt/4.png")
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(400,700)
    umbrella = new Umbrella(100,300, 150,300);

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,400)));
    }

}

function draw(){
    Engine.update(engine);
    background(0);  
    umbrella.display();

    for(i= 0; i< drops.length; i=i+1){
        drops[i].display();
        drops[i].updateDrop();
    }
var x = Math.round(random(1,4));
if(frameCount%80===0){
switch(x){
    case 1: image(i1, random(10,370), random(10,30), 450,300);break;
    case 2: image(i2, random(10,370), random(10,30), 250,300);break;
    case 3: image(i3, random(10,370), random(10,30), 450,180);break;
    case 4: image(i4, random(10,370), random(10,30), 400,60);break;
    default:break;
}

}
}   

