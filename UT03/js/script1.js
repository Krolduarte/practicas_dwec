function cloneObject (obj){
    let copia = {
        ...obj,
    }

    return copia;

}

let user ={
    userName: 'Carol',
    gender: 'female'
}

console.log(cloneObject(user));