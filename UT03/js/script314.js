//Crea una función isPangrama(str) que devuelva true si la palabra pasada como parámetro es un pangrama.

function isPangrama(str) {
    let abc = 'abcdefghijklmnñopqrstuvwxyz'.split('');

    let strA = str.toLowerCase();
    for (let i = 0; i < abc.length; i++) {
        if (strA.indexOf(abc[i]) < 0) {
            return false;
        }
    }
    return true;
}

let str1 = 'El veloz murcielago hindu comia feliz cardillo y kiwi. La cigueña tocaba el saxofon detras del palenque de paja.'

console.log(isPangrama(str1));