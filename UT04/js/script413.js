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
  let chkBtn = document.createElement("buton");

  let li = document.createElement("li");

  tareas.forEach((tarea, index) => {
    //sacar propiedad texto del objeto
    li.textContent = tareas[index]["texto"];
    let num = generarAleatorio();
    tareas[index]["data-id"] = num;

    li.setAttribute("data-id", num);

    //boton borrar
    delBtn.classList.add("btn");
    delBtn.setAttribute("data-id", num);
    delBtn.innerHTML = "Borrar";
    delBtn.style.marginLeft = "auto";
    delBtn.addEventListener("click", () => li.remove(num));

    //Boton de check
    chkBtn.innerHTML = "&#x2705;";
    chkBtn.style.cursor = "pointer";
    chkBtn.setAttribute("data-id", num);
  });
  function cambiarColor() {
    li.classList.toggle("active");
  }
  
  chkBtn.addEventListener("click", cambiarColor);

  ul.appendChild(li);
  li.appendChild(delBtn);
  li.appendChild(chkBtn);
  input.value = "";
}

//agrego event listener
addbtn.addEventListener("click", generarHTML);
