class PlayerArcher{
    constructor(x,y,width,height,angle){
        var options={
            isStatic:true
        };
        this.body=Bodies.rectangle(x,y,width,height,options,angle);
        this.x=x;
        this.y=y
        this.width=width;
        this.height=height;
        this.image=loadImage("./assets/playerArcher.png");
        World.add(world,this.body);
        this.angle=angle;
    }
    display() {
        if (keyIsDown(DOWN_ARROW) && this.angle < 0.01) {
          this.angle += 0.01;
        }
    
        if (keyIsDown(UP_ARROW) && this.angle > -1.50) {
          this.angle -= 0.01;
        }
    Matter.Body.setAngle(this.body,PI/2)
        fill("#676e6a");
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        image(this.image,5, 10, this.width, this.height);
        pop();
        noFill();
      }
    }