'use strict';
window.addEventListener('DOMContentLoaded', function() {
    let closedMenuButton = document.querySelector('.header-nav__close'),
    mainHeader = document.querySelector('.header'),
    headerNavigation = document.querySelector('.header-nav'),
    openMenuButton = document.querySelector('.header__menuButton'),
    buttonsBlock = document.querySelector('.header__buttonsBlock');
openMenuButton.addEventListener('click', () => {
    mainHeader.classList.remove('header');
    mainHeader.classList.add('header_open');
    headerNavigation.style.display = 'block';
    buttonsBlock.classList.add('visually-hidden');
    buttonsBlock.classList.remove('animate__zoomIn');
});
closedMenuButton.addEventListener('click', () =>{
    mainHeader.classList.remove('header_open');
    mainHeader.classList.add('header');
    headerNavigation.style.display = 'none';
    buttonsBlock.classList.remove('visually-hidden');
    buttonsBlock.classList.add('animate__zoomIn');
})
});
