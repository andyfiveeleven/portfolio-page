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
  var template = $('#project-template').html();

  var templateRender = Handlebars.compile(template);

  return templateRender(this);
};

rawProject.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});
console.log(projects);

projects.forEach(function(project){
  $('#project_block').append(project.toHtml());
});
