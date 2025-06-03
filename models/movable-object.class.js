class MovableObject extends DrawableObject { 
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;




    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }

        }, 1000 / 25)
    }


    isAboveGround() {
        if( this instanceof ThrowableObject) { // throwableObject should always fall
            return true
        } else {
       return this.y < 180
}
}


    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }


    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    isHurt() {
         let timePassed = new Date().getTime() - this.lastHit; // Diffrence in ms
         timePassed = timePassed / 1000; // difference in seconds.
         return timePassed < 1;
       
    }


    isDead() {
        return this.energy == 0;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }



    moveRight() {
        this.x += this.speed
    }


    moveLeft() {
        this.x -= this.speed
    }


    jump() {
        this.speedY = 30;
    }
}



















//   factor = 1;
// class BackgroundObject extends MovableObject {
//     width = 720;
//     height = 480;
   
//     constructor(Imagepath, x, factor = 1) {
//         super().loadImage(Imagepath)
//         this.x = x;
//           this.factor = factor;
//         this.y = 480 - this.height;
//     }
// }

// moveRight() {
//     this.x += this.speed  * this.factor;
// }

// moveLeft() {
//     this.x -= this.speed  * this.factor;
// }
