let btnLogin = document.querySelector("#boton");
btnLogin.addEventListener("click", openModalWindow);

let modalLogin = document.querySelector("#modalLogin");
let modalRegister = document.querySelector("#modalRegister");
let formulario = document.querySelector("#formulario");
let fondo = document.querySelector("#fondo");
let loginBtn = document.querySelector("#loginnav");
let registerBtn = document.querySelector("#registernav");

let divError = document.querySelector("#error");

function openModalWindow(event) {
  modalLogin.style.visibility = "visible";
  formulario.style.visibility = "visible";
  fondo.style.display = "unset";
}

loginBtn.addEventListener("click", mostrarModal);

function mostrarModal() {
  modalLogin.style.visibility = "visible";
  modalRegister.style.visibility = "hidden";
}

registerBtn.addEventListener("click", mostrarModalReg);

function mostrarModalReg() {
  modalLogin.style.visibility = "hidden";
  modalRegister.style.visibility = "visible";
}

let closeBtn = document.querySelector("#closeBtn");

closeBtn.addEventListener("click", closeWindow);

function closeWindow() {
  modalLogin.style.visibility = "hidden";
  modalRegister.style.visibility = "hidden";
  formulario.style.visibility = "hidden";
  fondo.style.display = "none";
}

let loginBtnSubmit = document.querySelector("#login");
let registerBtnSubmit = document.querySelector("#register");

registerBtnSubmit.addEventListener("click", closeWindow);

let emailInput = document.getElementById("email");
let pwdInput = document.getElementById("password");
let pwdRepeatInput = document.getElementById("passRepeat");
let divInfo = document.querySelector("#info");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  if (pwdInput.value.length >= 8 && pwdRepeatInput.value === pwdInput.value) {
    divInfo.innerHTML = `<h2>Correo: ${emailInput.value}</h2>
                    <h2>Contraseña: ${pwdInput.value}</h2>`;
    modalLogin.style.visibility = "hidden";
    modalRegister.style.visibility = "hidden";
    formulario.style.visibility = "hidden";
    fondo.style.display = "none";
  }
});

//generando funcion para que identifique si tiene @ o .
emailInput.onblur = function () {
  console.log(emailInput.value);

  if (emailInput.value == "") {
    divError.innerHTML = "Introduzca su correo electrónico";
  }
  if (!emailInput.value.includes("@")) {
    emailInput.classList.add("invalid");
    divError.innerHTML = "Por favor introduzca un correo válido";
  }

  if (!emailInput.value.includes(".")) {
    emailInput.classList.add("invalid");
    divError.innerHTML = "Por favor introduzca un correo válido";
  }
};

pwdInput.addEventListener("input", checkLength);

//tamano minimo es 8
function checkLength(e) {
  let pass = e.target.value;
  if (pass.length < 8) {
    divError.innerHTML = "Introduzca una contraseña de minimo 8 caracteres";
  } else {
    divError.innerHTML = "";
  }
}

pwdInput.onfocus = function () {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    divError.innerHTML = "";
  }
};

//si ya contiene la clase invalido quita el mensaje para que usuario lo intente de nuevo
emailInput.onfocus = function () {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    divError.innerHTML = "";
  }
};

//Si los valores de los campos de contraseña y repetir contraseña no son iguales se deberá mostrar de alguna manera.

pwdRepeatInput.onblur = function () {
  if (pwdRepeatInput.value != pwdInput.value) {
    divError.innerHTML =
      "La contraseña ingresada es distinta, ingrese la misma contraseña";
    pwdRepeatInput.classList.add("invalid");
  }
};

//si ya contiene la clase invalido quita el mensaje para que usuario lo intente de nuevo
pwdRepeatInput.onfocus = function () {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    divError.innerHTML = "";
  }
};
