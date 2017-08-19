/*pageObjects imports and Utils*/
var LoginSubmitPage = require('./pageObjects/login-submit-page.js');
var LoginPage = require('./pageObjects/login-page.js')
var Utils = require('./asserts/utils.js');

describe('Linkedin Not Registered User', function() {
  it('Should display an error message if a not registered user tries to login', function() {
    const USER_EMAIL = "testuser1234567890@domain.com";
    const USER_PASSWORD = "123456";
    var utils = new Utils();

    browser.driver.get('https://www.linkedin.com/');
    utils.waitPage("linkedin");
    //Login
    var loginPage = new LoginPage();
    loginPage.login(USER_EMAIL,USER_PASSWORD);
    utils.waitPage("login-submit");

    //Verify if an error messsage has been displayed
    var loginSubmitPage = new LoginSubmitPage();
    expect(loginSubmitPage.getAlertError()).toEqual('alert error');
  });
});
