
//     world;
//     walking_sound = new Audio('audio/walking.mp3');


//     constructor() {
//         super();
//         this.loadImage('img/2_character_pepe/2_walk/W-21.png');
//         this.loadImages(this.IMAGES_WALKING);
//         this.loadImages(this.IMAGES_JUMPING);
//         this.loadImages(this.IMAGES_DEAD);
//         this.loadImages(this.IMAGES_isHurt);
//         this.applyGravity();
//         this.animate();

//         this.isWalkingSoundPlaying = false;
//         this.walking_sound.currentTime = 0;

//     }


//     animate() {
//         this.movementIntervall();
//     }



//     movementIntervall() {
//         setInterval(() => {
//             // this.walking_sound.pause();

//             if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
//                 // this.moveRight();
//                 // this.otherDirection = false;
//                 // this.walking_sound.play();
//                 this.moveCharacterRight();
//             }

//             if (this.world.keyboard.LEFT && this.x > 0) {
//                 this.moveLeft();
//                 this.otherDirection = true;
//                 // this.walking_sound.play();
//             }

//             if (this.world.keyboard.UP && !this.isAboveGround()) {
//                 this.jump();
//             }

//             this.world.camera_x = -this.x + 100;
//         }, 1000 / 60)


//         setInterval(() => {
//             if (this.isDead()) {
//                 this.playAnimation(this.IMAGES_DEAD);

//             } else if (this.isHurt()) {
//                 this.playAnimation(this.IMAGES_isHurt);
//             }

//             else if (this.isAboveGround()) {
//                 this.playAnimation(this.IMAGES_JUMPING);
//             } else {

//                 if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
//                     this.playAnimation(this.IMAGES_WALKING)
//                 }
//             }
//         }, 50)
//     }



//     moveCharacterRight() {
//         this.moveRight();
//         this.otherDirection = false;
//         if (!this.isAboveGround()) {
//             this.walking_sound.play();
//              this.isWalkingSoundPlaying = true;
//         } else {
//             this.walking_sound.pause();
//              this.isWalkingSoundPlaying = false;
//                this.walking_sound.currentTime = 0;
//         }
//     }
// }


class Character extends MovableObject {
    height = 250;
    y = 80;
    speed = 10;

    offset = {
        top: 80,
        bottom: 10,
        left: 10,
        right: 10,
    };

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png',
    ];

    IMAGES_isHurt = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];

    world;
    walking_sound = new Audio('audio/walk.mp3');
    isWalkingSoundPlaying = false;

    movementIntervalId = null;
    animationIntervalId = null;

    constructor() {
        super();
        this.loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_isHurt);
        this.applyGravity();

        // Start intervals
        this.start();
    }

    start() {
        this.stop(); // clear existing intervals if any

        this.movementIntervalId = setInterval(() => {
            this.handleMovement();
        }, 1000 / 60);

        this.animationIntervalId = setInterval(() => {
            this.handleAnimation();
        }, 50);
    }

    stop() {
        if (this.movementIntervalId) {
            clearInterval(this.movementIntervalId);
            this.movementIntervalId = null;
        }
        if (this.animationIntervalId) {
            clearInterval(this.animationIntervalId);
            this.animationIntervalId = null;
        }
        this.stopWalkingSound();
    }

    handleMovement() {
        const keyboard = this.world.keyboard;
        if (keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
        } else if (keyboard.LEFT && this.x > 0) {
            this.moveLeft();
        } else {
            this.stopWalkingSound();
        }

        if (keyboard.UP && !this.isAboveGround()) {
            this.jump();
            this.stopWalkingSound();
        }

        this.world.camera_x = -this.x + 100;
    }

    handleAnimation() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_isHurt);
        } else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING);
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALKING);
        }
    }

    moveRight() {
        super.moveRight();
        this.otherDirection = false;
        this.handleWalkingSound();
    }

    moveLeft() {
        super.moveLeft();
        this.otherDirection = true;
        this.handleWalkingSound();
    }

    handleWalkingSound() {
        if (!this.isAboveGround() && (this.world.keyboard.RIGHT || this.world.keyboard.LEFT)) {
            this.startWalkingSound();
        } else {
            this.stopWalkingSound();
        }
    }

    startWalkingSound() {
        if (!this.isWalkingSoundPlaying) {
            this.walking_sound.currentTime = 0; // restart sound
            this.walking_sound.play();
            this.isWalkingSoundPlaying = true;
        }
    }

    stopWalkingSound() {
        if (this.isWalkingSoundPlaying) {
            this.walking_sound.pause();
            this.walking_sound.currentTime = 0; // reset audio
            this.isWalkingSoundPlaying = false;
        }
    }
}
