exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
    './features/*.feature'     // Specs here are the cucumber feature files
  ],

  multiCapabilities: [
  {'browserName': 'chrome'},
  {'browserName': 'firefox' },
  {'browserName': 'internet explorer',
    'platform': 'ANY',
    'version': '11'
  } ],

  framework: 'custom',  // set to "custom" instead of cucumber.

  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file

  // cucumber command line options
  cucumberOpts: {
    require: ['./step_definitions/*.js'],  // require step definition files before executing features
    format: 'pretty'            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
  },

};
