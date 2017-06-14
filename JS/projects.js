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
  var $newProject = $('.template').clone();
  $newProject.removeClass('template');
  $newProject.find('h3').html(this.name);
  $newProject.append('<hr>');
  console.log($newProject);
  return $newProject;
};

rawProject.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});
console.log(projects);

projects.forEach(function(project){
  $('.pro-list').append(project.toHtml());
});
