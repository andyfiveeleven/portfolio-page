var app = app || {};

(function(module) {
  const skillsController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  skillsController.init = function(){
    $('main > section').hide();
    $('#skills').show();
  }


  module.skillsController = skillsController;
})(app);
