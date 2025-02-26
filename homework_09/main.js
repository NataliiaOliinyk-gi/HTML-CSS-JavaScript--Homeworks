// Задание 1
// Создайте HTML-страницу с элементом <div>. Используя innerHTML, замените внутренний текст этого элемента на "Это <em>курсивный</em> текст".

const divElement = document.querySelector('div');
divElement.innerHTML = "Это <em>курсивный</em> текст";
