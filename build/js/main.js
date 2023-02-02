


const boatsSwiper = new Swiper('.boats__swiper', {
  wrapperClass: 'boats__swiper-wrapper',
  slideClass: 'boats__slide',
 
  speed: 500,
  slidesPerView: 2,
  centeredSlides: true,
  slidesPerGroup: 2,
  loop: true,

  spaceBetween: 20,
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


      slidesPerView: 2.3,
      slidesPerGroup: 3,
      spaceBetween: 45,
      loop: true,
    },

  },

});


const boatsTwoSwiper = new Swiper('.boats__swiper-two', {


  wrapperClass: 'boats__swiper-wrapper-two',
  slideClass: 'boats__slide-two',
  speed: 500,

  slidesPerView: 2,
  slidesPerGroup: 2,
  loop: true,
 
  spaceBetween: 20,
  navigation: {
    prevEl: '.boats__prev',
    nextEl: '.boats__next',
  },


  // pagination: {
  //   el: '.boats__bullets',
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return (
  //       '<span class="' +
  //       className +
  //       '">' +
  //       (index < 10 ? '0' + (index + 1) : index + 1) +
  //       '</span>'
  //     )
  //   },
  // },



  scrollbar: {
    el: ".boats__scroll",
  },


  breakpoints: {

    748: {
      slidesPerView: 4,
      slidesPerGroup: 3,
      spaceBetween: 45,
      loop: true,

    }

  },


});

boatsSwiper.params.control = boatsTwoSwiper;
boatsTwoSwiper.params.control = boatsSwiper;

const partnersSwiper = new Swiper('.partners__swiper', {
  // loop: true,
  slidesPerView: 'auto',
  
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


const partnersSwiperTwo = new Swiper('.partners__swiper-mob', {
  // loop: true,
  slidesPerView: 1,

  wrapperClass: 'partners__swiper-mob-wrapper',
  slideClass: 'partners__swiper-mob-slide',
  speed: 500,

  navigation: {
    prevEl: '.partners__prev-mob',
    nextEl: '.partners__next-mob',
  },


  scrollbar: {
    el: ".partners__scroll-mob",
  },


});


const relaxationSwiper = new Swiper('.relaxation__swiper', {
  wrapperClass: 'relaxation__swiper-wrapper',
  slideClass: 'relaxation__slide',
  speed: 500,
  slidesPerView: 2,
  centeredSlides: true,
  slidesPerGroup: 2,
  loop: true,
  spaceBetween: 20,
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
      slidesPerView: 2.5,
      slidesPerGroup: 3,
      spaceBetween: 45,
      loop: true,


    },

  },


});
const relaxationTwoSwiper = new Swiper('.relaxation__swiper-two', {
  wrapperClass: 'relaxation__swiper-wrapper-two',
  slideClass: 'relaxation__slide-two',
  speed: 500,
  slidesPerView: 2,
  slidesPerGroup: 2,
  loop: true,
  spaceBetween: 20,
  navigation: {
    prevEl: '.relaxation__prev',
    nextEl: '.relaxation__next',
  },


  // pagination: {
  //   el: '.relaxation__bullets',
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return (
  //       '<span class="' +
  //       className +
  //       '">' +
  //       (index < 10 ? '0' + (index + 1) : index + 1) +
  //       '</span>'
  //     )
  //   },
  // },



  scrollbar: {
    el: ".relaxation__scroll",
  },


  breakpoints: {

    748: {
      slidesPerView: 4,
      slidesPerGroup: 3,
      spaceBetween: 45,
      loop: true,

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
  allowTouchMove:false,
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
  spaceBetween: 29,
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









ymaps.ready(function(){
  if ($('div').is('#map-tours')) {
    var i;
    var pl;
    var coords = [[53.037514, 158.372897],[52.814409, 156.307943],[53.139993, 158.377810],[53.000537, 158.652654]];
    
    var myMap = new ymaps.Map("map-tours", {
      center: [53.089071, 158.356106],
      zoom: 11,
      controls: ['zoomControl']

      
    });
    
    for (i = 0; i < coords.length; ++i) {
      pl = new ymaps.Placemark(coords[i], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/icon/paplavok.svg',
          iconImageSize: [50, 50],
          iconImageOffset: [-5, -38]
      });
      myMap.geoObjects.add(pl);
      console.log(coords[i]);
     
    }

  };
});


ymaps.ready(function(){
  if ($('div').is('#map-tours-mob')) {
    var i;
    var pl;
    var coords = [[53.037514, 158.372897],[52.814409, 156.307943],[53.139993, 158.377810],[53.000537, 158.652654]];
    
    var myMap = new ymaps.Map("map-tours-mob", {
      center: [53.089071, 158.356106],
      zoom: 9,
      controls: ['zoomControl']

      
    });
    
    for (i = 0; i < coords.length; ++i) {
      pl = new ymaps.Placemark(coords[i], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/icon/paplavok.svg',
          iconImageSize: [50, 50],
          iconImageOffset: [-5, -38]
      });
      myMap.geoObjects.add(pl);
      console.log(coords[i]);
     
    }

  };
});









Fancybox.bind('[data-fancybox="relax-image"]', {
  caption: function (fancybox, carousel, slide) {
    return (
      `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
    );
  },
});


Fancybox.bind('[data-fancybox="boats-image"]', {
  caption: function (fancybox, carousel, slide) {
    return (
      `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
    );
  },
});






