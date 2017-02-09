$(document).ready(function(){

  $("#promo-slider-thumbs").owlCarousel({
    items:1,
    loop:true,
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
