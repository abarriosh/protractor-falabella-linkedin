var LoginPage = function() {

   var email =  browser.driver.findElement(by.id('login-email'));
   var password = browser.driver.findElement(by.id('login-password'));
   var loginButton = browser.driver.findElement(by.id('login-submit'));
  
   this.login = function(emailLogin, passwordLogin) {
     email.sendKeys(emailLogin);
     password.sendKeys(passwordLogin);
     loginButton.click();
   };


};

module.exports = LoginPage;
