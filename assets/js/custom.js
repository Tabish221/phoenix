$(document).ready(function () {
    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");
    $('[href="#"]').attr("href", "javascript:;");
    $('.menu-Bar').click(function () {
        $(this).toggleClass('open');
        $('.menuWrap').toggleClass('open');
        $('body').toggleClass('ovr-hiddn');
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

// Navigation Menu 
$(window).on('load', function () {
    var currentUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $('ul.menu li a').each(function () {
        var hrefVal = $(this).attr('href');
        if (hrefVal == currentUrl) {
            // $(this).removeClass('active');
            $('ul.menu li').removeClass('active');
            $(this).closest('li').addClass('active')
            // $('ul.menu li.first').removeClass('active');
        } if (currentUrl == "") {
            $('ul.menu>li.first').addClass('active')
        } else {
            
        }
    });


    $('.dropdown ol li').each(function() {
        if($(this).hasClass('active')){
            $('.dropdown-nav').addClass('active');
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
if ($(window).width() < 768) {
    $('.dropdown-nav').on('click', function() {
        $(this).toggleClass('NowActive');
    });
}