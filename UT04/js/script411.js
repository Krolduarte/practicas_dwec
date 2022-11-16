//guardo los elementos en variables para identificarlos
let input = document.querySelector("input");
let addbtn = document.querySelector("#add-button");
let ul = document.querySelector("ul");

//creo array vacio
let tareas = [];

function generarHTML() {
  tareas.push(input.value);

  let li = document.createElement("li");
  tareas.forEach((tarea, index) => {
    li.textContent = tareas[index];
  });

  ul.appendChild(li);
}

//agrego event listener
addbtn.addEventListener("click", generarHTML);
