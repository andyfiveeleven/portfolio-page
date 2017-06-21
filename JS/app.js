'use strict';

$('.icon-menu').click(function(){
  $('.main-nav ul').toggleClass('menu');
  $('.main-nav ul').toggleClass('display-nav');
  $('.icon-menu').toggleClass('fixed');
});

$('.main-nav ul li').click(function(){
  $('.main-nav ul').addClass('menu');
  $('.main-nav ul').removeClass('display-nav');
});


$('.project-display').on('click', function(){
  $('.active').removeClass('active');
  $(this).addClass('active');
  $(this).children('.plus').addClass('plus-rotate');
});



$('.active').on('click', function(){
  $(this).removeClass('active');
});
