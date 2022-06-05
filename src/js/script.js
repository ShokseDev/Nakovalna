window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuId = document.getElementById('menu'),
    hamburger = document.querySelector('.header__hamburger'),
    navItem = document.querySelector('.header__nav-item');

    let toggle = true

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('header__menu_active');
        menuId.style.height = toggle ? '200px' : '0px'
        toggle = !toggle;
    });

    navItem.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('header__nav_active');
        });
    });
});