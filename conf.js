exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['unregistered-user-spec.js','view-contact-profile-spec.js'],

  multiCapabilities: [
  {'browserName': 'chrome'},
  {'browserName': 'firefox' },
  {'browserName': 'internet explorer',
    'platform': 'ANY',
    'version': '11'
  } ],

  jasmineNodeOpts: {
     defaultTimeoutInterval: 40000
  }

  /*capabilities: {
    browserName: 'chrome'
  },*/

};
