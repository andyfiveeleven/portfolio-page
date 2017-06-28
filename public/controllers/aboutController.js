var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = function(){
    $('main > section').hide();
    $('#about').show();

    app.repos.requestRepos(app.repoView.init);
  };


  module.aboutController = aboutController;
})(app);
