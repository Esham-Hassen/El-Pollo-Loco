class BackgroundObject extends MovableObject {
  width = 720;
  height = 480;

  constructor(Imagepath, x, factor = 1) {
    super();
    this.loadImage(Imagepath);
    this.x = x;
    this.factor = factor;
    this.y = 480 - this.height;
  }
}