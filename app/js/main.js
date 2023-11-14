$(function(){

 
  $('.products__slider-inner').slick({
dots:true,
arrows:false,
slidesToShow: 4,
slidesToScroll:4
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });
 
  $('.header__btn-menu').on('click', function(){
    $('.header__box').toggleClass('active');
  });

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

 /**$(".rate-star").rateYo({
    rating: 5,
    starWidth:"12px",
    readOnly: true
  });**/
var mixer = mixitup('.products__inner-box');

}); 