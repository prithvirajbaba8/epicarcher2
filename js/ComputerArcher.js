class ComputerArcher{
  constructor(x,y,width,height,angle){
      var options={
          isStatic:true
      };
      this.body=Bodies.rectangle(x,y,width,height,options,);
      this.x=x;
      this.y=y
      this.width=width;
      this.height=height;
      this.image=loadImage("./assets/computerArcher.png");
      World.add(world,this.body);

  }
  display() {
  var pos = this.position
     fill("#676e6a");
      push();
      translate(this.x , this.y);
      rotate(this.x);
     image(this.image,-30,-40, this.width, this.height);
      pop();
      noFill();
    }
  }