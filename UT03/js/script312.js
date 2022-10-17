//Crea una función isHeterograma(str) que devuelva true si la cadena pasada como parámetro es un heterograma y false en caso contrario. Un heterograma es una palabra o frase que no tiene ninguna letra repetida.

function isHeterograma(str) {

    let contador = 0;
    for (i = 0; i < str.length; i++) {

        if (str.substring(i + 1).includes(str.charAt(i))) {  //si se repite
            contador++;

        } else {
            contador = contador + 0;
        }


    }

    return (contador == 0);

}



console.log(isHeterograma('Villabalter'));
console.log(isHeterograma('Carol'));


// str = 'caral';
// console.log(str.substring(0));
// console.log(str.charAt(2));
// console.log(str.substring(1).includes(str.charAt(0)));   //false
// console.log(str.substring(2).includes(str.charAt(1)));  //true
// console.log(str.substring(3).includes(str.charAt(2)));  // false
// console.log(str.substring(4).includes(str.charAt(3)));  //fase

