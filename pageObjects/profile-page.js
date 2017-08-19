var ProfilePage = function() {

   var profileName = browser.driver.findElement(by.className('pv-top-card-section__name Sans-26px-black-85%'));

   this.getProfileName = function() {
    return profileName.getText();
   };

};

module.exports = ProfilePage;
