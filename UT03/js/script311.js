//devuelva una cadena formada por la secuencia de longitud len formada por la concatenación de números que comience en min y se incrementen hasta max para posteriormente decrementarse, repitiendo el ciclo hasta alcanzar la longitud len.

function ascendDescend (len,min,max){
  
    let str = "";
    let num = '';
    let j= max;
   
   
for(let i = min; i < max; i++){
   num = num.concat(i);  
   } 
  
   while(num.length < len && j > min){
    num = num.concat(j);
    j--;
   }

    str = str.padStart(len, num) ;
    return str;
}



console.log(ascendDescend(8,2,7));   // 23456765
console.log(ascendDescend(10,2,5)); // 2345432345
console.log(ascendDescend(18,2,10));