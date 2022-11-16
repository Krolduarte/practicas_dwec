// Practica:

// let numbers = document.getElementById('numbers');
// //otra opcion: let numbers = document.querySelector('#numbers');

// for(let i=0; i<=30;i++){
//     numbers.innerHTML += `<span class='number'>${i}</span>`;
// }

// Practica con createElement:
// añadir clases mejor con classlist no con Classname = 'number'

let numbers = document.getElementById("numbers");

for (let i = 1; i <= 30; i++) {
  let span = document.createElement("span");
  span.textContent = i;
  span.classList.add("number");
    numbers.append(span);
}
