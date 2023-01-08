// Añade un cronómetro que limitará el tiempo que tiene el usuario
// Añade un efecto psicodélico, haz que, cada vez que cambie de posición el recuadro cambie el color del mismo y también el del fondo de la ventana.

let gameOn = false;

let btnStart = document.querySelector("#btn-start");
let bntReset = document.querySelector("#btn-reset");

let score = document.querySelector("#score");
let gameZone = document.querySelector("#game-zone");

let puntuacion = score.textContent;
let cuadrado = document.querySelector("#cuadrado");
let timer = document.querySelector("#time");
let time = 0;
let playerFirst = document.querySelector("#ranking-first");

btnStart.addEventListener("click", startGame);

//funcion para cambiar el tamaño del cuadrado
function changeSize(e) {
  let position = Math.round(Math.random() * 400);
  let sizeHeight = Math.round(Math.random() * 599 + 20);
  let sizeWidth = Math.round(Math.random() * 599 + 20);
  // e.target.style.left = '40px';
  // e.target.style.right = '80px';
  e.target.style.top = position + "px";
  e.target.style.right = position + "px";
  e.target.style.left = position + "px";
  e.target.style.width = sizeWidth + "px";
  e.target.style.height = sizeHeight + "px";
}

//funcion para generar color aleatorio para el cuadrado y el fondo
function generateRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#"; //#f10531
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//funcion para crear efecto sicodelico
function changeColor() {
  let colorRandom = generateRandomColor();
  let colorRandom2 = generateRandomColor();
  cuadrado.style.backgroundColor = colorRandom;
  gameZone.style.backgroundColor = colorRandom2;
}

//función que incrementa la puntuación
function incrementar() {
  score.textContent = ++puntuacion;
}

function startGame() {
  gameOn = true;
  cuadrado.addEventListener("click", incrementar);
  cuadrado.addEventListener("click", updateTime);
  let myInterval = setInterval(updateTime, 100);
  cuadrado.addEventListener("click", changeSize);
  cuadrado.addEventListener("click", changeColor);
  rankingName();

  function updateTime() {
    time = time + 1;
    if (time <= 200) {
      timer.textContent = (time / 10).toFixed(2);
    } else {
      puntuacion = 0;
      clearInterval(myInterval);
      gameOn = false;
      cuadrado.removeEventListener("click", changeSize);
      cuadrado.removeEventListener("click", incrementar);
      cuadrado.removeEventListener("click", changeColor);
      rankingScore();
    }
  }
  
}

//funcion para detener el juego
bntReset.addEventListener("click", resetGame);

function resetGame() {
  gameOn = false;
  cuadrado.removeEventListener("click", changeSize);
  score.textContent = 0;
  cuadrado.removeEventListener("click", incrementar);
  cuadrado.removeEventListener("click", changeColor);
  timer.textContent= 0;

}

//ranking para jugador:

function rankingName() {
  let playerInput = document.querySelector("#player-input").value;
  let player = document.querySelector("#ranking-first");
  console.log(player);
  player.childNodes[1].innerHTML= `<h3>${playerInput}</h3>`;
}

function rankingScore() {
  let player = document.querySelector("#ranking-first");
  player.childNodes[3].innerHTML = `<h3>${score.textContent}</h3>`;


}



