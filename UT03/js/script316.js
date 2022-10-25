//Crea una función getOdd(arr) que reciba como parámetro un array con números y devuelva otro array que contenga únicamente los números del primer array que sean impares.


function getOdd(arr) {
  return arr.filter((item) => item % 2 != 0);
   
};


let num = [1, 4, 5, 34, 75, 2];
getOdd(num);

