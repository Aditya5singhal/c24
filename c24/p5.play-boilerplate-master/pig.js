class Pig{
    constructor(x,y){
        var options = {
            restitution:1,
            density:0.7
          }
          this.body = Bodies.rectangle(x,y,50,50,options);
          this.width=50;
          this.height=50;
          World.add(world,this.body);
          
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
       push()
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER);
        fill("blue")
        rect(0,0,this.width,this.height)  ;
        pop();
     
    }
    }