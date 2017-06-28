var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = function(){
    $('main > section').hide();
    $('#about').show();
    console.log('partial init');

    app.repos.requestRepos(app.repoView.index);
  };


  module.aboutController = aboutController;
})(app);
