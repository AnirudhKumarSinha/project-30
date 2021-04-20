class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
           isStatic:false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //this.body.isStatic=true;
      if((this.body.speed)<3){
      push()
      translate(pos.x,pos.y);
      rotate(this.body.angle)
      rectMode(CENTER);
      fill("red");
      rect(0,0, this.width, this.height);
      pop();
      }
      else
      {
        World.remove(world,this.body)
      }
    }
  };
  