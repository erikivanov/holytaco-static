var msnry = new Masonry( '.menu-wrapper', {
    itemSelector: '.menu-item'
});

const swiper = new Swiper('.swiper', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
$('a[href*="#"]:not([href="#"])').click(function() {
    var offset = -80;
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top + offset
            }, 500);
            return false;
        }
    }
});