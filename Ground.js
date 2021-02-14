class Ground{
    constructor(x,y){
        this.width = 800;
        this.height = 100;
        var groundOptions = {
            isStatic: true,
            density: 10,
            friction: 2.5
        }
        this.ground = Bodies.rectangle(x,y,this.width,this.height,groundOptions);
        World.add(gameWorld,this.ground);
    }
    display(){
        rectMode(CENTER);

        push()
        stroke("black");
        strokeWeight(5);
        fill(rgb(139,69,19));
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
        pop();
    }
}