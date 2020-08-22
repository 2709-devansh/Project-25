class side{
    constructor(x,y,width,height){
       var options={
           isStatic: true
       }
       this.image = loadImage("dustbin.png"); 
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        rectMode(CENTER);
        stroke("turquoise");
        fill("limegreen");
        rect(pos.x,pos.y,this.width,this.height);
        image(this.image,1150,530,200,200);
    }
}