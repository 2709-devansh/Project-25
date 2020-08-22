class paper{
    constructor(x,y,radius){
       var options={
           isStatic: false,
           restitution: 0.3,
           friction: 0.5,
           density: 4.0
       }       
       this.image = loadImage("paper.png");  
       this.body = Bodies.circle(x,y,radius,options);
       this.radius = radius;
       World.add(world, this.body);
    }
    display(){
       var pos = this.body.position;
       imageMode(RADIUS);
       image(this.image,pos.x,pos.y,this.radius,this.radius); 
    }
}