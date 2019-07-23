

var smsServiceConfig = (function(){
  const mobileNumber = '+14150000000';
  const smsRestURL = ''

  return{
  	url: () => {return smsRestURL;},
    number: ()=> { return mobileNumber; }
  }

})();


module.exports = smsServiceConfig;