class snow {

 constructor(x, y) {

   
    this.body = Matter.Bodies.circle(x, y, 100);
    
    World.add(world, this.body);

 }

 display() {

    push();
    rectMode(CENTER);
    circle(c1.position.x, c1.position.y, 100); 
    pop()

 }


}