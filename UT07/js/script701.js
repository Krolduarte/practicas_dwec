// const results =  [
//     {
//       name: "Luke Skywalker",
//       height: 172,
//       mass: 77,
//       hair_color: "blond",
//       skin_color: "fair",
//       eye_color: "blue",
//       birth_year: "19BBY",
//       gender: "male",
//       homeworld: {
//         name: "Tatooine",
//         rotation_period: 23,
//         orbital_period: 304,
//         diameter: 10465,
//         climate: "arid",
//         gravity: "1 standard",
//         terrain: "desert",
//         surface_water: 1,
//         population: 200000,
//       },
//     },

let url = "https://swapi.dev/api/planets";
let table = document.getElementsByTagName("table")[0];

fetch(url)
  .then((response) => response.json())

  .then((json) => {
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

      tr.append(td);
      tr.append(td2);
      tr.append(td3);
      tr.append(td4);

      table.append(tr);
    });
  })
  .catch((error) => console.log(error));