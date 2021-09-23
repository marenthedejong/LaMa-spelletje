class Vogel{

  constructor(x, y, width, height, c){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.c = c;
  }

  draw(){
    fill(this.c);
    ellipse(this.x, this.y, this.width, this.height, this.c);
  
  }
  
}

var vogel1;

function setup() {
  createCanvas(500, 600);
  vogel1 = new Vogel(250, 45, 20, 20, "yellow");
}

function draw(){
  background(205, 240, 255);
  vogel1.draw();
 }


