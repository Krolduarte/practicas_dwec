// let year = prompt("Ingrese su año de nacimiento");

// if(year<=1968 && year>=1949){
//     alert("Usted pertenece a la generación Baby Boomer!");
// }else if(year<=1980 && year>=1969){
//     alert("Usted pertenece a la generación X!");
// }else if(year<=1993 && year>=1981){
//     alert("Usted pertenece a la generación Millenial!");
// }else if(year<=2010 && year>=1994){
//     alert("Usted pertenece a la generación Z!");
// }else if (year<1967 || year>2010){
//     alert("No se dispone de información que corresponda a su generación en este momento");
// }

let msg2 =  year < 1946 ? 'No disponible'  :  
            year < 1968 ? 'Baby Boom'  :  
            year < 1980 ? 'X'  :  
            year < 1993 ? 'Millennial'  :  
            year < 1993 ? 'Generacion Z'  :  
            'Te has pasado de edad';

            console.log(msg2);