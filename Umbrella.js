class Umbrella{

    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image= loadImage("images/Walking Frame/walking_1.png")
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        imageMode(RADIUS);
        //fill("green");
        image(this.image,pos.x, pos.y, this.width, this.height);
      }
    


}