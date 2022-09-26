let nombre = prompt("Escribe tu nombre");
let primerExamen = prompt("Escribe la nota del primer examen");
let segundoExamen = prompt("Escribe la nota del segundo examen");

let nota1 = parseInt(primerExamen);
let nota2 = parseInt(segundoExamen);

notamedia = (nota1+ nota2)/2;
alert("Hola "+nombre+" , la nota media de tus examenes es "+notamedia+" donde "+notamedia+" es la suma de las dos notas introducidas divididas entre dos.");