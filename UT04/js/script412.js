function generarAleatorio() {
  let cadena = "abcdefghijklmnopqrstuvwxyz";
  let randomString = "";
  for (let i = 0; i < 4; i++) {
    randomString += cadena.charAt(Math.floor(Math.random() * cadena.length));
  }
  return randomString;
}

//guardo los elementos en variables para identificarlos
let input = document.querySelector("input");
let addbtn = document.querySelector("#add-button");
let ul = document.querySelector("ul");

//creo array vacio
let tareas = [];

function generarHTML() {
  tareas.push({ texto: input.value });

  let delBtn = document.createElement("span");
  let li = document.createElement("li");

  tareas.forEach((tarea, index) => {
    //sacar propiedad texto del objeto
    li.textContent = tareas[index]["texto"];
    tareas[index]["data-id"] = generarAleatorio();

    li.setAttribute("data-id", generarAleatorio());
    delBtn.classList.add("btn");
    delBtn.setAttribute("data-id", generarAleatorio());
    delBtn.innerHTML = "Borrar";
    delBtn.style.marginLeft = "auto";
    delBtn.addEventListener("click", () => li.remove(generarAleatorio()));
  });

  ul.appendChild(li);
  li.appendChild(delBtn);
  input.value = "";
}

//agrego event listener
addbtn.addEventListener("click", generarHTML);
