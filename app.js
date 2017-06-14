'use strict';

function Project (name, dateFin, tools, url, gitHub, colabs, about){
  this.name = name;
  this.dateFin = dateFin;
  this.tools = tools; //array!
  this.url = url;
  this.gitHub = gitHub;
  this.colabs = colabs;
  this.about = about;
}

$('.icon-menu').click(function(){
  $('.main-nav ul').toggleClass('menu');
  $('.main-nav ul').toggleClass('display-nav');
});

$('.main-nav ul').click(function(){
  $('.main-nav ul').toggleClass('menu');
  $('.main-nav ul').toggleClass('display-nav');
});
