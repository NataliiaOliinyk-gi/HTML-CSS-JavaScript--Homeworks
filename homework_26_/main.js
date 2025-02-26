document.addEventListener('DOMContentLoaded', () => {
    
    // Получаем элементы меню и кнопки открытия и закрытия
    const navMenu = document.getElementById('navMenu');
    const openButton = document.getElementById('openButton');
    const closeButton = document.getElementById('closeButton');

    function toggleMenu() {
        navMenu.classList.toggle('nav-menu--open');
    };

    openButton.addEventListener('click', () => {
        toggleMenu();
    });

    closeButton.addEventListener('click', () => {
        toggleMenu();
    });



    document.querySelectorAll('.nav-menu__item').forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            const dropdown = menuItem.nextElementSibling;

            if (dropdown && dropdown.classList.contains('dropdown-menu')) {
                if (dropdown.classList.contains('dropdown--hidden')) {
                    // Открываем подменю
                    dropdown.classList.remove('dropdown--hidden');
                    dropdown.classList.remove('dropdown--close');
                    dropdown.classList.add('dropdown--open');
                } else {
                    // Закрываем подменю
                    dropdown.classList.remove('dropdown--open');
                    dropdown.classList.add('dropdown--close')

                    // Задержка перед возвратом position: absolute
                    setTimeout(() => {
                        dropdown.classList.add('dropdown--hidden');
                    }, 500);
                }
            }
        });
    });


});
