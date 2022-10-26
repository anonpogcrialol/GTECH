// Exportando todo o código para outra file que será incorporada em "EnemyController.js".
export default class Enemy {
    constructor(x, y, imageNumber) {
      this.x = x;
      this.y = y;
      this.width = 44;
      this.height = 32;
  
      this.image = new Image();
      this.image.src = `images/enemy${imageNumber}.png`;
    }
    
    //Definindo imagem
    draw(ctx) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    
    //Definindo movimento
    move(xVelocity, yVelocity) {
      this.x += xVelocity;
      this.y += yVelocity;
    }
    
    //Definindo colisão do inimigo e verificando
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