require([
    'jquery',
    'slick'
], function ($) {
    $(document).ready(function () {
        $(".categories").slick({
            //autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            arrows: false,
            speed: 300,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false,
                        infinite: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false,
                        infinite: true
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false,
                        arrows: false,
                        infinite: true
                    }
                },
                {
                    breakpoint: 380,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false,
                        arrows: false,
                        infinite: true
                    }
                }
            ]
        });
    });
});