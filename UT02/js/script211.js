let num;

do{
    num = prompt("Escribe un número!");

}while(num<=0 || isNaN(num));



if (!isNaN(num) && num>0) {
    
        if (num % 2 == 0) {
            alert("Su número es par");
        } else {
            alert("Su número es impar")
        }
    }

    // num = Number(num);
    // num >= 0 ? repetir = true :  repetir = false;
    // (num % 2 == 0) ? alert ("Par") : alert ("impar");


