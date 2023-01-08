//creando tabla con los números del 1 al 100
let table = document.createElement("table");
let mainDiv = document.getElementById("board")
mainDiv.appendChild(table);
let cont=1;
for (let i = 1; i <= 10; i++) {
  let tr = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    let td = document.createElement("td");
    td.innerHTML = cont; 
    cont++;
    tr.appendChild(td);
    table.appendChild(tr);
  }
}

mainDiv.addEventListener('click',(e) =>{
  e.target.classList.toggle('active');
})

mainDiv.addEventListener('contextmenu', (e) => {
    e.target.style.backgroundColor="red";
})


