class PlayerArrow {
  constructor(x, y , width , height) {
    var options = {
      isStatic: true,
      restition:0.10,
      density:1.50,
      friction:1.0
    };
    this.body=Bodies.rectangle(x,y,width,height,options,);
        this.x=x;
        this.y=y
        this.width=width;
        this.height=height;
        this.image=loadImage("./assets/arrow.png");
        World.add(world,this.body);;
  }
  shoot() {
    var velocity = p5.Vector.fromAngle(playerarcher.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  
}
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, this.y);
    //rotate(angle);
    imageMode(CENTER);
    image(this.image,20,0, this.width, this.height);
    pop();
  }
}