$(function () {
    $('.slider').slick({
        infinite: true,
        accessibility: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: $(".prev_arrow"),
        nextArrow: $(".next_arrow"),
        // responsive: [
        //     {
        //         breakpoint: 767,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1
        //         }
        //     },
        // ]
    });
});