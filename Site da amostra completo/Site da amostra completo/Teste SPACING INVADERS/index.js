//Importando os mecanismos do jogo de outras pastas.
import EnemyController from "./EnemyController.js";
import Player from "./Player.js";
import BulletController from "./BulletController.js";

//Define o tipo de jogo.
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

//Define o tamanho que vai ocupar na tela onde ocorrerá o jogo.
canvas.width = 600;
canvas.height = 600;

//Importa da pasta "images" tudo que compõe o jogo.
const background = new Image();
background.src = "images/space.png";

//Denife as ações contantes no jogo, como os movimentos e os tiros.
const playerBulletController = new BulletController(canvas, 10, "red", true);
const enemyBulletController = new BulletController(canvas, 4, "white", false);
const enemyController = new EnemyController(
  canvas,
  enemyBulletController,
  playerBulletController
);
const player = new Player(canvas, 3, playerBulletController);

//Define váreis no jogo que nesse caso seria "ganhar" ou então "perder".
let isGameOver = false;
let didWin = false;

function game() {
  checkGameOver();
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  displayGameOver();
  if (!isGameOver) {
    enemyController.draw(ctx);
    player.draw(ctx);
    playerBulletController.draw(ctx);
    enemyBulletController.draw(ctx);
  }
}

//Mostrará na tela uma mensagem caso o jogador ganhar ou perder.
function displayGameOver() {
  if (isGameOver) {
    let text = didWin ? "Você Ganhou!" : "Você Perdeu!";
    let textOffset = didWin ? 3.5 : 5;

    ctx.fillStyle = "white";
    ctx.font = "70px Arial";
    ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);
  }
}

//  Como o nome já diz, vai checar a função de Game Over de acordo com as situações que podem acontecer no jogo.
function checkGameOver() {
  if (isGameOver) {
    return;
  }

  if (enemyBulletController.collideWith(player)) {
    isGameOver = true;
  }

  if (enemyController.collideWith(player)) {
    isGameOver = true;
  }

  if (enemyController.enemyRows.length === 0) {
    didWin = true;
    isGameOver = true;
  }
}

setInterval(game, 1000 / 60);