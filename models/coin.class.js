class Coin extends DrawableObject {
    static i = 0;

    IMAGES_COIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];

    constructor() {
        // super();
        // this.loadImage(this.IMAGES_COIN[0]);
        // this.loadImages(this.IMAGES_COIN);
        // this.height = 70;
        // this.width = 65;
        // this.x = 300 + Math.random() * 5000; 
        // this.y = 50 + Math.random() * 300;

        // this.animate();
        // this.id = Coin.i++;

         super();
        this.loadImage(this.IMAGES_COIN[0]); // Initial image
        this.loadImages(this.IMAGES_COIN);   // Preload animation frames

        this.width = 65;
        this.height = 70;

        this.x = 0; // will be set in World
        this.y = 100 + Math.random() * 200;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.currentImage = (this.currentImage + 1) % this.IMAGES_COIN.length;
            this.img = this.imageCache[this.IMAGES_COIN[this.currentImage]];
        }, 200);
    }
}
