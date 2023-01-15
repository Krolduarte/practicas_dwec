let url = "https://swapi.dev/api/planets/?page=1";
let lastDigit = url.charAt(url.length - 1);
console.log(lastDigit);
fetchPeople(url);
let body = document.getElementsByTagName("body")[0];
let table = document.createElement("table");

//funcion para hacer fetch
function fetchPeople(url) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      table.innerHTML = `<table>
        <tr>
          <th>Name</th>
          <th>Population</th>
          <th>Climate</th>
          <th>Terrain</th>
        </tr>
      </table>`;

      json.results.forEach((item) => {
        let tr = document.createElement("tr");
        
        let td = document.createElement("td");
        td.innerHTML = ` ${item.name}`;

        let td2 = document.createElement("td");
        td2.innerHTML = ` ${item.population}`;

        let td3 = document.createElement("td");
        td3.innerHTML = ` ${item.climate}`;

        let td4 = document.createElement("td");
        td4.innerHTML = ` ${item.terrain}`;

        //creando filas
        tr.append(td);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        table.append(tr);
        body.append(table);
      });

      table.innerHTML += ` <tr class="botones">
       <td colspan='2'>  
       <span id="previous">Previous</span>
     
       </td>
       <td colspan='2'>
       <span id="next">Next</span>
       </td>
     </tr>`;

      //boton previous
      let previous = document.querySelector("#previous");
      previous.addEventListener("click", goBack);

      let next = document.querySelector("#next");
      next.addEventListener("click", goNext);

      function goBack() {
        if (lastDigit != 1) {
          lastDigit--;
          fetchPeople(`https://swapi.dev/api/planets/?page=${lastDigit}`);
        }
      }

      function goNext() {
        if (lastDigit != 6) {
          lastDigit++;
          fetchPeople(`https://swapi.dev/api/planets/?page=${lastDigit}`);
        }
      }
    })
    .catch((error) => console.log(error));
}
