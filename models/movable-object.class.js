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


isOnGround() {
    return this.y >= 180;
}


// old function
    // isColliding(mo) {
    //     return this.x + this.width > mo.x &&
    //         this.y + this.height > mo.y &&
    //         this.x < mo.x &&
    //         this.y < mo.y + mo.height;
    // }

    // new but without offset
//     isColliding(mo) {
//     return this.x < mo.x + mo.width &&
//            this.x + this.width > mo.x &&
//            this.y < mo.y + mo.height &&
//            this.y + this.height > mo.y;
// }


isColliding(mo) {
  const thisOffset = this.offset || { top: 0, bottom: 0, left: 0, right: 0 };
  const moOffset = mo.offset || { top: 0, bottom: 0, left: 0, right: 0 };

  return this.x + thisOffset.left < mo.x + mo.width - moOffset.right &&
         this.x + this.width - thisOffset.right > mo.x + moOffset.left &&
         this.y + thisOffset.top < mo.y + mo.height - moOffset.bottom &&
         this.y + this.height - thisOffset.bottom > mo.y + moOffset.top;
}







    // hit() {
    //     this.energy -= 5;
    //     if (this.energy < 0) {
    //         this.energy = 0;
    //     } else {
    //         this.lastHit = new Date().getTime();
    //     }
    // }

    hit() {
  if (this.energy > 0) {
    this.energy -= 5;
    this.lastHit = new Date().getTime();
  }

  if (this.energy < 0) {
    this.energy = 0;
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


    Die() {
    this.energy = 0;
    this.speedX = 0;
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
    if (this.isOnGround()) {
        this.speedY = 30; 
    }
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
