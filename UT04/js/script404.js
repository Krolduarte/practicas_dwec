let table = document.createElement("table");
document.getElementById("board").appendChild(table);

let tr1 = document.createElement("tr");

for (let i = 0; i <= 8; i++) {

let th= document.createElement("th");
tr1.appendChild(th);
table.appendChild(tr1);
tr1.classList.add("grey");
}
let letras = " ABCDEFGH".split("");
letras.forEach((letra, index) => {
     table.firstChild.childNodes[index].innerHTML = letra;
     table.firstChild.childNodes[index].classList.add("grey");
  
   });

for (let i = 0; i < 8; i++) {
  let letras = " ABCDEFGH".split("");
  let numeros = " 76543210".split("");
  let tr = document.createElement("tr");
  for (let j = 0; j <= 8; j++) {
    let td = document.createElement("td");
    table.childNodes[i].childNodes[j].setAttribute('data-id',letras[j]+numeros[i]);
    tr.appendChild(td);
    table.appendChild(tr);
    if ((i + j) % 2 == 0) {
      td.classList.add("white");
     
    } else {
      td.classList.add("black");
 
    }
   
  }
  
}


let numeros = " 76543210".split("");
numeros.forEach((numero, index) => {
  table.childNodes[index].firstChild.innerHTML = numero;
  table.childNodes[index].firstChild.classList.remove("white");
  table.childNodes[index].firstChild.classList.remove("black");
  table.childNodes[index].firstChild.classList.add("grey");
});


