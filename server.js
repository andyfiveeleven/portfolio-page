'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended:true});
const PORT = process.env.PORT || 3000;
const requestProxy = require('express-request-proxy');

app.use(express.static('./public'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.post('/projects', bodyParser, function(request, response){

  console.log(request.body);
  response.send('Record Posted!');
});

app.listen(PORT, function(){
  console.log('Listening on port: ', PORT);
})
