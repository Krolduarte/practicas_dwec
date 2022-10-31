
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
        ciclo: 'DAM',
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

function getAlumnosByCiclo (str){

    let name= [];
    let found = arr.forEach(item => {
        if (item.ciclo == str){
            name.push( item.nombre+' '+item.ape1+' '+item.ape2);
        }
    });
   
    return  name;
}


//solucion planteada por Victor
// function getAlumnosByCiclo2 (str){

//      return arr.filter(item => item.ciclo == str)
//                .map(
//                  ({nombre,ape1,ape2}) => nombreCom.push `${nombre} ${ape1} ${ape2}`
//                  );
// };

//getAlumnosByCiclo( 'DAW' );     
// [ 'Pepe Pérez López', 'Juan Márquez Hernández' ] 