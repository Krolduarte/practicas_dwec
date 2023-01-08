//Añadiendo las letras
let keyboard = document.querySelector("#keyboard");
let abc = Array.from("abcdefghijklmnñopqrstuvwxyz");
// console.log(abc);

abc.forEach((letra) => {
  keyboard.innerHTML += ` <span class="key" data-key= ${letra}>${letra}</span>`;
});

//sacando la palabra a azar de words
let secretWord = words[Math.trunc(Math.random() * words.length)];
let longitud = secretWord.length;
let spacesWord = "";
let div = document.querySelector("#spaces");
let hanged = document.querySelector("#hanged");
hanged.innerHTML = `<img src="img/hangman/hangman_00.png" />`;
// spacesWord = secretWord.slice();
for (char in secretWord) {
  spacesWord += " ";
}
//contador para la imagen
let contador = 0;
let resultado = document.createElement("div");
let body = document.getElementById("body");
resultado.classList.add('resultado');

body.appendChild(resultado);
console.log(secretWord);
console.log(longitud);
console.log(spacesWord);

let teclas = document.querySelectorAll(".key");
teclas.forEach((tecla) => tecla.addEventListener("click", checkLetter));
//llamando funcion para que dibuje los espacios de las letras
renderSecretWord();

//Añadiendo evento para cuando presiona con teclado
document.addEventListener("keydown", checkLetter);


function checkLetter(event) {
  console.log(event.key);
  let secretWordArray = secretWord.split("");
  if (secretWordArray.includes(event.target.dataset.key)||secretWordArray.includes(event.key) ) {
    event.target.classList.add("succeed");
    
    spacesWord = secretWordArray
      .map((item, index) => {
        return item == event.target.dataset.key
          ? event.target.dataset.key
          : spacesWord[index];
      })
      .join("");

      spacesWord = secretWordArray
      .map((item, index) => {
        return item == event.key
          ? event.key
          : spacesWord[index];
      })
      .join("");


    renderSecretWord();
    //Si no quedan espacios en blanco que aparezca un aviso que dice has ganado y fondo verde
    if (!spacesWord.includes(" ")) {
      resultado.innerHTML = "Has ganado";
      resultado.style.backgroundColor="green";
    }
  } else {
       //Si el contador llega a 9, va mostrando imagenes y dice has perdido
    // event.target.style.backgroundColor = "red";
    event.target.classList.add('fail');
    contador++;
    if (contador <= 9) {
      hanged.innerHTML = `<img src="img/hangman/hangman_0${contador}.png" />`;
    } else {
      resultado.innerHTML = "Has perdido";
      resultado.style.backgroundColor="red";
//se agrega el mensaje al final de body
      body.appendChild(resultado);
    }
  }
}

function renderSecretWord() {
  //imprimiendo el número de espacios
  let spaces = document.querySelector("#spaces");
  spaces.textContent = "";
  for (let i = 0; i < secretWord.length; i++) {
    spaces.innerHTML += `<span class="space" data-pos =${i}>${spacesWord[i]}</span>`;
  }
}

// para encontrar data-pos  lo podria buscar con querySelector(['data-pos']) y también podria poner querySelector(['data-pos']= 'a')
