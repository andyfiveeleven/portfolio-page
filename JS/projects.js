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
  this.shortAbout = projObj.shortAbout;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');

  $newProject.find('h1').html(this.name);
  $newProject.find('h3').html('Tools used:' + this.tools);
  $newProject.find('p').html(this.shortAbout);
  console.log($newProject);
  return $newProject;
};

rawProject.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});
console.log(projects);

projects.forEach(function(project){
  $('#projects').append(project.toHtml());
});
