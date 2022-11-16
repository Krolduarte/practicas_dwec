
// let meses = document.getElementById('months');
// //otra opcion: let numbers = document.querySelector('#numbers');

// let months= ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

// // Por comodidad se puede usar let months = 'Enero Febrero'.split(' ');
// // Tambien se puede hacer con un forEach
// // months.forEach((month,index) =>{
// //     meses.innerHTML += `<div class='month'>
// //     <div class='month-number'>${index+1}</div>
// //     <div class='month-name'> ${month}</div>
// //     </div>`;
// // });


// for(let i=1; i<=12;i++){
//     meses.innerHTML += `<div class='month'>
//                           <div class='month-number'>${i}</div>
//                           <div class='month-name'> ${months[i-1]}</div>
//                           </div>`;
// }

//con create element:

let meses =document.querySelector('#months');  //solo devuelve el primero queyselector

let monthlist= ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

monthlist.forEach((month,index) =>{
    let mainDiv =document.createElement('div');
    mainDiv.classList.add("month");

   let numberDiv = document.createElement('div');
   numberDiv.textContent= index+1;

   let nameDiv = document.createElement('div');
    nameDiv.textContent= month;
 
    numberDiv.classList.add("month-number");
    nameDiv.classList.add("month-name");

    mainDiv.append(numberDiv);
    mainDiv.append(nameDiv);
    meses.append(mainDiv);

})
