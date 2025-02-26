// 1.Создайте функцию waitForTime, которая возвращает Promise. Этот промис должен резолвиться через указанное количество миллисекунд, которое нужно передавать в функцию waitForTime в качестве аргумента. Если время вышло, промис резолвится с сообщением "Ожидание завершено".
// Например через секунды, 3 или 5 секунд

function waitForTime(time) {
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, time, 'Ожидание завершено');
    });
};

const arrayForTimeout = [1000, 3000, 5000, 100];

arrayForTimeout.forEach(element => {
    waitForTime(element)
.then(resolve => console.log('время ожидания: ' + element + 'mc; ' + resolve))
.catch(err => console.error(err));
})
