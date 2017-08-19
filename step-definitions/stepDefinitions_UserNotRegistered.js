var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

/*pageObjects imports*/
var LoginPage = require('./pageObjects/login-page.js');
var LoginSubmitPage = require('./pageObjects/login-submit-page.js');

module.exports = function() {

  this.Given(/^A login with a not registered "([^"]*)" and "([^"]*)"$/, function (email,password) {
    browser.driver.get('https://www.linkedin.com/');
    utils.waitPage("linkedin");

    var loginPage = new LoginPage(email,password);
    loginPage.login();
    utils.waitPage("login-submit");
  });

  this.Then(/^Ensure an error message is displayed$/, function (){
    //Verify if the email field has an error displayed
    var loginSubmitPage = new LoginSubmitPage();
    expect(loginSubmitPage.getAlertError()).toEqual('alert error');
  });

};
