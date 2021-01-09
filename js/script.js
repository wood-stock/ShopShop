'use strict';
// меню
window.addEventListener('DOMContentLoaded', function() {
    let closedMenuButton = document.querySelector('.header-nav__close'),
    mainHeader = document.querySelector('.header'),
    headerNavigation = document.querySelector('.header-nav'),
    openMenuButton = document.querySelector('.header__menuButton'),
    buttonsBlock = document.querySelector('.header__buttonsBlock'),
    bgHalf = document.querySelector('.main__wrapper-bg-half');
openMenuButton.addEventListener('click', () => {
    mainHeader.classList.remove('header');
    mainHeader.classList.add('header_open');
    headerNavigation.style.display = 'block';
    buttonsBlock.classList.add('visually-hidden');
    buttonsBlock.classList.remove('animate__zoomIn');
    bgHalf.classList.add('visually-hidden');
});
closedMenuButton.addEventListener('click', () =>{
    mainHeader.classList.remove('header_open');
    mainHeader.classList.add('header');
    headerNavigation.style.display = 'none';
    buttonsBlock.classList.remove('visually-hidden');
    buttonsBlock.classList.add('animate__zoomIn');
    bgHalf.classList.remove('visually-hidden');
});
//плавная прокрутка
const smoothLink = document.querySelector('.arter');
smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.base').scrollIntoView({
        behavior: 'smooth',
            block: 'start'
        });
    });
// анимация значка информации
const iconInf = document.querySelector(".icon-i");
function animationIconInfo(){
const one = document.querySelector(".icon-i__el1"),
two  = document.querySelector(".icon-i__el2"),
three = document.querySelector(".icon-i__el3");

iconInf.addEventListener('click', () => {
iconInf.classList.toggle('icon-i_a');
one.classList.toggle('icon-i__el1_a');
two.classList.toggle('icon-i__el2_a');
three.classList.toggle('icon-i__el3_a');
});}
animationIconInfo();

let productProperties = document.querySelector(".product__properties");

    function openInfo(){
        iconInf.addEventListener('click', () => {
    productProperties.classList.toggle('animate__fadeOut');
    productProperties.classList.add('animate__animated');
    setTimeout(function ()
{
productProperties.classList.toggle('visually-hidden');
productProperties.classList.toggle('animate__fadeIn');}, 300);
});}
openInfo();

// цвет размер
let buttonSize = document.querySelector(".product__size"),
buttonColor = document.querySelector(".product__color");
function choiceSizeColor(){
    let listSize = document.querySelector("[data-size]"),
    listColor = document.querySelector("[data-color]");
    buttonSize.addEventListener('click', () =>{
    listSize.classList.toggle('visually-hidden');
    listColor.classList.add('visually-hidden');
    });
    buttonColor.addEventListener('click', () =>{
        listColor.classList.toggle('visually-hidden');
        listSize.classList.add('visually-hidden');
    });
}
// отображение выбора цвета
function fixedColor(color) {
   const select__visualColor_color = document.querySelector(`[data-color='${color}']`);
   select__visualColor_color.addEventListener('click', () =>{
    buttonColor.firstChild.remove();
    buttonColor.insertAdjacentHTML("afterbegin", `<div style="width: 15px;height: 15px;border:1px solid grey;border-radius: 100%;background-color: ${color}; margin: 15px auto;"></div>`);
   });
}
// отображение выбора размера
function fixedSize(size) {
    const selectSize = document.querySelector(`[data-size='${size}']`);
    selectSize.addEventListener('click', () =>{
    buttonSize.firstChild.remove();
     buttonSize.insertAdjacentHTML("afterbegin", `<span style="text-align: center;
     font-family: "Roboto", sans-serif;
     font-size: 14px;
     line-height: 43px; weight:700;">${size}</span>`);
    });
 }
 fixedSize('M');
 fixedSize('L');
 fixedSize('S');
 fixedSize('XL');

fixedColor( 'green' );
fixedColor( 'black' );
fixedColor( 'orange' );
fixedColor( 'white' );
choiceSizeColor();
tns ({
    container: '.slider',
    navContainer: '.slideArrow',
    prevButton: '.slider__arrows_left',
    nextButton: '.slider__arrows_right',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    touch: true
  });

});
