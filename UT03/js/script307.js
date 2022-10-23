//Crea una función countVowels(str) que tome como parámetro una cadena (que solo contendrá letras y espacios) y devuelva el número de vocales que tenga, ignorando mayúsculas y minúsculas.


function countVowels (str){

    const vocales = 'aeiou';
    //ignorando mayusculas o minusculas
    str.toLowerCase();
    let cantidad = 0;
    for (let char of str){
        if (vocales.includes(char)){
        cantidad++;
    }
}
return cantidad;
    }

  
console.log(countVowels("H o l a M u n d o"));
console.log(countVowels("M   u r c i e l a g o"));