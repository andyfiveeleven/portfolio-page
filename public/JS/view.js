var pageView = {};

pageView.handleMainNav = function(){
  $('.main-nav ul').on('click', '.tab', function(){
    console.log(this);
    var $dynaNav = $(this).data('content');
    $('.tab-content').hide();
    $('#' + $dynaNav).show();
  });
};

pageView.initIndexPage = function() {
  Project.all.forEach(function(project) {
    $('#projects').append(project.toHtml());
  });
};

$(document).ready(function(){
  pageView.handleMainNav();
});
