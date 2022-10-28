//tome como parámetro el nombre de un ciclo 
//y devuelva el número de alumnos que hay matriculados en dicho ciclo.

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
            ciclo: 'DAM',
            notas: {
                DWEC: 8,
                DIW: 5.2,
                DWES: 4
            },
    }
]


function getNumberOfAlumnos(str){


    let contador = 0;
    let found = arr.forEach(item => {
        if (item.ciclo == str){
            contador= contador + 1;;
        }
    });
   
    return  contador;
    }
    

    console.log(getNumberOfAlumnos('DAM'));   //3
    console.log(getNumberOfAlumnos('DAW'));     //1

   
   


// 





