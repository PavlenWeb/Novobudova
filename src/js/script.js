// Script for top show/hide panel
var h_hght = 35; // высота шапки
var h_mrg = 0;    // отступ когда шапка уже не видна
                     
    $(function(){
     
        const elem = $('#top_nav');
        var top = $(this).scrollTop();
         
        if(top > h_hght){
            elem.css('top', h_mrg);
        }           
         
        $(window).scroll(function(){
            top = $(this).scrollTop();
             
            if (top+h_mrg < h_hght) {
                elem.css('top', (h_hght-top));
            } else {
                elem.css('top', h_mrg);
            }
        });
    });

// Slider
$(document).ready(function(){
    $('.achievement__slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev "><img src="../icons/prev.png" alt="prev"/></button>',
        nextArrow: '<button type="button" class="slick-next "><img src="../icons/next.png" alt="next"/></button>',
        dotsClass: 'slick-dots',
        autoplay: true,
        autoplaySpeed: 2000,
    });
  });