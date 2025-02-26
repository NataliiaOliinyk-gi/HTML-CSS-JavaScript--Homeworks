document.addEventListener('DOMContentLoaded', () => {
    // Массив с URL изображений для слайдера.
    // Можно добавлять или убирать изображения по необходимости.

    const images = [
        'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
        'https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688461053_kartin-papik-pro-p-kartinki-priroda-leto-krasivie-v-khoroshem-56.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
        'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400'
    ];

    // Глобальная переменная для хранения индекса текущего слайда (начинаем с 0)
    let sliderIndex = 0;

    // Получаем элемент с id="root", куда будет добавлен слайдер
    const root = document.getElementById('root');

    // Создаем основной контейнер слайдера (рамку)
    const frame = document.createElement("div");
    frame.classList.add("frame");

    // Создаем контейнер для всех слайдов
    const cards = document.createElement("div");
    cards.classList.add("cards");

    // Заполняем контейнер слайдов элементами с изображениями
    images.forEach(imageUrl => {
        const card = document.createElement("div");
        card.classList.add("card");
        // Задаем фоновое изображение для карточки
        card.style.backgroundImage = `url("${imageUrl}")`;
        cards.append(card);
    });

    // Устанавливаем ширину контейнера .cards в зависимости от количества слайдов
    cards.style.width = `${images.length * 500}px`;

    // Добавляем контейнер слайдов в рамку
    frame.append(cards);

    //  Функция для обновления позиции контейнера слайдов.
    //  Сдвиг происходит на величину: индекс слайда * 500px.

    function updateSliderPosition() {
        cards.style.left = `${-sliderIndex * 500}px`;
        updateActiveRound();
    }

    //  Функция для обновления активного индикатора (переключателя «точек»).
    //  Убираем класс .active у всех кнопок и добавляем его кнопке, соответствующей текущему слайду.

    function updateActiveRound() {
        const rounds = document.querySelectorAll(".rounds button");
        rounds.forEach((btn, idx) => {
            if (idx === sliderIndex) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
    }

    //  Функция создания переключателей "точек".
    //  Для каждого изображения создаётся кнопка, при клике на которую происходит переход к соответствующему слайду.

    function createRounds() {
        const container = document.createElement("div");
        container.classList.add("rounds");

        for (let i = 0; i < images.length; i++) {
            const button = document.createElement("button");
            // Если это первый слайд, делаем индикатор активным
            if (i === 0) {
                button.classList.add("active");
            }

            container.append(button);

            // При клике на индикатор обновляем индекс слайда и позицию контейнера
            button.addEventListener("click", function () {
                sliderIndex = i;
                updateSliderPosition();
            });
        }

        // Добавляем переключатели "точек" в рамку слайдера
        frame.append(container);
    }

    // Функция по созданию боковых стрелок
    function createArrows() {

        // Создаем контейнер для боковых стрелок (триггеров), который будет растянут на всю высоту слайдера.
        const triggers = document.createElement("div");
        triggers.classList.add("trigger");

        // Создаем левую стрелку
        const leftBtn = document.createElement("button");
        leftBtn.innerText = "<";

        // Создаем правую стрелку
        const rightBtn = document.createElement("button");
        rightBtn.innerText = ">";

        // Назначаем обработчики клика для боковых стрелок
        leftBtn.addEventListener("click", goLeft);
        rightBtn.addEventListener("click", goRight);

        // Добавляем стрелки в контейнер triggers
        triggers.append(leftBtn, rightBtn);

        // Добавляем контейнер triggers в рамку слайдера
        frame.append(triggers);
    };


    // Функция для переключения на предыдущий слайд 
    function goLeft() {
        if (sliderIndex !== 0) {
            sliderIndex--;
            updateSliderPosition();
        };
    };

    // Функция для переключения на следующий слайд 
    function goRight() {
        if (sliderIndex < images.length - 1) {
            sliderIndex++;
            updateSliderPosition();
        };
    };

    // Вызываем функцию создания переключателей "точек"
    createRounds();

    // Вызываем функцию создания боковых стрелок
    createArrows();

    //  Обработчик событий для навигации с помощью клавиатуры.
    //  При нажатии клавиши "ArrowLeft" слайдер переключается влево, при нажатии "ArrowRight" – вправо.

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            goLeft();
        } else if (event.key === "ArrowRight") {
            goRight();
        }
    });

    // Добавляем готовый слайдер в корневой элемент DOM
    root.append(frame);

});

