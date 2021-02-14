class Stone{
    constructor(x,y,w,h){
        var stoneOptions={
            restitution: 0.5,
            density: 2.8,
            friction: 1.2
        }
        this.body=Bodies.rectangle(x,y,w,h,stoneOptions);
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
        fill("black");
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}