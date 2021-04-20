//<code>
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

  ball=new Ball(250,600,40)

	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    box1=new Wall(605,425,200,20);
	box2=new Wall(1000,330,100,20);
	
  //creating blocks:-
  block1=new Block(597.5,310,25,30)
  block2=new Block(585,340,25,30)
  block3=new Block(610,340,25,30)

  block12=new Block(975-2.5,300,25,30)
  block13=new Block(1000-2.5,300,25,30);
  block14=new Block(1025-2.5,300,25,30)

  //creating blocks(block2):-
  block4=new Block2(580-5-2.5,355+15,25,30);
  block5=new Block2(575+25-2.5,355+15,25,30);
  block6=new Block2(600+25-2.5,355+15,25,30);
  block7=new Block2(600-50-2.5,385+15,25,30);
  block8=new Block2(580-5-2.5,385+15,25,30);
  block9=new Block2(575+25-2.5,385+15,25,30);
  block10=new Block2(600+25-2.5,385+15,25,30);
  block11=new Block2(625+25-2.5,385+15,25,30);
  block15=new Block2(1000-2.5,300-15,25,30)

 slingshot1=new SlingShot(ball.body,{x:300,y:150})
  
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  Engine.update(engine);
  textSize(30)
  text("Drag the ball and hit the tower",500,30);
  text("press space to get another ball",500,110);

 



  box1.display();
  
  box2.display();
  
  
  ball.display();
 //displaying blocks
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display()
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();

  slingshot1.display();
 
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
  slingshot1.fly()
}
function keyPressed(){
  if(keyCode===32){
  slingshot1.attach(ball.body);}

}
