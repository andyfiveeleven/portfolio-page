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

Project.all=[]

Project.prototype.toHtml = function() {

  var template = $('#project_template').html();


  var templateRender = Handlebars.compile(template);

  return templateRender(this);

};

Project.loadAll = function(rawData) {
  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
}

Project.fetchAll = function() {
  if (localStorage.rawData){
    console.log('localstorage found')
    Project.loadAll(JSON.parse(localStorage.rawData));
    pageView.initIndexPage();
  } else {
    console.log('else');
    $.getJSON('data/sourceData.json')
    .then(function(data) {
      console.log('then block');
      localStorage.rawData = JSON.stringify(data);
      console.log('data:', data);
      Project.loadAll(data);
      pageView.initIndexPage()
    });
  }
};