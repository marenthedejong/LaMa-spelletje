class Vogel {

  constructor(x, y, width, height, c, gravity, v, lift) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.c = c;
    this.gravity = gravity;
    this.v = v;
    this.lift = lift;
  }

  draw() {
    fill(this.c);
    ellipse(this.x, this.y, this.width, this.height, this.c);
  }

  update() {
    this.v += this.gravity;
    this.y += this.v;


    if (this.y <= 0) {
      this.y = 0;
      this.v = 0;

    }

    if (this.y >= height) {
      this.y = height;
      this.v = 0;

    }
  }

  omhoog() {
    this.v += this.lift;
  }

}

class Buis {

  constructor() {
    this.top = random(height / 2);
    this.bottom = random(height / 2);
    this.x = width;
    this.w = 40;
    this.speed = 1;
    this.c = "green";
  }

  draw() {
    fill(this.c);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  }

  update() {
    this.x -= this.speed;
  }

  isColliding() {
    if (vogel.x > this.x && vogel.x < this.x + this.w) {
      if (vogel.y < this.top || vogel.y > height - this.bottom) {
        this.c = "red";
      }
    }

    else {
      this.c = "green";
    }
  }
}



var vogel;
var buizen = [];
var buis;

var achtergrondmuziek;

function preload(){ 
  //soundFormats('mp3', 'ogg');
  achtergrondmuziek = loadSound("Muziek/achtergrondmuziek.mp3"); 
} 


function setup() {
  createCanvas(500, 400);
  achtergrondmuziek.setVolume(1);
  achtergrondmuziek.play(); 
  vogel = new Vogel(250, 100, 20, 20, "yellow", 0.3, 0, -10);


}

function draw() {
  background(205, 240, 255);
  vogel.draw();
  vogel.update();

  if (frameCount % 200 == 0) {
    buizen.push(new Buis());

    if (buizen.length > 8) {
      buizen.splice(0, 2);
    }
  }

  buizen.forEach((b) => {
    b.update();
    b.draw();
    b.isColliding();
  });
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    vogel.omhoog();

  }
}


