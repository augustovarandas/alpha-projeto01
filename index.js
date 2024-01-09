function clickMenu() {
  const itens = document.querySelector("#itens");
  // const itens = window.itens;
  if (itens.style.display == 'none') {
    itens.style.display = 'flex'
  } else {
    itens.style.display = 'none'
  }
}

function fecharMenu() {
  const itens = document.querySelector("#itens");
  // const itens = window.itens;
  if (itens.style.display == 'flex') {
    itens.style.display = 'none'
  } else {
    itens.style.display = 'flex'
  }
}