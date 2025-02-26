// Задание 1
// Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/todos/1. Результат вывести в консоль.

async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
}

getData();


// Задание 2
// Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/posts. Ответ должен содержать 10 элементов (query-параметр _limit). Результат вывести в консоль.

async function getDataWithLimit(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const result = await response.json();
    console.log(result);
}

getDataWithLimit();