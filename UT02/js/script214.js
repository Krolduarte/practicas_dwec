

function factorial(num){

    if (num === 0 || num === 1)
    return 1;

  for (let i = num - 1; i >= 1; i--) {
    num = num* i;
  }
  return num;
}

let numero= prompt("Escribe un número y te indicare su factorial");
alert(factorial(numero));