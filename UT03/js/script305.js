
//Crea una función llamada removeUndefined(a) que tome como parámetro un objeto y devuelva una copia del mismo en el que se han eliminado todas las propiedades cuyo valor sea undefined.

function removeUndefined(a) {

    let newObj = {};
    for (let i in a) {
        if (a[i] != undefined) {
            newObj[i] = a[i];
        }   
    }
    return newObj;
}

let persona = {
    name: 'Lola',
    pet,
    age: 20,
}

console.log(removeUndefined(persona));
