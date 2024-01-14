let games_slider = document.querySelector('.games .slider_wrap .swiper');
if (games_slider) {
    const gamesSlider = new Swiper(games_slider, {
        slidesPerView: 1,
        spaceBetween: 60,
        loop: true,
        navigation: {
            nextEl: '.games .slider_wrap .slider_next',
            prevEl: '.games .slider_wrap .slider_prev'
        },
        breakpoints: {
            1000: {
                slidesPerView: 3,
            },
            800: {
                slidesPerView: 2
            }
        }
    })
}

let newsSlider = new Swiper('.games .news_slider', {
    slidesPerView: 1,
    spaceBetween: 18,
    loop: true,
    speed: 600,
    centeredSlides: false,
    navigation: {
        nextEl: '.games .content_bottom .next_btn',
        prevEl: '.games .content_bottom .prev_btn',
    },
    breakpoints: {
        993: {
            slidesPerView: 3,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 2
        }
    }
})

let header = document.querySelector('.header')

document.addEventListener('scroll', function () {
    if (scrollY >= 35) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
})

let modal = document.querySelector('.modal')
let modal_btns = document.querySelectorAll('.open_modal')
let modal_close_btn = document.querySelector('.modal .modal_close');
if (modal_btns.length) {
    modal_btns.forEach(btn => {
        btn.onclick = () => {
            modal.classList.add('active');
        }
    })
}

modal_close_btn.onclick = () => {
    modal.classList.remove('active')
}

let bars = document.querySelector('.header .bars');
let header_mobile = document.querySelector('.header__mobile');
bars.onclick = () => {
    header_mobile.classList.toggle('active');
}