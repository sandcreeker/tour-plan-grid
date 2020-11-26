var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
})

$(document).keydown(function(e){
  if (e.which == 37) {
    $('.slider-button--prev')[0].click();
  };
  if (e.which == 39) {
    $('.slider-button--next')[0].click();
  };
});
var myMap;

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [52.846448, -1.297401],
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    });

    document.getElementById('destroyButton').onclick = function () {
        myMap.destroy();
    };

}
