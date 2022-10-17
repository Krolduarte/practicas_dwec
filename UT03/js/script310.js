function replaceWithPosition (str){
   
//guion para que las posiciones empiecen desde 1
let abc = '-abcdefghijklmnopqrstuvwxyz';
let pos = '';

for (let char of str){

   if(abc.includes(char)){
   pos = pos.concat(abc.indexOf(char),' ');   
   }
}
return pos;

}

console.log(replaceWithPosition('hola'));