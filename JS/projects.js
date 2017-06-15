'use strict';

var projects = [];

function Project (projObj) {
  this.name = projObj.name;
  this.date = projObj.dateFin;
  this.tools = projObj.tools; //array!
  this.path = projObj.url;
  this.gitPath = projObj.gitHub;
  this.collabs = projObj.collabs;
  this.about = projObj.about;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');

  $newProject.find('h1').html(this.name);
  console.log($newProject);
  return $newProject;
};

rawProject.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});
console.log(projects);

projects.forEach(function(project){
  $('#project_block').append(project.toHtml());
});

var handleMainNav = function(){
  $('main-nav ul').on('click', 'li', function(){
    var $dynaNav = $(this).data('content');
    $('.tab-content').hide();
    $('#' + $dynaNav).show();
  });

  $('.main-nav .tab:first').click();
};

handleMainNav();
