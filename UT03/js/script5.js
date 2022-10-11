
//Crea una función llamada removeUndefined(a) que tome como parámetro un objeto y devuelva una copia del mismo en el que se han eliminado todas las propiedades cuyo valor sea undefined.

 function removeUndefined(obj1){

   
    for (let key in clone){
        if (!key == undefined){
            Object.assign(clone,obj1[key]);
        }
        return clone;
        }
    }
    
    let persona = {
        name: 'Lola',
        pet,
        age: 20,
    }


 console.log(removeUndefined(persona));
