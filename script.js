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
    ellipse(this.x, this.y, this.width, this.height, this.c, this.gravity, this.v, this.lift);
    
  
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

  omhoog(){
    this.v += this.lift;
  }

}

var vogel;

function setup() {
  createCanvas(500, 400);
  vogel = new Vogel(250, 45, 20, 20, "yellow", 1, 0, -10);
}

function draw(){
  background(205, 240, 255);
  vogel.draw();
  vogel.update();
}

function keypressed(){
  if (keyCode == UP_ARROW){

    function draw(){
      vogel.omhoog();
    }
  }
}


