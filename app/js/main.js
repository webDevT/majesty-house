$('.slider').slick({
    centerMode: true,
    slidesToShow: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),

  });

  $('.leng__item--i').click(function(){
    $('.preloader').fadeIn();
  })