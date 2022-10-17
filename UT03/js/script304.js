//devuelve true si todas las propiedades del objeto b existen en el objeto a y false en caso contrario. El valor de las propiedades es indiferente.
function containsObject(a, b){

    for(let key in b ){
        if(!(key in a)){
            return false;
        }
            
        }
        return true;
    }
       
let objeto1 = {
    name: 'Lola',
    pet : true,
    age: 20,
}

let objeto2 = {
    name: 'Lola',
    pet : true,
    age: 20,
}

let objeto3 = {
    nickname: 'Lola',
    petstore : true,
    age_Experience: 20,
}

let objeto4 = {
    name: 'Lola',
    pet : true,
    age: 20,
}

console.log(containsObject(objeto1, objeto2));
console.log(containsObject(objeto3, objeto4));