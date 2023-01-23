document.getElementById("enviar").addEventListener("click", mostrarClima);

let resultados = document.querySelector(".resultados");

function mostrarClima(event) {
  event.preventDefault();
  let ciudad = document.getElementById("ciudad").value;
  let key = document.getElementById("key").value;
  let resultados= document.querySelector('.resultados');
  resultados.style.border='10px inset grey';

  let url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&limit=5&appid=${key}&lang=es`;

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
        console.log(json[0].lat);
        console.log(json[0].lon);
      let url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${json[0].lat}&lon=${json[0].lon}&appid=${key}&lang=es`;

      resultados.innerHTML = `
      <div class="ciudad"> ${json[0].name}</div>
    
        `;
      fetch(url2)
        .then((res) => res.json())
        .then((json) => {
          resultados.innerHTML += `
        <div class="icono-des"><img class="icon-descripcion"src="http://openweathermap.org/img/w/${json.weather[0].icon}.png" alt="imagen-clima"/></div>
        <h2> ${json.weather[0].description}</h2>
        <div><img class="icon"src="img/temperatura.png" alt="temperatura">${json.main.temp}</div>
        <div><b>Sensación Térmica:</b> ${json.main.feels_like}</div>
        <div><img class="icon"src="img/temperatura.png" alt="temperatura"> <span><img class="min"src="img/minus.png" alt="temperatura"/>${json.main.temp_min}</span> </div>
        <div><img class="icon"src="img/temperatura.png" alt="temperatura"><span><img class="max"src="img/plus.png" alt="temperatura">${json.main.temp_max}</span> </div>
       
        <div><img class="icon"src="img/humidity.png" alt="temperatura"><b>Humedad:</b> ${json.main.humidity}</div>
          `;
          if (json.snow["3h"]) {
            resultados.innerHTML += `
            <h2>Nieve en las últimas tres horas: ${json.snow["3h"]}</h2>`;
          } else {
            resultados.innerHTML += `
            <h2>Nieve en las últimas tres horas: Ninguna</h2>`;
          }

          if (json.rain) {
            resultados.innerHTML += `
            <h2>Nieve en las últimas tres horas: ${json.rain["3h"]}</h2>`;
          } else {
            resultados.innerHTML += `
            <h2>Lluvia en las últimas tres horas: Ninguna</h2>`;
          }
        })
        
    })
    .catch((error) => console.log(error));
}

// rain.3h    snow.3h
