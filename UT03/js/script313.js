
//Crea una función isIsograma(str) que devuelva true si la cadena str es un isograma.

//Un isograma es una cadena o frase en el que cada letra aparece repetida el mismo número de veces (un heterograma es un caso especial de isograma en el que cada letra se repite una vez).

function isIsogram (str){
    let resultado = true;
    let contador = 0;
    for (i = 0; i < str.length; i++) {

        if (str.substring(i + 1).includes(str.charAt(i))) {  //si se repite
            contador++;

        } else {
            resultado = false;
        }
    }
    return (contador % 2 == 0);
}

console.log(isIsogram('acondicionad'));
console.log(isIsogram('papa'));
console.log(isIsogram('amorroma'));
console.log(isIsogram('papelera escritura'));