
function getNames(arr){
  
    let names = arr.map((item,arr) => {   

        return {
            nombre: item.split(' ',1).join(''),
            apellidos: item.split(' ').slice(1).join(' '),
        }

    })

return names;

}

console.log(getNames( ['Victor González Rodríguez', 'Pepe Pérez Fernández', 'Lina Ortiz Saavedra'] ));  
    // [ { nombre: 'Victor', apellidos: 'González Rodríguez },);