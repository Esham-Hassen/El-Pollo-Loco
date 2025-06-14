class Coin extends MovableObject {
    height = 100;
    width = 100;

    IMAGES_COIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];

    offset = {
        top: 40,
        bottom: 40,
        left: 40,
        right: 40,
    };

    constructor(x, y) {
        super();
        this.loadImage(this.IMAGES_COIN[0]);
        this.loadImages(this.IMAGES_COIN);
        this.x = x;
        this.y = y;
        // this.x = Math.floor(Math.random() * 1500) + 100;
        // this.y = Math.floor(Math.random() * 200) + 100;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 400);
    }
}
