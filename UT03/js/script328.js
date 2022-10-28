
let arr = [

    {
        nombre: 'Ana',
        ape1: 'Suaez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd',
        ciclo: 'DAM',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    },

    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: '1234ABC',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWES: 9.4
        }
    },
    
    {
        nombre: 'Juan',
        ape1: 'Márquez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd',
        ciclo: 'DAW',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    },

        {
            nombre: 'Carla',
            ape1: 'Mendoza',
            ape2: 'Hernández',
            dni: '7340831',
            expediente: '342',
            pass: 'P@ssw0rd',
            ciclo: 'DAW',
            notas: {
                DWEC: 8,
                DIW: 5.2,
                DWES: 4
            },
    }
]

//nombre de usuario formado por el nombre y la primera letra de cada uno de los apellidos, todo en minúsculas. Crea una función llamada getUsernames() que devuelva un array con los nombres de usuario generados para cada uno de los alumnos.

function getUsernames(){

  
    let username = [];
    
    arr.forEach((item =>  
        username.push( (item.nombre + item.ape1.slice(0,1) + item.ape2.slice(0,1)).toLowerCase())
         ));
    
    return username;


}

console.log(getUsernames());

     // [ 'pepegl', 'juanmh' ]