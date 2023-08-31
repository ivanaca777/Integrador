function openMenu() {
  let menu = document.querySelector('.menu')
  if (menu.style.display == 'flex') {
      menu.style.display = 'none';
  }
  else {
      menu.style.display = 'flex';
  }
}

