//Crea una función countLetters(str) que devuelva un objeto que contenga el número de veces que se repite cada letra. No se tendrán en cuenta los espacios y no se diferenciará entre mayúsculas y minúsculas.

function countLetters(str) {

  let newstr = str.toLowerCase()
    .split(" ")
    .join("");
  let abc = 'abcdefghijklmnopqrstuvwxyz';
  let frase = {};



  for (let letra of newstr) {

    if (!abc.includes(letra)) {
      frase[letra] = 0;
    } else {
      frase[letra] = frase[letra] ? frase[letra] + 1 : 1;
    }
  }
  return frase;
}



console.log(countLetters('hola mundo'));
console.log(countLetters('DAW1 DAM1'));

