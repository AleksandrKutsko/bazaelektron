new Swiper('.header--slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    speed: 600,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 6000,
    },

    // Navigation arrows
    /*navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },*/

    // And if we need scrollbar
    /*scrollbar: {
        el: '.swiper-scrollbar',
    },*/
});

/* JQUERY */
$('.top-line-order-call').click(function(){ /* заказать звонок */
    $('.popup--order-call').fadeIn();
});
$('.popup-btn-close.order').click(function(){
    $('.popup--order-call').fadeOut();
});

$('.map-btn').click(function(){ /* карта */
    $('.popup--map').fadeIn();
});
$('.popup-btn-close.map').click(function(){
    $('.popup--map').fadeOut();
});

$('.navigation-item.search').click(function(){
    if($(this).hasClass('hidden')){
        $(this).removeClass('hidden');
        $('.form--search').css('right', '0px');
    }else{
        $(this).addClass('hidden');
        $('.form--search').css('right', '-1400px');
    }
});
$('.search-input').click(function(e){
    e.stopPropagation();
});