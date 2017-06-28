'use strict';

var app = app || {};

(function(module){
  const repos = {};

  repos.all [];

  repos.requestRepos= function(callback){
    $.ajax({
      url:'http://api.github.com/user/repos',
      method:'GET',
      headers:{'Authorization': 'token ' + githubToken}
      })
      .then(function(data){
        repos.all = data;
        callback();
    })
  }

  module.repos = repos;
})(app);
