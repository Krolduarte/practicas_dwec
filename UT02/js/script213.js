

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

        let numero = prompt("Ingrese un valor");

        
 for (let i= 2; i<=numero;i++){
if (isPrime(i)==true){
    console.log(i);
}
 }


    