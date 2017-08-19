var SearchResultsPage = function() {

   var contactLinks =  browser.driver.findElements(by.className('search-result__result-link ember-view'));

   this.clickOnContact = function() {
     contactLinks.then(function(elements){
       elements[1].click();
     });
   };

};

module.exports = SearchResultsPage;
