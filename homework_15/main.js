// Задание 1. Необходимо сделать запрос на https://jsonplaceholder.typicode.com/. По пути(path)  /users получить всех пользователей. На веб-странице для каждого пользователя отрисовать карточку и указать следующие данные: id, username, email, address.city, phone и company.name. Стили добавляем произвольно.

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then((data) => displayToUsersInfo(data))
    .catch(err => console.error(err));

function displayToUsersInfo(arrayUsers) {
    const listUesersInfo = document.getElementById('listUesersInfo');
    arrayUsers.forEach(element => {
        const listItem = document.createElement('li');
        listItem.className = 'user-info'; // Класс для стилизации карточки пользователя

        // Создаем внутренние элементы карточки пользователя

        const userId = document.createElement('p');
        userId.textContent = `ID: ${element.id}`;

        const userName = document.createElement('h3');
        userName.textContent = `Username: ${element.username}`;

        const userEmail = document.createElement('p');
        userEmail.textContent = `Email: ${element.email}`;

        const userCity = document.createElement('p');
        userCity.textContent = `City: ${element.address.city}`;

        const userPhone = document.createElement('p');
        userPhone.textContent = `Phone: ${element.phone}`;

        const userCompany = document.createElement('p');
        userCompany.textContent = `Company: ${element.company.name}`;

        // Добавляем все элементы в 'li'
        listItem.appendChild(userName);
        listItem.appendChild(userId)
        listItem.appendChild(userEmail);
        listItem.appendChild(userCity);
        listItem.appendChild(userPhone);
        listItem.appendChild(userCompany);

        // Добавляем 'li' в список 'ul'
        listUesersInfo.appendChild(listItem);
    });
};
