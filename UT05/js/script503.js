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
    td.setAttribute('data-num', cont); 
    cont++;
    tr.appendChild(td);
    table.appendChild(tr);
  }
}

table.addEventListener('click',(e) =>{
  e.target.classList.toggle('active');
})

table.addEventListener('contextmenu', (e) => {
    e.target.style.backgroundColor="red";
})

table.addEventListener('click',mostrarCoordenadas);

function mostrarCoordenadas(e){
  let span = document.querySelector('.location');
let datanum = e.target.dataset.num;


span.innerHTML= `<p>  ${datanum}      </p>`;
}

//creando div que muestre la información de las coordenadas
let divCoordenadas = document.createElement('div');
divCoordenadas.classList.add('info');
let span =  document.createElement('span');

divCoordenadas.innerHTML= "Coordenadas:";
span.classList.add('location');
divCoordenadas.append(span);
mainDiv.append(divCoordenadas);


