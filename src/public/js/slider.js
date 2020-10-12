import Glide from '@glidejs/glide';

let options = {
    type: 'carousel',
    autoplay: 4000,
    animationDuration: 2000,
    animationTimingFunc: 'ease',
    gap: 5,
    breakpoints: {
        600: {
            gap: 20
        }
    }
};

// инициализация библиотеки Glide
document.querySelector('.glide') && new Glide('.glide', options).mount();