let base = parseInt(prompt("Ingrese un numero"));
let repeticion;
for (let i = 1; i <= base ; i++){
    for(repeticion = 0 ; repeticion < i ; repeticion++){
        document.write("*");   
    }
    document.write("</br>");
}








// otra manera

// let num = parseInt(prompt("Ingrese un numero"));

// for (let i = 1; i <= num ; i++){
//     let fila = "";
//     for(let j= 0 ; j < i ; j++){
//         fila +=x;   
//     }
//   console.log(fila);
// }



