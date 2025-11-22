jQuery(document).ready(function ($) {
    'use strict';

    //===== Dropdown Anmiation =====// 
    var drop = $('.social-links > li');
    $('.social-links').each(function () {
        var delay = 350;
        $(this).find(drop).each(function () {
            $(this).css({transitionDelay: delay + 'ms'});
            delay += 50;
        });
    });
    
    //===== Signup Popup =====//
    $('.myacc,.res-sign > a').on('click',function(){
        $('.signup-popup').addClass('active');
        return false;
    });
    
    
    $('.signup-cls').on('click',function(){
        $('.signup-popup').removeClass('active');
        return false;
    });
    
    $('.hav-acc').on('click',function(){
        $('.login-form').slideDown();
        $('.signup-form').slideUp();
    });
    
    $('.dnthav-acc').on('click',function(){
        $('.signup-form').slideDown();
        $('.login-form').slideUp();
    });


    //===== Featured Product Gallery =====//
    $('.featured-product-gallery').addClass('loaded');

    var l = $('.featured-product-gallery-list li').length;
    for (var i = 0; i <= l; i++) {
        var featured_product_list = $('.featured-product-gallery-list li').eq(i);
        var featured_product_img_height = $(featured_product_list).find('.featured-product-gallery-item > img').innerHeight();
        $(featured_product_list).css({
            'height': featured_product_img_height
        });
        $(featured_product_list).find('.featured-product-gallery-item > img').css({
            'width': '200%'
        });
    }

    $('#featured-product-gallery-list li.start').addClass('active');
    $('#featured-product-gallery-list li').on('mouseenter', function () {
        $('#featured-product-gallery-list li').removeClass('active');
        $(this).addClass('active');
    });

    $('#featured-product-gallery-list2 li.start').addClass('active');
    $('#featured-product-gallery-list2 li').on('mouseenter', function () {
        $('#featured-product-gallery-list2 li').removeClass('active');
        $(this).addClass('active');
    });

    //===== Responsive Header =====//
    $('.res-menu-btn').on('click', function () {
    	$('.responsive-menu').addClass('slidein');
    	return false;
    });
    $('.close-btn').on('click', function () {
    	$('.responsive-menu').removeClass('slidein');
    	return false;
    });
    $('.responsive-menu li.menu-item-has-children > a').on('click', function () {
    	$(this).parent().siblings().children('ul').slideUp();
    	$(this).parent().siblings().removeClass('active');
    	$(this).parent().children('ul').slideToggle();
    	$(this).parent().toggleClass('active');
    	return false;
    });

    //===== Sticky Header =====//
    var menu_height = $('header').height();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 180) {
            $('.stick').addClass('sticky');
        } else {
            $('.stick').removeClass('sticky');
        }
    });
    if ($('header').hasClass('stick')) {
        $('.theme-layout').css({'padding-top': menu_height});
    }



    //===== Select2 =====//
    if ($.isFunction($.fn.select2)) {
        $('select').select2();
    }

    //===== Scroll Bar =====//
    if ($.isFunction($.fn.mCustomScrollbar)) {
        $('.responsive-menu').mCustomScrollbar();
    }

    //===== Scroll Up Bar =====//
    if ($.isFunction($.fn.scrollupbar)) {
        $('header').scrollupbar();
    }

    //===== LightBox =====//
    if ($.isFunction($.fn.poptrox)) {
        var foo = $('.lightbox');
        foo.poptrox({usePopupCaption: true, usePopupNav: true});
    }

    //===== Background Video =====//
    if ($.isFunction($.fn.vide)) {
        $('#bg-video').vide('video/floor');
    }

    //===== Parallax =====//
    if ($.isFunction($.fn.fallings)) {
        $(".parallax").fallings({
            velocity: -.1,
            initialPosition: 0,
            bgParallax: true,
            bgPercent: '0%'
        });
    }

    //===== Count Down =====//
    if ($.isFunction($.fn.downCount)) {
        $('.countdown').downCount({
            date: '12/3/2018 12:00:00',
            offset: +5
        });
    }

    //===== Touch Spin =====//
    if ($.isFunction($.fn.TouchSpin)) {
        $('.qty').TouchSpin({});
    }

    //===== Ajax Contact Form =====//
    $('#contactform').submit(function () {
       var action = $(this).attr('action');
       var msg = $('#message');
       $(msg).hide();
       var data = 'name=' + $('#name').val() + '&email=' + $('#email').val() + '&phone=' + $('#phone').val() + '&comments=' + $('#comments').val() + '&verify=' + $('#verify').val() + '&captcha=' + $(".g-recaptcha-response").val();
       $.ajax({
           type: 'POST',
           url: action,
           data: data,
           beforeSend: function () {
              $('#submit').attr('disabled', true);
              $('img.loader').fadeIn('slow');
          },
          success: function (data) {
              $('#submit').attr('disabled', false);
              $('img.loader').fadeOut('slow');
              $(msg).empty();
              $(msg).html(data);
              $('#message').slideDown('slow');
              if (data.indexOf('success') > 0) {
                  $('#contactform').slideUp('slow');
              }
          }
      });
       return false;
   });

    //===== Owl Carousel =====//
    if ($.isFunction($.fn.owlCarousel)) {
        //=== Client Carousel ===//
        $('.client-carousel').owlCarousel({
            autoplay: true,
            smartSpeed: 600,
            loop: true,
            items: 5,
            dots: false,
            slideSpeed: 2000,
            nav: false,
            margin: 30,
            responsive: {
                0: {items: 2},
                480: {items: 3},
                768: {items: 4},
                1200: {items: 5}
            }
        });
        
        //=== Image Carousel ===//
        $('.image-slider,.cap-carousel').owlCarousel({
            autoplay: true,
            smartSpeed: 600,
            loop: true,
            items: 1,
            dots: false,
            slideSpeed: 2000,
            nav: false,
            margin: 0,
            animateIn:"fadeIn",
            animateOut:"fadeOut"
        });
    }

    //===== Slick Carousel =====//
    if ($.isFunction($.fn.slick)) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            slide: 'li',
            fade: false,
            asNavFor: '.slider-nav'
        });
        
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: false,
            slide: 'li',
            vertical: false,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true,
            responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                    centerMode: true,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                    centerMode: true,
                    dots: false,
                    arrows: false
                }
            }
            ]
        });
}
});/*===== Document Ready Function Ends Here =====*/
$(window).scroll(function () {

});