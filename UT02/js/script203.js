let precioManzanas= prompt("Introduce el precio por kilo de las manzanas");
let cantidadManzanas= prompt("Introduce la cantidad de manzanas");

let precioNaranjas= prompt("Introduce el precio por kilo de las naranjas");
let cantidadNaranjas = prompt("Introduce la cantidad de naranjas");

let precioPlatanos= prompt("Introduce el precio por kilo de las platanos");
let cantidadPlatanos= prompt("Introduce la cantidad de platanos");

let kilos= parseInt(cantidadManzanas)+parseInt(cantidadNaranjas)+parseInt(cantidadPlatanos);
let importe_total = (cantidadManzanas*precioManzanas)+(cantidadNaranjas*precioNaranjas)+(cantidadPlatanos*precioPlatanos);

alert("Has comprado un total de "+kilos+" kilos de fruta y te ha costado "+importe_total+" euros.");