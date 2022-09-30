let base = prompt("Ingrese un numero");
let repeticion;
for (let i = 1; i <= base ; i++){
    for(repeticion = 0 ; repeticion < i ; repeticion++){
        document.write("*");   
    }
    document.write("</br>");
}