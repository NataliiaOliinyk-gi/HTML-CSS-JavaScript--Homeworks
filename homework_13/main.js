// Задание 1
// Создайте массив объектов с полями "name" и "price". Реализуйте функцию hasExpensiveItem, используя метод some, чтобы проверить, содержит ли массив хотя бы один объект с ценой выше 50.

const products = [
    { name: 'meat', price: 60 },
    { name: 'cabbage', price: 10 },
    { name: 'potatoes', price: 15 },
    { name: 'carrots', price: 10 },
    { name: 'tomatoes', price: 25 },
];

function hasExpensiveItem(array) {
    return array.some(elem => elem.price > 50);
};

const isProductsPrice50 = hasExpensiveItem(products);
const message = isProductsPrice50 ? 'Массив содержит хотя бы один объект с ценой выше 50' : 'Массив НЕ содержит хотя бы один объект с ценой выше 50';

console.log(message);
