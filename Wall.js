class Wall {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1,
         isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      this.body.isStatic=true;
      push()
      translate(pos.x,pos.y);
      rotate(this.body.angle)
      rectMode(CENTER);
      fill("magenta");
      rect(0,0, this.width, this.height);
      pop();
      
    }
  };
  