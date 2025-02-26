// Создайте HTML-форму с двумя полями ввода: для логина и пароля, а также кнопкой "Войти".
// Используя JavaScript и DOM, напишите скрипт, который будет проверять, совпадают ли введенные значения с заранее заданными значениями логина и пароля (их нужно самому придумать и заранее указать в скрипте).
// Если значения совпадают, выведите сообщение об успешной аутентификации, в противном случае - сообщение об ошибке.

//Элемент для вывода сообщения
const messagelogin = document.getElementById('messageloginForm');

// Обработка события
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();

    //Получить данные из формы
    const userLogin = event.target.elements['userLogin'].value;
    const userPassword = event.target.elements['userPassword'].value;

    // Очистить предыдущее сообщение
    messagelogin.textContent = '';

    const noVharters = ['.', ',', '?', '@'];
    function isCorrektLogin(array, userLogin) {
        for (let char of array) {
            if (userLogin.includes(char)) {
                return false;
            }
        } return true;
    };


    if (userLogin === 'Nataliia.Oliinyk' && userPassword === 'NatAliiA2024') {
        // Показываем сообщение об успехе
        messagelogin.textContent = 'Аутентификация успешна!';
        messagelogin.setAttribute('style', 'color: white');

        // Очищаем форму
        event.target.reset();
    } else if (userLogin < 5 || !isCorrektLogin(noVharters, userLogin)) {
        alert('введите корректний логин');
        return
    } else {
        // Показываем сообщение об ошибке
        messagelogin.textContent = 'Ошибка аутентификации';
        messagelogin.setAttribute('style', 'color: red; text-shadow: 1px 1px 1px rgb(255, 253, 253)')
    }
});
