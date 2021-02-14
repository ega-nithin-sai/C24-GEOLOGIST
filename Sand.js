class Sand{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 5;

        var sandOption = {
            restitution: 0.1,
            density: 2.75,
            friction: 1.2
        }

        this.body = Bodies.circle(this.x,this.y,this.r,sandOption);
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