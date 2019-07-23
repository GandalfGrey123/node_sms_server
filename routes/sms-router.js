const express = require('express');
const router = express.Router();

var request = require('request');
const smsServiceConfig = require('../config/sms-config')

router.post('/', (req,res) =>{
   request.post({
     headers: {
       'content-type' : 'application/x-www-form-urlencoded',
       'Accepts': 'application/json'
     },
     url: smsServiceConfig.url() + '/messages',
     form: {
       to: smsServiceConfig.number(),
       message: req.body.message,
     }
   }, (error, response, body) => {

       if (!error && response.statusCode == 201)  {
         console.log('Message sent!')
       } 
  
       else {
         var apiResult = JSON.parse(body)
         console.log('Error was: ' + apiResult.message)
       }

   })
});

module.exports = router;