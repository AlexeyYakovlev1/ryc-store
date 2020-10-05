import Glide from '@glidejs/glide';

let options = {
    type: 'carousel',
    autoplay: 4000,
    animationDuration: 2000,
    animationTimingFunc: 'ease',
    gap: 0
};

// инициализация библиотеки Glide
document.querySelector('.glide') && new Glide('.glide', options).mount();
