const listCards = document.querySelector('.list-cards');
const headerSearchWord = document.querySelector('.header-search-word');
const headerSearch = document.querySelector('.header-search');
const blockFiltersList = document.querySelector('.block-filters-list');

const checkResponse = res => {
    if (res.length) {
        document.querySelector('.no-el').style.display = 'none';
    } else {
        document.querySelector('.no-el').style.display = 'block';
    }
}

// цена
const toCurrency = price => {
    return new Intl.NumberFormat('ru-RU', {
        currency: 'rub',
        style: 'currency',
    }).format(price)
}

// создаем карточки
const createProducts = response => {
    listCards.textContent = '';

    response.forEach(product => {
        let oldPrice;
        let sale;
        let nowPrice = toCurrency(product.nowPrice);

        if (product.sale <= 0) {
            oldPrice = '';
            sale = '';
        } else {
            sale = `-(${product.sale}%)`;
            oldPrice = toCurrency(product.oldPrice);
        }

        let card = `
            <li class="card" data-size="${product.size}">
                <a href="#" title="${product.name}">
                    <div class="card__block-img">
                        <img src="${product.img}" alt="${product.name}">
                    </div>
                    <div class="card__description">
                        <span class="card-name">${product.name}</span>
                        <div class="card__block-price">
                            <span class="card-old-price">${oldPrice}</span>
                            <span class="card-now-price">${nowPrice}</span>
                            <span class="card-sale">${sale}</span>
                        </div>
                    </div>
                </a>
            </li>
        `

        listCards.innerHTML += card;
    })
}

// фильтрация
if (blockFiltersList) {
    blockFiltersList.addEventListener('click', event => {
        const target = event.target;

        target.tagName !== 'LI' || target.tagName !== 'A' && false;

        const items = listCards.getElementsByClassName('card');

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

        blockSearch.style.width = '36px';
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
                createProducts(data);
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
                createProducts(result);
                checkResponse(result)
            } else {
                createProducts(result);
                checkResponse(result)
            }
        }
    });
}

// появление кнопки прокрутки вверх
const showBtnScrollUp = () => {
    const up = document.querySelector('.up-wrapper');

    up.style.opacity = '0';

    window.addEventListener('scroll', function() {
        let y = pageYOffset;

        if (y > 500) {
            up.style.opacity = '1';
        } else {
            up.style.opacity = '0';
        }
    });
}

showBtnScrollUp();