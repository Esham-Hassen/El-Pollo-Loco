class Chicken extends MovableObject {
  y = 360;
  height = 60;
  width = 80;

  IMAGES_WALKING = [
    'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
  ]


  IMAGE_DEAD = [
    'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
  ]




  constructor() {
    super();
    this.loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    this.loadImages(this.IMAGES_WALKING);

    this.x = 200 + Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.5;
    this.animate();
  }


  // animate() {
  //   setInterval(() => {
  //     this.moveLeft();
  //   }, 1000 / 60)

  
  //   setInterval(() => {
  //     this.playAnimation(this.IMAGES_WALKING)
  //   }, 200)
  // }


    animate() {
    this.walkingInterval = setInterval(() => this.moveLeft(), 1000 / 60);
    this.animationInterval = setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 200);
  }

   
  playDeathAnimation() {
    clearInterval(this.walkingInterval);
    clearInterval(this.animationInterval);
    this.loadImage(this.IMAGE_DEAD);
    this.speedX = 0;
    this.speedY = -5; // optional bounce on death
  }

}

