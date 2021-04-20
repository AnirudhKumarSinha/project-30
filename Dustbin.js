class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1,
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbingreen.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      this.body.isStatic=true;
      push()
      translate(pos.x,pos.y);
      rotate(this.body.angle)
      imageMode(CENTER);
      fill("red");
      image(this.image,0,0,this.width,this.height)
      pop();
      
    }
  };