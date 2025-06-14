class Bottle extends DrawableObject {
    height = 80;
    width = 80;

    IMAGES_BOTTLES = [
        "img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
        "img/6_salsa_bottle/2_salsa_bottle_on_ground.png",
    ];

    offset = {
        top: 20,
        bottom: 25,
        left: 40,
        right: 25,
    };


    constructor(x, y) {
        super();
        this.loadImage(this.IMAGES_BOTTLES[0]);
        this.loadImages(this.IMAGES_BOTTLES);
        this.x = x;
        this.y = y;
    }
}