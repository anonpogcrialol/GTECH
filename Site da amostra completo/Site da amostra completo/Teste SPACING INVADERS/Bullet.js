export default class Bullet {
   //Definindo as variáveis das balas
    constructor(canvas, x, y, velocity, bulletColor) {
      this.canvas = canvas;
      this.x = x;
      this.y = y;
      this.velocity = velocity;
      this.bulletColor = bulletColor;
  
      this.width = 5;
      this.height = 20;
    }
  
     //Definindo a velocidade e a cor
    draw(ctx) {
      this.y -= this.velocity;
      ctx.fillStyle = this.bulletColor;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  
    //Configurando a colisão das balas
    collideWith(sprite) {
      if (
        this.x + this.width > sprite.x &&
        this.x < sprite.x + sprite.width &&
        this.y + this.height > sprite.y &&
        this.y < sprite.y + sprite.height
      ) {
        return true;
      } else {
        return false;
      }
    }
  }