$(document).ready(function() {
    $(`.header-burger`).click(function(event){
        $( `.header-burger,.header-menu`).toggleClass(`active`);
    })
});






/* =====================================slider-FON=============================================== */

$('.sliderbig').slick({
    arrows:false,   /* кнопки: true - включить, false - выключить */   
    dots: false,      /* точки для переключения кратинок */  
    infinite: true,  /* бесконечное перелистывание фото */
    fade:true,     /* будет только 1 фото видна, что нам и нужно */
    speed: 300,    /* со скоростью 1 сек. */
    slidesToShow: 1, /* здесь указываем количество слайдов, которое хотим отобразить за 1 раз */   
    slidesToScroll:1, /* количество слайдом за 1 пролистывание */
    adaptiveHeight: true, /* автоматическая Адаптивная высота слайда-картинки */

    autoplay:true, /* авто перелистывание */
    swipe:true, /* на мобильных устройствах можно свайпать фото пальцем */
    cssEase: 'linear' /* классный эффект перелистывания */
  });
  /* =====================================slider2-FON=============================================== */