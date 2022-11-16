//numero de parrafos en la pagina
let span = document.getElementById("parrafos");
span.innerHTML = document.getElementsByTagName("p").length;

//direccion que enlaza al segundo enlace
let a = document.getElementsByTagName("a")[1];
let spanenlace = document.getElementById("segundo-enlace");
spanenlace.innerHTML = a.getAttribute("href");

//numero de enlaces
let spanNumero = document.getElementById("links-google-es");
let enlaces = document.querySelectorAll("a");
let cont = 0;

enlaces.forEach((enlace) => {
  if (enlace.getAttribute("href") == "https://www.google.es") {
    cont++;
  }
});

spanNumero.innerHTML = cont;



//numero de palabras del segundo parrafo
let parrafo = document.getElementsByTagName("p")[1];
//buscar numero de palabras
let pa = parrafo.textContent.trim().split(' ');
console.log(pa);
let spanpalabras = document.getElementById("palabras-segundo-parrafo");

spanpalabras.innerHTML = pa.length;
// --convertir el parrafo a array y contar el numero de elementos