$(document).ready(function(){

  $("#promo-slider-thumbs").owlCarousel({
    items:1,
    loop:true,
  });

   $("#gallery-preview").owlCarousel({
    items:6,
    center:true,
    loop:true,
    startPosition:3,
    // items:1,

    responsive: {
        0: {
            items:1,
        },
        768:{
            items: 6,
        },

    }
  });

   $("#gallery-preview a").on('click', function(e){
    e.preventDefault();
    var mainImgUrl = $(this).attr('href');
    $('#gallery-img').attr('src', mainImgUrl);

// надо как-то получить номер щелкнутого элемента и сделать его активным - чтобы он стал центральным
// или у карусели есть уже такое свойство и я его просто не нахожу
    // var startPositionNumber = $(this).attr();
    // $("#gallery-preview").owlCarousel({
    //     startPosition:startPositionNumber,
    // });
  });

// как это сделать средствами самой карусели? urlHash??
var carousselPromoTab = document.querySelectorAll(".tabs__item")
var owlItems=document.querySelectorAll('.owl-item')
        for (var i = 0; i < carousselPromoTab.length; i++) {
            carousselPromoTab[i].addEventListener("click", function(e){
            e.preventDefault();
           if (this.classList("tabs__item--active")){
                e.preventDefault();// здесь надо cakkback(((
            } else{
                e.preventDefault();
                for (var j = 0; j < carousselPromoTab.length; j++) {
                    carousselPromoTab[j].classList.remove("tabs__item--active")
                };
                carousselPromoTab[i].classList.add("tabs__item--active");
                owlItems[i].classList.add("active");
            }
            })
        };
});
