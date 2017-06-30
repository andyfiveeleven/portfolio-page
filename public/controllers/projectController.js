var app = app || {};

(function(module) {
  const projectController = {};


  projectController.init = function(){
    app.Project.fetchAll(app.projectView.initIndexPage);
    $('main > section').hide();
    $('#project-pane').show();
  };


  module.projectController = projectController;
})(app);
