
//Crea una función max( arr ) que recoja un array de números y devuelva el valor máximo. Este ejercicio es para practicar con la función reduce, por lo que debes utilizar esta función para hacerlo.


function max(arr) {

    let max = arr.reduce((acum, item) => {

        return (item > acum) ? item : acum;

    }, arr[0]);

    return max;
}

let arr1 = [500, 10, 30, 600, 2, 1];

console.log(max(arr1));


