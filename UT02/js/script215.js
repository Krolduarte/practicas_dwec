
function calc(operando1, operando2,operador){
    let resultado =0;
    switch(operador){
        case '*':
            resultado = operando1 * operando2;  
            break; 
        case '+':
            resultado = operando1 + operando2;  
            break;
        case '/':
             resultado = operando1 / operando2;  
            break;
         case '-':
             resultado = operando1 - operando2;  
            break;
        case '%':
             resultado = operando1 % operando2;  
            break;
        case '^':
            resultado = Math.pow(operando1,operando2);  
            break;
            default:
             resultado = "indicador erroneo";
        
    }
    return resultado;
}
    



console.log(calc(5, 7, '*'));
console.log(calc(5, 7, '+'));
console.log(calc(5, 7, '/'));
console.log(calc(5, 7, '-'));
console.log(calc(5, 7, '%'));
console.log(calc(5, 7, '^'));
console.log(calc(5, 7, '$'));
