document.addEventListener('DOMContentLoaded', () => {

    //Получаем элементы модального окна и кнопок (открытия и закрытия диалога)

    const dialog = document.getElementById('myDialog'); // окно диалога
    const openDialogButton = document.getElementById('openButton'); // кнопка открытия модального окна
    const closeDialogButton = document.getElementById('closeButton'); // кнопка закрытия модального окна

    //Функция для закрытия окна диалога с анимацией
    function closeDialog() {
        dialog.classList.add("closing");

        // Добавляем обработчик, который выполнится после завершения анимации
        function onAnimationEnd() {
            dialog.classList.remove("closing");
            dialog.close();
            dialog.removeEventListener("animationend", onAnimationEnd);
        }

        dialog.addEventListener("animationend", onAnimationEnd);
        openDialogButton.disabled = false; // Делаем кнопку активной после закрытия
    }

    // Обработчик события для открытия диалога
    openDialogButton.addEventListener('click', () => {
        dialog.showModal();
        dialog.focus(); // Забирает фокус с кнопки
        dialog.classList.remove("closing"); // При открытии удаляем класс анимации закрытия
        openDialogButton.disabled = true; // Деактивируем кнопку
    });

    // Обработчик события для закрытия диалога
    closeDialogButton.addEventListener('click', () => {
        closeDialog();
    });

    // Обработчик события для закрытия диалога при клике по области вне его содержимого
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) {
            closeDialog();
        }

    });

    // Обработчик события для закрытия диалога по клавише Esc
    dialog.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && dialog.open) {
            event.preventDefault();
            closeDialog();
        }
    });


});