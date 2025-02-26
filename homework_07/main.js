// 1) Создайте массив чисел и выведите значения массива в консоль. (Используйте цикл).
console.log('Задание 1');

const arr = [4, 58, 3, 77, 5, 68, 7, 909, 9, 100];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// 2) Создайте массив произвольных чисел(от 2 до 24) и выведите все числа, которые меньше 20, но больше 8. (Используйте цикл).
// const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9]

console.log('Задание 2');

const arrNumber = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];

for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < 20 && arrNumber[i] > 8) {
        console.log(arrNumber[i]);
    }
}


// 3) Создайте массив чисел и найдите минимальное значение.

console.log('Задание 3');

const arrMin = [4, 58, 3, 77, 5, 68, 7, 909, 9, 100];

let min = arrMin[0];

for (let i = 1; i < arrMin.length; i++) {
    if (arrMin[i] < min) {
        min = arrMin[i];
    }
}
console.log('Минимальное значение:', min);


// 4) *Создайте массив чисел и обновите значение элемента по индексу. 

console.log('Задание 4');

const arrUpdate = [4, 58, 3, 77, 5, 68, 7, 909, 9, 100];

arrUpdate[2] = 10;

console.log('Массив после изменения:', arrUpdate);


// 5) * Создайте массив слов. Найдите самое длинное слово в массиве. (У строк, также как и у массивов, есть свойство length, которое измеряет длину строки).

console.log('Задание 5');

const arrWords = ['apple', 'banana', 'orange', 'kiwi', 'pear'];

let longestWord = arrWords[0];

for (let i = 1; i < arrWords.length; i++) {
    if (arrWords[i].length > longestWord.length) {
        longestWord = arrWords[i];
    }
}
console.log('Самое длинное слово:', longestWord);