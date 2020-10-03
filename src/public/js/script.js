const headerSearchWord = document.querySelector('.header-search-word');
const headerSearch = document.querySelector('.header-search-show');
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
                <a class="card__link" href="#" title="${product.name}">
                    <picture class="card__block-img">
                        <img data-src="${product.img}" src="" alt="${product.name}">
                    </picture>
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
    headerSearchWord.addEventListener('click', () => {
        word.style.opacity = '0';

        blockSearch.style.width = '115px';
        blockSearch.style.height = '20px';
        blockSearch.classList.add('no-border');

        blockSearchContent.style.height = '20px';

        list.style.width = '315px';

        headerSearch.style.opacity = '1';
        headerSearch.focus();
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
                search(data);
            })
            // ошибка
            .catch(err => console.log(err));
    }

    req();
});

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
const lookingImagesInModalWindow = array => {
    let img = document.querySelector('.product__img img');
    let product_img = document.querySelector('.product__img');
    let modal_window = document.querySelector('.window-look');
    let close = document.querySelector('.window-look__close');
    let list_images = document.querySelector('.window-look__list-images');

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
            let block =
                `
            <li class="window-look__img">
                <img src="${item.img}" alt="" />
            </li>
            `;

            list_images.innerHTML += block;
        }

        createImages();
    });

    let images = document.querySelectorAll('.window-look__img');

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

document.querySelector('.product__img') && lookingImagesInModalWindow(images);

// появление меню
const showMenu = () => {
    let el = document.querySelector('.header__bottom-shop');
    let menu = document.querySelector('.header__bottom-shop-list');

    const mouseEvents = (item, ev, add, bottomCount) => {
        item.addEventListener(ev, () => {
            if (add) {
                item.classList.add('no-bottom-line');
            } else {
                item.classList.remove('no-bottom-line');
            }
            menu.style.bottom = `${bottomCount}px`;
        });
    }

    mouseEvents(el, 'mouseover', true, -100);
    mouseEvents(el, 'mouseout', false, 100);
}

showMenu();

// валидация формы 
const validateForm = () => {
    // проверка всех ипутов на действительность
    const checkForm = (inputsSelector, className, btnSelector, textBtn) => {
        let inputs = document.querySelectorAll(inputsSelector);
        let btn = document.querySelector(btnSelector);

        let arr = [...inputs];
        arr = arr.filter(item => item.classList.contains(className));

        if (arr.length) {
            btn.dataset.valid = 'false';
            btn.classList.add('no-submit');
            btn.value = 'неверные данные';
            btn.disabled = 'true';
        } else {
            btn.dataset.valid = 'true';
            btn.classList.remove('no-submit');
            btn.value = textBtn;
            btn.removeAttribute('disabled');
        }
    }

    // валидация
    const validate = (elSelector, classInvalid, classValid, regexp, btnSelector, inputsSelector, textBtn) => {
        let inputs = document.querySelectorAll(elSelector);
        let cls_invalid = classInvalid;
        let cls_valid = classValid;

        inputs.forEach(item => {
            item.addEventListener('input', () => {
                let val = item.value.toLowerCase().trim();
                let res = regexp.test(val);

                if (res) {
                    item.classList.remove(cls_invalid);
                    item.classList.add(cls_valid);

                    checkForm(inputsSelector, 'invalid', btnSelector, textBtn);
                } else {
                    item.classList.add(cls_invalid);
                    item.classList.remove(cls_valid);

                    checkForm(inputsSelector, 'invalid', btnSelector, textBtn);
                }
            });
        });
    }

    let regexp_email = /^[a-z|A-Z|\d|\.]{1,}@[a-z|A-Z]{1,}\.[a-z|A-Z]{1,}$/g;
    let regexp_password = /^.{6,}$/;
    let regexp_name = /^[а-я|А-Я]{2,}$/;

    validate('.account__data[name="email-login"]', 'invalid', 'valid', regexp_email, '.account__submit-login', '.account__data-login', 'войти');
    validate('.account__data[name="email-register"]', 'invalid', 'valid', regexp_email, '.account__submit-register', '.account__data-register', 'зарегистрироваться');
    validate('.account__data[name="password-login"]', 'invalid', 'valid', regexp_password, '.account__submit-login', '.account__data-login', 'войти');
    validate('.account__data[name="password-register"]', 'invalid', 'valid', regexp_password, '.account__submit-register', '.account__data-register', 'зарегистрироваться');
    validate('.account__data-name', 'invalid', 'valid', regexp_name, '.account__submit-register', '.account__data-register', 'зарегистрироваться');

    // отправка данных
    const formSubmit = (formSelector, inputsSelector, btnSelector, textBtn) => {
        if (document.querySelector(formSelector)) {
            document.querySelector(formSelector).addEventListener('submit', checkForm(inputsSelector, 'invalid', btnSelector, textBtn));
        }
    }

    formSubmit('.account__block-form-login', '.account__data-login', '.account__submit-login', 'войти');
    formSubmit('.account__block-form-register', '.account__data-register', '.account__submit-register', 'зарегистрироваться');

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
}

validateForm();

// создание select
const select = () => {
    const heading = document.querySelector('.product__block-list-heading');
    const list = document.querySelector('.product__block-list');
    const sizes = document.querySelectorAll('.product__block-size');
    const block = document.querySelector('.product__block-select-wrapper');
    const height = sizes.length * sizes[0].clientHeight;
    const bottom = sizes.length * sizes[0].clientHeight;
    let open = false;

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

document.querySelector('.product__block-select-wrapper') && select();

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