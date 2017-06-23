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



$(document).ready(function(){
  $('#accordian h3').click(function(){
    $('#accordian ul ul').slideUp();
    if(!$(this).next().is(':visible'))
    {
      $(this).next().slideDown();
    }
  });
});