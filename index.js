const express = require('express');
var app = express();

var bodyParser = require('body-parser');
const smsRouter = require('./routes/sms-router');

var configureServer = ()=>{
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/alert', smsRouter);
  
  app.listen(5000, '127.0.0.1', () => {
    console.log('express server started');
  });
}


configureServer();