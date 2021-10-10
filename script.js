class Vogel {

  constructor(x, y, width, height, img1, gravity, v, lift) {
    
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img1 = crappybird;
    this.gravity = gravity;
    this.v = v;
    this.lift = lift;
  }

  draw() {
    image(this.img1, this.x, this.y, this.width, this.height);
  }

  update() {
    this.v += this.gravity;
    this.y += this.v;


    if (this.y + this.height <= 0) {
      this.y = 0 + this.height;
      this.v = 0;

    }


    if (this.y + this.height >= height) {
      this.y = height - this.height;
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

var gameState = 0;
var sprite
var img
var crappybird

function preload(){ 
  //soundFormats('mp3', 'ogg');
  achtergrondmuziek = loadSound("Muziek/achtergrondmuziek.mp3");
  img = loadImage("img/flap.png");
  crappybird = loadImage("img/crappybird.png");
} 

function setup() {
  createCanvas(500, 400);


  achtergrondmuziek.setVolume(1);
  achtergrondmuziek.play(); 
  vogel = new Vogel(250, 100, 30, 30, crappybird, 0.3, 0, -10);

}

function draw() {

  text("gameState" + gameState, 25, 25);

  if (gameState == 0) {
    fill(0, 0, 0)
    menu();
  }

  if (gameState == 1) {
    text("GAME RUNNING", 250, 200);
    game();
  }

  if (gameState == 2) {
    background(img);
    text("GAME OVER, jammer joh!", 170, 150);
    text("Druk op 3 om naar het startmenu terug te keren!", 130, 200);
    fill(0, 0, 0);
    x = 0;
  }


  var score = 0;

    if (vogel.x > this.x && vogel.x < this.x + this.w) {
        score = score+1;
    } 

  fill(0);
  textSize(30);
  textFont('Georgia');
  text(score, 250, 380);



}

function eindscherm() {
  background(img);
  textFont('Georgia');
  textSize(15);

  text('Je hebt gewonnen!', 190, 150);
  text('Klik op 3 om terug te gaan naar het startmenu!', 100, 200)
}


var x = 0;

function menu() {
  background(img);
  textFont('Georgia');
  textSize(15);

  text("Welkom bij Crappy Bird!", 170, 45);
  text("Menu", 190, 70);
  text("1. Start Crappy Bird", 190, 90);
  text("2. Game over", 190, 110);
  text("3. Terug naar menu", 190, 130);

}

function game() {
  background(img);
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

function keyPressed(){

  if (keyCode == UP_ARROW) {
    vogel.omhoog();

  }

  console.log(keyCode);

  if (keyCode == 49) {
    gameState = 1;
  }

  if (keyCode == 50) {
    gameState = 2;
  }

  if (keyCode == 51) {
    gameState = 0;
  }

}

