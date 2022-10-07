
function convertCapacity(n,from, to){
    let resultado;

switch(to){
    case 'B':
    case 'Byte':
    resultado = convertToBytes(n, from) / 1;   
    break;
    case 'KB':
    case 'Kilobyte':
    resultado = convertToBytes(n, from) / 1e3;  
    break;
    case 'MB':
    case 'Megabyte':
    resultado =  convertToBytes(n, from) / 1e6;  
    break;
    case 'GB':
    case 'Gigabyte':
    resultado = convertToBytes(n, from) / 1e9;  
    break;
    case 'TB':
    case 'Terabyte':
    resultado = convertToBytes(n, from) / 1e12;  
    break;
    case 'PB':
    case 'Petabyte':
    resultado = convertToBytes(n, from) / 1e15;  
     break;
    case 'EB':
    case 'Exabyte':
    resultado = convertToBytes(n, from) / 1e18;  
    break;
}
    return resultado;
}

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


console.log(convertCapacity(5, 'GB', 'Megabyte'));    //5000
console.log(convertCapacity(500, 'B', 'KB'));   //0.5
console.log(convertCapacity(50, 'MB', 'GB'));
