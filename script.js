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
let regex = /^[A-Za-z]\D*$/gm;

//div para el error de nombre y apellido
let errorNombre = document.querySelector('.errorNombre');
let errorApellido = document.querySelector('.errorApellido');

//evento submit
formulario.addEventListener("submit", (event)=>{
  event.preventDefault();

  let nombre = event.target[0].value;
  let apellido = event.target[1].value;
  //pide validar nombre con regex, limpiar si lo hace o dar error si no valida 
  if (validar(nombre)){   
   nombre = limpiar(nombre);
  }
  else {
    errorNombre.textContent = "Hay caracteres incorrectos o falta completar el campo";
  }

  //pide validar apellido con regex, limpiar si lo hace o dar error si no valida
  if (validar(apellido)){   
    apellido = limpiar(apellido);
  }
  else {
    errorApellido.textContent = "Hay caracteres incorrectos o falta completar el campo";
  }

  //console.log(nombre,apellido);
});

function validar(inputValue) {
  let valorLimpio = inputValue.trim();
  if(valorLimpio.match(regex)) {
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