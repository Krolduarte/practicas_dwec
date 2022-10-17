function intersectObjects(obj1, obj2){
    
    //un objeto que contenga solamente las propiedades que tengan el mismo nombre en ambos objetos. El valor que se asigne a estas propiedades es indiferente.

    let clone = {};
    for (let key in obj1) {
        if (key in obj2){
          clone[key]= key;
           }
           
            }
            return clone;
        }
        
    
    


let objeto1 = {
    name: 'Lola',
    gender: 'female',
    age: 20,
}

let objeto2 = {
    name: 'Carlos',
    gender:'male',
    pets: true,
}

console.log(intersectObjects(objeto1, objeto2));