(function ($) {
    //preloader js
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    })


    // //Header
    // var fixed_top = $("header");
    // $(window).on('scroll', function () {
    //     if ($(this).scrollTop() > 200) {
    //         fixed_top.addClass("header--fixed animated fadeInDown");
    //     } else {
    //         fixed_top.removeClass("header--fixed animated fadeInDown");
    //     }
    // });

    // //close mobile menu after clicking nav-link
    // $(".nav-link").click(function () {
    //     $(".navbar-toggler").addClass("collapsed");
    // });
    // $(".nav-link").click(function () {
    //     $(".navbar-collapse").removeClass("show");
    // });


    //Animation on Scroll initializing
    AOS.init();


    //Collection slider 1

    var swiper = new Swiper(".collection__thumb-slider-1", {
        spaceBetween: 20,
        direction: 'vertical',
        grabCursor: true,
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 1,
        },
        speed: 3000,
    });


    // collection slider 2
    var swiper = new Swiper(".collection__thumb-slider-2", {
        spaceBetween: 20,
        direction: 'vertical',
        grabCursor: true,
        loop: true,
        slidesPerView: 2,
        autoplay: {
            delay: 1,
            reverseDirection: true,
        },
        speed: 4000,
    });



    // Roadmap slider
    var swiper = new Swiper(".roadmap__slider", {
        spaceBetween: 20,
        grabCursor: true,
        slidesPerView: 1,
        autoplay: {
            delay: 1,
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
        navigation: {
            nextEl: ".roadmap__next",
            prevEl: ".roadmap__prev",
        },
        speed: 4000,
    });


    //gallery slider
    var swiper = new Swiper(".gallery__slider", {
        effect: "coverflow",
        slidesPerView: 2,
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 20,
            depth: 200,
            modifier: 1,
            slideShadows: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
                coverflowEffect: {
                    stretch: 50,
                    depth: 200,
                    modifier: 1,
                },
            },
            1400: {
                slidesPerView: 3,
                coverflowEffect: {
                    stretch: 100,
                    depth: 150,
                    modifier: .96,
                },
            },
        },
        loop: true,
        autoplay: {
            delay: 3000,
        },
    });




    //Countdown js initialization
    document.addEventListener('readystatechange', event => {
        if (event.target.readyState === "complete") {
            var clockdiv = document.getElementsByClassName("countdown__list");
            var countDownDate = new Array();
            for (var i = 0; i < clockdiv.length; i++) {
                countDownDate[i] = new Array();
                countDownDate[i]['el'] = clockdiv[i];
                countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
                countDownDate[i]['days'] = 0;
                countDownDate[i]['hours'] = 0;
                countDownDate[i]['seconds'] = 0;
                countDownDate[i]['minutes'] = 0;
            }

            var countdownfunction = setInterval(function () {
                for (var i = 0; i < countDownDate.length; i++) {
                    var now = new Date().getTime();
                    var distance = countDownDate[i]['time'] - now;
                    countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
                    countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);

                    if (distance < 0) {
                        countDownDate[i]['el'].querySelector('.countdown__number-days').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.countdown__number-hours').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.countdown__number-minutes').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.countdown__number-seconds').innerHTML = 0;
                    } else {
                        countDownDate[i]['el'].querySelector('.countdown__number-days').innerHTML = countDownDate[i]['days'];
                        countDownDate[i]['el'].querySelector('.countdown__number-hours').innerHTML = countDownDate[i]['hours'];
                        countDownDate[i]['el'].querySelector('.countdown__number-minutes').innerHTML = countDownDate[i]['minutes'];
                        countDownDate[i]['el'].querySelector('.countdown__number-seconds').innerHTML = countDownDate[i]['seconds'];
                    }
                }
            }, 1000);
        }
    });


})(jQuery);
