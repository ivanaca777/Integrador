function openMenu() {
    let menu = document.querySelector('.menu')
    if (menu.style.display == 'flex') {
        menu.style.display = 'none';
    }
    else {
        menu.style.display = 'flex';
    }
}

//let formulario = document.querySelector("form");

//regex:
let regexN = /^[A-Za-z]\D*$/gm;
let regexPrecio = /^[1-9][0-9]*$/;
let regexNum = /^[1-9][0-9]?$/;

//div para el error de nombre y apellido
let errorPersonaje = document.querySelector('.errorPersonaje');
let errorFranquicia = document.querySelector('.errorFranquicia');
let errorMarca = document.querySelector('.errorMarca');
let errorEscala = document.querySelector('.errorEscala');
let errorPrecio = document.querySelector('.errorPrecio');
let errorStock = document.querySelector('.errorStock');
let errorDescripcion = document.querySelector('.errorDescripcion');
let errorImagen = document.querySelector('.errorImagen');


                     //---Evento submit de Alta---///

formularioAlta.addEventListener("submit", (event)=>{
  event.preventDefault();

  //se crean las variables d elos valores ingresados en los input
  let personaje = event.target[0].value;
  let franquicia = event.target[1].value;
  let marca = event.target[2].value;
  let escala = event.target[3].value;
  let precio = event.target[4].value;
  let stock = event.target[5].value;
  let descripcion = event.target[6].value;
  let imagen = event.target[7].value;

  //console.log para probar que tome bien los valores ingresados
  //console.log(imagen);



                       //---[0]Personaje---//
  //chequea que se haya ingresado el nombre
  if (personaje !== ""){
    personaje = limpiar(personaje);
    errorPersonaje.textContent = "";
  }
  else {
    errorPersonaje.textContent = "Por favor complete el campo";
  }



                       //---[1]Franquicia---//
  //se chequea que se haya ingresado la franquicia o la serie/prlicula a la que pertenece
  if (franquicia !== ""){
    franquicia = limpiar(franquicia);
    errorFranquicia.textContent = "";
  }
  else {
    errorFranquicia.textContent = "Por favor complete el campo";
  }



                       //---[2]Marca---//
  //se chequea que se haya ingresado la marca
  if (marca !== ""){
    marca = limpiar(marca);
    errorMarca.textContent = "";
  }
  else {
    errorMarca.textContent = "Por favor complete el campo";
  }



                       //---[3]Escala---//
  //se chequea la correcta selección de una opción del menú select
  if (escala !== "Elija una opción"){
    errorEscala.textContent = "";
  }
  else {
    errorEscala.textContent = "Debe elejir una opción";
  }



                       //---[4]Precio---//
  //se chequea que se haya ingresado el precio
  if (precio !== ""){
    if (validarPrecio(precio)){ 
      errorPrecio.textContent = "";
      //agregar una iteracion para devolver un string con el precio en formato $###.###)
    }
    else {
      errorPrecio.textContent = "Hay caracteres incorrectos";
    }
  }
  else {
    errorPrecio.textContent = "Por favor complete el campo";
  }



                         //---[5]Stock---//
  //se chequea que se hayan ingresado correctamente números
  if (stock !== ""){
    if (validarStock(stock)){ 
      errorStock.textContent = "";
    }
    else {
      errorStock.textContent = "Solo se permiten números de hasta 2 dígitos";
    }
  }
  else {
    errorStock.textContent = "Por favor complete el campo";
  }
  


                       //---[6]Descripcion---//
  //se chequea que se haya ingresado la descripcion
  if (descripcion !== ""){
    errorDescripcion.textContent = "";
  }
  else {
    errorDescripcion.textContent = "Ingrese la descripción del producto";
  }

                         //---[7]Imagen---//
  //se chequea que se haya agregado una imagen
  if (imagen !== ""){
    errorImagen.textContent = "";
  }
  else {
    errorImagen.textContent = "Agregue la imagen del producto";
  }

  //console.log(personaje,franquicia,marca,escala,precio,stock);
})


function validarPrecio(inputValue) {
  let valorLimpio = inputValue.trim();

    if(valorLimpio.match(regexPrecio)) {
      return true;
    }
    else {
      return false;
    }
}

function validarStock(inputValue) {
  let valorLimpio = inputValue.trim();

    if(valorLimpio.match(regexNum)) {
      return true;
    }
    else {
      return false;
    }
}

function limpiar(inputValue) {
    let valorLimpio = inputValue.trim();
  
    if(valorLimpio[0] === valorLimpio[0].toUpperCase()) {
      return valorLimpio
    }
  
    else {
      let valorReconstruido = "";
      for(let i = 0; i < valorLimpio.length; i++){
        if(i == 0) {
          valorReconstruido += valorLimpio[i].toUpperCase();
        }
        else {
          valorReconstruido += valorLimpio[i].toLowerCase();
        }
      }
      return valorReconstruido;
    }
}