let contador = document.querySelector("#contador");
let num = contador.textContent;
let divContenedor =document.querySelector('#contenedor');
// divContenedor.addEventListener("resize", )
let cuadrado = document.querySelector("#cuadrado");
cuadrado.addEventListener("click", incrementar);

//funcion para incrementar el número de veces cada vez que se hace click
function incrementar() {
  contador.textContent = ++num;
}

//funcion para cambiar tamaño y posición del cuadrado
cuadrado.addEventListener('click', (e) =>
{
    let position = Math.round(Math.random()*500);
    let size = Math.round(Math.random()*300);
  
    // e.target.style.left = '40px';
    // e.target.style.right = '80px';
    e.target.style.top = position + 'px';
    e.target.style.right = position + 'px';
    e.target.style.left = position + 'px';
    e.target.style.width= size + 'px';
    e.target.style.height= size + 'px';
  
});

//imprime tamaño de la ventana del navegador
console.log(window.innerHeight);   //699
console.log(window.innerWidth);    //767
