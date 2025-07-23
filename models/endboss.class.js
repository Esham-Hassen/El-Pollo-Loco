class Endboss extends MovableObject {
    height = 400;
    width = 250;
    y = 60;
    health = 100;
    isDead = false;
      isSplicable = false;

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ]



    // IMAGES_ALERT = [
    //     'img/4_enemie_boss_chicken/2_alert/G5.png',
    //     'img/4_enemie_boss_chicken/2_alert/G6.png',
    //     'img/4_enemie_boss_chicken/2_alert/G7.png',
    //     'img/4_enemie_boss_chicken/2_alert/G8.png',
    //     'img/4_enemie_boss_chicken/2_alert/G9.png',
    //     'img/4_enemie_boss_chicken/2_alert/G10.png',
    //     'img/4_enemie_boss_chicken/2_alert/G11.png',
    //     'img/4_enemie_boss_chicken/2_alert/G12.png',
    // ];


    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ]




    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2500;
        this.animate();
    }

    // original
    // animate() {
    //     setInterval(() => {
    //         this.playAnimation(this.IMAGES_WALKING)
    //     }, 200)
    // }

  

    animate() {
    this.walkInterval = setInterval(() => {
        if (!this.isDead) {
            this.playAnimation(this.IMAGES_WALKING);
        }
    }, 200);
}


    takeDamage(amount = 20) {
        console.log('Endboss takes damage:', amount, 'Health before:', this.health);
        this.health -= amount;
        console.log('Health after:', this.health);

        if (this.health <= 0) {
            this.die();
        }
    }


    // die() {
    //     clearInterval(this.walkInterval); // Stop walking animation
    //     this.playAnimation(this.IMAGES_DEAD); // Play dead animation
    // }

    
    die() {
        this.isDead = true;
        clearInterval(this.walkInterval);

        let i = 0;
        this.deathInterval = setInterval(() => {
            if (i < this.IMAGES_DEAD.length) {
                this.img = this.imageCache[this.IMAGES_DEAD[i]];
                i++;
            } else {
                clearInterval(this.deathInterval);
                this.isSplicable = true;
            }
        }, 200);
    }

}
