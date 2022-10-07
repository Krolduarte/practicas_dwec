
function isPrime(n){

    
    if(n < 2){
        return false;
       
    }else{
        for (let i = 2; i<n; i++){
            if (n % i == 0){
                return false;
        
            }  
        }
    }
            return true;
        
        }


        let numero; 

while(numero !== "0"){
    
    numero = prompt("Introduce un número, te diré si es primo o no");
    
    if (isPrime(numero) == true){
      alert ("Es un número primo");
    }else{
     alert("No es un número primo");
    }

}




// -----------------------------------------





let num;
while (num != 0){
    num = Number(prompt("Introduce un número, te diré si es primo o no"));
    console.log( isPrime(num) ? "primo" : "no primo");
   
}


function isPrime(n){
    for( let i =2; i <= n**(1/2) ; i++ ) {
    if ( n % i == 0 ) return false;
    }
    return true;
}


 
 