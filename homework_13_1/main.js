// Получаем элементы
const textUserNote = document.querySelector('.lastSaveNotepad');

// Обработчик формы
document.getElementById('userNotepadForm').addEventListener('submit', (event) => {
    event.preventDefault();

    // Получаем данные из поля ввода
    const noteFromTextarea = event.target.elements['textNoteUserForm'].value;


    // Записываем данные в localStorage
    localStorage.setItem('note', noteFromTextarea);

    // Выводим текст в Заметку
    setTextNotepad(noteFromTextarea);

    // Очищаем форму
    event.target.reset();
});

function setTextNotepad(text) {
    textUserNote.textContent = text;
}

// Получаем текст заметки из localStorage
const textUserContent = localStorage.getItem('note');

// Заполняем Заметку при загрузке страницы
textUserContent ? setTextNotepad(textUserContent) : setTextNotepad('');
