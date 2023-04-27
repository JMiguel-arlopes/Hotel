const lista = document.querySelector('.lista-menu');
const btnMenu = document.querySelector('.cabecalho__menu-hotel');

btnMenu.addEventListener('click', () => {
    lista.classList.toggle('lista-menu__aberto');
    btnMenu.classList.toggle('cabecalho__menu-hotel-aberto');
})
