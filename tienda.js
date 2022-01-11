

// Items y Carrito para menu y carro de compras
const items = document.getElementById ("items");
const shopCarrito =document.getElementById ("shopCarrito");
const URL = "./productos.json"



 // cargar el dom tomando los datos del archivo json 

  $.ajax({
    type: "GET",
    url: URL,
    dataType: "JSON",
    }).done ((productos) => {
  
      
        
  
  
        productos.forEach((info) => {
    
       
        // Columnas del menu
        const colDOM = document.createElement('div');
        colDOM.classList.add('col-12', info.tamaño ,);
        // items del menu
        const itemDOM = document.createElement('div');
        itemDOM.classList.add('item', 'shadow', 'mb-4',"bg-gradient");
        // Imagenes de los productos
        const imgDOM = document.createElement('img');
        imgDOM.classList.add('item-image',"shake-slow");
        imgDOM.setAttribute('src', info.imagen);
        // Titulo de los productos
        const titleDOM = document.createElement('h3');
        titleDOM.classList.add('item-title',);
        titleDOM.textContent = info.nombre;
        // Boton info producto
        const btnInfo = document.createElement('button')
        btnInfo.classList.add ('btn', 'bg-danger',`classProd${info.id}`,'infoBtn' );
        btnInfo.innerHTML = `Info ${info.icon} `;
        
        // Informacion producto
        const infoProducto = document.createElement("div")
        infoProducto.innerHTML= `
        <div style='display:none' id= 'idProd${info.id}' class= 'infoProducto'> ${info.infoProducto} </div> `;
  
        // Detalle de los productos
        const detailDOM = document.createElement('div');
        detailDOM.classList.add('item-details');
        // Anuncio de producto agregado
        const anuncioProdAdd = document.createElement("p");
        anuncioProdAdd.innerHTML= `<p style='display:none' class='anuncioAdd' id='positionAdd${info.id}'> Agregaste este producto   <a class='checkAdd'> &#9989 </a> </p>`
        // Precio de los productos
        const precioDOM = document.createElement('h4');
        precioDOM.classList.add('item-price', `priceAdd${info.id}` );
        precioDOM.textContent = '$ '+ info.precio ;
        // Boton de agregar productos
        const botonDOM = document.createElement('button');
        botonDOM.classList.add('item-button', 'btn', 'addToCart',`addProd${info.id}`);
        botonDOM.textContent = 'Agregar';
        botonDOM.setAttribute('marcador', info.id);
        
        // Insertamos en items (cards)
        itemDOM.appendChild(btnInfo);
        itemDOM.appendChild(titleDOM);
        itemDOM.appendChild(imgDOM);
        itemDOM.appendChild(infoProducto);
        itemDOM.appendChild(detailDOM);
        itemDOM.appendChild(anuncioProdAdd);
  
        
  
        // Insertamos en detalle de los productos
  
        detailDOM.appendChild(botonDOM);
        
        detailDOM.appendChild(precioDOM);
  
        // Insertamos los items en cada columna
       
        colDOM.appendChild(itemDOM);
        
        // Insertamos las columnas denntro del elemento items anteriormente declarado
        
        items.appendChild(colDOM);
  
      // cargamos jquery  
      $(document).ready(function(){
        
        // funcion para que mediante click nos muestre la info del producto
        $(`.classProd${info.id}`).click(()=>{
          
          //Animacion del contenido y boton toggle de info
          $(`#idProd${info.id}`).slideToggle(200)})
    
        })
        // funcion para que mediante click nos muestre el anuncio de producto agregado
        $(`.addProd${info.id}`).click(()=>{
  
          //Animacion del contenido y boton agregar junto con callback en carrito del anuncio
          $(`#positionAdd${info.id}`).fadeIn(200, ()=>{$("#addProdCarr").fadeIn(100)});
         
          $(`#positionAdd${info.id}`).fadeOut(500, ()=>{$("#addProdCarr").fadeOut(700)});
          
        })
  
      });
  
  
   // Carrito 
   const carritoDOM = document.createElement('section');
   carritoDOM.classList.add('container', 'bg-dark', 'bg-gradient', 'text-warning' ,'rounded-3','carritoBck' );
   // Barra de detalles precio0 casntidad y producto
   const productoDOM = document.createElement('h1');
   productoDOM.classList.add("text-center");
   productoDOM.innerHTML= `<h1 class="text-center colorTextOrange">CARRITO</h1>
   <hr>
   <div class="row">
       <div class="col-4">
           <div class="shopping-cart-header colorTextOrange">
               <h3>Producto</h6>
           </div>
       </div>
       <div class="col-4">
           <div class="shopping-cart-header colorTextOrange">
               <h3 class="text-truncate">Precio</h6>
           </div>
       </div>
       <div class="col-4">
           <div class="shopping-cart-header colorTextOrange">
               <h3>Cantidad</h6>
           </div>
       </div>
   </div>`;
  
  // Items del carrito
  const itemsCard = document.createElement('div');
  productoDOM.classList.add("shopping-cart-items", "itemsContainer");
  // Total mde carrito
  const totalCard = document.createElement('div');
  totalCard.classList.add("row");
  // Columna del total carrito
  const totalColCard = document.createElement('div');
  totalColCard.classList.add("col-12");
  // Contenido de total carrito
  const totalContenidoCard = document.createElement('div');
  totalContenidoCard.classList.add("shopping-cart-total", "d-flex", "align-items-center", "cardItems");
  
  totalContenidoCard.innerHTML = `<h3 class="mb-0">Total</h3>
  <h3 class="ml-4 mb-0 totalCarrito">$0</h3><p style='display: none' class='anuncioAdd ml-5' id='addProdCarr'> Agregaste un producto  
  <a class='checkAdd'> &#9989 </a> </p>
  <p style='display: none' class='anuncioAdd2 ml-5' id='removeProdCarr'> Quitaste un producto   <a class='checkAdd'> &#10060 </a></p>
  <p style='display: none' class='anuncioAdd3 ml-5' id='changeProdCarr'> Cambiaste la cantidad el producto <a class='checkAdd'> &#128260 </a></p>
  <p style='display: none' class='anuncioAdd4 ml-5' id='removeAllProds'>vaciaste el carro de compras<a class='checkAdd'> &#9940 </a></p>
  <button class=" ml-auto comprarButton btnComprar"  data-toggle="modal"
  data-target="#comprarModal">Comprar</button>
  <button class="  btnVaciar  vaciarCarro"> vaciar </button>
  
  `
  // Insertamos el contenido dentro de las columnas y las columnas dentro del row
  totalColCard.appendChild(totalContenidoCard);
  totalCard.appendChild(totalColCard);
  carritoDOM.appendChild(productoDOM)
  carritoDOM.appendChild(totalCard);
  
  // Insertamos todo dentro del elemento declarado anteriormente
  shopCarrito.appendChild(carritoDOM);
  
  
  
    })


// cargar funciones despues del dom
  
setTimeout(function cargarFunciones (){
 

//$('.addToCart').click(addCarritoClick );
$('.addToCart').click(addCarritoClick)

  
// Evento de comprar 
$(".comprarButton").click(comprarBotonClick)

// Seleccionamos el contendedor de los items
const itemsContainer = document.querySelector('.itemsContainer');


// Funcion para añadir mediante click al carrito y pasar parametros
function addCarritoClick(event) {

  
  const button = event.target;
  const item = button.closest('.item');

  const itemTitulo = item.querySelector('.item-title').textContent;
  
  const itemPrecio = item.querySelector('.item-price').textContent;
  
  const itemImagen = item.querySelector('.item-image').src;

 

  addCarritoItem(itemTitulo, itemPrecio, itemImagen);
}

// Funcion para añadir productos al carrito mediante evento ty que no se repitan
function addCarritoItem(itemTitulo, itemPrecio, itemImagen) {
  const elementosTitle = itemsContainer.getElementsByClassName(
    'itemTituloAdd'
  );
  for (let i = 0; i < elementosTitle.length; i++) {
    if (elementosTitle[i].innerText === itemTitulo) {
      let elementosCantidad = elementosTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.itemCantidad'
      );
      elementosCantidad.value++;
      cargarCarrito();
      
      
      return;
    }
  }

// Creamnos el producto a añadir que figura en el carrito 
// Utilizamos loas parametros anteriores tomados (titulo,imagen y precio)
// Tambien añadimos el boton de quitar del carrito
  const productoDOM = document.createElement('div');
  const shopCarrContenido = `
  <div class="row itemCarrShop colorTextOrange">
        <div class="col-4 ">
            <div class="shopping-cart-item itemsCard  ">
                <img src=${itemImagen} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title itemTituloAdd itemTitle text-truncate ml-3 mb-0">${itemTitulo}</h6>
            </div>
        </div>
        <div class="col-4">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom border-warning pb-2 pt-3">
                <p class="item-price mb-0 itemPrecio">${itemPrecio}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom border-warning pb-2 pt-3">
                <input class="inputCantidad itemCantidad bg-ligth border-dark" type="number"
                    value="1">
                
<button class="noselect buttonDelete "><span class="text " >Quitar</span><span class="icon  removeAddButt "><svg viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
            </div>
        </div>
    </div>`;
// Insertamos el anterior dentro del elemto producto donde aparecera cada iterm agregado
  productoDOM.innerHTML = shopCarrContenido;
  itemsContainer.append(productoDOM);


// Creamos las animaciones e interacciones de la funcion eliminarProducto
 
    $(".removeAddButt").click(eliminarProducto)
    
    $(".removeAddButt").click(()=>{$("#removeProdCarr").fadeIn(200); $("#removeProdCarr").fadeOut(700);})
   
// Creamos las animaciones e interacciones de la funcion cambioDeCantidad  
  
    $(".itemCantidad").change(cambioDeCantidad);
    $(".itemCantidad").change(()=>{$("#changeProdCarr").fadeIn(200);$("#changeProdCarr").fadeOut(700)})
   

  cargarCarrito();
}

// Funcion para actualizar el carrito y sus elementos
function cargarCarrito() {
  let total = 0;
  const totalCarrito = document.querySelector('.totalCarrito');

  const itemsCarrito = document.querySelectorAll('.itemCarrShop');

  itemsCarrito.forEach((shopItem) => {
    const elementosPrecio = shopItem.querySelector(
      '.itemPrecio'
    );
    const itemPrecio = Number(
      elementosPrecio.textContent.replace('$', '')
    );
    const elementosCantidad = shopItem.querySelector(
      '.itemCantidad'
    );
    const itemCantidad = Number(
      elementosCantidad.value
    );
    
    
    total = total + itemPrecio * itemCantidad;
    cargarLocalStore ()

    
  });
  totalCarrito.innerHTML = `$${total.toFixed(2)}`;
  localStorage.setItem ("Total", JSON.stringify(total))

    
    
  
  

}

// Funcion para cargar el localstorage
function cargarLocalStore (){

  const carroLS = [];

  const itemsACargar = document.querySelectorAll('.itemCarrShop');

  itemsACargar.forEach((shopItem) => {

    const carro = [];
    
    const precioLS = shopItem.querySelector(
      '.itemPrecio'
    );

    let precioItemLS = Number(precioLS.textContent.replace('$', '')
    );

    const cantidadLS = shopItem.querySelector(
      '.itemCantidad'
    );

   let cantidadItemLS = Number(cantidadLS.value
    );

    const title = shopItem.querySelector(
      ".itemTitle"
    );

    let tituloProducto = title.textContent;

    let subtotalItemsLS = precioItemLS * cantidadItemLS;

    
    localStorage.setItem (tituloProducto, "  Cantidad: "+ cantidadItemLS +"u   Precio por unidad:  $"+precioItemLS+"   Total "+tituloProducto+ "s:   $"+subtotalItemsLS)
   
     carro.push ("Producto: "+tituloProducto)
     carro.push ("Precio por unidad:  $"+ precioItemLS)
     carro.push ("Cantidad: "+cantidadItemLS+"u")
     carro.push ("Subtotal "+ tituloProducto+"s : $"+subtotalItemsLS)

      carroLS.push (carro );

    $(".removeAddButt").click(eliminarProducto,()=>{

    localStorage.removeItem (
    tituloProducto, "  Cantidad: "+ cantidadItemLS +"  Precio por unidad: $"+precioItemLS+"  Total "+tituloProducto+ "s:  $"+precioItemLS*cantidadItemLS)})
  

})

localStorage.setItem("carrito", JSON.stringify(carroLS))

}

// Funcion para vaciar el item del carrito
function eliminarProducto (event) {
  const botonClick = event.target;
  botonClick.closest('.itemCarrShop').remove();
   cargarLocalStore ()
  cargarCarrito();
 
}

//Funcion para cambiar de cantidad de productos y evita que sea 0 o negativo
function cambioDeCantidad (event) {
  const input = event.target;
  if (input.value <= 0) {input.value = 1};
  
  cargarCarrito(input.value);
  cargarLocalStore ()
}

// funcion para vaciar todo el carrito
$(".vaciarCarro").click(vaciarCarrito);
 

function vaciarCarrito (){
  $(".itemCarrShop").remove();
  $("#removeAllProds").fadeIn(200); $("#removeAllProds").fadeOut(700);
  cargarCarrito();
  localStorage.clear()
  
}




   


// Funcion para comprar y reiniciar el carro
function comprarBotonClick() {
  
  cargarCarrito();
 
  
}



$("#datos").click(validarCampos)

// Funcion para validar campos de formulario
function validarCampos(){
  let validacion = false;
  const valorName = document.getElementById("nombre").value;
  const valorTel = document.getElementById("telefono").value;
  const valorDircc = document.getElementById("direccion").value;
  const valorDist = document.getElementById("distancia").value;
  const valorCod = document.getElementById("codigoPostal").value;
  while(validacion==false){
  if ((valorName && valorTel && valorDircc && valorDist && valorCod) != "" ) {validacion=true;mostrarDatos()  }
  
  else {alert("No llenaste todos los campos");validacion=true;
        break;}}

  
  
}
/// Funcion para mostrar los datos pedidos en el formulario
function mostrarDatos (){
      
         
      let formulario = document.forms["formularioDatos"];
      let nombreForm = formulario["nombre"];
      let telefonoForm = formulario["telefono"];
      let direccionForm = formulario["direccion"];
      let codigoPostalForm = formulario["codigoPostal"];
      let distanciaForm = formulario["distancia"];



      $("#formularioDatos").remove()
      $("#datos").remove()
      $("#mostrarDatos").append (`<div id="datosFormulario"></div>`)
      $("#datosFormulario").append (`<h3 class="colorTextOrange" > Nombre : <b class='text-light '>${nombreForm.value}</b></h3><br>` )
      $("#datosFormulario").append( `<h3 class="colorTextOrange">Telefono :  <b class='text-light'>${telefonoForm.value} </b></h3><br>`)
      $("#datosFormulario").append (`<h3 class="colorTextOrange">Direccion :  <b class='text-light'>${direccionForm.value}</b></h3><br>`) 
      $("#datosFormulario").append(`<h3 class="colorTextOrange">Distancia :  <b class='text-light'>${distanciaForm.value }</b></h3><br>`)
      $("#datosFormulario").append(`<h3 class="colorTextOrange">CodigoPostal :<b class='text-light'> ${codigoPostalForm.value}</b></h3><br>`)
      $("#datosFormulario").append(`<button class="btnComprar" id="ticketPrint"> Ticket </button>`)
    
      $("#ticketPrint").click(printTicket)


      localStorage.setItem("Nombre", nombreForm.value)
      localStorage.setItem("Telefono", telefonoForm.value)
      localStorage.setItem("Direccion", direccionForm.value)
      localStorage.setItem("Distancia", distanciaForm.value)
      localStorage.setItem("Codigo Postal", codigoPostalForm.value)

  
    } 



// funcion mostrar ticket 

function printTicket (){


  $("#ticketPrint").remove()
  $("#datosFormulario").remove()



  const carritoLS = localStorage.getItem("carrito")

  const ticket = JSON.parse(carritoLS)

  const totalLS = localStorage.getItem("Total")

  const totalTicket = JSON.parse(totalLS)
 
  $("#mostrarDatos").append(`<h3 class="colorTextOrange"> Ticket </h3><hr class="bg-warning p-1">`)

  for (let i of ticket){

    $("#mostrarDatos").append(`
    <h5 class='text-warning'> ${i[0]}  </h5><h5 class='text-warning'> ${i[1]} </h5>

    <h5 class='text-warning'> ${i[2]} </h5><h5 class='text-warning'>  ${i[3]} </h5><hr class="bg-warning p-1">`)

  }

$("#mostrarDatos").append(`<h3 class="colorTextOrange"> Total: $${totalTicket} </h3><hr class="bg-warning p-1">`)



}

// Evento para finalizar la compra llmando a la funcion
const finComprar = document.getElementById("finCompra")
finComprar.addEventListener("click", refrescar ) 
  
// Funcion para finalizar y recargar la pagina
 function refrescar (){

  location.reload() 



}

}, 1000)
