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
      gameState = 2;

    }


    if (this.y + this.height >= height) {
      gameState = 2;

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
        gameState = 2;
      }
    }
  }
}

var vogel;
var buizen = [];
var buis;

var achtergrondmuziek;

var gameState = 0;
var sprite;
var img;
var crappybird;

function preload() {
  soundFormats('mp3', 'ogg');
  achtergrondmuziek = loadSound("Muziek/achtergrondmuziek.mp3");
  img = loadImage("img/flap.png");
  crappybird = loadImage("img/crappybird.png");
}

function muziek(){

  if (!achtergrondmuziek.isPlaying()) {
    achtergrondmuziek.play();
    achtergrondmuziek.setVolume(1);
    achtergrondmuziek.rate(1);
  }
}

function setup() {
  createCanvas(500, 400);
  vogel = new Vogel(250, 100, 30, 30, crappybird, 0.3, 0, -10);
}

function draw() {

  text("gameState" + gameState, 25, 25);

  if (gameState == 0) {
    fill(0, 0, 0)
    menu();
    
  }

  if (gameState == 1) {
    game();
    muziek();
  }

  if (gameState == 2) {
    background(img);
    fill(0, 0, 0);
    text("GAME OVER, jammer joh!", 170, 150);
    text('Klik op 1 om opnieuw te spelen!', 155, 200);
    text("Druk op 2 om naar het startmenu terug te keren!", 105, 250);
    textSize(15);
    textFont('Georgia');
    achtergrondmuziek.stop();
  }

  if (gameState == 3) {
    fill(0, 0, 0)
    eindscherm();
  }
}

var score = 0;

function scoretonen() {
  fill(0);
  textSize(30);
  textFont('Georgia');
  text(score, 250, 380);

  if (score == 5) {
    fill(0, 0, 0);
    gameState = 3;


  }
}


function eindscherm() {
  background(img);
  textFont('Georgia');
  textSize(15);

  text('Je hebt gewonnen!', 190, 150);
  text('Klik op 1 om opnieuw te spelen!', 155, 200);
  text('Klik op 2 om terug te gaan naar het startmenu!', 105, 250);

}


var x = 0;

function menu() {
  background(img);
  textFont('Georgia');
  textSize(15);

  text("Welkom bij Crappy Bird!", 175, 45);
  text("Menu", 230, 90);
  text("1. Start Crappy Bird", 190, 140);
  text("2. Terug naar menu", 190, 190);
}


function game() {
  background(img);
  vogel.draw();
  vogel.update();
  scoretonen();

  

  if (frameCount % 200 == 0) {
    buizen.push(new Buis());

    if (buizen.length > 8) {
      buizen.splice(0, 2);
    }
  }

  if (buizen.length > 1 && frameCount % 200 == 50) {
    score++;
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

  console.log(keyCode);

  if (keyCode == 49) {
    gameState = 1;
    vogel = new Vogel(250, 100, 30, 30, crappybird, 0.3, 0, -10);
    buizen = [];
    score = 0;
  }

  if (keyCode == 50) {
    gameState = 0;
   
  }

  if (keyCode == 52) {
    gameState = 3;
  }

}