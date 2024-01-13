let games_slider = document.querySelector('.games .slider_wrap .swiper');
if (games_slider) {
    const gamesSlider = new Swiper(games_slider, {
        slidesPerView: 3,
        spaceBetween: 60,
        loop: true,
        navigation: {
            nextEl: '.games .slider_wrap .slider_next',
            prevEl: '.games .slider_wrap .slider_prev'
        }
    })
}

let newsSlider = new Swiper('.games .news_slider', {
    slidesPerView: 3,
    spaceBetween: 18,
    loop: true,
    speed: 600,
    centeredSlides: true,
    navigation: {
        nextEl: '.games .content_bottom .next_btn',
        prevEl: '.games .content_bottom .prev_btn',
    }
})