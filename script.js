class Vogel{

  constructor(x, y, width, height, c, gravity, v){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.c = c;
    this.gravity = gravity;
    this.v = v;
  }

  draw(){
    fill(this.c);
    ellipse(this.x, this.y, this.width, this.height, this.c, this.gravity, this.v);
    
  
  }

  update() {
    this.v += this.gravity;
    this.y += this.v;


    if (this.y >= height){
      this.y = height;

      this.v = 0;

    }

    if (this.y >= 0){
      this.y = height;

      this.v = 0;
      
    }
  }
}

var vogel;

function setup() {
  createCanvas(500, 600);
  vogel = new Vogel(250, 45, 20, 20, "yellow", 0.1, 0);
}

function draw(){
  background(205, 240, 255);
  vogel.draw();
  vogel.update();
}



