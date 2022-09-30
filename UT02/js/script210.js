let num1 = (parseInt)(prompt("Introduzca el primer número"));
let num2 = (parseInt)(prompt("Introduzca el segundo número"));
let num3 = (parseInt)(prompt("Introduzca el tercer número"));
let num4 = (parseInt)(prompt("Introduzca el cuarto número"));
let num5 = (parseInt)(prompt("Introduzca el quinto número"));



let array = [num1,num2,num3,num4,num5];
let mayor=array[0];
let menor = array[0];

for(let i =0; i<array.length;i++){
   
if(array[i]>mayor){
    mayor = array[i];
}

if(menor>array[i]){
    menor = array[i];
}


    }
 
    alert(`El número mayor es ${mayor} y el menor es ${menor}`);



