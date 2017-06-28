
const pageView = {};

pageView.handleMainNav = function(){
  $('.main-nav ul').on('click', '.tab', function(){
    var $dynaNav = $(this).data('content');
    $('.tab-content').hide();
    $('#' + $dynaNav).show();
  });
};

pageView.initIndexPage = function() {
  app.Project.all.forEach(function(project) {
    $('#projects').append(project.toHtml());
  });
};

$(document).ready(function(){
  pageView.handleMainNav();
});
