$(document).ready(function(){



    $("#page-header-burger").on('click', function(e){
        $(".main-nav").toggleClass('main-nav--open');
    });

    $ ('#gallery-preview').slick({
        slidesToShow: 5,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        centerPadding: "100px",
        infinite: true,
        initialSlide:3
    });



    $('#promo-slider-thumbs').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1
    });

     $('#health-block-slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1
    });



   $("#gallery-preview a").on('click', function(e){
    e.preventDefault();
    var mainImgUrl = $(this).attr('href');
    $('#gallery-img').attr('src', mainImgUrl);


    });


});
