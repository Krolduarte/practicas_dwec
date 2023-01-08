//Buscando input en que usuario ingresa su correo
let emailInput = document.getElementById("email");
let pwdInput = document.getElementById("password");
let pwdRepeatInput = document.getElementById("passRepeat");
let form = document.querySelector("#formulario");
let divError = document.querySelector("#error");
let body = document.querySelector("#body");
body.append(divError);

//generando funcion para que identifique si tiene @ o .
emailInput.onblur = function () {
  console.log(emailInput.value);

if (emailInput.value == ''){
  divError.innerHTML = "Introduzca su correo electrónico";
}
  if (!emailInput.value.includes('@') ) {
     emailInput.classList.add("invalid");
    divError.innerHTML = "Por favor introduzca un correo válido";
  }

  if (!emailInput.value.includes('.') ) {
    emailInput.classList.add("invalid");
   divError.innerHTML = "Por favor introduzca un correo válido";
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

pwdRepeatInput.onfocus = function () {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    divError.innerHTML = "";
  }
};

//A medida que el usuario vaya introduciendo la contraseña se mostrará de alguna forma la seguridad de la misma (muy débil, débil, aceptable, fuerte, muy segura).


pwdInput.addEventListener("input", checkSecurity);

function checkSecurity(e){
let pass = e.target.value;

let security= 0;
let numDigits = 0;
let numMinus = 0;
let numMayus = 0;
let numSimb = 0;

let abc = "abcdefghijklmnopqrstuvwxyz";


pass.split('').forEach((car) => {
   numDigits +=  '0123456789'.includes(car) ? 1:0;
   numMinus +=  abc.includes(car) ? 1:0;
   numMayus +=  abc.toUpperCase().includes(car) ? 1:0;
});
numSimb = pass.length - (numDigits + numMinus + numMayus);


//longitud
security += Math.floor(pass.length / 3);
security += numDigits > 0 ? 1 : 0;
security += numMinus > 0 ? 1 : 0;
security += numMayus > 0 ? 1 : 0;
security += numSimb > 0 ? 1 : 0;

console.log(`Contraseña" ${pass} `);
console.log(`Security ${security}`);


//Funcion que revise la seguridad en cuanto al contenido de digitos, mayusculas, minusculas y simbolos

if (security>0 && security<5){
    divError.innerHTML ="Contraseña muy debil";
    divError.style.color="violet";
}
if(security==5){
    divError.innerHTML ="Contraseña debil";
    divError.style.color="red";
}

if(security==6){
    divError.innerHTML ="Contraseña aceptable";
    divError.style.color="orange";
}
if(security==7){
    divError.innerHTML ="Contraseña fuerte";
    divError.style.color="yellowgreen";
}

if(security>7){
    divError.innerHTML ="Contraseña muy segura";
    divError.style.color="green";
}
// }

}
// Cuando el usuario pulse el botón de enviar se mostrará por consola el correo electrónico y la contraseña del usuario.
let divInfo = document.querySelector('#info');
form.addEventListener('submit',function(event){
  event.preventDefault()
  console.log(emailInput);
divInfo.innerHTML =`<h2>Correo: ${emailInput.value}</h2>
                    <h2>Contraseña: ${pwdInput.value}</h2>` ;
})


