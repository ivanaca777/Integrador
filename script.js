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

//div para el error de nombre
let errorNombre = document.querySelector('.errorNombre');

formulario.addEventListener("submit", (event)=>{
  event.preventDefault();

  let nombre = event.target[0].value;
  let apellido = event.target[1].value;

  nombre = validar(nombre);
  nombre = limpiar(nombre);
  apellido = validar(apellido)
  apellido = limpiar(apellido);
  console.log(nombre,apellido);
});

function validar(inputValue) {
  let valorLimpio = inputValue.trim();

  if(valorLimpio.match(regex)) {
    return valorLimpio
  }
  else {
    errorNombre.textContent = "Hay caracteres incorrectos";
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


