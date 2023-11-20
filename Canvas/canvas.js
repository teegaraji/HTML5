const mycanvas = document.getElementById("mycanvas");

mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

const c = mycanvas.getContext("2d");

c.fillStyle = "blue";
c.strokeStyle = "#999999";
c.lineWidth = 5;

let x = 150;
let y = 150;
let speedx = 5;
let speedy = 5;
let radius = 100;
function draw() {
  window.requestAnimationFrame(draw);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.beginPath();
  c.arc(x, y, radius, 0, 2 * Math.PI);
  c.fill();
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    speedx = -speedx;
  }

  if (y + radius > innerHeight || y - radius < 0) {
    speedy = -speedy;
  }

  x += speedx;
  y += speedy;
}

draw();
