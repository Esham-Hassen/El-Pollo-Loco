class Coin extends DrawableObject {
    static i = 0;

    IMAGES_COIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];

    constructor() {
        super();
        this.loadImage(this.IMAGES_COIN[0]); // Initial image
        this.loadImages(this.IMAGES_COIN);   // Preload animation frames

        this.width = 80;
        this.height = 80;

        // this.x = 0; 
        // this.y = 100 + Math.random() * 200;

    
        this.x = 20 + Math.random() * 2000;
        this.y = 150 + Math.random() * 150;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.currentImage = (this.currentImage + 1) % this.IMAGES_COIN.length;
            this.img = this.imageCache[this.IMAGES_COIN[this.currentImage]];
        }, 200);
    }
}
