$(document).ready(function(){
  $("#promo-slider-thumbs").owlCarousel({
    items:1,
    // center:true,
    loop:true,
    // responsive: {
    //     0: {
    //         items:3
    //     },
    //     768:{
    //         items: 4
    //     },
    //     1200: {
    //         items:6
    //     },
    // }
  });

  $("#tabs-family").on('click', function(e){
    e.preventDefault();
    $ (".tabs__item").toggleClass('tabs__item--active');
    var changeImgUrl = $(this).attr('href');
    // $('#gallery-main-img').attr('src', changeImgUrl);
    console.log(changeImgUrl)
  });
});
