class Rubber{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;

        var rubberOption = {
            dencity: 1.03,
            restitution: 2,
            friction: 0.5
        }
        this.body = Bodies.circle(this.x,this.y,this.r,rubberOption);
        World.add(gameWorld,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}