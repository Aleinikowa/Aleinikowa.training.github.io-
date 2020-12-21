let swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    width: 750,
    loop: false,
    freeMode: false,
    slidesPerView: 3,
    spaceBetween: 25,
    centeredSlidesBounds: true,
    slidesPerGroup : 1,
    watchSlidesProgress: true,      
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    centeredSlides: false,
});