var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
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

var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
})