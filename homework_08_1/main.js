// Задание 1
// Создайте функцию, которая принимает массив чисел в качестве параметра и возвращает произведение всех элементов массива. Затем вызовите функцию и выведите результат в консоль.

console.log('Задание 1');

function getMultiplicationsArrayNumbers(array) {
    let multiplicationsNumber = 1;
    for (let i = 0; i < array.length; i++) {
        multiplicationsNumber *= array[i];
    }
    return multiplicationsNumber;
}

const arrNumbers = [1, 23, 15, 10, 100];
console.log('Произведение всех элементов массива равно: ' + getMultiplicationsArrayNumbers(arrNumbers));



// Задание 2
// Сумма элементов массива: Создайте массив чисел. Напишите код, который использует цикл while для подсчета суммы всех элементов массива.

console.log('Задание 2');

const arrayNumbers = [20, 45, 23, 86, 24];

function getSumAllElementsArrayNumbers(arr) {
    let i = 0;
    let sumNumbers = 0;
    while (i < arr.length) {
        sumNumbers += arr[i];
        i++;
    }
    return sumNumbers;
};

console.log('Сумма всех элементов массива равна: ' + getSumAllElementsArrayNumbers(arrayNumbers));
