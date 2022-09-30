let calle = prompt("Ingrese la calle en la que vive");



switch (calle) {
    case 'Los Claveles':
    case 'El rosal':
    case 'Las hortensias':
    case 'Los claveles':
        alert(`Tienes que tomar la linea 1 para ir desde la calle ${calle} hasta el trabajo.`);
        break;

    case 'Teleno':
    case 'Catoute':
    case 'Peña ubiña':
    case 'Los vizcodillo':
        alert(`Tienes que tomar la linea 2 para ir desde la calle ${calle} hasta el trabajo.`);
        break;

    case 'Astorga':
    case 'La bañeza':
    case 'Benavente':
        alert(`Tienes que tomar la linea 3 para ir desde la calle ${calle} hasta el trabajo.`);
        break;

        default:
            alert("Recuerde ingresar la primera letra de la calle con Mayúscula, por Ejemplo 'Teleno")


}




// if (calle == "Los Claveles" || calle == "El Rosal" || calle == "Las Hortensias" || calle == "Los Claveles") {
//     alert("Tienes que tomar la linea 1 para ir desde la calle " + calle + " hasta el trabajo.");
// } else if (calle == "Teleno" || calle == "Catoute" || calle == "Peña Ubiña" || calle == "Los Vizcodillo") {
//     alert("Tienes que tomar la linea 2 para ir desde la calle " + calle + " hasta el trabajo.");
// } else if (calle == "Astorga" || calle == "La Bañeza" || calle == "Benavente") {
//     alert("Tienes que tomar la linea 3 para ir desde la calle " + calle + " hasta el trabajo.");
// }
