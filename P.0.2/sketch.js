// function setup() {
//   createCanvas(720, 720);
//   background(0, 255, 0, 255);
//   colorMode(RGB, 255);
//   stroke(255, 0, 0, 255);
//   // noStroke();
//   strokeWeight(2);
//   fill(0, 0, 255);
//   // noFill();
// };

// function draw() {
//   ellipse(50, 50, 50, 50);
//   rect(75, 75, 100, 50);
//   // line(50, 50, 80, 80);
// }

// function setup() {
//   frameRate(1);
// };

// function preload() {
//   img = loadImage('data/sample.jpg');
// }

// function draw() {
//   console.log(frameCount);
// };

// function setup() {
//   createCanvas(0, 0, P2D);
//   createCanvas(0, 0, WEBGL);
// };

function setup() {
  createCanvas(720, 720);
};

function draw() {
  translate(100, 100);
  // 約45度回転
  rotate(0.75);
  scale(1.5);
  rect(50, 50, 50, 50);
};
