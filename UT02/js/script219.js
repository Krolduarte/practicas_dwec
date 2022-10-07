function sumOfMults (n, k){

    let resultado = 0;
    for(let i=1; i <= k ; i++){
       resultado= resultado + (n * i);
    }
 return resultado;
}


console.log(sumOfMults( 3, 5)); //45
console.log(sumOfMults( 2, 10)); 