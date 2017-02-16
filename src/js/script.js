$(document).ready(function(){



    $("#page-header-burger").on('click', function(e){
        $(".main-nav").toggleClass('main-nav--open');
    });




    $('#promo-slider-thumbs').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        asNavFor: '#health-block-slider'
    });

     $('#health-block-slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        asNavFor: '#promo-slider-thumbs'

    });

     $ (".tabs__item").on('click', function(e){
        if ($(this).hasClass("tabs__item--active")){
            e.preventDefault();
        }else{
            e.preventDefault();
            $ (".tabs__item").toggleClass('tabs__item--active');
            // $('#health-block-slider').slick({
            //     initialSlide:1
            // });
        };

    });



   $("#gallery-preview a").on('click', function(e){
    e.preventDefault();
    var mainImgUrl = $(this).attr('href');
    $('#gallery-img').attr('src', mainImgUrl);

 });


    $ ('#gallery-preview').slick({
        slidesToShow: 5,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        centerPadding: "100px",
        infinite: true,
        asNavFor: '#gallery-main',
        initialSlide:3,
        responsive: [
        {
        breakpoint: 768,
           settings: "unslick"
        }
        //не работает(
// а здесь брейкпоинт работает как до или после и если после - то как тогда сделать так,чтобы не работало от0 до 768 а потом заработало
  ]
    });

    $ ('#gallery-main').slick({
        slidesToShow: 1,
        arrows: false,
        infinite: true,
        asNavFor: '#gallery-preview',
        initialSlide:3
    });


    $ ('#testimonials-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        prevArrow: '<svg width="36" height="36" class="slick-prev"><use xlink:href="#back" fill="#fafafa"></use></svg>',
        nextArrow: '<svg width="36" height="36" class="slick-prev"><use xlink:href="#next" fill="#fafafa"></use></svg>'
        // appendArrows: '$(".slick-active")'
    });

});
