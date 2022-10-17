//Crea una función removeVowels(str) que tome como parámetro una cadena y devuelva una nueva cadena con todas las vocales eliminadas.


function removeVowels (str){
    let newstr = str;

return newstr.replace(/[aeiouAEIOU]/g, '')
}

console.log(removeVowels('Hola mundo'));
console.log(removeVowels('IES Villabalter de San Andres'));
