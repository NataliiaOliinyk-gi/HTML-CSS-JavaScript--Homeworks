// Задание 1
// У вас есть блок синего цвета. При наведении на блок меняйте его цвет на красный, а при уходе — возвращайтесь к исходному.

const block = document.querySelector('.block');

block.addEventListener('mouseover', () => {
    block.style.backgroundColor = 'red';
});

block.addEventListener('mouseout', () => {
    block.style.backgroundColor = 'blue';
});



// Задание 2
// У вас есть блок с id "colorBlock" и кнопка с id "colorButton".
// При клике на кнопку, измените цвет блока на случайный цвет. Используйте Math.random() для генерации RGB-компонент

const colorBlock = document.getElementById('colorBlock');
const colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', ()=> {
    let colorCheng = '#' + Math.floor(Math.random() * 16777216).toString(16);
    colorBlock.style.backgroundColor = colorCheng;
    colorButton.style.border = `2px solid ${colorCheng}`;
})