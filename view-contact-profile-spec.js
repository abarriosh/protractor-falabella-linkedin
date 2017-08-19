/*pageObjects imports*/
var FeedPage = require('./pageObjects/feed-page.js');
var SearchResultsPage = require('./pageObjects/search-results-page.js');
var ProfilePage = require('./pageObjects/profile-page.js');
var LoginPage = require('./pageObjects/login-page.js')
var Utils = require('./asserts/utils.js');

describe('Linkedin Contact Search', function() {
  it('Should search the Contact with the name "([^"]*)" and Visualize the contact profile', function() {
    const USER_EMAIL = "";                       //Should be a Valid Linkedin User email
    const USER_PASSWORD = "";                    //Should be a Valid Linkedin User password
    const CONTACT_NAME = 'Ronye M. Vernaes K.';  //Should be a Valid contact's name
    const NAME_PATTERN = "/ronyevernaes/";       //Should be a pattern in the URL profile page
    var utils = new Utils();

    browser.driver.get('https://www.linkedin.com/');
    utils.waitPage("linkedin");

    //Login
    var loginPage = new LoginPage();
    loginPage.login(USER_EMAIL,USER_PASSWORD);
    utils.waitPage("/feed/");

    //Search the contact and waits for Results Page.
    //LINKEDIN is not an Angular app, so it's necessary to implement a wait method . See it into utils,js file
    var feedPage = new FeedPage();
    feedPage.search(CONTACT_NAME);
    utils.waitPage("/search/");

    //Search the Contact Link and clicks on it to Display the profile. This page has two links to the profile:
    //the photo link and the text link. We will use the text link
    var searchResultsPage = new SearchResultsPage();
    searchResultsPage.clickOnContact();
    utils.waitPage(NAME_PATTERN); //Wait for Contact Profile Page

    //Compares the contact name displayed in Profile Page with the Contact name Searched
    var profilePage = new ProfilePage();
    expect(profilePage.getProfileName()).toEqual(CONTACT_NAME);

  });
});
