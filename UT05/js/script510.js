let form = document.querySelector('#form');
form.addEventListener("submit", function (event) {
    event.preventDefault();
}
);

let resultado = document.querySelector('#resultado');
resultado.innerHTML= "";

//FECHA
let fecha = document.querySelector('#fecha');  
let patronFecha = /^(0?[1-9]|[12][0-9]|3[01])[\\/](0?[1-9]|1[012])[\\/](19[0-9]{2}|20[0-1]{1}[0-9]{1}|202[0-2])$/;
fecha.addEventListener('change',revisarfecha);

function revisarfecha(){
    if(patronFecha.test(fecha.value)){
        resultado.innerHTML = `<h2>Fecha ingresada correctamente</h2>`;
    }else{
        resultado.innerHTML = `<h2>Fecha NO ha sido ingresada correctamente</h2>`;
    }
}


//TELÉFONO  ejemplo: (+34)916 343 939
let telefono= document.querySelector('#telefono');
let patronTelefono = /^\(\+(34)\) ?[98]{1}[1-9]{1}[0-9]{1} ?([0-9]{3} ?){2}$/;
telefono.addEventListener('change',revisar);

function revisar(){
    if(patronTelefono.test(telefono.value)){
        resultado.innerHTML = `<h2>Telefono ingresado correctamente</h2>`;
    }else{
        resultado.innerHTML = `<h2>Telefono NO ha sido ingresado correctamente</h2>`;
    }
}

//EMAIL
let email = document.querySelector('#email');
let patronEmail = /[a-z0-9\._-]+@([a-zA-Z]+\.)+((com)|(org)|(es))$/;
email.addEventListener('change',revisarTel);

function revisarTel(){

    if(patronEmail.test(email.value)){
        resultado.innerHTML = `<h2>Email ingresado correctamente</h2>`;
    }else{
        resultado.innerHTML = `<h2>Email NO ha sido ingresado correctamente</h2>`;
    }
}


 //CODIGO COLOR
let codigoColor = document.querySelector('#codigo');
//  
let patronCodigo = /#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/g;
codigoColor.addEventListener('change',revisarColor);

function revisarColor(){
    if(patronCodigo.test(codigoColor.value)){
        resultado.innerHTML = `<h2>codigo de color ingresado correctamente</h2>`;
    }else{
        resultado.innerHTML = `<h2>codigo de color NO ha sido ingresado correctamente</h2>`;
    }
}
//IP
let ip = document.querySelector('#ip');
let patronIp = /((^(25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([1-9][0-9])|([0-9])\.)){3}(25[0-5])|(2[0-4][0-9])|(1[0-9][0-9])|([1-9][0-9])|([0-9])$/;

ip.addEventListener('change',revisarIP);

function revisarIP(){
    if(patronIp.test(ip.value)){
        resultado.innerHTML = `<h2>IP ingresado correctamente</h2>`;
    }else{
        resultado.innerHTML = `<h2>IP NO ha sido ingresada correctamente</h2>`;
    }
}

 //URL
let url = document.querySelector('#url');
// let patronURLejemplo= /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;
let patronURL = /(http(s)?):\/\/(www\.)?[a-zA-Z]+\.(com)|(es)/;

url.addEventListener('change',revisarUrl);

function revisarUrl(){
    if(patronURL.test(url.value)){
        resultado.innerHTML = `<h2>URL ingresada correctamente</h2>`;
    }else{
        resultado.innerHTML = `<h2>URL NO ha sido ingresada correctamente</h2>`;
    }
}


//CONTRASEÑA
// Una contraseña que contenga por lo menos una minúscula, una mayúscula, un dígito y tenga una longitud mínima de 8 caracteres. Ejemplo: Villabalter1
let pwd = document.querySelector('#pwd');

let patronpwd = /(.*a-zA-Z0-9){8,}$/;
pwd.addEventListener('change',revisarpwd);

function revisarpwd(){
    if(patronpwd.test(pwd.value)){
        resultado.innerHTML = `<h2>Contraseña ingresada correctamente</h2>`;
    }else{
        resultado.innerHTML = `<h2>Contraseña NO ha sido ingresada correctamente</h2>`;
    }
}

//NIF
let nif = document.querySelector('#nif');
let patronNIF = /[0-9]{8}[a-zA-Z]{1}/;

nif.addEventListener('change',revisarNif);

function revisarNif(){
    if(patronNIF.test(nif.value)){
        resultado.innerHTML = `<h2>Nif ingresado correctamente</h2>`;
    }else{
        resultado.innerHTML = `<h2>Nif NO ha sido ingresada correctamente</h2>`;
    }
}





//COCHE MATRICULA   4 numeros 3 letras
let matricula = document.querySelector('#matricula');
let patronMatricula = /[0-9]{4}[A-Z]{3}/;

matricula.addEventListener('change',revisarMatricula);

function revisarMatricula(){
    if(patronMatricula.test(matricula.value)){
        resultado.innerHTML = `<h2>Matricula ingresada correctamente</h2>`;
    }else{
        resultado.innerHTML = `<h2>Matricula NO ha sido ingresada correctamente</h2>`;
    }
}


// function matchesPattern(elemento,patron){
//     if($elemento.value.match(/patron/)){
//         resultado.innerHTML += `<h2>${elemento} ingresado correctamente</h2>`;
//     }else{
//         resultado.innerHTML += `<h2>${elemento} NO ha sido ingresado correctamente</h2>`;
//     }
// }