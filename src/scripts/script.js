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

// красивая цена
const toCurrency = price => {
    return new Intl.NumberFormat('ru-RU', {
        currency: 'rub',
        style: 'currency',
    }).format(price)
}

// создаем карточки
const createProducts = response => {
    listCards.innerHTML = '';

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
blockFiltersList.addEventListener('click', event => {
    const target = event.target;

    target.tagName !== 'LI' || target.tagName !== 'A' && false;

    const items = listCards.getElementsByClassName('card');

    items.forEach(item => {
        if (item.dataset.size === target.dataset.size) {
            item.style.display = 'block';
        } else if (target.dataset.size === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
})

document.querySelectorAll('.card-old-price').forEach(node => {
    node.textContent = toCurrency(node.textContent);
})

document.querySelectorAll('.card-now-price').forEach(node => {
    node.textContent = toCurrency(node.textContent);
})

const animationList = () => {
    headerSearchWord.addEventListener('click', event => {
        if (event.target) {
            document.querySelector('.header__bottom-list-user').style.width = '315px';
            document.querySelector('.header__block-search').style.width = '170px';
            document.querySelector('.header__block-search-content').style.transform = 'translateX(-38px)';

            headerSearch.focus();
        }
    });

    headerSearch.addEventListener('blur', () => {
        document.querySelector('.header__bottom-list-user').style.width = '200px';
        document.querySelector('.header__block-search').style.width = '36px';
        document.querySelector('.header__block-search-content').style.transform = 'translateX(0)';
    });
}

animationList();

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