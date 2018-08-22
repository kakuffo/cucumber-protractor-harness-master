# RUN Test
npm install -g webdriver-manager

webdriver-manager update

webdriver-manager start

protractor cucumber.conf.js 

Script to run can be included into gulp script, but not done for demo

# INSTRUCTIONS
Deliver a working test framework that aims towards "best practices". If you feel that there may be technical debt, future improvements, or any other comments you'd like us to know about then mention them in your README.
Preferably, the results will be published to a public GitHub repository, but a ZIP is also fine.
All work should be your own.

# TECH
Java, Python, JavaScript, Ruby, Capybara, RSpec, or whatever you like plus any other supporting gems/libraries you think you need.

# WHAT WE LIKE
Simplicity – your work should do what it needs to do in the most effective way (readability counts!)
Extendibility – anyone should be able to pick up from where you've written and add more tests (i.e. page object model for UI tests)
 
# WHAT WE DON'T LIKE
Complexity – don't show off how smart you are just to prove a point
Bloat – don't keep unnecessary methods, commented out code, or stuff you don't think we need to see in your work

# TEST 1:
Navigate to https://the-internet.herokuapp.com/
Click Challenging DOM
Confirm that the red button label changes after it's clicked
 
# TEST 2:
Navigate to https://the-internet.herokuapp.com/
Click Dynamically Loaded Page Elements and click Example 2: Element rendered after the fact
Confirm 'Hello World!' is rendered after the loading bar disappears

# TEST 3:
POST to the http://dummy.restapiexample.com/ create route and verify you receive a response that indicates that a user was made.

# BONUS:
Do you have a tech blog or any pre-existing, public projects you'd like to show us? Please include links to them in your README. Also feel free to include tests for other pages of "the-internet" or the dummy rest API example routes you feel would support your application.

# Package details:
```javascript
{
  "name": "cucumber-protractor-harness",
  "version": "1.0.0",
  "description": "package for a cucumber-protractor harness",
  "main": "cucumber.conf.js",
  "dependencies": {
    "xvfb": "^0.2.3"
  },
  "devDependencies": {
    "chai": "^4.1.0",
    "chai-as-promised": "^7.1.1",
    "chai-string": "^1.2.0",
    "cucumber": "^2.3.1",
    "gulp": "^3.9.1",
    "gulp-angular-protractor": "^1.0.0",
    "jasmine-reporters": "^2.3.2",
    "protractor": "^5.1.1",
    "protractor-cucumber-framework": "^3.1.0"
  },
  "scripts": {
    "test": "protractor"
  },
  "keywords": [
    "protractor",
    "cucumber.js"
  ],
  "author": "Kwame Akuffo",
  "license": "MIT"
}
```
# Solution details:
```javascript
var page = require('../features/pages/homePage.js');
describe('Test 1', function() {
 it('Test 1', function() {
    browser.waitForAngularEnabled(false);
    browser.get(page.EDFHomepage.EDFHome);
    var EDFtitle= element(by.linkText(page.EDFHomepage.ChallengingDOMText));
    expect(EDFtitle.getText()).toEqual(page.EDFHomepage.ChallengingDOMText);
    EDFtitle.click();
    });
 it('Test 2', function() {
    browser.get(page.EDFHomepage.EDFHome);
    var titleEDF= element(by.linkText(page.EDFHomepage.DynamicLoading));
    expect(titleEDF.getText()).toEqual(page.EDFHomepage.DynamicLoading);
    titleEDF.click();
    var EDFsectionTitle= element(by.linkText(page.EDFHomepage.ExpectedText01));
    EDFsectionTitle.click();
    var SubtitleEDF= element(by.css(page.EDFHomepage.ContentLocator));
    expect(SubtitleEDF.getText()).toEqual(page.EDFHomepage.ExpectedText01);
    var EDFbutton= element(by.id(page.EDFHomepage.ButtonText01));
    expect(EDFbutton.getText()).toEqual(page.EDFHomepage.ButtonText02);
    EDFbutton.click();
  });
 it('Test 3', function() {
    var Subtitle= element(by.css(page.EDFHomepage.ContentLocator));
    expect(Subtitle.getText()).toEqual(page.EDFHomepage.ExpectedText01);
    var button = element(by.buttonText(page.EDFHomepage.ButtonText02));
    button.click();
    var EDFC = protractor.ExpectedConditions;
    browser.wait(EDFC.textToBePresentInElement($(page.EDFHomepage.FinishElelent), page.EDFHomepage.ExpectedText02), 50000);
  });
});
```
# Solution PageObject details:
```javascript
'use strict';
module.exports = {
  EDFHomepage: {
    taskList: element(by.model('todoList.todoText')),
    taskButton: element(by.css('[value="add"]')),
    todoList: element.all(by.repeater('todo in todoList.todos')),
    ChallengingDOMText: 'Challenging DOM',
    DynamicLoading: 'Dynamic Loading',
    ExpectedText01: 'Example 2: Element rendered after the fact',
    ButtonText01: 'start',
    ButtonText02: 'Start',
    ContentLocator: '#content > div > h4',
    ExpectedText02: 'Hello World!',
    FinishElelent: '#finish',
  }
};
```

# Solution config details:
```javascript
exports.config = {
    specs: ['features/spec.js'],
    framework: 'jasmine2',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    capabilities: {
        browserName: 'chrome'
    },

    onPrepare: function () {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            filePrefix: 'xmloutput',
            savePath: 'EDFtestresults',
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true,
            showPassed: true,
            cleanDestination: false,
            fileNamePrefix: 'Prefix',
            fixedScreenshotName: true

        }));
    }
}```

