const lista = document.querySelector('.lista-menu');
const btnMenu = document.querySelector('.cabecalho__menu-hotel');
// const btnAtivo = document.querySelector('.cabecalho__menu-hotel-aberto')


btnMenu.addEventListener('click', () => {
    lista.classList.toggle('lista-menu__aberto');
    btnMenu.classList.toggle('cabecalho__menu-hotel-aberto');
})







const swiper = new Swiper('.swiper', {
    spaceBetween: 15,
    slidesPerView: 2,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    }
});