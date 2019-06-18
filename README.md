# RUN Test
npm install -g webdriver-manager

webdriver-manager update

webdriver-manager start

protractor cucumber.conf.js 

Script to run can be included into gulp script, but not done for demo

# INSTRUCTIONS
Write a cucumber feature file given the following scenario

###Background
The user has logged in

###Scenario:       
    The user can see a specific ingredient in the ingredients detail card

Given the user can see the ingredients tab
And the user clicks on the ingredients tab
Then the user can see the ingredients list
the user can see cinnamon in the ingredients list items And the user clicks on the cinnamon item from the ingredients list Then the user can seen in the ingredients detail card

###How will you change the previous feature file to support more than 1 ingredient (e.g. cinnamon, apples)

###Write the implementation of the steps for the scenario in question 1

Feature: My Recipes Online Ingredients detail card
  
  Background:

    Given I go to "https://recipesOnline.com"
    Then I am on the "My Recipes Online" page
    And I am shown "HOME" tab
    And I am shown "INGREDIENTS" tab
 
###WHAT WE DON'T LIKE
How will you change the previous feature file to support more than 1 ingredient (e.g. cinnamon, apples)

###Feature: My Recipes Online Ingredients detail card
    
    Background:
    Given I go to "https://recipesOnline.com"
    Then I am on the "My Recipes Online" page
    And I am shown "HOME" tab
    And I am shown "INGREDIENTS" tab
    
    Scenario Outline: List Ingredients
    When I click the "INGREDIENTS" tab
    Then Ingredients List is shown
    And Ingredients items include "<ingredients>"
    Examples:
      |ingredients|
      |cinnamon   |
      |apple      |


###change the previous feature file to support more than 1 ingredien
###(e.g. cinnamon, apples)
````
    defineSupportCode( function( { Given, When, Then }) 
       {
        Given('I go to {stringInDoubleQuotes}', function (site,callback)      
         {
    browser.waitForAngularEnabled(false);
    expect(browser.get(site));
  });
  ````
###My Recipes Online:
Given the steps implementation below for a specific scenario, what
kind of improvements could be made?

###Improvement opportunity:
The first improvement opportunity identified from the attached is the
need for browser.close()

###Encapsulate:
The second improvement opportunity is the realisation of encapsulation
with the Page Objects anti pattern

###Parameterisation:
Parameterised in software development is a powerful technique for the reliable reuse of software. In this technique, modules are parameterized, and the the data used for the modules are separated
from the test step definitiosn, also improving collaboration. 

###Parameterisation:
Test data used in any parameterisation effort 
``
checkContainsText('element','//*[@class="vmd-card-actions"]/ion-button[text()="Pass"]', false, 'PASS')
``
###waitForVisible
Using the promise technique for synchronisation, and check-point will improve the test execution.
``
('/html/body/app-root/ion-app/ion-router-outlet/
app-work-list-router/ion-content/ion-grid/
ion-row/ion-col[2]/app-work-list-detail/ion-grid/ion-row/ion-col[1]/
-justification-card')

``
Old version with test data in feature file.
checkContainsText('element','//*[@class="vmd-card-actions"]/ion-butto
[text()="Pass"]', false, 'PASS')
checkContainsText('element','class.vmd-card-actions.Pass, false, 'PASS')
``
```` Feature: 
  Scenario Outline: List Ingredients
  When I click the "INGREDIENTS" tab
  Then Ingredients List is shown
    And Ingredients items include "<ingredients>"
    Examples:
      |ingredients|
      |cinnamon   |
      |apple      |
    And Ingredients Detail card shows "<ExpectedIngredient>"
    Examples:
    |ingredient|ExpectedIngredient |
    |cinnamon   |cinnamon          |
    |apple      |apple             |

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
describe('Research and Development and Innovation are at the heart of EDF Energy', function() {
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

