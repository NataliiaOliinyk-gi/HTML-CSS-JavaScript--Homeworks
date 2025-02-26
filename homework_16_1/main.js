// Задание 1 
// Используя синтаксис try/catch, отправить запрос на https://jsonplaceholder.typicode.com/posts?userId=1, в блоке catch сделать вывод консоль сообщения об ошибке. Для проверки блока catch сделать намеренную ошибку в url запроса.

async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Ошибка сетевого запроса со статусом ' + response.status);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Ошибка при загрузке: "' + error.message + '" по url ' + url);
    }
};

getData('https://jsonplaceholder.typicode.com/posts?userId=1');
getData('https://jsonplaceholder.typicod.com/posts?userId=1');



// Задание 2
// Написать функцию, которая делит одно число на другое, обрабатывая возможные ошибки деления на ноль.

function divisionNumbers(a, b) {
    try {
        const result = a / b;
        if (b === 0) {
            throw new Error('Ошибка: на 0 делить нельзя');
        }
        console.log('Результат деления равен: ' + result);

    } catch (error) {
        console.error('Ошибка деления на ноль ' + error);

    }
}

divisionNumbers(4, 0);
divisionNumbers(2, 5);