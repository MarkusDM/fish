const boatsSwiper = new Swiper('.boats__swiper', {
  loop: true,
  initialSlide: 1,
  slidesPerGroup: 3,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  wrapperClass: 'boats__swiper-wrapper',
  slideClass: 'boats__slide',
  speed: 500,

  navigation: {
    prevEl: '.boats__prev',
    nextEl: '.boats__next',
  },


  pagination: {
    el: '.boats__bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        (index < 10 ? '0' + (index + 1) : index + 1) +
        '</span>'
      )
    },
  },



  scrollbar: {
    el: ".boats__scroll",
  },


  breakpoints: {
    
    748: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 45,
      centeredSlides: false,
    
    },
   
  },


});


const boatsTwoSwiper = new Swiper('.boats__swiper-two', {
  loop: true,
  initialSlide: 1,
  slidesPerGroup: 3,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  wrapperClass: 'boats__swiper-wrapper-two',
  slideClass: 'boats__slide-two',
  speed: 500,

  navigation: {
    prevEl: '.boats__prev',
    nextEl: '.boats__next',
  },


  pagination: {
    el: '.boats__bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        (index < 10 ? '0' + (index + 1) : index + 1) +
        '</span>'
      )
    },
  },



  scrollbar: {
    el: ".boats__scroll",
  },


  breakpoints: {
    
    748: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 45,
      centeredSlides: false,
    
    },
   
  },


});



const partnersSwiper = new Swiper('.partners__swiper', {
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 50,

  loop: true,
  wrapperClass: 'partners__swiper-wrapper',
  slideClass: 'partners__slide',
  speed: 500,

  navigation: {
    prevEl: '.partners__prev',
    nextEl: '.partners__next',
  },


  pagination: {
    el: '.partners__bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        (index < 10 ? '0' + (index + 1) : index + 1) +
        '</span>'
      )
    },
  },



  scrollbar: {
    el: ".partners__scroll",
  },


});



const relaxationSwiper = new Swiper('.relaxation__swiper', {

  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
  spaceBetween: 45,
  wrapperClass: 'relaxation__swiper-wrapper',
  slideClass: 'relaxation__slide',
  speed: 500,

  navigation: {
    prevEl: '.relaxation__prev',
    nextEl: '.relaxation__next',
  },


  pagination: {
    el: '.relaxation__bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        (index < 10 ? '0' + (index + 1) : index + 1) +
        '</span>'
      )
    },
  },



  scrollbar: {
    el: ".relaxation__scroll",
  },


});
const relaxationTwoSwiper = new Swiper('.relaxation__swiper-two', {

  slidesPerView: 4,
  slidesPerGroup: 4,
  loop: true,
  spaceBetween: 45,
  wrapperClass: 'relaxation__swiper-wrapper-two',
  slideClass: 'relaxation__slide-two',
  speed: 500,

  navigation: {
    prevEl: '.relaxation__prev',
    nextEl: '.relaxation__next',
  },


  pagination: {
    el: '.relaxation__bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        (index < 10 ? '0' + (index + 1) : index + 1) +
        '</span>'
      )
    },
  },



  scrollbar: {
    el: ".relaxation__scroll",
  },


});










ymaps.ready(init);

function init() {
  var map = new ymaps.Map("map", {
    center: [55.60804306913301,37.615973499999946], // ваши данные
    zoom: 15
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}