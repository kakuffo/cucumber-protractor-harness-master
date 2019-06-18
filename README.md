# RUN Test
npm install -g webdriver-manager

webdriver-manager update

webdriver-manager start

protractor cucumber.conf.js 

Script to run can be included into gulp script, but not done for demo

# INSTRUCTIONS
Write a cucumber feature file given the following scenario

### Background
The user has logged in

###Scenario:       
    The user can see a specific ingredient in the ingredients detail card

Given the user can see the ingredients tab
And the user clicks on the ingredients tab
Then the user can see the ingredients list
the user can see cinnamon in the ingredients list items And the user clicks on the cinnamon item from the ingredients list Then the user can seen in the ingredients detail card

### How will you change the previous feature file to support more than 1 ingredient (e.g. cinnamon, apples)

### Write the implementation of the steps for the scenario in question 1

Feature: My Recipes Online Ingredients detail card
  
  Background:

    Given I go to "https://recipesOnline.com"
    Then I am on the "My Recipes Online" page
    And I am shown "HOME" tab
    And I am shown "INGREDIENTS" tab
 
### WHAT WE DON'T LIKE
How will you change the previous feature file to support more than 1 ingredient (e.g. cinnamon, apples)

### Feature: My Recipes Online Ingredients detail card
    
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


### change the previous feature file to support more than 1 ingredien
### (e.g. cinnamon, apples)
````
    defineSupportCode( function( { Given, When, Then }) 
       {
        Given('I go to {stringInDoubleQuotes}', function (site,callback)      
         {
    browser.waitForAngularEnabled(false);
    expect(browser.get(site));
  });
  ````
### My Recipes Online:
Given the steps implementation below for a specific scenario, what
kind of improvements could be made?

### Improvement opportunity:
The first improvement opportunity identified from the attached is the
need for browser.close()

### Encapsulate:
The second improvement opportunity is the realisation of encapsulation
with the Page Objects anti pattern

### Parameterisation:
Parameterised in software development is a powerful technique for the reliable reuse of software. In this technique, modules are parameterized, and the the data used for the modules are separated
from the test step definitiosn, also improving collaboration. 

### Parameterisation:
Test data used in any parameterisation effort 
``
