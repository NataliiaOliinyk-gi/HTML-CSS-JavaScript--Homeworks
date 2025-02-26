// Задание 1
// Создайте массив объектов с полями "название" и "год". Напишите функцию, используя метод sort, чтобы отсортировать объекты по году от самого старого к самому новому.

console.log('Задание 1');

const movies = [
    { title: "Inception", year: 2010 },
    { title: "The Dark Knight", year: 2008 },
    { title: "Interstellar", year: 2014 },
    { title: "The Matrix", year: 1999 }
];

function sortMoviesYears(array, key) {
    return array.sort((a, b) => a[key] - b[key])
};

console.log(sortMoviesYears(movies, 'year'));


// Задание 2
// Создайте массив объектов с полями "имя" и "возраст". Напишите функцию, используя метод reduce, чтобы объединить все имена в одну строку через запятую.

console.log('Задание 2');

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];

function reduceToString(array, key) {
    const stringByArray = array.reduce((acc, elem, index) => {
        return index === 0 ? elem[key] : acc + ', ' + elem[key]
    }, '');
    return stringByArray;
};

console.log(reduceToString(people, 'name'));

 
