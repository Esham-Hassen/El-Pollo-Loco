// class StatusBarBottle extends DrawableObject {
//     IMAGES_STATUSBAR_BOTTLES = [
//         'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
//         'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
//         'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
//         'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
//         'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
//         'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',
//     ]

//     collectedBottles = 0;


//     constructor() {
//         super();
//         this.loadImages(this.IMAGES_STATUSBAR_BOTTLES);
//         this.x = 40;
//         this.y = 100;
//         this.width = 200;
//         this.height = 60;
//         this.setPercentage(0);
//     }


//     setPercentage(collectedBottles) {
//         this.collectedBottles = collectedBottles; // ==> 0 - 5
//         this.collectedBottles = Math.min(collectedBottles, 100);
//         let path = this.IMAGES_STATUSBAR_BOTTLES[this.resolveImageIndex()]
//         this.img = this.imageCache[path]
//     }

//     resolveImageIndex() {
//         if (this.percentage >= 100) return 5;
//         else if (this.percentage > 80) return 4;
//         else if (this.percentage > 60) return 3;
//         else if (this.percentage > 40) return 2;
//         else if (this.percentage > 20) return 1;
//         else return 0;
//     }
// }


class StatusBarBottle extends DrawableObject {
    IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 40;
        this.y = 100;
        this.width = 200;
        this.height = 60;
        this.bottlesCollected = 0; // from 0 to 5
        this.setPercentage(0);
    }

    setPercentage(bottlesCollected) {
        this.bottlesCollected = bottlesCollected;
        const percentage = Math.min(bottlesCollected * 20, 100); // convert count to percent
        const imageIndex = this.resolveImageIndex(percentage);
        const path = this.IMAGES[imageIndex];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(percentage) {
        if (percentage >= 100) return 5;
        if (percentage >= 80) return 4;
        if (percentage >= 60) return 3;
        if (percentage >= 40) return 2;
        if (percentage >= 20) return 1;
        return 0;
    }
}
