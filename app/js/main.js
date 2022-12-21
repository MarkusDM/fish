"use strict";




const boatsSwiper = new Swiper('.boats__swiper', {
  loop: true,
  initialSlide: 2,
  centeredSlides: true,
  slidesPerView: 3,
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
      slidesPerView: 2,
      spaceBetween: 45,
      centeredSlides: true,
      watchOverflow: true,
      initialSlide: 1,
    },
   
  },


});


const boatsTwoSwiper = new Swiper('.boats__swiper-two', {
  loop: true,
  initialSlide: 1,
  slidesPerGroup: 3,
  centeredSlides: true,
  slidesPerView: 'auto',
  freeMode: true,
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
      slidesPerGroup: 4,
      spaceBetween: 45,
      centeredSlides: false,
      loop: true,
    },
   
  },


});

boatsSwiper.params.control = boatsTwoSwiper;
boatsTwoSwiper.params.control = boatsSwiper;

const partnersSwiper = new Swiper('.partners__swiper', {
  // loop: true,
  slidesPerView: 'auto',
  spaceBetween: 50,
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
  loop: true,
  initialSlide: 1,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
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


  breakpoints: {
    
    748: {
      slidesPerView: 2,
      spaceBetween: 45,
      centeredSlides: true,
    
    
    },
   
  },


});
const relaxationTwoSwiper = new Swiper('.relaxation__swiper-two', {

  loop: true,
  initialSlide: 1,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
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


  breakpoints: {
    
    748: {
      slidesPerView: 3.2,
      spaceBetween: 45,
      centeredSlides: false,
    
    },
   
  },



});


relaxationSwiper.params.control = relaxationTwoSwiper;
relaxationTwoSwiper.params.control = relaxationSwiper;


const feedbackSwiper = new Swiper('.feedback__swiper', {
  direction: 'vertical',
  slidesPerView: 5,
  slidesPerGroup: 5,
  wrapperClass: 'feedback__swiper-wrapper',
  slideClass: 'feedback__slide',
  speed: 500,

  navigation: {
    prevEl: '.feedback__prev',
    nextEl: '.feedback__next',
  },


  pagination: {
    el: '.feedback__bullets',
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
    el: ".feedback__scroll",
  },


  // breakpoints: {
    
  //   748: {
  //     slidesPerView: 3,
  //     slidesPerGroup: 4,
  //     spaceBetween: 45,
  //     centeredSlides: false,
    
  //   },
   
  // },


});





const toursSwiper = new Swiper('.tours__swiper', {
  
  slidesPerView: 'auto',
  wrapperClass: 'tours__swiper-wrapper',
  slideClass: 'tours__slide',
  speed: 500,
  spaceBetween: 64,
  navigation: {
    prevEl: '.tours__prev',
    nextEl: '.tours__next',
  },


  pagination: {
    el: '.tours__bullets',
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
    el: ".tours__scroll",
  },





});







ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.657672, 37.529412],
          zoom: 17
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          // hintContent: 'Собственный значок метки',
          // balloonContent: 'Это красивая метка'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: './img/icon/paplavok.svg',
          // Размеры метки.
          iconImageSize: [30, 42],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      }),

      myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: 'А эта — новогодняя',
          iconContent: '12'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'images/ball.png',
          // Размеры метки.
          iconImageSize: [48, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemarkWithContent);



      map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
      map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
});


