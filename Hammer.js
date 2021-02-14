class Hammer{
    constructor(){
        this.width = 50;
        this.height = 25;
        var hammerOptions = {
            restitution: 0.5,
            density: 10,
            friction: 1.3
        }
        this.body = Bodies.rectangle(mouseX,mouseY,this.width,this.height,hammerOptions);
        World.add(gameWorld,this.body);
    }
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;

        push();
        strokeWeight(3);
        stroke("black");
        fill(rgb(192,192,192));
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}