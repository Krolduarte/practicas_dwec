// 12 del 12 de 2020 por ejemplo    12/12/2020


let patronFecha = /(0?[1-9]|[12][0-9]|3[01])[\\/](0?[1-9]|1[012])[\\/](19[0-9]{2}|20[0-2]{1}[0-2]{1})/g;
let resultado = document.querySelector('#resultado');


let textoUsuario = document.querySelector('#texto');
let inputSubmit= document.querySelector('#enviar');
 inputSubmit.addEventListener('click', revisarTexto)

function revisarTexto(event){
    event.preventDefault();

    if(patronFecha.test(textoUsuario.value)){
        let nuevo = textoUsuario.value.replace(/\//g,' de ');
        resultado.innerHTML = `<h2>${nuevo}</h2>`
    }
          
}


