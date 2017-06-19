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

  var template = $('#project_template').html();


  var templateRender = Handlebars.compile(template);

  return templateRender(this);

};

rawProject.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});
console.log(projects);

projects.forEach(function(p){
  $('#projects').append(p.toHtml());
});
