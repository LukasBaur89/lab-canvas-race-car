class road {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.roadX = 0;
    this.roadY = 0;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.speedX = 10;
    this.speedY = 10;

    this.init();
    this.draw();
    this.moveRoad();
  }

  // load image
  init() {
    this.roadImage = new Image();
    this.roadImage.src = "/images/road.png";
  }

  // check if image loads
  draw() {
    if (this.roadImage) {
      ctx.drawImage(
        this.roadImage,
        this.roadX,
        this.roadY,
        this.width,
        this.height
      );
      ctx.drawImage(
        this.roadImage,
        this.roadX,
        this.roadY - this.height,
        this.width,
        this.height
      );
    }
  }

  // set speedY to y-position
  moveRoad() {
    this.roadY += this.speedY;
    this.roadY %= this.height;
  }
}
