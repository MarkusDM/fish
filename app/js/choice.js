"use strict";

const defaultSelect = () => {
    const element = document.querySelector('.js-choice');
    const choices = new Choices(element,{
        searchEnabled: false,
    });
    
};

defaultSelect();


const defaultSelectTwo = () => {
    const elementTwo = document.querySelector('.js-choice-two');
    const choicesTwo = new Choices(elementTwo,{
        searchEnabled: false,
    });
    
};

defaultSelectTwo();


const defaultSelectThree = () => {
    const elementThree = document.querySelector('.js-choice-three');
    const choicesThree = new Choices(elementThree, {
        searchEnabled: false,
    });
    
};

defaultSelectThree();


const defaultSelectFour = () => {
    const elementFour = document.querySelector('.js-choice-four');
    const choicesFour = new Choices(elementFour, {
        searchEnabled: false,
    });
    
};

defaultSelectFour();



$.mask.definitions['~']='[+-]';
$("#number2").mask("~9.99");
$.mask.definitions['h']='[A-Fa-f0-9]';
$("#color").mask("#hhhhhh");

  $(function() {
    function maskPhone() {
      var country = $('#country option:selected').val();
      switch (country) {
        case "ru":
          $("#phone").mask("+7(999) 999-99-99");
          break;
        case "kz":
          $("#phone").mask("+7(999) 999-99-99");
          break;
        case "by":
          $("#phone").mask("+375(999) 999-99-99");
          break;          
      }    
    }
    maskPhone();
    $('#country').change(function() {
      maskPhone();
    });
  });


  $(function() {
    function maskPhone() {
      var countryTwo = $('#country-two option:selected').val();
      switch (countryTwo) {
        case "ru":
          $("#phone-two").mask("+7(999) 999-99-99");
          break;
        case "kz":
          $("#phone-two").mask("+7(999) 999-99-99");
          break;
        case "by":
          $("#phone-two").mask("+375(999) 999-99-99");
          break;          
      }    
    }
    maskPhone();
    $('#country-two').change(function() {
      maskPhone();
    });
  });



  $(function() {
    function maskPhone() {
      var countryTwo = $('#country-three option:selected').val();
      switch (countryTwo) {
        case "ru":
          $("#phone-three").mask("+7(999) 999-99-99");
          break;
        case "kz":
          $("#phone-three").mask("+7(999) 999-99-99");
          break;
        case "by":
          $("#phone-three").mask("+375(999) 999-99-99");
          break;          
      }    
    }
    maskPhone();
    $('#country-three').change(function() {
      maskPhone();
    });
  });


  $(function() {
    function maskPhone() {
      var countryFour = $('#country-four option:selected').val();
      switch (countryFour) {
        case "ru":
          $("#phone-four").mask("+7(999) 999-99-99");
          break;
        case "kz":
          $("#phone-four").mask("+7(999) 999-99-99");
          break;
        case "by":
          $("#phone-four").mask("+375(999) 999-99-99");
          break;          
      }    
    }
    maskPhone();
    $('#country-four').change(function() {
      maskPhone();
    });
  });