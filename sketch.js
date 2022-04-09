let img;
let souffles = [];
let n = 1;
let bg;
var deg;

let x;
let y;

let xspeed;
let yspeed;

function preload() {
  bg = loadImage('xpbg.png');
  souffle = loadImage('souffle.png');  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  background(bg)
  // image(bg, 0, 0, windowWidth, windowHeight);
}

function draw() {
  image(souffle, mouseX-150, mouseY-150, 300, 300)
}

function mousePressed() {
    
}
