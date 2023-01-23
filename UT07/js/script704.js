let resultados = document.querySelector(".resultados");

document.getElementById("enviar").addEventListener("click", mostrarClima);

function mostrarClima(event) {
  event.preventDefault();
  let lat = document.getElementById("latitud").value;
  let lon = document.getElementById("longitud").value;
  let key = document.getElementById("key").value;

  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=es`;

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.weather[0].description);
      resultados.innerHTML = `
      <h1>Resultados:</h1>
        <img src="http://openweathermap.org/img/w/${json.weather[0].icon}.png" alt="imagen-clima">
        <h2>Descripción: ${json.weather[0].description}</h2>
        `;
    })

    .catch((error) => console.log(error));
}
