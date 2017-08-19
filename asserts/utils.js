var Utils = function() {

   this.waitPage = function(pattern,timeout=10000) {

     browser.driver.wait(function() {
       return browser.driver.getCurrentUrl().then(function(url) {
         var patt = new RegExp(pattern);
         return patt.test(url);
         });
     }, timeout);

   };

};

module.exports = Utils;
