// Задание 1
// Создайте функцию, которая принимает два числа в качестве параметров и возвращает их сумму, для второго параметра определите значение по умолчанию. Затем вызовите функцию и выведите результат в консоль.
console.log('Задание 1');

function kalkSum(num1, num2 = 30) {
    return (num1 + num2);
};

console.log('Сумма двух чисел равна ' + kalkSum(58));



// Задача 2
// Создайте массив numbers с несколькими числами.
// Напишите функцию calculateSum, которая принимает массив и возвращает сумму всех его элементов, не используя методы массивов.
console.log('Задание 2');

const numbers = [55, 20, 41, 54, 48, 12, 7];

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(`Сумма всех элементов массива ( ${numbers} ) равна ` + calculateSum(numbers));



// Задача 3 *
// Создайте массив students с объектами студентов (имя, возраст, курс).
// Напишите функцию displayStudentInfo, которая принимает студента и выводит его информацию в консоль.
console.log('Задание 3');

const students = [
    {
        name: 'Иванов',
        age: 22,
        kurs: '2',
    },
    {
        name: 'Петров',
        age: 21,
        kurs: '1',
    },
    {
        name: 'Сидорова',
        age: 22,
        kurs: '2',
    },
    {
        name: 'Мельник',
        age: 23,
        kurs: '3',
    },
    {
        name: 'Попова',
        age: 25,
        kurs: '4',
    },
]

function displayStudentInfo(objStudent) {
    console.log('Информация о студенте:');

    for (let key in objStudent) {
        console.log(`${key}: ${objStudent[key]}`);
    }
}

for (let i = 0; i < students.length; i++) {
    displayStudentInfo(students[i])
}
