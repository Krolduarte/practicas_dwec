function mergeObjects(obj1, obj2) {

    let newObject = {
        ...obj1,
        ...obj2,
    }
    return newObject;
}

let objeto1 = {
    name: 'Lola',
    age: 20,
}

let objeto2 = {
    school: 'IES',
    pets: false,
}

console.log(mergeObjects(objeto1, objeto2));