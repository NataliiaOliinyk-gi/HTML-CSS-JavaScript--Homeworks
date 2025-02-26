// Задание 1
// Создайте объект, представляющий человека, с полями "имя" и "возраст". Выведите информацию о человеке в консоль.

console.log('Задание 1');

const person = {
  name: 'Nataliia Oliinyk',
  age: 47,
};

console.log(`Имя: ${person.name}, Возраст: ${person.age}`);


// Задание 2
// Создайте объект, представляющий книгу, с полями "название" и "автор". Создайте массив объектов книг и выведите информацию о каждой книге в консоль.

console.log('Задание 2');

const books = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
  },
];

for (i = 0; i < books.length; i++) {
  console.log(`Книга ${i + 1}:`);
  console.log(`Название: ${books[i].title}, Автор: ${books[i].author}`);
}


// Задание 3 *
// Дан объект, который олицетворяет собой прямоугольник и длины его сторон const rectangle = { a: 10, b: 35 }. Добавьте в этот объект ключи s  и p, в s должна быть вычислена площадь прямоугольника, а в p его периметр.

console.log('Задание 3');

const rectangle = {
  a: 10,
  b: 35
};

rectangle.s = rectangle.a * rectangle.b;
rectangle.p = 2 * (rectangle.a + rectangle.b);
console.log(rectangle);

console.log('Площадь прямоугольника:', rectangle.s);
console.log('Периметр прямоугольника:', rectangle.p);


// Задание 4 *
// Создайте массив объектов, представляющих различные фрукты. Используйте цикл для фильтрации только тех фруктов, которые имеют цвет "красный", и выведите их в консоль.

console.log('Задание 4');

const fruits = [
  {
    name: 'apple',
    color: 'red',
  },
  {
    name: 'banana',
    color: 'yellow',
  },
  {
    name: 'pomegranate',
    color: 'red',
  },
  {
    name: 'melon',
    color: 'yellow',
  },
  {
    name: 'plum',
    color: 'blue',
  },
];

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  for (let key in fruit) {
    if (key === 'color' && fruit[key] === 'red') {
      console.log('fruits name: ' + fruit.name + ', color: ' + fruit[key]);
    }
  }
}


// Задание 5 **
// Создайте объект `playlist` с песнями в виде массива объектов. Выведите информацию о каждой песне в консоль

console.log('Задание 5');

const playlist = {
  name: 'My Playlist',
  genre: 'Pop',
  creator: 'Nataliia Oliinyk',
  songs: [
    {
      title: 'Song 1',
      artist: 'Artist 1',
    },
    {
      title: 'Song 2',
      artist: 'Artist 2',
    },
    {
      title: 'Song 3',
      artist: 'Artist 3',
    },
    {
      title: 'Song 4',
      artist: 'Artist 4',
    },
  ],
}

console.log(`Имя плейлиста: ${playlist.name}`);

for (let i = 0; i < playlist.songs.length; i++) {
  const song = playlist.songs[i];
  console.log(`Название песни: ${song.title}, Автор: ${song.artist}`);
}
