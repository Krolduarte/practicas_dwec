//Crea una función getUpperCase( arr ) que reciba como parámetro un arrays con strings y devuelve un array que únicamente contenga los strings cuyas letras sean todas mayúsculas.


function getUpperCase(arr) {

  return arr.filter(item =>  item == item.toUpperCase() )

}



console.log(getUpperCase(['aBc', 'BE', 'hfa', 'AEO']));    // [ 'BE', 'AEO ]