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
  let escala5 = event.target[3].value;
  let escala10 = event.target[4].value;
  let escala20 = event.target[5].value;
  let precio = event.target[6].value;
  let stock = event.target[7].value;
  let descripcion = event.target[8].value;
  let imagen = event.target[9].value;

  //console.log para probar que tome bien los valores ingresados
  //console.log(consulta);



                       //---[0]Personaje---//
  //si hay algo escrito en el campo entra a la funcion
  if (personaje !== ""){
    personaje = limpiar(personaje);
    errorPersonaje.textContent = "";
  }
  else {
    errorPersonaje.textContent = "Por favor complete el campo";
  }



                       //---[1]Franquicia---//
  //mismo proceso que con nombre pero esta vez apellido
  if (franquicia !== ""){
    franquicia = limpiar(franquicia);
    errorFranquicia.textContent = "";
  }
  else {
    errorFranquicia.textContent = "Por favor complete el campo";
  }



                       //---[2]Marca---//
  //si hay contenido en el input se valida si es correcto o no el mail
  if (marca !== ""){
    marca = limpiar(marca);
    errorMarca.textContent = "";
  }
  else {
    errorMarca.textContent = "Por favor complete el campo";
  }


    console.log(stock);
                       //---[3]Escala---//
  //se chequea la correcta selección de una opción del menú select
  for (let i = 3; i < 5 ; i++ ){
    if (event.target[i].value = 1/5) {
        console.log(escala5);
        errorEscala.textContent = "";
    }


 }
  //else {
  //  errorTipoEscala.textContent = "Por favor elija una opción";
 // }



                       //---[4]Consulta---//
  //se chequea que se haya ingresado la consulta
  if (consulta !== ""){
    errorConsulta.textContent = "";
  }
  else {
    errorConsulta.textContent = "Ingrese su consulta";
  }
  //console.log(nombre,apellido,mail);
})

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