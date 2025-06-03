class Coin extends DrawableObject {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.collected = false;
    this.loadImage('img/8_coin/coin_1.png'); 
  }

  collect() {
    this.collected = true;
  }
}
