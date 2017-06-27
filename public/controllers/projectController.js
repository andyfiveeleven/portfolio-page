var app = app || {};

(function(module) {
  const projectController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  projectController.init = function(){
    $('main > section').hide();
    $('#project-pane').show();
  };


  module.projectController = projectController;
})(app);
