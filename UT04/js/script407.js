// Modifica la página del ejercicio anterior para que cada vez que se pulse el botón se reordenen aleatoriamente las imágenes.

let boton = document.getElementById("btn");


let numeros = "54321".split("");
let x = numeros.sort((a, b) => 0.5 - Math.random());

function mover() {
  
if(x[0]<6){
    let imgs = document.getElementsByTagName("img");
    numeros.forEach((num, index) => {
      imgs[index].setAttribute(
        "src",
        `https://vgonzalez165.github.io/dwec/assets/pr0406/mountain_${num}.jpg`
      );
    });

}
 x = numeros.sort((a, b) => 0.5 - Math.random());



}

boton.addEventListener("click", mover);
