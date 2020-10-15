// определение расстояния сверху у выпадающего меню
const determinationOfTop = () => {
    const list_shop = document.querySelector('.header__bottom-shop-list');
    const items_list = document.querySelectorAll('.header__bottom-shop-list-item');
    const top = items_list.length >= 7 ? items_list.length * 20 : 100;

    list_shop.style.top = `-${top}px`;
}

determinationOfTop();

// анимация при клике на поиск
const animationSearch = () => {
    const word = document.querySelector('.header-search-word');
    const blockSearchContent = document.querySelector('.header__block-search-content');
    const headerSearchWord = document.querySelector('.header-search-word');
    const headerSearch = document.querySelector('.header-search-show');
    const headerBlockSearch = document.querySelector('.header__block-search');

    blockSearchContent.style.width = `${word.offsetWidth}px`;
    blockSearchContent.style.height = `${word.offsetHeight}px`;

    // Действия при клике
    headerSearchWord.addEventListener('click', () => {
        headerSearch.style.width = '160px';
        blockSearchContent.style.width = `${headerSearch.offsetWidth}px`;
        blockSearchContent.style.height = `${headerSearch.offsetHeight}px`;

        headerBlockSearch.classList.add('no-border');

        headerSearch.style.order = '1';
        headerSearch.focus();

        word.style.display = 'none';
    });

    // Действия при выходе из инпута
    headerSearch.addEventListener('blur', () => {
        headerBlockSearch.classList.remove('no-border');
        headerSearch.style.order = '2';
        headerSearch.style.width = '0px';
        headerSearch.value = '';

        word.style.display = 'inline';

        blockSearchContent.style.width = `${word.offsetWidth}px`;
        blockSearchContent.style.height = `${word.offsetHeight}px`;
    });
}

animationSearch();

// поиск
const search = (data) => {
    const search = document.querySelector('.header-search');

    search.addEventListener('keydown', event => {
        const valueSearch = search.value.trim().toLowerCase();
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
        listCards.innerHTML = '';

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
            <li class="card">
                <a class="card__link" href="#" title="${product.name}">
                    <div class="card__block-img">
                        <img data-src="${product.img}" src="" alt="${product.name}">
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
        `;

            listCards.innerHTML += card;
        });
    }

    showImages();
}

// появление картинок
function showImages() {
    const imageObserver = new IntersectionObserver(entries => {
        entries.forEach(item => {
            // если попало в зону экрана
            if (item.isIntersecting) {
                item.target.src = item.target.dataset.src;
            }
        });
    });

    document.querySelectorAll('.card__block-img img').forEach(item => imageObserver.observe(item));
}

// фильтрация
const filter = (list) => {
    const blockFiltersList = document.querySelector('.block-filters-list');
    const sizes = document.querySelectorAll('.block-filters-list li');

    if (blockFiltersList) {
        const hideActiveClass = className => {
            sizes.forEach(item => {
                return [...item.children].filter(item => item.nodeName === 'A').map(el => el.classList.remove(className));
            });
        };

        const showActiveClass = (className, index) => {
            return [...sizes[index].children].filter(item => item.nodeName === 'A')[0].classList.add(className);
        };

        hideActiveClass('active-filter');
        showActiveClass('active-filter', 5);

        sizes.forEach((item, index) => {
            item.addEventListener('click', () => {
                const data_product = item.dataset.size;

                hideActiveClass('active-filter');
                showActiveClass('active-filter', index);

                document.querySelector('.preolaider-wrapper').style.display = 'flex';

                const getProducts = async(url) => {
                    fetch(url).then(data => {
                        data.json().then(products => {
                            document.querySelector('.preolaider-wrapper').style.display = 'none';
                            if (data_product === 'all') {
                                createProducts(products, list);
                            } else {
                                createProducts(products.filter(product => product.size === data_product), list);
                            }
                        });
                    }).catch(err => { throw err });
                }

                getProducts('http://localhost:3000/products');
            });
        });
    }
}

filter('.shop__list');

document.querySelectorAll('.card-old-price').forEach(node => node.textContent = toCurrency(node.textContent));
document.querySelectorAll('.card-now-price').forEach(node => node.textContent = toCurrency(node.textContent));

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
                createProducts(data, '.shop__list');
                search(data);
            })
            // ошибка
            .catch(err => console.log(err));
    }

    req();
});

// появление кнопки "вверх" при скролле
const showScrollUp = () => {
    const up = document.querySelector('.up-wrapper');
    const lines = document.querySelectorAll('.up-wrapper span');

    up.style.opacity = '0';

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

showScrollUp();

// просмотр изображений в модальном окне
const lookingImagesInModalWindow = array => {
    const img = document.querySelector('.product__img img');
    const product_img = document.querySelector('.product__img');
    const modal_window = document.querySelector('.window-look');
    const close = document.querySelector('.window-look__close');
    const list_images = document.querySelector('.window-look__list-images');

    if (product_img) {
        const hideImage = () => {
            modal_window.classList.remove('open-window');
            document.body.style.height = 'auto';
            document.body.style.overflow = 'visible';

            window.scrollTo({
                behavior: 'auto',
                top: 0
            });
        }

        array.forEach((item, index) => {
            if (index === 0) {
                img.src = item.img;
            }

            // создание блоков с картинками
            const createImages = () => {
                const block = `
                    <li class="window-look__img">
                        <img src="${item.img}" alt="" />
                    </li>
                `;

                list_images.innerHTML += block;
            }

            createImages();
        });

        const images = document.querySelectorAll('.window-look__img');

        // появление окна просмотра
        product_img.addEventListener('click', () => {
            modal_window.classList.add('open-window');
            document.body.style.height = `${document.querySelector('.window-look').clientHeight}px`;
            document.body.style.overflow = 'hidden';

            window.scrollTo({
                behavior: 'auto',
                top: 0
            });
        });

        // закрытие окна просмотра
        close.addEventListener('click', () => hideImage());
        window.addEventListener('keydown', event => event.keyCode === 27 && hideImage());
        images.forEach(item => item.addEventListener('click', () => hideImage()));
    }
}

let images = [{
        img: 'https://cdn.shopify.com/s/files/1/0123/0644/8443/products/OVERLAY_JAQUARD_MOCK_NECK_JUMPER_1_180x.jpg?v=1598624076'
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0123/0644/8443/products/OVERLAY_JAQUARD_MOCK_NECK_JUMPER_1_180x.jpg?v=1598624076'
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0123/0644/8443/products/OVERLAY_JAQUARD_MOCK_NECK_JUMPER_1_180x.jpg?v=1598624076'
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0123/0644/8443/products/OVERLAY_JAQUARD_MOCK_NECK_JUMPER_1_180x.jpg?v=1598624076'
    }
];

lookingImagesInModalWindow(images);

// валидация формы
const validationForm = () => {
    const validation = (regularExpressions, elementSelector, elementsSelector, formSelector, btnSelector, textValidBtn = 'зарегистрироваться', className = 'invalid') => {
        const form = document.querySelector(formSelector);
        const list_data = document.querySelectorAll(elementsSelector);
        const btn = document.querySelector(btnSelector);

        list_data.forEach(item => {
            item.classList.add(className);

            item.addEventListener('input', () => {
                const el = document.querySelector(elementSelector);
                const value = el.value.trim().toLowerCase();
                const regexp = regularExpressions;
                const result = regexp.test(value);

                result ? el.classList.remove(className) : el.classList.add(className);
                btn.value = [...list_data].filter(item => item.classList.contains(className)).length ? 'заполните пропуски' : textValidBtn;
            });
        });

        form && form.addEventListener('submit', e => {
            e.preventDefault();
            const arr = [...list_data].filter(item => item.classList.contains(className));

            if (arr.length) {
                arr[0].focus();
                btn.value = 'заполните пропуски';
            } else {
                form.submit();
                btn.value = textValidBtn;
            }
        });
    }

    // регулярные выражения
    const regexp_email = /^[a-z|A-Z|\d|\.|\_]{1,}@[a-z|A-Z]{1,}\.[a-z|A-Z]{1,}$/;
    const regexp_password = /^.{6,}$/;
    const regexp_name = /^[а-я|А-Я]{2,}$/;
    const regexp_date = /^(\d{2,2}\/){2,2}\d{4,4}|(\d{2,2}\.){2,2}\d{4,4}|(\d{2,2}\-){2,2}\d{4,4}$/;
    const regexp_required = /.{1,1}/;

    // форма регистрации на странице аккаунта
    validation(regexp_email, '.account__data[name="email-register"]', '.account__data-register', '.account__block-form-register', '.account__submit-register');
    validation(regexp_password, '.account__data[name="password-register"]', '.account__data-register', '.account__block-form-register', '.account__submit-register');
    validation(regexp_name, '.account__data[name="first-name-register"]', '.account__data-register', '.account__block-form-register', '.account__submit-register');
    validation(regexp_name, '.account__data[name="last-name-register"]', '.account__data-register', '.account__block-form-register', '.account__submit-register');

    // форма входа на странице аккаунта
    validation(regexp_required, '.account__data-login[name="email-login"]', '.account__data-login', '.account__block-form-login', '.account__submit-login', 'войти');
    validation(regexp_required, '.account__data-login[name="password-login"]', '.account__data-login', '.account__block-form-login', '.account__submit-login', 'войти');

    // форма регистрации на странице дизайнерского товара
    validation(regexp_email, '.design-product__block-form-register-email', '.design-product__block-form-register-info', '.design-product__block-form-register', '.design-product__block-form-register-submit');
    validation(regexp_date, '.design-product__block-form-register-date', '.design-product__block-form-register-info', '.design-product__block-form-register', '.design-product__block-form-register-submit');
}

validationForm();

// показать/скрыть пароль
const showHidePassword = () => {
    let passwords = document.querySelectorAll('.account__data[type="password"]');
    let eyes = document.querySelectorAll('.account__eye');
    let show = false;

    eyes.forEach((item, index) => {
        item.addEventListener('click', () => {
            show = !show;
            item.src = show ? './assets/img/eye-hide.png' : './assets/img/eye-show.png';
            passwords[index].type = show ? 'text' : 'password';
        });
    });
}

showHidePassword();

// создание select
const select = () => {
    const heading = document.querySelector('.product__block-list-heading');
    const list = document.querySelector('.product__block-list');
    const block = document.querySelector('.product__block-select-wrapper');
    let open = false;

    if (block) {
        const sizes = document.querySelectorAll('.product__block-size');
        const height = sizes.length * sizes[0].clientHeight;
        const bottom = sizes.length * sizes[0].clientHeight;

        // открытие/закрытие select
        const openCloseSelect = () => {
            heading.addEventListener('click', () => {
                open = !open;
                list.style.height = open ? `${height}px` : `0px`;
                list.style.bottom = open ? `-${bottom}px` : `0px`;

                list.classList.toggle('open-select');
                block.classList.toggle('open-options');
            });
        }

        openCloseSelect();

        // выбор размера
        const choiceSize = () => {
            sizes.forEach(item => {
                item.addEventListener('click', () => {
                    open = false;
                    list.style.height = open ? `${height}px` : `0px`;
                    list.style.bottom = open ? `-${bottom}px` : `0px`;

                    heading.innerHTML = item.innerHTML;
                    list.classList.remove('open-select');
                    block.classList.remove('open-options');
                });
            });
        }

        choiceSize();
    }
}

select();

// адаптив

// появление меню
const showMenuList = () => {
    const btn_open_nav = document.querySelector('.header__bottom-btn');
    const btn_open_user = document.querySelector('.header__bottom-btn-user');
    const list_nav = document.querySelector('.header__bottom-list-nav');
    const list_user = document.querySelector('.header__bottom-list-user');
    const btn_close_nav = document.querySelector('.header__bottom-list-close-nav');
    const btn_close_user = document.querySelector('.header__bottom-list-close-user');

    const switchingClasses = (btn, list, open) => {
        btn.addEventListener('click', () => {
            document.querySelector('.up-wrapper').style.zIndex = '0';
            if (open) {
                document.documentElement.classList.add('no-scroll');
                list.classList.add('show-menu');

                if (document.querySelector('.block-filters')) {
                    document.querySelector('.block-filters').style.zIndex = '0';
                }
            } else {
                document.documentElement.classList.remove('no-scroll');
                document.querySelector('.up-wrapper').style.zIndex = '999';
                list.classList.remove('show-menu');

                if (document.querySelector('.block-filters')) {
                    document.querySelector('.block-filters').style.zIndex = '999';
                }
            }
        });
    }

    switchingClasses(btn_open_nav, list_nav, true);
    switchingClasses(btn_open_user, list_user, true);

    switchingClasses(btn_close_nav, list_nav, false);
    switchingClasses(btn_close_user, list_user, false);
}

showMenuList();

// появление фильтра
const showFilter = () => {
    const btn_open = document.querySelector('.btn-open-filters');
    const filters = document.querySelector('.block-filters-list');

    if (btn_open) {
        btn_open.addEventListener('click', () => {
            filters.classList.toggle('show-filters');
        });
    }
}

showFilter();