var pageView = {};

pageView.handleMainNav = function(){
  $('.main-nav ul').on('click', '.tab', function(){
    console.log(this);
    var $dynaNav = $(this).data('content');
    $('.tab-content').hide();
    $('#' + $dynaNav).show();
  });

  // $('.main-nav .tab:first').click();
};

$(document).ready(function(){
  pageView.handleMainNav();
});
