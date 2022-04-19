document.getElementById("start-button").addEventListener("click", startGame);

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
this.roadImage = null;
this.car = null;
this.obstacle = [];


this.startGame();
this.updateAll();

// new class instances
function startGame() {
  this.roadImage = new road(this.canvas, this.ctx);
  this.car = new car(this.canvas, this.ctx, this.obstacle);
  this.obstacle = new obstacle(this.canvas, this.ctx, this.car);
}

// animate function
function updateAll() {
  setInterval(() => {
    this.clearCanvas();
    this.roadImage.draw();
    this.roadImage.moveRoad();
    this.car.drawCar();
    this.obstacle.drawObstacle();
    this.obstacle.drawAllObstacles();
    this.obstacle.moveObstacle();
    this.obstacle.generateAllObstacles();
    this.car.carCollisionWithObstacle();
  }, 1000 / 20);
}

function clearCanvas() {
  ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
