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


$('.project-display').not('.active').on('click', function(){
  $('.active').removeClass('active');
  $('.plus-rotate').removeClass('plus-rotate');
  $(this).addClass('active');
  $(this).children('.plus').addClass('plus-rotate');
  // $('.active p').addClass('display');
});

$('.project-display').not('.active').on('click', function(){
  alert('hi');
});

$('.active').on('click', function(){
  $('.active').removeClass('active');
});
