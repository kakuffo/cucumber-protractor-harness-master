// features/step_definitions/stepDefinitions.js
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var angularPage = require('../pages/homePage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

//chai.use(chaiAsPromised);
var expect = chai.expect;

defineSupportCode(function({Given, When, Then}) {

  Given('I go to {stringInDoubleQuotes}', function (site, callback) {
    browser.waitForAngularEnabled(false);
    expect(browser.get(site));

  });

  When('I click {stringInDoubleQuotes}', function (text, callback) {

     });

  Then('I am shown {stringInDoubleQuotes} page title', function (mytext, callback) {

       });




});
