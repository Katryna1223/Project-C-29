const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var world, engine;
var ground, stand1, stand2, block1, block2, block3;
var block4, block5, block6, polygon, slingShot;

function preload(){
    polygonImg = loadImage('polygon.png');
}
function setup(){
    createCanvas(1300, 700);

    engine = Engine.create();
    world = engine.world;
    
    //create ground
    ground = new Ground(width/2, height-10, width, 20);

    //create the stages for the blocks
    stand1 = new Ground(730, 290, 240, 30);
   // stand2 = new Ground(750, 320, 240, 30);
    
    //create the blocks
    block1 = new Block(660,274);
    block2 = new Block(690, 245);
    block3 = new Block(720, 274);
    block4 = new Block(675, 140);
    block5 = new Block(705, 154);
    block6 = new Block(690, 50);

    //create polygon
    polygon = Bodies.rectangle(170,270,40,40);
    World.add(world, polygon);

    //create slingshot
    slingShot = new SlingShot(this.polygon, {x: 200, y: 200});

    //render 
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 1200,
            height: 700,
            wireframes: true
        }
    });
    Render.run(render);
    Engine.run(engine);
}
function draw(){
    background(255);
    textSize(20);
    text("Howdy! Drag the hexagon and aim to knock out that fine tower", 120,78);
    Engine.update(engine);
    //Render.update(render);
    imageMode(CENTER);
    rectMode(CENTER);
    //create polygon
    image(polygonImg, polygon.position.x, polygon.position.y, 70, 70);

    strokeWeight(2);
    ground.display();
    stand1.display();
  //  stand2.display();
    block1.display(20,30,30);
    block2.display(20,30,30);
    block3.display(20,30,30);
    block4.display(130,230,240);
    block5.display(130,230,240);
    block6.display(90, 170, 50);
    strokeWeight(5);
    slingShot.display();
   
}
function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY});
}
function mouseReleased(){
    slingShot.fly();
}