document.addEventListener('DOMContentLoaded', () => {
    // Получаем элементы меню и кнопки открытия и закрытия
    const navMenu = document.getElementById('navMenu');
    const openButton = document.getElementById('openButton');
    const closeButton = document.getElementById('closeButton');
    const menuItems = document.querySelectorAll('.nav-menu__item');

    function toggleMenu() {
        navMenu.classList.toggle('nav-menu--open');
    }
    openButton.addEventListener('click', () => {
        toggleMenu();
    })

    closeButton.addEventListener('click', () => {
        toggleMenu();
    })

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const submenu = item.nextElementSibling;
            if (submenu && submenu.classList.contains('dropdown-menu')) {
                submenu.classList.toggle('dropdown-menu--open');
            }
        })
    })

});
