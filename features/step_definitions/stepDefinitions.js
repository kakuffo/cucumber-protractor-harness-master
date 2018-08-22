// features/step_definitions/stepDefinitions.js
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var angularPage = require('../pages/homePage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

//chai.use(chaiAsPromised);
var expect = chai.expect;

defineSupportCode(function({Given, When, Then}) {

  Given('I go to {stringInDoubleQuotes}', function (site) {
    browser.waitForAngularEnabled(false);
    //browser.get(site);
    expect(browser.get(site));

  });


});
