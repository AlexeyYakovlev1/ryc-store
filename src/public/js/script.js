const headerSearch = document.querySelector('.header-search');
const headerSearchWord = document.querySelector('.header-search-word');
const blockFiltersList = document.querySelector('.block-filters-list');
const jsRemove = document.querySelector('.js-remove');

// цена
const toCurrency = price => {
    return new Intl.NumberFormat('ru-RU', {
        currency: 'rub',
        style: 'currency',
    }).format(price)
}

// фильтрация
if (blockFiltersList) {
    blockFiltersList.addEventListener('click', event => {
        const target = event.target;

        target.tagName !== 'LI' || target.tagName !== 'A' && false;

        const items = document.querySelectorAll('.card');

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

document.querySelectorAll('.product__block-price').forEach(node => {
    node.textContent = toCurrency(node.textContent);
})

// document.querySelectorAll('.cart__product-total').forEach(node => {
//     node.textContent = toCurrency(node.textContent);
// })

document.querySelectorAll('.cart__product-desc-price').forEach(node => {
    node.textContent = toCurrency(node.textContent);
})

document.querySelectorAll('.card-now-price').forEach(node => {
    node.textContent = toCurrency(node.textContent);
})

// анимированный поиск
// const animationSearch = () => {
//     const word = document.querySelector('.header-search-word');
//     const headerSearch = document.querySelector('.header-search-word');
//     const blockSearch = document.querySelector('.header__block-search');
//     const blockSearchContent = document.querySelector('.header__block-search-content');
//     const list = document.querySelector('.header__bottom-list-user');
//     let width_list = +list.style.width.replace(/px/, '');

//     // Действия при клике
//     headerSearchWord.addEventListener('click', event => {
//         if (event.target) {
//             word.style.opacity = '0';

//             blockSearch.style.width = '115px';
//             blockSearch.style.height = '20px';
//             blockSearch.classList.add('no-border');

//             blockSearchContent.style.height = '20px';

//             list.style.width = '315px';

//             headerSearch.style.opacity = '1';
//             headerSearch.focus();
//         }
//     });

//     // Действия при выходе из инпута
//     headerSearch.addEventListener('blur', () => {
//         word.style.opacity = '1';

//         blockSearch.style.width = '40px';
//         blockSearch.style.height = '11px';
//         blockSearch.classList.remove('no-border');

//         blockSearchContent.style.height = '11px';

//         headerSearch.style.opacity = '0';
//         headerSearch.value = '';

//         if (width_list === 115) {
//             list.style.width = '115px';
//         } else {
//             list.style.width = '200px';
//         }
//     });
// }

// animationSearch();

// поиск
// const search = (data) => {
//     headerSearch.addEventListener('keydown', event => {
//         const valueSearch = headerSearch.value.trim().toLowerCase();
//         const result = data.filter(item => item.name.toLowerCase().includes(valueSearch));

//         if (event.keyCode === 13) {
//             if (valueSearch.length > 2) {
//                 createProducts(result, '.list-cards');
//                 checkResponse(result)
//             } else {
//                 createProducts(result, '.list-cards');
//                 checkResponse(result)
//             }
//         }
//     });
// }

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
const lookingImagesInModalWindow = (ms) => {
    let img = document.querySelector('.product__img');
    let modal_window = document.querySelector('.window-look');
    let close = document.querySelector('.window-look__close');

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

    let images = document.querySelectorAll('.window-look__img');

    images.forEach(item => {
        item.style.cursor = 'zoom-out';
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
    images.forEach(item => item.addEventListener('click', () => hideImage()));
}

document.querySelector('.product__img') && lookingImagesInModalWindow(1500);

// появление меню
const showMenu = () => {
    let el = document.querySelector('.header__bottom-shop');
    let menu = document.querySelector('.header__bottom-shop-list');

    const mouseEvents = (item, ev, add, bottomCount) => {
        item.addEventListener(ev, () => {
            if (add) {
                item.classList.add('no-bottom-line');
            } else {
                item.classList.add('no-bottom-line');
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

    let regexp_email = /^(\w|\d)+@[a-z]+\.[a-z]+$/gm;
    let regexp_password = /^.{6,}$/;
    let regexp_name = /^.{2,}$/;

    validate('.account__data[data-form="email-login"]', 'invalid', 'valid', regexp_email, '.account__submit-login', '.account__data-login', 'войти');
    validate('.account__data[data-form="email-register"]', 'invalid', 'valid', regexp_email, '.account__submit-register', '.account__data-register', 'зарегистрироваться');
    validate('.account__data[data-form="password-login"]', 'invalid', 'valid', regexp_password, '.account__submit-login', '.account__data-login', 'войти');
    validate('.account__data[data-form="password-register"]', 'invalid', 'valid', regexp_password, '.account__submit-register', '.account__data-register', 'зарегистрироваться');
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
                item.src = show ? '/eye-hide.png' : '/eye-show.png';
                passwords[index].type = show ? 'text' : 'password';
            });
        });
    }

    showHidePassword();
}

validateForm();

// удаление товара из корзины
const cartProducts = document.querySelector('.cart__products');
const cartElement = document.querySelector('.cart');

if (cartElement) {
    cartElement.addEventListener('click', event => {
        if (event.target.classList.contains('cart__product-desc-remove-product')) {
            const id = event.target.dataset.id;
            const csrf = event.target.dataset.csrf;

            fetch(`/cart/remove/${id}`, {
                    method: 'delete',
                    headers: {
                        'X-XSRF-TOKEN': csrf
                    }
                })
                .then(res => res.json())
                .then(cart => {
                    if (cart.cartProducts.length) {
                        const html = cart.cartProducts.map(p => {
                            return `
                                <li class="cart__product">
                                    <div class="cart__product-content">
                                        <div class="cart__product-desc">
                                            <a href="/shop/${p.id}">
                                                <div class="cart__product-desc-img">
                                                    <figure>
                                                        <img src="${p.img[0]}" alt="${p.title}" width="128">
                                                    </figure>
                                                </div>
                                            </a>
                                            <div class="cart__product-desc-text">
                                                <div class="cart__product-desc-block">
                                                    <div class="cart__product-desc-block-item" style="width: 200px;">
                                                        <p>${p.description}</p>
                                                        <div class="cart__product-desc-size">Размер: ${p.mainSize} (${p.sizes[0]})</div>
                                                    </div>
                                                    <div class="cart__product-desc-block-item">
                                                        <div class="cart__product-desc-price">${p.nowPrice}</div>
                                                    </div>
                                                </div>
                                                <div class="cart__product-desc-block">
                                                    <div class="cart__product-desc-block-item">
                                                        <div class="cart__product-desc-count">Количество: ${p.count}</div>
                                                    </div>
                                                    <div class="cart__product-desc-block-item">
                                                        <input class="cart__product-desc-remove-product js-remove" type="submit" data-id="${p.id}" value="Удалить" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cart__product-info">
                                            <div class="cart__product-heading">Осень-зима</div>
                                            <div class="cart__product-total">Итого: ${p.nowPrice * p.count}</div>
                                            <form class="cart__product-info-form" action="/order" method="GET">
                                                <input type="hidden" name="_csrf" value="#{csrf}">
                                                <input class="cart__product-form-buy" type="submit" value="Заказать">
                                            </form>
                                        </div>
                                    </div> 
                                </li>
                            `
                        }).join('');

                        cartProducts.innerHTML = html;
                    } else {
                        cartProducts.innerHTML = `
                            <h1>SHOPPING BAG</h1>
                            <p>Your shopping bag is currently empty. Enable cookies to use the shopping cart</p>
                        `
                    }
                })
        }
    })
}

// поиск
// const headerSearchTest = document.querySelector('.header-search-test');

// headerSearchTest.addEventListener('keydown', event => {
//     const searchValue = headerSearchTest.value.toLowerCase().trim();

//     if (event.keyCode === 13) {
//         fetch(`/shop/products/?search=${searchValue}`)
//             .then(res => res.json())
//             .catch(err => alert(err))
//     }
// })