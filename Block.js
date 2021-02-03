class Block{
    constructor(x, y){
        var options={
            isstatic: false,
            restitution: 0
        }
        this.body = Bodies.rectangle(x, y, 30, 50, options);
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 50;
        World.add(world, this.body);
    }
    display(r, g, b){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(r, g, b);
        rect(0, 0, this.width, this.height);
        pop();

    }
}