// Realiza los pasos necesarios para que cada vez que el usuario pulse el bóton se desplacen las imágenes una posición a la derecha (la de imagen de la derecha del todo pasará a ser la primera imagen).

let boton = document.getElementById("btn");

let cont = 4;
orden = -1;

function mover() {
  if (cont >= 0) {
    let img = document.getElementsByTagName("img")[cont];
    img.style.order = orden;
    cont--;
    if (cont < 0) {
      cont = 4;
      orden = orden - 1;
    }
  }
}

boton.addEventListener("click", mover);
