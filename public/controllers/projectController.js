var app = app || {};

(function(module) {
  const projectController = {};


  projectController.init = function(){
    $('main > section').hide();
    $('#project-pane').show();
  };


  module.projectController = projectController;
})(app);
