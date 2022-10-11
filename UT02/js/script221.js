function isNumber(str){
  let result=false;
   (!isNaN(str)) ? result = true : result = false;


  //Tambien se puede dejar simplemente asi:  (!isNaN(str));
return result;

}

console.log(isNumber( '234.43'));
console.log(isNumber( 'siete'));
console.log(isNumber( 'cuatro'));
console.log(isNumber( '    34'));
console.log(isNumber( '23a'));
console.log(isNumber( '2969c'));