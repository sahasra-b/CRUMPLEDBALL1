class Paper{
    constructor(x,y) {
        var options = {
            'restitution':0,
            'friction':2.0,
            'density':1.0
            
        }
        this.body = Bodies.rectangle (x, y,radius, options);
        this.width = width;
        this.height = height;
       // this.image = loadImage("Paper.img");
        World.add(world, this.body);
        scale=0.5;
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
       imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

      }}
