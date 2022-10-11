
function isValidTriangle (a, b, c){
if ( ((a + b )> c) && ((a + c) > b) && ((b + c)> a) ) {
    resultado = true;
}else{
    resultado = false;
} 
return resultado;
}

let primero = Number(prompt("Ingrese un número"));
let segundo = Number(prompt("Ingrese un número"));
let tercero = Number(prompt("Ingrese un número"));

console.log( isValidTriangle (primero,segundo,tercero));


// console.log( triangulo (8,6,5));   //true
// console.log( triangulo (12,6,5));   //false



// function isTValidTriangle (a, b, c){
//     ( ((a + b )> c) && ((a + c) > b) && ((b + c)> a) ) {
//     }
    
//     let primero = Number(prompt("Ingrese un número"));
//     let segundo = Number(prompt("Ingrese un número"));
//     let tercero = Number(prompt("Ingrese un número"));
    
//     console.log( isValidTriangle (primero,segundo,tercero));