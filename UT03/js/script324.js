//Al introducir los datos alguien se olvidó de añadir la letra al DNI. Crea una función addNif(arr) que modifique el array que se le pase añadiendo una propiedad nif que contenga el NIF (DNI+letra) y elimine la propiedad dni. Para calcular la letra del NIF simplemente hay que calcular el resto cuando se divide el número del DNI entre 23 y se asigna la letra según la siguiente tabla. Se explica con más detalle aquí.

//delete.sni

function addNif(arr) {


    let cadena = 'TRWAGMYFPDXBNJZSQVHLCKE';

    function generarLetra(str) {
        let num = str.split('').reduce((a, b) => a + b, 0) % 23;
        let letra = cadena[num];
        return letra;
    };

    arr.forEach((item) => {
        item.nif = item.dni + generarLetra(item.dni);
        delete item.dni;

    });

    return arr;
}


let array = [
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
            DWEC: 9.4
        }
    },

    {
        nombre: 'Juan',
        ape1: 'Mázquez',
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
    }
]

console.log(addNif(array));

