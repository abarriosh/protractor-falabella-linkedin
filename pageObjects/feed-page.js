var FeedPage = function() {

   var searchField =  browser.driver.findElement(by.className('ember-text-field ember-view'));
   var searchButton = browser.driver.findElement(by.className('nav-search-button'));

   this.search = function(contactName) {
     searchField.sendKeys(contactName);
     searchButton.click();
   };

};

module.exports = FeedPage;
