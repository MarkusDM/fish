

$(document).ready(function () {

    $('.header__select').on('click', '.header__select-head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.header__select-head').removeClass('open');
            $('.header__select-list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.header__select').on('click', '.header__select-item', function () {
        $('.header__select-head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.header__select').length) {
            $('.header__select-head').removeClass('open');
            $('.header__select-list').fadeOut();
        }
    });


    // 


    
    $('.header__select-two').on('click', '.header__select-head-two', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.header__select-head-two').removeClass('open');
            $('.header__select-list-two').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.header__select-two').on('click', '.header__select-item-two', function () {
        $('.header__select-head-two').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.header__select-two').length) {
            $('.header__select-head-two').removeClass('open');
            $('.header__select-list-two').fadeOut();
        }
    });

    $('.applications__select').on('click', '.applications__select-head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.applications__select-head').removeClass('open');
            $('.applications__select-list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.applications__select').on('click', '.applications__select-item', function () {
        $('.applications__select-head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.applications__select').length) {
            $('.applications__select-head').removeClass('open');
            $('.applications__select-list').fadeOut();
        }
    });

    $('.contacts__select').on('click', '.contacts__select-head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.contacts__select-head').removeClass('open');
            $('.contacts__select-list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });




    $('.contacts__select').on('click', '.contacts__select-item', function () {
        $('.contacts__select-head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.contacts__select').length) {
            $('.contacts__select-head').removeClass('open');
            $('.contacts__select-list').fadeOut();
        }
    });

    // 




    $('.modal__select').on('click', '.modal__select-head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.modal__select-head').removeClass('open');
            $('.modal__select-list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });




    $('.modal__select').on('click', '.modal__select-item', function () {
        $('.modal__select-head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.modal__select').length) {
            $('.modal__select-head').removeClass('open');
            $('.modal__select-list').fadeOut();
        }
    });





    $(function () {
        $('.header__burger').click(function () {
            $(this).toggleClass('open');
        });
    });

    $(".header__burger").on('click', function () {
        $(".header__nav").toggleClass("open-nav");
        $(".header__logo").toggleClass("active-logo");
        // $("main").toggleClass("main-none")
    });


    $(".feedback-form__star").on('click', function () {
        $(this).toggleClass('feedback-form__star--active')
    });





    $('.rating .star').on('click', function () {
        $(this).closest('.rating').find('.--selected').removeClass('--selected');
        $(this).toggleClass('--selected');
    });


    $('.modal-open').click(function () {
        $('.modal').addClass('modal-active');
    });

    $('.modal__close').click(function () {
        $('.modal').removeClass('modal-active');
    });

    $('.open-two').click(function () {
        $('.poap').addClass('modal-active-two');
    });

    $('.poap__close').click(function () {
        $('.poap').removeClass('modal-active-two');
    });


    $('.open-star').click(function () {
        $('.modal-star').addClass('modal-star-active');
    });

    $('.modal-star__close').click(function () {
        $('.modal-star').removeClass('modal-star-active');
    });


 


    $(".article-card__wrap").each(function () {
        let more = $(this).find(".article-card__btn");
        let hide = $(this).find(".article-card__hide-content");
        hide.hide();
        more.click(function () {
            hide.slideToggle();
            more.text(more.text() == "Скрыть" ? "Подробнее" : "Скрыть");
        });
    });


    $(".content-block").each(function () {
        let more = $(this).find(".show-more");
        let hide = $(this).find(".hide-content");
        hide.hide();
        more.click(function () {
            hide.slideToggle();
            more.text(more.text() == "Скрыть" ? "Подробнее" : "Скрыть");
        });
    });



    $('.modal-star__btn').click(function () {

        $('.first-checked').prop('checked', true);
        $('.modal-star').removeClass("modal-star-active");
    });


    var enabledDays = ['2022-12-29', '2022-12-19', '2022-12-13'];
    new AirDatepicker('.airdatepicker', {
    position: 'bottom center',
    dateFormat: 'dd.MM.yyyy',
    onRenderCell: function onRenderCell({date, cellType}) {
        if (cellType == 'day') {
            var day = (date.getFullYear() + '-' + (('0' + (date.getMonth() + 1)).slice(-2)) + '-' + (('0' + date.getDate()).slice(-2)));
            var isDisabled = enabledDays.indexOf(day) == -1;
            return {
                
                disabled: !isDisabled
               
            }
        }
    }



    
    });

    new AirDatepicker('#airdatepicker', {
        position: 'bottom center',
        dateFormat: 'dd.MM.yyyy',
        onRenderCell: function onRenderCell({date, cellType}) {
            if (cellType == 'day') {
                var day = (date.getFullYear() + '-' + (('0' + (date.getMonth() + 1)).slice(-2)) + '-' + (('0' + date.getDate()).slice(-2)));
                var isDisabled = enabledDays.indexOf(day) == -1;
                return {
                    
                    disabled: !isDisabled
                    
                }
            }
        }
    
    
    
        
    
    
        
        });


        $('.form-control').on('input', function() {
            $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
        });


});



    
   


Fancybox.bind('[data-fancybox="boats-image"]', {
    caption: function (fancybox, carousel, slide) {
      return (
        `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
      );
    },
  });


  $(document).ready(function () { 

    $('.applications__inner--calendar').click( function () {
        if( $('.applications__select-input').val().length === 0 ) {
            $(".applications__hint").show('slow');
             setTimeout(function() { $(".applications__hint").css('display', 'block').hide('slow'); }, 2000);
        } else {
          $('.applications__hint').css('display', 'none');
        }
    });


    $('.modal__inner--calendar').click( function () {
        if( $('.modal__select-input').val().length === 0 ) {
            $(".modal__hint").show('slow');
            setTimeout(function() { $(".modal__hint").css('display', 'block').hide('slow'); }, 2000);
        } else {
          $('.modal__hint').css('display', 'none');
        }
    });

  







    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); 
        if (scroll > 600) {   
           $("#header").removeClass("header--white");  
        } else {
           $("#header").addClass("header--white");
        }
    });

  

     

  });


 






 