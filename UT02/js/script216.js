
function convertToBytes(capacity,from){
    let resultado;
switch(from){
case 'B':
case 'Byte':
    resultado = capacity * 1;
    break;
    case 'KB':
    case 'Kilobyte':
    resultado = capacity * 1e3;
    break;
    case 'MB':
    case 'Megabyte':
    resultado = capacity * 1e6;
    break;
    case 'GB':
    case 'Gigabyte':
     resultado = capacity * 1e9;
    break;
    case 'TB':
    case 'Terabyte':
    resultado = capacity * 1e12;
    break;
    case 'PB':
    case 'Petabyte':
    resultado = capacity * 1e15;
     break;
    case 'EB':
    case 'Exabyte':
    resultado = capacity * 1e18;
    break;
}
    return resultado;
}



console.log(convertToBytes(3,'MB'));
console.log(convertToBytes(5,'Terabyte'));
