// Создайте HTML-страницу с кнопкой "Кликни меня" и блоком, в котором будет отображаться количество кликов.

// Используя JavaScript, при клике на кнопку увеличивайте счетчик кликов и изменяйте цвет фона блока. Если количество кликов делится на 5 без остатка, цвет фона должен изменяться на случайный цвет.

// При достижении 10 кликов выведите сообщение под блоком с количеством кликов: "Поздравляем! Вы достигли 10 кликов!".

const buttonForCount = document.getElementById('buttonForCount');
const textForCount = document.getElementById('textForCount');

let count = 0;
buttonForCount.addEventListener('click', () => {
    count++;
    textForCount.textContent = `Количество кликов: ${count}`;
    if (count % 5 === 0) {
        let colorCheng = '#' + Math.floor(Math.random() * 16777216).toString(16);
        document.querySelector('body').style.backgroundColor = colorCheng;
    };
    if (count === 10) {
        textForCount.textContent = 'Поздравляем! Вы достигли 10 кликов!'
    };
});