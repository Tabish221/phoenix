$(document).ready(function () {
    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");
    $('[href="#"]').attr("href", "javascript:;");
    $('.menu-Bar').click(function () {
        $(this).toggleClass('open');
        $('.menuWrap').toggleClass('open');
        $('body').toggleClass('ovr-hiddn');
    });

    $('.loginUp').click(function () {
        $('.LoginPopup').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.signUp').click(function () {
        $('.signUpPop').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.closePop,.overlay').click(function () {
        $('.popupMain').fadeOut();
        $('.overlay').fadeOut();
    });

    $('.closeico,.overlay').click(function () {

        $('.popupmain').fadeOut();
        $('.overlay').fadeOut();


    });

});

$('.popstatic').click(function () {
    $('.centercont.static').removeClass('d-none');
    $('.centercont.dynamic').addClass('d-none');
    $('#popstatic').fadeIn();
    $('.overlay').fadeIn();


    var orgtexts = '$99';
    //  $(".centercont h3 span").text('Start your Trademark Registration Now');
    $(".centercont h4").html("in Just <span>" + orgtexts + "</span>");
});


// Fancy Media
// $('.fancybox-media').fancybox({
//     openEffect: 'none',
//     closeEffect: 'none',
//     helpers: {
//         media: {}
//     }
// });


// Slider For
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true
});


// Accordion
$('.acc_title').on('click', function () {
    $(this).parent().parent().find('li').removeClass('active')
    $(this).parent().parent().find('.acc_desc').slideUp();
    $(this).parent('li').addClass('active')
    if (!$(this).next('.acc_desc').is(':visible')) {
        $(this).next('.acc_desc').slideDown();
    } else {
        $(this).parent().parent().find('li').removeClass('active')
    }
});

// Sticky Navigation
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $(".fixed").addClass("sticky");
    } else {
        $(".fixed").removeClass("sticky");
    }
});


// Normal Slider
$('.partner-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
});

$('.dropdown-nav').hover(function(){
    $(this).addClass('hoverActive');
})


// Normal Slider
// $('.design-card-list').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     speed: 8000,
//     cssEase: 'linear',
//     dots: false,
//     arrows: false,
//     responsive: [
//         {
//             breakpoint: 1025,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 3,
//             }
//           },
//           {
//             breakpoint: 885,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//                 cssEase: 'ease',
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
              
//             }
//           }
//       ]
// });
// $('.design-card-list-2').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     rtl:true,
//     autoplaySpeed: 0,
//     speed: 8000,
    
//     cssEase: 'linear',
//     dots: false,
//     arrows: false,
//     responsive: [
//         {
//             breakpoint: 1025,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1,
//             }
//           },
//           {
//             breakpoint: 885,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//                 cssEase: 'ease',
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
              
              
//             }
//           }
//       ]
// });


// $('.marquee-slider1').slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     speed: 8000,
//     variableWidth: true,
//     cssEase: 'linear',
//     dots: false,
//     arrows: false,
//     lazyLoad: 'ondemand',
//     responsive: [

//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 7,
//                 slidesToScroll: 3,

//             }
//         },
//         {
//             breakpoint: 885,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//                 variableWidth: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 variableWidth: true
//             }
//         }

//     ]
// });

// $('.marquee-slider2').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     speed: 8000,
//     variableWidth: true,
//     cssEase: 'linear',
//     dots: false,
//     arrows: false,
//     lazyLoad: 'ondemand',
//     responsive: [

//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 7,
//                 slidesToScroll: 3,

//             }
//         },
//         {
//             breakpoint: 885,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//                 variableWidth: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 variableWidth: true
//             }
//         }

//     ]
//     // rtl: true
// });


// Navigation Menu 
$(window).on('load', function () {
    var currentUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $('ul.menu li a').each(function () {
        var hrefVal = $(this).attr('href');
        if (hrefVal == currentUrl) {
            $(this).removeClass('active');
            $(this).closest('li').addClass('active')
            $('ul.menu li.first').removeClass('active');
        }
    });

});

// Tabbing JS
$('[data-targetit]').on('click', function (e) {
    $(this).addClass('current');
    $(this).siblings().removeClass('current');
    var target = $(this).data('targetit');
    $('.' + target).siblings('[class^="box-"]').hide();
    $('.' + target).fadeIn();
    $(".tab-slider").slick("setPosition");
});

/* RESPONSIVE JS */
if ($(window).width() < 825) {
}