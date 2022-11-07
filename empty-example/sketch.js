var circleSpeed = 10;
var circleStartPosX = 500;
var circleStartPosY = 500;
var circleRadius = 50;
var circleR, circleG, circleB;
var song;
var button;

function preload() {
  song = loadSound("assets/soundeffect.mp3");
  profile = loadImage("assets/dylan.png");
  logo = loadImage("assets/logo.png");
}

function setup() {
  createCanvas(1500, 1000);
  ellipseMode(RADIUS);
  //speedy();
  controlPanelLogic();
  button = createButton("Change Speed");
  button.position(1300, 500);
  button.mousePressed(speedy);
}

function draw() {
  var backgroundValue = backgroundSlider.value();
  background(backgroundValue);
  circleControl();
  //bounds detection
  boundBottom();
  boundTop();
  boundRight();
  boundLeft();
  drawcircle();
  controlPanelBody();
  image(profile, 1350, 0, 150, 150);
  image(logo, 0, 0, 150, 150);
}

function drawcircle() {
  fill(circleR, circleG, circleB);
  circleRadius = circleSizeSlider.value();
  ellipse(circleStartPosX, circleStartPosY, circleRadius, circleRadius);
}

function circleControl() {
  var distance = dist(mouseX, mouseY, circleStartPosX, circleStartPosY);
  if (keyIsDown(UP_ARROW)) {
    circleStartPosY -= circleSpeed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    circleStartPosY += circleSpeed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    circleStartPosX += circleSpeed;
  }
  if (keyIsDown(LEFT_ARROW)) {
    circleStartPosX -= circleSpeed;
  }
  //
  if (distance < circleRadius) {
    randomColor();
  } else {
    circleR = 10;
    circleG = 255;
    circleB = 233;
  }
  if (distance < circleRadius && !song.isPlaying()) {
    song.play();
  }
}

function boundBottom() {
  if (circleStartPosY >= height - circleRadius) {
    circleStartPosY = height - circleRadius;
  }
}

function boundTop() {
  if (circleStartPosY <= height - height + circleRadius) {
    circleStartPosY = circleRadius;
  }
}

function boundRight() {
  if (circleStartPosX >= width - circleRadius) {
    circleStartPosX = width - circleRadius;
  }
}

function boundLeft() {
  if (circleStartPosX <= width - width + circleRadius) {
    circleStartPosX = circleRadius;
  }
}

function speedy() {
  var userInput = prompt("Enter a value", circleSpeed);
  circleSpeed = int(userInput);
}

function randomColor() {
  circleR = random(255);
  circleG = random(255);
  circleB = random(255);
}

function controlPanelLogic() {
  //background slider
  backgroundSlider = createSlider(0, 255, 100);
  backgroundSlider.position(1225, 170);
  backgroundSlider.style("width", "250px");
  //circle size slider
  circleSizeSlider = createSlider(10, 100, 50);
  circleSizeSlider.position(1225, 230);
  circleSizeSlider.style("width", "250px");
}
function controlPanelBody() {
  fill(11, 19, 43);
  rect(1200, 150, 300, 400, 10);
  fill(28, 37, 65);
  rect(1205, 160, 290, 45, 40);
  rect(1205, 220, 290, 45, 40);
}
