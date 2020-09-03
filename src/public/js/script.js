const headerSearchWord = document.querySelector('.header-search-word');
const headerSearch = document.querySelector('.header-search');
const blockFiltersList = document.querySelector('.block-filters-list');

const checkResponse = res => document.querySelector('.no-el').style.display = res.length ? 'none' : 'block';

// цена
const toCurrency = price => {
        return new Intl.NumberFormat('ru-RU', {
            currency: 'rub',
            style: 'currency',
        }).format(price)
    }
    // создаем карточки
const createProducts = (response, listSelector) => {
    const listCards = document.querySelector(listSelector);

    if (listCards) {
        listCards.textContent = '';

        response.forEach(product => {
            let oldPrice = product.oldPrice;
            let sale;
            let nowPrice = product.nowPrice;

            if (product.oldPrice <= 0) {
                oldPrice = '';
                sale = '';
            } else {
                sale = `-(0%)`;
                oldPrice = toCurrency(product.oldPrice);
            }

            let card = `
            <li class="card" data-size="${product.size}">
                <a href="#" title="${product.name}">
                    <div class="card__block-img">
                        <figure>
                            <img src="${product.img}" alt="${product.name}">
                        </figure>
                    </div>
                    <div class="card__description">
                        <span class="card-name">${product.name}</span>
                        <div class="card__block-price">
                            <span class="card-old-price">${oldPrice}</span>
                            <span class="card-now-price">${toCurrency(nowPrice)}</span>
                            <span class="card-sale">${sale}</span>
                        </div>
                    </div>
                </a>
            </li>
        `

            listCards.innerHTML += card;
        })
    }
}

// фильтрация
if (blockFiltersList) {
    blockFiltersList.addEventListener('click', event => {
        const target = event.target;

        target.tagName !== 'LI' || target.tagName !== 'A' && false;

        const items = document.querySelector('.list-cards').getElementsByClassName('card');

        items.forEach(item => {
            if (item.dataset.size === target.dataset.size) {
                item.classList.remove('hidden');
            } else if (target.dataset.size === 'all') {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
}

document.querySelectorAll('.card-old-price').forEach(node => {
    node.textContent = toCurrency(node.textContent);
})

document.querySelectorAll('.card-now-price').forEach(node => {
    node.textContent = toCurrency(node.textContent);
})

// анимированный поиск
const animationSearch = () => {
    const word = document.querySelector('.header-search-word');
    const blockSearch = document.querySelector('.header__block-search');
    const blockSearchContent = document.querySelector('.header__block-search-content');
    const list = document.querySelector('.header__bottom-list-user');

    // Действия при клике
    headerSearchWord.addEventListener('click', event => {
        if (event.target) {
            word.style.opacity = '0';

            blockSearch.style.width = '115px';
            blockSearch.style.height = '20px';
            blockSearch.classList.add('no-border');

            blockSearchContent.style.height = '20px';

            list.style.width = '315px';

            headerSearch.style.opacity = '1';
            headerSearch.focus();
        }
    });

    // Действия при выходе из инпута
    headerSearch.addEventListener('blur', () => {
        word.style.opacity = '1';

        blockSearch.style.width = '40px';
        blockSearch.style.height = '11px';
        blockSearch.classList.remove('no-border');

        blockSearchContent.style.height = '11px';

        list.style.width = '200px';

        headerSearch.style.opacity = '0';
        headerSearch.value = '';
    });
}

animationSearch();

window.addEventListener('DOMContentLoaded', () => {
    // функция для запросов
    const getResource = async(url) => {
        // дожидаемся операции подключения
        const res = await fetch(`${url}`);

        // проверка на успешный запрос
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        // дожидаемся пока код завершит операцию превращения json в обычный объект
        return await res.json();
    }

    const req = () => {
        // запрос
        getResource('http://localhost:3000/products')
            // обработка данных, которые приходят по этому запросу
            .then(data => {
                createProducts(data, '.list-cards');
                createProducts(data, '.options');
                search(data);
            })
            // ошибка
            .catch(err => console.log(err));
    }

    req();
});

// поиск
const search = (data) => {
    headerSearch.addEventListener('keydown', event => {
        const valueSearch = headerSearch.value.trim().toLowerCase();
        const result = data.filter(item => item.name.toLowerCase().includes(valueSearch));

        if (event.keyCode === 13) {
            if (valueSearch.length > 2) {
                createProducts(result, '.list-cards');
                checkResponse(result)
            } else {
                createProducts(result, '.list-cards');
                checkResponse(result)
            }
        }
    });
}

// прокрутка вверх
const scrollUp = () => {
    const up = document.querySelector('.up-wrapper');
    const lines = document.querySelectorAll('.up-wrapper span');

    up.style.opacity = '0';

    // появление кнопки "вверх" при скролле
    window.addEventListener('scroll', function() {
        let y = pageYOffset;

        if (y > 500) {
            up.style.opacity = '1';
            up.style.visibility = 'visible';
            lines.forEach((item, index) => {
                if (index === 0) {
                    item.style.transform = "rotate(45deg)";
                } else {
                    item.style.transform = "rotate(-45deg)";
                }
            });
        } else {
            up.style.opacity = '0';
            up.style.visibility = 'hidden';
            lines.forEach(item => item.style.transform = "rotate(0deg)");
        }
    });

    // скролл вверх
    up.addEventListener('click', () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        });
    });
}

scrollUp();

// просмотр изображений в модальном окне
const lookingImagesInModalWindow = (array, ms) => {
    let img = document.querySelector('.product__img');
    let modal_window = document.querySelector('.window-look');
    let close = document.querySelector('.window-look__close');
    let list_images = document.querySelector('.window-look__list-images');

    const hideImage = () => {
        modal_window.classList.remove('open-window');
        img.classList.add('close-anim-zoom');

        setTimeout(() => {
            img.classList.remove('close-anim-zoom');
        }, ms);

        window.scrollTo({
            behavior: 'auto',
            top: 0
        });
    }

    array.forEach((item, index) => {
        if (index === 0) {
            img.style.backgroundImage = `url(${item.img})`;
        }

        // создание блоков с картинками
        const createImages = () => {
            let block = `<li class="window-look__img" style="background-image: url(${item.img});"></li>`;
            list_images.innerHTML += block;
        }

        createImages();
    });

    let images = document.querySelectorAll('.window-look__img');

    images.forEach((item, index) => {
        if (index === 0) item.style.cursor = 'zoom-out';
    });

    // появление окна просмотра
    img.addEventListener('click', () => {
        img.classList.add('anim-zoom');
        document.body.style.overflow = 'hidden';

        window.scrollTo({
            behavior: 'auto',
            top: 0
        });

        setTimeout(() => {
            modal_window.classList.add('open-window');
            img.classList.remove('anim-zoom');
            document.body.style.overflow = 'visible';
        }, ms);
    });

    // закрытие окна просмотра
    close.addEventListener('click', () => hideImage());
    window.addEventListener('keydown', event => event.keyCode === 27 && hideImage());
    images.forEach((item, index) => item.addEventListener('click', () => index === 0 && hideImage()));
}

let images = [{
        img: 'assets/img/IMG_2709.jpg'
    },
    {
        img: 'assets/img/IMG_2742.jpg'
    },
    {
        img: 'assets/img/IMG_2834.jpg'
    },
    {
        img: 'assets/img/IMG_2827.jpg'
    }
];

document.querySelector('.product__img') && lookingImagesInModalWindow(images, 1500);

// появление меню
const showMenu = () => {
    let el = document.querySelector('.header__bottom-shop');
    let menu = document.querySelector('.header__bottom-shop-list');

    el.addEventListener('mouseover', () => {
        el.classList.add('no-bottom-line');
        menu.style.bottom = '-40px';
    });

    el.addEventListener('mouseout', () => {
        el.classList.add('no-bottom-line');
        menu.style.bottom = '100px';
    });

    // const events = (ev, className, removeClass, addClass, num)
}

showMenu();