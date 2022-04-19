class car {
  constructor(canvas, ctx, obstacle) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.carImage = null;
    this.carX = 200;
    this.carY = 350;
    this.carWidth = 100;
    this.carHeight = 200;
    this.carSpeed = 10;
    this.obstacle = obstacle;

    this.init();
    this.drawCar();
    this.moveCar();
    this.carCollisionWithObstacle();
  }

  // load image
  init() {
    this.carImage = new Image();
    this.carImage.src = "/images/car.png";
  }

  // check if image loads
  drawCar() {
    if (this.carImage !== null) {
      ctx.drawImage(
        this.carImage,
        this.carX,
        this.carY,
        this.carWidth,
        this.carHeight
      );
    }
  }

  moveCar(e) {
    // add left and right key
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.carX -= this.carSpeed;
          break;
        case "ArrowRight":
          this.carX += this.carSpeed;
          break;
        default:
          break;
      }
    });

    // check car leaving canvas
    if (this.carX < 50) {
      this.carX = 50;
      this.carX -= this.carSpeed;
    }
    if (this.carX >= this.width - 100) {
      this.carX = 350;
      this.carX -= this.carSpeed;
    }
  }

  // check for collision
  // edges
  /* carCollisionWithObstacle() {
    // define car edges
    this.carLeftEdge = this.carX;
    this.carRightEdge = this.carLeftEdge + this.width;
    this.carTopEdge = this.carY;
    this.carBottomEdge = this.carTopEdge + this.height;
    // loop through array
   
  } */
}
