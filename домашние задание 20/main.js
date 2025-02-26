// Создайте класс Shape, у которого есть метод draw().
// Создайте два наследника класса Shape: Rectangle и Circle.
// У каждого наследника должен быть свой метод draw(), который переопределяет метод родительского класса.
// Создайте массив, содержащий экземпляры классов Rectangle и Circle.
// Используйте цикл для вызова метода draw() для каждого элемента массива.

class Shape {
    constructor(shape) {
        this.shape = shape;
    }

    draw() {
        console.log(`Фигура имеет форму ${this.shape}`);
    }
};

class Rectangle extends Shape {
    constructor(width, heigth) {
        super('прямоугольник');
        this.width = width;
        this.heigth = heigth;
    }

    draw() {
        console.log(`Фигура имеет форму ${this.shape} с шириной ${this.width} см и высотой ${this.heigth} см`);
    }
};


class Circle extends Shape {
    constructor(radius) {
        super('круг');
        this.radius = radius;
    }
    draw() {
        console.log(`Фигура имеет форму ${this.shape} с радиусом ${this.radius} см`);
    }
};

const myArray = [];
const circle1 = new Circle(12);
const rectangle1 = new Rectangle(10, 2);
myArray.push(circle1, rectangle1);
myArray.push(new Circle(6), new Circle(8), new Rectangle(3, 4), new Rectangle(12, 5));

// для каждого элемента массива через forEach
myArray.forEach(element => {
    element.draw();
})

// через цикл
// for (let i = 0; i < myArray.length; i++) {
//     myArray[i].draw();
// }

