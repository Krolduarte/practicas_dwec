
function generateUsername(arr) {

    arr.forEach((item) => item.nickname = item.name.slice(0, 1).toLowerCase()+ item.surname.toLowerCase() 
                                        + Math.trunc(Math.random() * (9) + 1) 
                                        + Math.trunc(Math.random() * (9) + 1));

    console.log(arr);

}


let array = [
    { name: 'Victor', surname: 'Gonzalez', },
    { name: 'Pepe', surname: 'Perez', }];

(generateUsername(array));

    // [ {name: 'Victor', surname: 'González', nickname: 'vgonzalez73'},
    //   {name: 'Pepe', surname: 'Pérez', nickname: 'pperez25'} ]