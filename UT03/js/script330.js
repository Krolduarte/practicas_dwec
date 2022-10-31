
let arr = [

    {
        nombre: 'Ana',
        ape1: 'Suaez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd123',
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
        pass: 'Notienenumeros',
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
        pass: 'SOLOMAYUSCULA',
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
        pass: 'solominuscula',
        ciclo: 'DAM',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    },

    {
        nombre: 'Pepita',
        ape1: 'Mendoza',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'Contra0123w',
        ciclo: 'DAM',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        },
    }
]

//Crea una una función getUnsecurePass() que devuelva un array con los nombres y apellidos de los alumnos que tengan una contraseña que no cumpla los requisitos de complejidad. Estos requisitos son:

// Debe tener por lo menos un carácter en mayúsculas y uno en minúsculas
// Debe tener por lo menos un dígito
// Debe tener una longitud mínima de 8 caracteres


function getUnsecurePass() {

    function isMinMayNum(arr) {
        return arr.some(item =>
            item == item.toLowerCase() &&  
            item == item.toUpperCase() && 
            item == Number(item)
        )
        
    }

    let nuevo = arr.map((item) => {
        if (item.pass.length > 8 && isMinMayNum(item.pass.split('')) ) {
            return 'safe password';
               
            
        }else{
            return {
                nombre: item.nombre,
                apellido: item.ape1 + ' ' + item.ape2,
            }


        }
    })



    return nuevo;

}


















console.log(getUnsecurePass());