// Реализовать функцию, которая будет создавать элементы списка на основе массива данных. Каждый элемент списка должен содержать кнопку, при нажатии на которую будет происходить удаление этого элемента из списка.

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
const ul = document.querySelector('ul');

function renderList(array) {
    ul.innerHTML = '';

    array.forEach((element) => {
        const listElement = document.createElement('li');
        const title = document.createElement('p');
        title.textContent = element;

        const button = document.createElement('button');
        button.textContent = 'Delete';

        // button.addEventListener("click", () => {
        //     myArray.splice(index, 1); // Видаляємо елемент з масиву
        //     renderList(myArray); 
        // });

        button.addEventListener("click", () => {
            listElement.remove();
        });

        listElement.append(title, button);
        ul.appendChild(listElement);
    });

};

renderList(myArray);