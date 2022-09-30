
//que el numero no sea undefined, null o una cadena


let numero = prompt("Escribe un número");

while (isNaN(numero) || numero == "" || numero == null) {
    numero = prompt("Escribe un número que sea válido");

}

alert("Has introducido el número " + numero);




