class obstacle {
  constructor(canvas, ctx, car) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.obstacleX = Math.floor(Math.random() * 400 + 50);
    this.obstacleY = 0;
    this.obstacleWidth = Math.floor(Math.random() * 150 + 20);
    this.obstacleHeight = 50;
    this.obstaclesArray = [];
    this.frames = 0;
    this.speed = 10;
    this.car = car;

    this.drawObstacle();
    this.moveObstacle();
    this.drawAllObstacles();
    this.generateAllObstacles();
  }

  // draw rectangle obstacle
  drawObstacle() {
    ctx.fillStyle = "darkred";
    ctx.fillRect(
      this.obstacleX,
      this.obstacleY,
      this.obstacleWidth,
      this.obstacleHeight
    );
  }

  // add movement to obstacle
  moveObstacle() {
    this.obstacleY += this.speed;
  }

  // draw obstacle after every frame of 60
  drawAllObstacles() {
    this.frames++;
    if (this.frames % 60 === 0) {
      // push object into array, arr.push(obj)
      this.obstaclesArray.push(new obstacle(this.canvas, this.ctx));
      this.frames = 0;
    }
  }

  // draw obstacles on grid
  generateAllObstacles() {
    for (let i = 0; i < this.obstaclesArray.length; i++) {
      this.obstaclesArray[i].drawObstacle();
      this.obstaclesArray[i].moveObstacle();
    }
  }

}
