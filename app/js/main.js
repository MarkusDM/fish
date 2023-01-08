"use strict";


const boatsSwiper = new Swiper('.boats__swiper', {
  wrapperClass: 'boats__swiper-wrapper',
  slideClass: 'boats__slide',
  speed: 500,
  initialSlide: 2.5,
  slidesPerView: 1.6,
  slidesPerGroup: 3,
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
  speed: 600,
  initialSlide: 0,
  slidesPerView: 2,
  slidesPerGroup: 3,
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


const partnersSwiperTwo = new Swiper('.partners__swiper-mob', {
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
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
  slidesPerView: 'auto',
  wrapperClass: 'relaxation__swiper-wrapper',
  slideClass: 'relaxation__slide',
  speed: 500,
  initialSlide: 2.5,
  slidesPerView: 2,
  slidesPerGroup: 3,
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
  slidesPerView: 'auto',
  wrapperClass: 'relaxation__swiper-wrapper-two',
  slideClass: 'relaxation__slide-two',
  speed: 600,
  initialSlide: 0,
  slidesPerView: 2,
  slidesPerGroup: 3,
  spaceBetween: 20,
  loop: true,
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



