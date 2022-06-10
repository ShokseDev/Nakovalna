$(document).ready(function () {
    //Phone mask 
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    // pageup button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1400) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuId = document.getElementById('menu'),
    hamburger = document.querySelector('.header__hamburger'),
    navItem = document.querySelector('.header__nav-item');

    let toggle = true

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('header__menu_active');
        menuId.style.height = toggle ? '200px' : '0px';
        toggle = !toggle;
    });

    navItem.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('header__nav_active');
        });
    });
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}