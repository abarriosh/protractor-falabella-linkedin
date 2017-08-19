var LoginSubmitPage = function() {

   var errorComponent = browser.driver.findElement(by.className('error'));

   this.getAlertError = function() {
     //console.log("ya salio el error:"+ emailLoginSubmit.getAttribute('class'));
     return errorComponent.getAttribute('class').then(function(error){
       return error;
     })

   };

};

module.exports = LoginSubmitPage;
