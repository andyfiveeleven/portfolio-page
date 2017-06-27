var app = app || {};

(function(module) {
  const homeController = {};


  homeController.init = function(){
    //app.Article.fetchAll(app.articleView.initIndexPage); MIGHT NEED THIS!

    $('main > section').show();
  };


  module.homeController = homeController;
})(app);
