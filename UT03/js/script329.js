
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
            DWEC: 10,
            DIW: 10,
            DWES: 10,
        },
    }
]

//Crea una función llamada getAverages() que calcule para cada alumno la nota media de todos los módulos que ha cursado. Debe devolver un array de la forma { alumno: 'XXX YYY', expediente: 'ZZZZ', nota_media: 00 }


function getAverages() {

    let nuevo = arr.map((item) => {
        return {
            alumno: item.nombre + ' ' + item.ape1 + ' ' + item.ape2,
            expediente: item.expediente,
            notamedia: ((item.notas.DWEC+item.notas.DIW+item.notas.DWES)/3).toFixed(2),

        }

    }

    );
    return nuevo;
}

console.log(getAverages());