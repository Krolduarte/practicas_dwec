function replaceWithPosition (str){
   
//guion para que las posiciones empiecen desde 1
let abc = '-abcdefghijklmnopqrstuvwxyz';
let pos = '';

for (let char of str){

   if(abc.includes(char)){
   pos = pos.concat(abc.indexOf(char),' ');   
      // pos += abc.indexOf(char) + ' ';
   }
}
return pos;

}

console.log(replaceWithPosition('hola'));


// otra solucion expuesta en clase
// function replaceWithPosition (str){
   
//    For (let l of str){
//       let base = parseInt(l,36) - 9;
//       console.log( l + ':' + base);
//    }
//    return base;
// }


// otra solucion expuesta en clase

// 'a'.charCodeAt(0);
// devuelve el caracter Unicode de la posicion en la que se encuentre


//solución de Victor
// function replaceWithPosition (str){
   
// let nums = '';
// for (let i=0; i <  str.length; i++){
//    nums += (str.toLowerCase().charCodeAt(i) - 96) + ' ';
// }
//  return nums;
   
//    }




