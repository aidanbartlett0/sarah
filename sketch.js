let mic;
let circles = [];

function setup() {
  createCanvas(400, 400);
  
  mic= new p5.AudioIn();
  mic.start();
  noStroke();
  
  for(let i = 0; i < 10; i++){
    let circle = {
      x: random(0, width), 
      y: random(0, height), 
      size: random(0, 30),
      speedX: random(-5, 5),
      speedY: random(-5, 5),
      R: random(0, 255),
      G: random(0, 255),
      B: random(0, 255),
      O: random(0, 255)

    }
    circles.push(circle);
    
  }
}

function draw() {
  background(255);

  let micLevel = mic.getLevel();
  let length = micLevel * height * 40;
  
  for(let circle of circles){
    
    circle.x += circle.speedX; 
    circle.y += circle.speedY;    
    
    if (circle.x < 0 || circle.x > width) {
      circle.speedX *= -1;
    }
    if (circle.y < 0 || circle.y > height) {
      circle.speedY *= -1;
    }
    fill(circle.R, circle.G, circle.B);
    ellipse(circle.x, circle.y, circle.size);
    
  }
  

}