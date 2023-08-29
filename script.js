function openMenu() {
    let menu = document.querySelector('.menu')
    if (menu.style.display == 'flex') {
        menu.style.display = 'none';
    }
    else {
        menu.style.display = 'flex';
    }
}

//let barsButton = document.querySelector(".barra")

//barsButton.addEventListener("click", openMenu)

//card:

class Figura {
    getHtmlArticle() {
        return `
          <article>
            <h2>${this.titulo}</h2>
            <h3><span class="de">de</span> ${this.autor}</h3>
    
            <div class="informacion">
              <a href="img/${this.foto}" title="Presioná para ver la imagen en tamaño grande" target="_blank">
                <img src="img/${this.foto}" alt="Portada de ${this.titulo}">
              </a>
              <p>
                <span>Precio:</span>
                <span>${this.precio}</span>
              </p>
              <p>
                <span title="International Standard Book Number">ISBN:</span>
                <span>${this.isbn}</span>
              </p>
              <p>
                <span>Páginas:</span>
                <span>${this.paginas}</span>
              </p>
              <p>
                <span>Idioma:</span>
                <span>${this.idioma}</span>
              </p>
            </div>
            <div class="sinopsis">
              <p>${this.sinopsis}</p>
            </div>
            <div class="gradiente-blanco"></div>
          </article>
        `;
      };
}

///^[A-Z]\D*$/gm regex