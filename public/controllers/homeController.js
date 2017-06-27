var app = app || {};

(function(module) {
  const homeController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  homeController.init = function(){
    $('main > section').show();
  };


  module.homeController = homeController;
})(app);
