$(document).ready(function() {

    if ($('.banner-slider').length > 0) {
        $(".banner-slider").owlCarousel({
            dots: true,
            loop: true,
            autoplay: true,
            slideSpeed: 2000,
            margin: 0,
            // animateOut: 'fadeOut',
            responsiveClass: true,
            animateOut: 'fadeOut',
            nav: false,
            navText: ["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
            responsive: {
                0: {
                    items: 1,
                }
            }

        });
    }

    if ($('.gallery-slider').length > 0) {
        $(".gallery-slider").owlCarousel({
            dots: false,
            loop: true,
            autoplay: false,
            slideSpeed: 2000,
            margin: 0,
            responsiveClass: true,
            animateOut: 'fadeOut',
            nav: true,
            navText: ["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                700: {
                    items: 1,
                },
                900: {
                    items: 2,
                },
                1200: {
                    items: 3,
                }
            }

        });
    }

    $("#clickSearch").click(function() {
        $("#openSearch").toggleClass('active');
    });
    $(".accrodionsTitle").click(function() {
        if (!$(this).parent(".accrodionsSect").hasClass('active')) {
            $(".accrodionsContent").slideUp();
            $(".accrodionsContent").slideUp();
            $(".accrodionsSect").removeClass('active');
            $(this).next(".accrodionsContent").slideToggle();
            $(this).parent(".accrodionsSect").addClass('active');

            var tagid = $(this).data('tag');
            $('.peaksImg').removeClass('active');
            $('#' + tagid).addClass('active');
        }

    });
    $(".accordionPtdc-title").click(function() {
        if (!$(this).parent(".accordionPtdc-sect").hasClass('active')) {
            $(".accordionPtdc-content").slideUp();
            $(".accordionPtdc-sect").removeClass('active');
            $(this).next(".accordionPtdc-content").slideToggle();
            $(this).parent(".accordionPtdc-sect").addClass('active');
        }

    });



    $('.clickme a').click(function() {
        $('.clickme a').removeClass('activelink');
        $(this).addClass('activelink');
    });
    $('.fastivaltabs li a').click(function() {

        $('.fastivaltabs li a').removeClass('active');
        $(this).addClass('active');
        var tagid = $(this).data('tag');
        $('.fastivalContent, .fastival-tabs-img').removeClass('active');
        $('.' + tagid).addClass('active');
    });



    (function($) {
        $.fn.popUp = function() {
            this.on('click', function() {
                var me = $(this),
                    animation = me.data("animation"),
                    str = me.attr("href"),
                    dotIndex = str.lastIndexOf('.'),
                    ext = str.substring(dotIndex);

                if (ext == '.jpg' || ext == '.png' || ext == '.svg' || ext == '.gif') {
                    var popupImg = '<div class="popup-main"><div id="popup"><img src="' + str + '" /></div></div>';
                    $('body').append(popupImg);
                    var popupData = $('.popup-main #popup, .popup-main #ntcb, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #punjab, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #sindh, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #kpk, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #balochistan, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #nms1, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #nms2, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #nms4, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #nms6, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #nms7, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #nms8, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #ptp1, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #ptp2, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #ptp3, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #ptp4, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #cmkp1, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #cmkp2, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #cmkp3, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #cmkp4, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #matp1, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #matp2, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #matp3, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #matp4, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #brand1, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #brand2, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #brand3, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #brand4, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #covid1, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #covid2, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #covid3, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #covid4, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #tc1, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #tc2, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #tc3, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #tc4, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #cw21, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #cw22, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #cw23, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #cw24, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #cw25, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #cw26, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #cw27, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #cw28, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #rd1, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #rd2, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #rd3, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #rd4, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #rd5, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #rd6, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #rd7, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #rd8, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #vesak1, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #vesak2, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #vesak3, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #vesak4, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #wtd1, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #wtd2, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #wtd3, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #wtd4, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #wtd5, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #wtd6, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #wtd7, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #wtd8, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #wtd9, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #wtd10, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #wtd11, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #wtd12, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #2ncct1, .popup-main #comingsoon');
                    var popupData = $('.popup-main #popup, .popup-main #2ncct2, .popup-main #comingsoon');

                } else {
                    var popUp = $(me.attr("href")),
                        popupData = popUp.clone().removeClass('custom_popup').appendTo("body");
                    popupData.wrap('<div class="popup-main"></div>');
                }

                var poupBox = $('.popup-main #popup,.popup-main #ntcb, .popup-main #comingsoon'),
                    popupHeight = poupBox.outerHeight();
                popupData.addClass('animated ' + animation);
                poupBox.css('margin-top', popupHeight / 2 * -1);

                $('.popup-main, .crossBtn').on('click', function(e) {
                    closePopup();
                }).find(poupBox).on('click', function(e) {
                    e.stopPropagation();
                });
                return false;


            });
        };
    }(jQuery));
    $('.crossBtn').on('click', function() {
        console.log('aaaa');

        $('.popup-main').remove();
    });

    function closePopup() {
        $('.popup-main').remove();
    };

    $("a.popUp").popUp();





});