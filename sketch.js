function preload() {

s1 = loadImage("snow1.jpg");
s2 = loadImage("snow2.jpg");
s3 = loadImage("snow3.jpg");

}

function setup() {
  createCanvas(1000,500);
  back = createSprite(400, 200, 50, 50);
  back.addImage(s2,s3); 

  c1 = new snow(50, 50);
  

}

function draw() {
  background(225, 225, 225);  
  drawSprites();
}