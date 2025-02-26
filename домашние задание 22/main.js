// Создать функцию, которая будет изменять цвет фона элемента каждую секунду. Цвет должен меняться случайным образом из заданного набора цветов. const colors = ['#ff0000', '#00ff00', '#0000ff'];

const canvas = document.getElementById('canvas');
const contexCanvas = canvas.getContext('2d');

const colors = ['#ff0000', '#00ff00', '#0000ff'];

const widthCanvas = canvas.getBoundingClientRect().width;
const heightCanvas = canvas.getBoundingClientRect().height;

function randomColor(colors) {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function randomColorsInterval() {
    setInterval(() => {
        contexCanvas.fillStyle = randomColor(colors);
        contexCanvas.fillRect(0, 0, widthCanvas, heightCanvas);
    }, 1000);
}

randomColorsInterval();


