var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

/*pageObjects imports and Utils*/
var FeedPage = require('./pageObjects/feed-page.js');
var SearchResultsPage = require('./pageObjects/search-results-page.js');
var ProfilePage = require('./pageObjects/profile-page.js');
var LoginPage = require('./pageObjects/login-page.js');
var Utils = require('./asserts/utils.js');

module.exports = function() {
  var utils = new Utils();

  this.Given(/^A user logins into the Linkedin Network with a "([^"]*)" and "([^"]*)"$/, function (email,password) {
    browser.driver.get('https://www.linkedin.com/');
    utils.waitPage("linkedin");

    var loginPage = new LoginPage();
    loginPage.login(email,password);
    utils.waitPage("/feed/");
  });

  this.When(/^The user enters a "([^"]*)" into the search field and submits the request$/, function (contactName) {
    var feedPage = new FeedPage();
    feedPage.search(contacName);
    utils.waitPage("/search/");
  });

  this.When(/^The user clicks over the link referent to the contact name and waits for the profile for "([^"]*)"$/, function (urlPattern) {
    var searchResultsPage = new SearchResultsPage();
    searchResultsPage.clickOnContact();
    //Wait for Contact Profile Page
    utils.waitPage(urlPattern);
  });

  this.Then(/^Ensure the profile "([^"]*)" is displayed$/, function (contactName){
    //Compares the contact name displayed in Profile Page with the Contact name Searched
    var profilePage = new ProfilePage();
    expect(profilePage.getProfileName()).to.eventually.equal(contactName);
  });

};
