//Crea una función removeVowels(str) que tome como parámetro una cadena y devuelva una nueva cadena con todas las vocales eliminadas.


function removeVowels (str){
    let newstr = str;

return newstr.replace(/[aeiouAEIOU]/g, '')
}

console.log(removeVowels('Hola mundo'));
console.log(removeVowels('IES Villabalter de San Andres'));



// otra manera de resolverlo
// const vowels = 'aeiouAEIOU';
// for (let char of str){
//     if(!vowels.includes(char)){
//         resultado = resultado + char;
//     }
// }

// return resultado;


// otra manera de resolverlo

// const vowels = 'aeiouAEIOU';
// function removeVowels (str){

// let cadenaSV = str;
// for (let vocal of vocales){
//     cadenaSV= cadenasinVocales.replaceAll(vocal, '');
// }

// return cadenaSV;
// 