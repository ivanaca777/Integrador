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
  let regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  //div para el error de nombre y apellido
  let errorNombre = document.querySelector('.errorNombre');
  let errorApellido = document.querySelector('.errorApellido');
  let errorMail = document.querySelector('.errorMail');
  let errorTipoConsulta = document.querySelector('.errorTipoConsulta');
  let errorConsulta = document.querySelector('.errorConsulta');
  
  
                       //---Evento submit de Consulta---///
  
  formularioConsulta.addEventListener("submit", (event)=>{
    event.preventDefault();
  
    //se crean las variables d elos valores ingresados en los input
    let nombre = event.target[0].value;
    let apellido = event.target[1].value;
    let mail = event.target[2].value;
    let tipoConsulta = event.target[3].value;
    let consulta = event.target[4].value;
  
    //console.log para probar que tome bien los valores ingresados
    //console.log(consulta);
  
  
  
                         //---[0]Nombre---//
    //si hay algo escrito en el campo entra a la funcion
    if (nombre !== ""){
      //pide validar nombre con regex, y limpia si lo hace o da error en caso contrario
      if (validar(nombre)){   
        nombre = limpiar(nombre);
        errorNombre.textContent = "";
       }
       else {
         errorNombre.textContent = "Hay caracteres incorrectos";
       }
    }
    else {
      errorNombre.textContent = "Por favor complete el campo";
    }
  
  
  
                         //---[1]Apellido---//
    //mismo proceso que con nombre pero esta vez apellido
    if (apellido !== ""){
      if (validar(apellido)){   
        apellido = limpiar(apellido);
        errorApellido.textContent = "";
      }
      else {
        errorApellido.textContent = "Hay caracteres incorrectos";
      }
    }
    else {
      errorApellido.textContent = "Por favor complete el campo";
    }
  
  
  
                         //---[2]Mail---//
    //si hay contenido en el input se valida si es correcto o no el mail
    if (mail !== ""){
      if (validarMail(mail)){ 
        errorMail.textContent = "";  
      }
      else {
        errorMail.textContent = "La direccion de correo no es correcta";
      }
    }
    else {
      errorMail.textContent = "Por favor complete el campo";
    }
  
  
  
                         //---[3]Tipo de consulta---//
    //se chequea la correcta selección de una opción del menú select
    if (tipoConsulta !== "Elija una opción"){
      errorTipoConsulta.textContent = "";
    }
    else {
      errorTipoConsulta.textContent = "Debe elejir una opción";
    }
  
  
  
                         //---[4]Consulta---//
    //se chequea que se haya ingresado la consulta
    if (consulta !== ""){
      errorConsulta.textContent = "";
    }
    else {
      errorConsulta.textContent = "Ingrese su consulta";
    }
    //console.log(nombre,apellido,mail);
  });
  
  
  
                      //---Validaciones---//
  
  //Nombre y apellido
  function validar(inputValue) {
    let valorLimpio = inputValue.trim();
  
      if(valorLimpio.match(regexN)) {
        return true;
      }
      else {
        return false;
      }
  }
  
  
  //Mail
  function validarMail(inputValue) {
    let valorLimpio = inputValue.trim();
  
      if(valorLimpio.match(regexMail)) {
        return true;
      }
      else {
        return false;
      }
  }
  
  
                      //---Limpieza de espacios---//
  
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