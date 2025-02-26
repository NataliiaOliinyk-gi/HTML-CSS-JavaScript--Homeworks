const registrationForm = document.getElementById('registrationForm');
const loginForm = document.getElementById('loginForm');
const message = document.querySelector('.message p');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userName = event.target.elements['userNameForm'].value;
    const userTel = event.target.elements['userTelForm'].value;
    const userEmail = event.target.elements['userEmailForm'].value;
    const userPassword = event.target.elements['userPasswordForm'].value;

    // проверяем на валидацию полученные данные от юзера
    const isValid = isValidUserInputs(userName, userTel, userEmail, userPassword);

    if (isValid) {

        // создаем новый объект юзер
        const user = {
            name: userName,
            tel: userTel,
            email: userEmail,
            password: userPassword,
        };

        saveUser(user); // сохраняем нового юзера

        message.textContent = 'Вы успешно зарегистрировались';
        message.classList.add('success');

        event.target.reset();
    }
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userEmail = event.target.elements['userEmailLogin'].value;
    const userPassword = event.target.elements['userPasswordLogin'].value;

    // достаем массив объектов из localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // проверяем, или совпадают введенные дынные с данными в массиве
    const isUser = users.some(elem => elem.email === userEmail && elem.password === userPassword);

    if (isUser) {
        message.textContent = 'Вы успешно вошли';
        message.classList.add('success');
        event.target.reset();
    } else {
        message.textContent = 'Вы ввели неверную почту или пароль';
        message.classList.remove('success');
    };
});

// сохранить данные юзера при регистрации
function saveUser(object) {
    // достаем массив объектов из localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    //добавляем в массив новый объект юзер
    users.push(object);
    // записываем обновленный массив в  localStorage
    localStorage.setItem('users', JSON.stringify(users));
}

//валидация
function isValidUserInputs(name, tel, email, password) {
    let isValid = true;
    let errorMessages = '';

    // проверяем имя
    if (name.length < 2 || name.length > 24 || !/^[a-zA-Zа-яА-ЯёЁїЇіІєЄґҐäöüßÄÖÜ]+$/.test(name)) {

        console.log('ошибка имени');
        // message.innerHTML = 'Имя должно содержать только буквы, от 2 до 24 символов\r\n';
        errorMessages += "Имя должно содержать только буквы, от 2 до 24 символов<br>";
        // message.classList.remove('success');
        isValid = false;
    };

    // проверяем номер телефона
    if (!/^\+\d{7,12}$/.test(tel)) {
        errorMessages += "Телефон должен начинаться с '+' и содержать 8-12 цифр<br>";
        isValid = false;
    };

    // прверяем email
    if (email.length < 7 || !email.includes('@')) {
        errorMessages += "Емейл должен быть минимум 7 символов и содержать '@'<br>";
        isValid = false;
    }

    // проверяем пароль
    if (password.length < 5 || password.length > 26) {
        errorMessages += "Пароль должен быть от 5 до 26 символов";
        isValid = false;
    }
    //выводим сообщение об ошибке
    if (errorMessages) {
        message.innerHTML = errorMessages;
        message.classList.remove('success');
    }
    return isValid;
}