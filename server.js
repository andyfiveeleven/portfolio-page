'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended:true});
const PORT = process.env.PORT || 3000;
const requestProxy = require('express-request-proxy');

app.use(express.static('./public'));

app.post('/projects', bodyParser, function(request, response){

  console.log(request.body);
  response.send('Record Posted!');
});

app.listen(PORT, function(){
  console.log('Listening on port: ', PORT);
})
