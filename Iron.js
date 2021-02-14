class Iron{
    constructor(x,y,w,h){
        var ironOptions={
            restitution: 0,
            density: 7.8,
            friction: 1.2
        }
        this.body=Bodies.rectangle(x,y,w,h,ironOptions);
        this.width=w;
        this.height=h;
        console.log(this.body);
        World.add(gameWorld,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        strokeWeight(5);
        stroke("black");
        fill(rgb(161,157,148));
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}