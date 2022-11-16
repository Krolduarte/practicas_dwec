//Listado de productos
let products = [
  {
    id: "1000",
    product: "Fresas de Huelva",
    price: 410,
    image: "https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/fresas.jpg",
  },
  {
    id: "1001",
    product: "Kiwi amarillo",
    price: 245,
    image: "https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/kiwis.jpg",
  },
  {
    id: "1002",
    product: "Manzana roja",
    price: 195,
    image:
      "https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_rojas.jpg",
  },
  {
    id: "1003",
    product: "Manzana verde",
    price: 170,
    image:
      "https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_verdes.jpg",
  },
  {
    id: "1004",
    product: "Melón",
    price: 135,
    image: "https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/melones.jpg",
  },
  {
    id: "1005",
    product: "Naranja valenciana",
    price: 160,
    image:
      "https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/naranjas.jpg",
  },
  {
    id: "1006",
    product: "Pera conferencia",
    price: 210,
    image: "https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/peras.jpg",
  },
  {
    id: "1007",
    product: "Plátano",
    price: 260,
    image:
      "https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/platanos.jpg",
  },
  {
    id: "1008",
    product: "Sandía",
    price: 115,
    image: "https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/sandias.jpg",
  },
  {
    id: "1009",
    product: "Uva",
    price: 195,
    image: "https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/uvas.jpg",
  },
  {
    id: "1010",
    product: "Aguacate",
    price: 415,
    image:
      "https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/aguacate.jpg",
  },
  {
    id: "1011",
    product: "Cereza del Bierzo",
    price: 520,
    image: "https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/cereza.jpg",
  },
  {
    id: "1012",
    product: "Granada",
    price: 310,
    image: "https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/granada.jpg",
  },
  {
    id: "1013",
    product: "Limón",
    price: 155,
    image: "https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/limon.jpg",
  },
  {
    id: "1014",
    product: "Nectarina",
    price: 180,
    image:
      "https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/nectarina.jpg",
  },
  {
    id: "1015",
    product: "Piña",
    price: 320,
    image:
      "https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/pineapple.jpg",
  },
];
//Ejemplo de un producto
//   let products = [
//     {
//       id: '1000',
//       product: 'Fresas de Huelva',
//       price: 410,
//       image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/fresas.jpg',
//     },

//Carrito de la compra:

let divCartSection = document.getElementById("cart-section");
let h1 = document.createElement("h1");
h1.textContent = "Carrito";
//creando tabla
let table = document.createElement("table");
//creando un tr y 3 th
let tr = document.createElement("tr");
let thCant = document.createElement("th");
let thProducto = document.createElement("th");
let thPrecio = document.createElement("th");

thCant.textContent = "Cant";
thProducto.textContent = "Producto";
thPrecio.textContent = "Precio";

divCartSection.append(h1);
divCartSection.append(table);
table.append(tr);
tr.append(thCant);
tr.append(thProducto);
tr.append(thPrecio);
let cantidad = 1;
//  function createProduct(product,image,price,id){

products.forEach((producto) => {
  //creando mainDiv donde irea la clase product
  let mainDiv = document.getElementById("products-section");
  let divProduct = document.createElement("div");
  divProduct.classList.add("product");

  mainDiv.append(divProduct);

  //dentro de ese mainDiv hay un elemento img  con clase .product-foto y otro div con clase .product-data

  let img = document.createElement("img");
  img.classList.add("product-foto");
  img.src = producto.image;
  divProduct.append(img);

  let divProductData = document.createElement("div");
  divProductData.classList.add("product-data");
  divProduct.append(divProductData);

  //dentro de productdata 1 div: nombre del producto, y otro div para precio y boton compra

  let spanNombreProducto = document.createElement("span");
  spanNombreProducto.classList.add("fruit-name");
  spanNombreProducto.textContent = producto.product;
  divProductData.append(spanNombreProducto);

  //div para precio y boton
  let divPrecioBotonCompra = document.createElement("div");
  divPrecioBotonCompra.classList.add("boton-compra");

  divProductData.append(divPrecioBotonCompra);

  let spanPrecio = document.createElement("span");
  spanPrecio.classList.add("price");
  spanPrecio.classList.add("pricebtn");
  let euro = "€/Kg";

  spanPrecio.textContent = producto.price + euro;
  divPrecioBotonCompra.append(spanPrecio);

  let spanBotonCompra = document.createElement("span");
  spanBotonCompra.classList.add("btn");
  spanBotonCompra.classList.add("pricebtn");
  spanBotonCompra.classList.add("btn-add-product");
  spanBotonCompra.textContent = "Añadir";

  //evento para que sume al carrito
  spanBotonCompra.addEventListener("click", () => {
    let trproducto = document.createElement("tr");
    let tdCant = document.createElement("td");
    let tdProducto = document.createElement("td");
    let tdPrecio = document.createElement("td");
    table.append(trproducto);
  
  
  
      tdCant.textContent= cantidad;
      trproducto.append(tdCant);
      trproducto.append(tdProducto);  
      trproducto.append(tdPrecio);

      tdProducto.textContent= producto.product;
      tdPrecio.textContent= producto.price;

  
    

      
     
     
 
    
  });
  //   divBotonCompra.setAttribute("data-id-product");

  divPrecioBotonCompra.append(spanBotonCompra);
});

//  }




