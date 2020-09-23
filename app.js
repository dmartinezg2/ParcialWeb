const urlJSON =
  "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";
const burgersButton = document.getElementById("burgers");
const tacosButton = document.getElementById("tacos");
const saladsButton = document.getElementById("salads");
const dessertsButton = document.getElementById("desserts");
const drinkButton = document.getElementById("drinks");
const carrito = document.getElementById("shoppingCart");

burgersButton.onclick = async function showBurguers() {
  const response = await fetch(urlJSON);
  let obj = await response.json();
  let indice = 0;
  //Nomrbe del submenu
  let name = obj[indice].name;
  document.getElementById("tituloProducto").textContent = name;
  let bArray = obj[indice].products;
  let tab = `<div class="card-deck ">`;
  for (let i in bArray) {
    if (i % 4 != 0 && i != 0) {
      tab += `
          <div class="col-3">
              <div class="card" Style="height:100% margin-top=10px">
                  <img class="card-img-top" src="${bArray[i].image}" alt="Card image cap" height=250 widht=250>
                  <div class="card-body">
                  <h5 class="card-title">${bArray[i].name}</h5>
                  <p class="card-text">${bArray[i].description}.</p>
                  <h6 class="card-title">Price: ${bArray[i].price} $</h5>
                  <button id="button${i} type="button" class="btn btn-dark" onclick=agregarAlCarrito('${indice + ":" + i}')>Add to cart</button>
                  </div>
              </div> 
          </div>
          `;
    } else {
      tab += `</div> <br>`;
      tab += `<div class="card-deck ">`;
      tab += `
        <div class="col-3">
            <div class="card" Style="height:100% margin-top=10px">
                <img class="card-img-top" src="${bArray[i].image}" alt="Card image cap" height=250 widht=250>
                <div class="card-body">
                <h5 class="card-title">${bArray[i].name}</h5>
                <p class="card-text">${bArray[i].description}.</p>
                <h6 class="card-title">Price: ${bArray[i].price} $</h5>
                <button id="button${i} type="button" class="btn btn-dark" onclick=agregarAlCarrito('${indice + ":" + i}')>Add to cart</button>
                </div>
            </div> 
        </div>
        `;
    }
  }
  tab += `</div>`;
  document.getElementById("productos").innerHTML = tab;
};

tacosButton.onclick = async function showTacos() {
  const response = await fetch(urlJSON);
  let obj = await response.json();
  let indice = 1;
  //Nomrbe del submenu
  let name = obj[indice].name;
  document.getElementById("tituloProducto").textContent = name;
  let bArray = obj[indice].products;
  let tab = `<div class="card-deck ">`;
  for (let i in bArray) {
    if (i % 4 != 0 && i != 0) {
      tab += `
            <div class="col-3">
                <div class="card" Style="height:100% margin-top=10px">
                    <img class="card-img-top" src="${bArray[i].image}" alt="Card image cap" height=250 widht=250>
                    <div class="card-body">
                    <h5 class="card-title">${bArray[i].name}</h5>
                    <p class="card-text">${bArray[i].description}.</p>
                    <h6 class="card-title">Price: ${bArray[i].price} $</h5>
                    <button id="button${i} type="button" class="btn btn-dark" onclick=agregarAlCarrito('${indice + ":" + i}')>Add to cart</button>
                    </div>
                </div> 
            </div>
            `;
    } else {
      tab += `</div> <br>`;
      tab += `<div class="card-deck ">`;
      tab += `
          <div class="col-3">
              <div class="card" Style="height:100% margin-top=10px">
                  <img class="card-img-top" src="${bArray[i].image}" alt="Card image cap" height=250 widht=250>
                  <div class="card-body">
                  <h5 class="card-title">${bArray[i].name}</h5>
                  <p class="card-text">${bArray[i].description}.</p>
                  <h6 class="card-title">Price: ${bArray[i].price} $</h5>
                  <button id="button${i} type="button" class="btn btn-dark" onclick=agregarAlCarrito('${indice + ":" + i}')>Add to cart</button>
                  </div>
              </div> 
          </div>
          `;
    }
  }
  tab += `</div>`;
  document.getElementById("productos").innerHTML = tab;
};
saladsButton.onclick = async function showSalads() {
  const response = await fetch(urlJSON);
  let obj = await response.json();
  let indice = 2;
  //Nomrbe del submenu
  let name = obj[indice].name;
  document.getElementById("tituloProducto").textContent = name;
  let bArray = obj[indice].products;
  let tab = `<div class="card-deck ">`;
  for (let i in bArray) {
    if (i % 4 != 0 && i != 0) {
      tab += `
            <div class="col-3">
                <div class="card" Style="height:100% margin-top=10px">
                    <img class="card-img-top" src="${bArray[i].image}" alt="Card image cap" height=250 widht=250>
                    <div class="card-body">
                    <h5 class="card-title">${bArray[i].name}</h5>
                    <p class="card-text">${bArray[i].description}.</p>
                    <h6 class="card-title">Price: ${bArray[i].price} $</h5>
                    <button id="button${i} type="button" class="btn btn-dark" onclick=agregarAlCarrito('${indice + ":" + i}')>Add to cart</button>
                    </div>
                </div> 
            </div>
            `;
    } else {
      tab += `</div> <br>`;
      tab += `<div class="card-deck ">`;
      tab += `
          <div class="col-3">
              <div class="card" Style="height:100% margin-top=10px">
                  <img class="card-img-top" src="${bArray[i].image}" alt="Card image cap" height=250 widht=250>
                  <div class="card-body">
                  <h5 class="card-title">${bArray[i].name}</h5>
                  <p class="card-text">${bArray[i].description}.</p>
                  <h6 class="card-title">Price: ${bArray[i].price} $</h5>
                  <button id="button${i} type="button" class="btn btn-dark" onclick=agregarAlCarrito('${indice + ":" + i}')>Add to cart</button>
                  </div>
              </div> 
          </div>
          `;
    }
  }
  tab += `</div>`;
  document.getElementById("productos").innerHTML = tab;
};
dessertsButton.onclick = async function showDesserts() {
  const response = await fetch(urlJSON);
  let obj = await response.json();
  let indice = 3;
  //Nomrbe del submenu
  let name = obj[indice].name;
  document.getElementById("tituloProducto").textContent = name;
  let bArray = obj[indice].products;
  let tab = `<div class="card-deck ">`;
  for (let i in bArray) {
    if (i % 4 != 0 && i != 0) {
      tab += `
            <div class="col-3">
                <div class="card" Style="height:100% margin-top=10px">
                    <img class="card-img-top" src="${bArray[i].image}" alt="Card image cap" height=250 widht=250>
                    <div class="card-body">
                    <h5 class="card-title">${bArray[i].name}</h5>
                    <p class="card-text">${bArray[i].description}.</p>
                    <h6 class="card-title">Price: ${bArray[i].price} $</h5>
                    <button id="button${i} type="button" class="btn btn-dark" onclick=agregarAlCarrito('${indice + ":" + i}')>Add to cart</button>
                    </div>
                </div> 
            </div>
            `;
    } else {
      tab += `</div> <br>`;
      tab += `<div class="card-deck ">`;
      tab += `
          <div class="col-3">
              <div class="card" Style="height:100% margin-top=10px">
                  <img class="card-img-top" src="${bArray[i].image}" alt="Card image cap" height=250 widht=250>
                  <div class="card-body">
                  <h5 class="card-title">${bArray[i].name}</h5>
                  <p class="card-text">${bArray[i].description}.</p>
                  <h6 class="card-title">Price: ${bArray[i].price} $</h5>
                  <button id="button${i} type="button" class="btn btn-dark" onclick=agregarAlCarrito('${indice + ":" + i}')>Add to cart</button>
                  </div>
              </div> 
          </div>
          `;
    }
  }
  tab += `</div>`;
  document.getElementById("productos").innerHTML = tab;
};
drinkButton.onclick = async function showDrinks() {
  const response = await fetch(urlJSON);
  let obj = await response.json();
  let indice = 4;
  //Nomrbe del submenu
  let name = obj[indice].name;
  document.getElementById("tituloProducto").textContent = name;
  let bArray = obj[indice].products;
  let tab = `<div class="card-deck ">`;
  for (let i in bArray) {
    if (i % 4 != 0 && i != 0) {
      tab += `
            <div class="col-3">
                <div class="card" Style="height:100% margin-top=10px">
                    <img class="card-img-top" src="${bArray[i].image}" alt="Card image cap" height=250 widht=250>
                    <div class="card-body">
                    <h5 class="card-title">${bArray[i].name}</h5>
                    <p class="card-text">${bArray[i].description}.</p>
                    <h6 class="card-title">Price: ${bArray[i].price} $</h5>
                    <button id="button${i} type="button" class="btn btn-dark" onclick=agregarAlCarrito('${indice + ":" + i}')>Add to cart</button>
                    </div>
                </div> 
            </div>
            `;
    } else {
      tab += `</div> <br>`;
      tab += `<div class="card-deck ">`;
      tab += `
          <div class="col-3">
              <div class="card" Style="height:100% margin-top=10px">
                  <img class="card-img-top" src="${bArray[i].image}" alt="Card image cap" height=250 widht=250>
                  <div class="card-body">
                  <h5 class="card-title">${bArray[i].name}</h5>
                  <p class="card-text">${bArray[i].description}.</p>
                  <h6 class="card-title">Price: ${bArray[i].price} $</h5>
                  <button id="button${i} type="button" class="btn btn-dark" onclick=agregarAlCarrito('${indice + ":" + i}')>Add to cart</button>
                  </div>
              </div> 
          </div>
          `;
    }
  }
  tab += `</div>`;
  document.getElementById("productos").innerHTML = tab;
};

let articulos = 0;
let productosCarrito = [];
let items = 0;
//Esta función no se llama dentro del javascript pero la llama el html, ignorar el error
async function agregarAlCarrito(pnum) {
  //Se actualiza el valor de los items
  articulos++;
  document.getElementById("shopC").textContent = articulos + " items";
  // Se agrega el item al arreglo de productos.
  let tipoComida = parseInt(pnum.substring(0, 1), 10);
  let productoEspecifico = parseInt(pnum.substring(2, 3), 10);
  const response = await fetch(urlJSON);
  let obj = await response.json();
  let precioProducto = obj[tipoComida].products[productoEspecifico].price;
  let nombreProducto = obj[tipoComida].products[productoEspecifico].name;

  //Si no se ha agregado nada
  if (productosCarrito.length == 0) {
    items += 1;
    productosCarrito.push({
      item: items,
      name: nombreProducto,
      price: precioProducto,
      quantity: 1,
    });
  }
  //YA se han agregado productos
  else {
    let encontro = false;
    for (let u in productosCarrito) {
      let prod = productosCarrito[u];
      if (prod.name === nombreProducto) {
        encontro = true;
        prod.quantity = prod.quantity + 1;
      }
    }
    if (!encontro) {
      items += 1;
      productosCarrito.push({
        item: items,
        name: nombreProducto,
        price: precioProducto,
        quantity: 1,
      });
    }
  }
}

carrito.onclick = function showCart() {
  document.getElementById("tituloProducto").textContent = "Order Detail";
  if (productosCarrito.length == 0) {
    tab += `<h2>No se ha agregado nada al carrito</h2>`;
  }
  let tab = `
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Qty.</th>
      <th scope="col">Description</th>
      <th scope="col">Unit Price</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    `;
  let total = 0;
  for (let i in productosCarrito) {
    total += productosCarrito[i].price * productosCarrito[i].quantity;
    tab += `<tr>
                <th scope="row">${i}</th>
                <td>${productosCarrito[i].quantity}</td>
                <td>${productosCarrito[i].name}</td>
                <td>${productosCarrito[i].price}</td>
                <td>${(productosCarrito[i].price * productosCarrito[i].quantity).toFixed(2)}</td>
            </tr>`;
  }
  tab += `</tbody>
    </table>`;
  document.getElementById("productos").innerHTML = tab;
  let row = `
        <div class="col">
            <h8 id="totalProductos">Total: $</h8>
        </div>
        <div class="col-6"></div>
        <div class="col">
            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal">Cancel</button>
            <button type="button" class="btn btn-outline-secondary" onclick=sendOrder()>Confirm</button>
        </div>`;
  document.getElementById("filaOrden").innerHTML = row;
  document.getElementById("totalProductos").textContent =
    "Total: $" + total.toFixed(2);
};

//Eslint manda error porque no se llama la función localmente sin emabrgo el html le hace el llamado, ignorar el error
function sendOrder() { 
  console.log(productosCarrito);
  productosCarrito = [];
  let tab = `<h2>Order confirmed, check the console to see the products ordered.</h2>`;
  document.getElementById("productos").innerHTML = tab;
  document.getElementById("totalProductos").textContent = "Total: $";
  document.getElementById("shopC").textContent="0 items"
  
}

const cancel = document.getElementById("cancelOrder");

cancel.onclick = function cancelOrder() {
  productosCarrito = [];
  let tab = ` <h2>There are no products in the shopping cart, open a menu to start shopping</h2>`;
  document.getElementById("productos").innerHTML = tab;
  document.getElementById("totalProductos").textContent = "Total: $";
  document.getElementById("shopC").textContent="0 items"
};
