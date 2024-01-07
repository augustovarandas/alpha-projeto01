function clickMenu() {
  // const itens = document.querySelector("#itens");
  const itens = window.itens;
  if (itens.style.display == 'none') {
    itens.style.display = 'flex'
  } else {
    itens.style.display = 'none'
  }
}