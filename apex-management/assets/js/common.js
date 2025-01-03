            $(document).ready(function() {
                //$('.cd-nav-trigger').hide();
                // browser window scroll (in pixels) after which the "menu" link is shown
                var offset = 5000;

                var navigationContainer = $('#cd-nav'),
                    mainNavigation = navigationContainer.find('#cd-main-nav ul');

                //hide or show the "menu" link
                checkMenu();
                $(window).scroll(function() {
                    checkMenu();
                });

                //open or close the menu clicking on the bottom "menu" link
                $('.cd-nav-trigger').on('click', function() {
                    $(this).toggleClass('menu-is-open');
                    //we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
                    mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');

                });

                function checkMenu() {
                    if ($(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
                        //
                        navigationContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                            mainNavigation.addClass('has-transitions');
                            mainNavigation.addClass('is-visible');
                            $('.cd-nav-trigger').addClass('menu-is-open');
                            //				$('div[class*="admissions-quick-link"]').addClass('is-visible');

                        });
                    } else if ($(window).scrollTop() <= offset) {
                        //check if the menu is open when scrolling up
                        if (mainNavigation.hasClass('is-visible') && !$('html').hasClass('no-csstransitions')) {
                            //close the menu with animation
                            mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                                //wait for the menu to be closed and do the rest
                                mainNavigation.removeClass('is-visible is-hidden has-transitions');
                                navigationContainer.removeClass('is-fixed');
                                $('.cd-nav-trigger').removeClass('menu-is-open');
                            });
                            //check if the menu is open when scrolling up - fallback if transitions are not supported
                        } else if (mainNavigation.hasClass('is-visible') && $('html').hasClass('no-csstransitions')) {
                            mainNavigation.removeClass('is-visible has-transitions');
                            navigationContainer.removeClass('is-fixed');
                            $('.cd-nav-trigger').removeClass('menu-is-open');
                            //scrolling up with menu closed
                        } else {
                            navigationContainer.removeClass('is-fixed');
                            mainNavigation.removeClass('has-transitions');
                        }
                    }
                }
            });

            $('.partner-slider').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                focusOnSelect: true,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [{
                        breakpoint: 1400,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }
                ]
            });


            $('.apply-slider').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                focusOnSelect: true,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
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