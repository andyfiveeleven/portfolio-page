'use strict';


$('.icon-menu').click(function(){
  $('.main-nav ul').toggleClass('menu');
  $('.main-nav ul').toggleClass('display-nav');
});

$('.main-nav ul li').click(function(){
  $('.main-nav ul').addClass('menu');
  $('.main-nav ul').removeClass('display-nav');
});


$(document).ready(function(){
  $('.accordian h3').click(function(){
    // $('.accordian ul li  ul').removeClass('active');
    if(!$(this).next().hasClass('active')){
      $('.accordian ul li  ul').removeClass('active');
      $(this).next().toggleClass('active');
    }else{
      $('.accordian ul li  ul').removeClass('active');
    }
  });
});
