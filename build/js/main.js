const boatsSwiper = new Swiper('.boats__swiper', {

  slidesPerView: 5,
  slidesPerGroup: 5,
  grid: {
    rows: 2,
  },

  spaceBetween: 45,
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


});



const partnersSwiper = new Swiper('.partners__swiper', {
  // loop: true,
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 50,
  loop: true,
  grid: {
    rows: 2,
  },

  
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

  slidesPerView: 5,
  slidesPerGroup: 5,
  loop: true,
  grid: {
    rows: 2,
  },

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
