$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("dark-grey-bg");
        $('#batch-tab').addClass("fixed-tab");
        $('#batch-tab').addClass("come-out");
        $('.number-section1').addClass("come-in");
    } else {
        $('header').removeClass("dark-grey-bg");
        $('.number-section1').removeClass("come-in");
        $('#batch-tab').removeClass("fixed-tab");
        $('#batch-tab').removeClass("come-out");
    }
    if ($(window).scrollTop() >= 300) {
        $('.goto-top').slideDown();
    } else {
        $('.goto-top').slideUp();
    }
});
$('.menu-toggle').click(function() {
    $('.step-one-menu').toggleClass('swipe');
    $(".body-color-overlay").toggleClass('d-block');
    $('body').toggleClass('noscroll');
    $('.logo').toggleClass('d-none');
    $('.upper-menu ul').addClass('d-none');
    $('.footer-fixed-bar').addClass('d-none');

    $("body").bind("mousewheel", function() {
        return false;
    });

    //target the entire page, and listen for touch events
    $('html, body').on('touchstart touchmove', function(e) {
        //prevent native touch activity like scrolling
        e.preventDefault();
    });

});
$('ul[class*="step-one-menu"] li').click(function() {
    $('ul[class*="step-one-menu"] li').removeClass('active');
    if ($(this).attr('class').indexOf('active') > -1) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
    var _index = $(this).index();
    _index = _index * 20;
    $(".step-one-menu").animate({
        scrollTop: _index.toString()
    }, 600);
});
$('.body-color-overlay').click(function() {
    $('.step-one-menu').removeClass('swipe');
    $(this).removeClass('d-block');
    $("body").removeClass('noscroll');
    $('.logo').removeClass('d-none');
    $('.upper-menu ul').removeClass('d-none');
    $('.footer-fixed-bar').removeClass('d-none');
    $("body").unbind("mousewheel");
});
$(".bell-icon").click(function() {
    $(".notifi-listing").toggleClass('close-swipe');
});
$('.goto-top').click(function() {
    $("html, body").animate({
        scrollTop: '0'
    }, 600);
});
$("#batch-tab .nav-link").click(function() {
    $(window).scrollTop(0);
});
$(".feature-box").hover(function() {
    $('.feature-row').find('.feature-box').removeClass('active');
    $(this).toggleClass('active');
});
$(document).ready(function() {

    $(".breadcrumb-style li").last().text($(".breadcrumb-style li").last().text().replace('.php', ''));

    $('.review-slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 2000,
                settings: "unslick"
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.acp-stories-slider').not('.slick-initialized').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: '<div class="fa fa-angle-right slick-next"></div>',
        prevArrow: '<div class="fa fa-angle-left slick-prev"></div>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.p-logo-carasoul').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.news-slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });



    $('.elummni-section__slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    $('.elummni-section__slider2').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.rankingsBlock__slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function(slick, index) {
            var targetImage = slick.$slides.eq(index).find('img.slide-logo').attr('src');
            return '<img src=" ' + targetImage + ' "/>';
        },
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.lab-slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.notificationSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    });


    $('.note-slider').slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1
    });


    $('#box1').slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        vertical: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('#box2').slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        vertical: true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('#box3').slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        vertical: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});

$(document).ready(function() {

    setInterval(function() {
        $(".side-call").toggleClass("contact-transform");
    }, 5000);

    $('#search-page-mob').click(function() {
        setTimeout(function() {
            $(".searchbar-input").focus();
        }, 500);
    });
});