
$(document).ready(function() {

    $('.header__select').on('click', '.header__select-head', function() {
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

    $('.header__select').on('click', '.header__select-item', function() {
        $('.header__select-head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.header__select').length) {
            $('.header__select-head').removeClass('open');
            $('.header__select-list').fadeOut();
        }
    });


    // 

    $('.applications__select').on('click', '.applications__select-head', function() {
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

    $('.applications__select').on('click', '.applications__select-item', function() {
        $('.applications__select-head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.applications__select').length) {
            $('.applications__select-head').removeClass('open');
            $('.applications__select-list').fadeOut();
        }
    });

    $('.contacts__select').on('click', '.contacts__select-head', function() {
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




    $('.contacts__select').on('click', '.contacts__select-item', function() {
        $('.contacts__select-head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.contacts__select').length) {
            $('.contacts__select-head').removeClass('open');
            $('.contacts__select-list').fadeOut();
        }
    });

    // 



    
    $('.modal__select').on('click', '.modal__select-head', function() {
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




    $('.modal__select').on('click', '.modal__select-item', function() {
        $('.modal__select-head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.modal__select').length) {
            $('.modal__select-head').removeClass('open');
            $('.modal__select-list').fadeOut();
        }
    });





    $(function() {
        $('.header__burger').click(function(){
            $(this).toggleClass('open');
        });
    });

    $(".header__burger").on('click', function() {
        $(".header__nav").toggleClass("open-nav");
        $(".header__logo").toggleClass("active-logo");
        // $("main").toggleClass("main-none")
    });


    $(".feedback-form__star").on('click', function() {
        $(this).toggleClass('feedback-form__star--active')
    });



  
        
    $('.rating .star').on('click', function() {
        $(this).closest('.rating').find('.--selected').removeClass('--selected');
        $(this).toggleClass('--selected');
      });


    $('.modal-open').click( function() {
        $('.modal').addClass('modal-active');
    });
    
    $('.modal__close').click( function() {
        $('.modal').removeClass('modal-active');
    });
    
    $('.open-two').click( function() {
        $('.poap').addClass('modal-active-two');
    });
    
    $('.poap__close').click( function() {
        $('.poap').removeClass('modal-active-two');
    });


    $('.open-star').click( function() {
        $('.modal-star').addClass('modal-star-active');
    });
    
    $('.modal-star__close').click( function() {
        $('.modal-star').removeClass('modal-star-active');
    });
    

    $('.article-card__btn').click(function () {
        $(this).siblings('.article-card__text').toggleClass('article-card__text--active');
        $('.article-card__btn').not(this).parent('.article-card__text').removeClass('article-card__text--active');
    });


$(".content-block").each(function() {
    let more = $(this).find(".show-more");
    let hide = $(this).find(".hide-content");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Подробнее" : "Скрыть");
    });
});

      
});




new AirDatepicker('#airdatepicker', {
    isMobile: true,
    autoClose: true,
    onRenderCell({date, cellType}) {
        // Disable all 12th dates in month
        if (cellType === 'day') {
            if (date.getDate() === 12) {
                return {
                    disabled: true,
                    classes: 'disabled-class'
                   
                };
            }
        }
    }
});






