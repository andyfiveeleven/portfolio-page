var app = app || {};

(function(module) {
  const skillsController = {};

  skillsController.init = function(){
    $('main > section').hide();
    $('#skills').show();
  }


  module.skillsController = skillsController;
})(app);
