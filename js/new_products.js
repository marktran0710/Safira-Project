$(document).ready(function() {
    $('#caro-slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 800,
        autoplayTimeout: 10000,
        items: 1,
    });


});

$(document).ready(function() {
    $('#products-best-sellers .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
    });
})

$(document).ready(function() {
    $('#products .owl-carousel').owlCarousel({
        margin: 20,
        nav: true,
        dots: false,
        // items: 5,
        responsive: {
            0: {
                items: 1
            },
            576: {
                item: 2
            },
            768: {
                items: 3
            },

            992: {
                items: 4
            },

            1200: {
                items: 5
            }
        }
    });
});
$(document).ready(function() {
    $('#our-blog .owl-carousel').owlCarousel({
        margin: 20,
        nav: true,
        dots: false,
        items: 3,
    });
});
$(document).ready(function() {
    $('#our-products').slick({
        margin: 20,
        slidesPerRow: 3,
        rows: 2,
        responsive: [{
            breakpoint: 300,
            settings: {
                slidesPerRow: 1,
                rows: 1,
            }
        }]
    });
});