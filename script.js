class Vogel{

  constructor(x, y, width, height, c, gravity, v, lift){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.c = c;
    this.gravity = gravity;
    this.v = v;
    this.lift = lift;
  }

  draw(){
    fill(this.c);
    ellipse(this.x, this.y, this.width, this.height, this.c);
    

  }

  update() {
    this.v += this.gravity;
    this.y += this.v;


    if (this.y <= 0){
      this.y = 0;
      this.v = 0;

    }

    if (this.y >= height){
      this.y = height;

      this.v = 0;
      
    }
  }

  omhoog(){
    this.y -= 50;
  }

}

var vogel;

function setup() {
  createCanvas(500, 400);
  vogel = new Vogel(250, 100, 20, 20, "yellow", 0.01, 0, 1);
}

function draw(){
  background(205, 240, 255);
  vogel.draw();
  vogel.update();
}

function keyPressed(){
  if (keyCode == UP_ARROW){

    
    vogel.omhoog();
    
  }
}


