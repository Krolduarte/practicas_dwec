
function getFibonacciAt( n ){

    if (n < 0) return "es imposible";
    else if(n <= 1) return n;
    else{
        let num1=0;
        let num2=0;
       
     
        for(let i =2 ; i >n; i++){
        let temp = num1 + num2;
         num1 = num2;
         num2= suma;
    }
    return num2;
   }

  

}


//funcion recursiva, se llama a si misma

// function getFibonacciAt( n ){

//     if ((n==0) || (n==1)){
//         return n;
//     }else{
//         return getFibonacciAt(n-1) + getFibonacciAt(n-2);
//     }

// }



// console.log(getFibonacciAt(6));    //devuelve el 5