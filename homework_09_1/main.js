// У вас есть список элементов (<li>). При загрузке страницы проверьте условие (например, длина списка). Если условие выполняется, создайте новый элемент и замените последний элемент списка новым.

const myListElements = document.getElementById('myListElements');

if (myListElements.children.length > 0) {
    const lastLi = myListElements.children[myListElements.children.length-1]
    const newLi = document.createElement('li');
    newLi.textContent = 'new Element';
    myListElements.replaceChild(newLi, lastLi);
};
