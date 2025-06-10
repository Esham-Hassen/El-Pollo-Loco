class World {
    character = new Character();
    // level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    // StatusBarCoins = new StatusBarCoins();
    StatusBarCoins = new StatusBarCoins();

    StatusBarBottle = new StatusBarBottle();
    coinsCollected = 0;
    throwableObjects = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level = level1;
        // this.addCoins();
        this.draw();
        this.setWorld();
        this.run();
        this.draw();
    }


    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            this.checkCollisions()
            this.checkThrowObjects();
        }, 200)
    }


    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }


    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if ((this.character.isColliding(enemy))) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
               
            }
        })
        this.checkCoinCollisions();
    }



   checkCoinCollisions()  {
    for (let i = this.level.coins.length - 1; i >= 0; i--) {
        const coin = this.level.coins[i];

        if (this.character.isColliding(coin)) {
            this.level.coins.splice(i, 1); // Remove the coin
            this.coinsCollected += 1;

            // Update the coin status bar (each coin = 20%)
            const newPercentage = this.coinsCollected * 20;
            this.StatusBarCoins.setPercentage(newPercentage);
        }
    }
}



    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);


        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.coins);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0); // Backward
        // Space for fixed objects.
        this.addToMap(this.statusBar);
        this.addToMap(this.StatusBarCoins);
        this.addToMap(this.StatusBarBottle);


        this.ctx.translate(this.camera_x, 0); // Forward

        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.clouds);

        this.addObjectToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);



        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    }

    addObjectToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object)
        });
    }


    addToMap(mo) {
        if (!mo) return;
        if (mo.otherDirection) {
            this.flipImage(mo)
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);



        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    // flipImage(mo) {
    //     this.ctx.save();
    //     this.ctx.translate(mo.width, 0);
    //     this.ctx.scale(-1, 1);
    //     mo.x = mo.x * -1
    // }


    // flipImageBack(mo) {
    //     mo.x = mo.x * -1;
    //     this.ctx.restore();
    // }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.x + mo.width, mo.y);
        this.ctx.scale(-1, 1);
        this.ctx.translate(-mo.x, -mo.y);
    }

    flipImageBack() {
        this.ctx.restore();
    }


}












// addToMap(mo) {
//     this.ctx.save();

//     if (mo.otherDirection) {
//         this.flipImage(mo);
//         this.ctx.drawImage(mo.img, 0, mo.y, mo.width, mo.height);

//     } else {
//         this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
//     }

//     this.ctx.restore();

// }

// flipImage(mo) {
//     this.ctx.translate(mo.x + mo.width, 0);
//     this.ctx.scale(-1, 1);
// }
