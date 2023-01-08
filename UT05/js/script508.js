let comunidadAutonoma = [
  {
    name: "Castilla-León",
    provincias: {
      León: ["Barrios de Luna", "Acebedo", "Almanza"],
      Ávila: ["Aldeaseca", "Albornos", "Avellaneda"],
      Burgos: ["Abajas", "Avillos", "Arandilla"],
    },
  },

  {
    name: "Andalucía",
    provincias: {
      Almeria: ["Abla", "Abrucena", "Adra"],
      Cádiz: ["Bornos", "Benaocaz", "Algar"],
      Córdoba: ["Añora", "Alcaracejos", "Almodóvar del Rio"],
    },
  },

  {
    name: "Cataluña",
    provincias: {
      Barcelona: ["Cubellas", "Castelldefels", "Abrera"],
      Girona: ["Agullana", "Alfar", "Alp"],
      Tarragona: ["Albió", "Albinyana", "Aiguaviva"],
    },
  },
  {
    name: "Galicia",
    provincias: {
      Coruña: ["Mañón", "Cerdido", "Ortigueira"],
      Lugo: ["Baleira", "Baralla", "Alfoz"],
      Pontevedra: ["Lalín", "Silleda", "Golada"],
    },
  },
];

let selectComunidad = document.querySelector("#comunidad");
let selectProvincia = document.querySelector("#provincia");
let selectLocalidad = document.querySelector("#localidad");

selectComunidad.addEventListener("change", (event) => {
   selectProvincia.innerHTML='';
   selectLocalidad.innerHTML='';
   let nombreProvincia = comunidadAutonoma.find((element) => element.name ==event.target.value);
   let opciones = Object.keys(nombreProvincia.provincias);
 
  opciones.map((item)=>{
   let option = document.createElement("option");
   option.value= item;
   option.text= item;
   selectProvincia.add(option);

  })
});

selectProvincia.addEventListener("change", (event) => {
   selectLocalidad.innerHTML='';
   

  comunidadAutonoma
    .find(item => item.provincias[event.target.value])
    .provincias[event.target.value]
    .map((item)=>{
      let option = document.createElement("option");
      option.value= item;
      option.text= item;
      selectLocalidad.add(option);

  })
})








