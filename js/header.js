const lista = document.querySelector('.lista-menu');
const listaTablet = document.querySelector('.lista-menu--tablet');
const btnMenu = document.querySelector('.cabecalho__menu-hotel');

btnMenu.addEventListener('click', () => {
    lista.classList.toggle('lista-menu__aberto');
    btnMenu.classList.toggle('cabecalho__menu-hotel-aberto');
})



const btnCategorias = document.querySelector('.categorias');
const containerCategorias = document.querySelector('.item__categorias');

btnCategorias.addEventListener('click', () =>  {
    listaTablet.classList.toggle('lista-menu--tablet__aberto');
    containerCategorias.classList.toggle('gradiente--azul');
})
