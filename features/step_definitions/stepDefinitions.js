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

        Then('Ingredients Detail card shows {stringInDoubleQuotes}', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });

       Given('I am on the {stringInDoubleQuotes} page', function (stringInDoubleQuotes, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

//   Step: And I am shown "HOME" tab - features/EDFold.feature:5
       Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

//   Step: And I am shown "INGREDIENTS" tab - features/EDFold.feature:6
       Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });


//   Step: Given I am on the "My Recipes Online" page - features/EDFold.feature:4

       Given('I am on the {stringInDoubleQuotes} page', function (stringInDoubleQuotes, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });


//   Step: And I am shown "HOME" tab - features/EDFold.feature:5

       Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });


//   Step: And I am shown "INGREDIENTS" tab - features/EDFold.feature:6

       Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });


//   Step: When I click the "INGREDIENTS" tab - features/EDFold.feature:14

       When('I click the {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

//   Step: Then Ingredients List is shown - features/EDFold.feature:15

       Then('Ingredients List is shown', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });


//   Step: And Ingredients items include "cinnamon" - features/EDFold.feature:16

       Then('Ingredients items include {stringInDoubleQuotes}', function (stringInDoubleQuotes, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });


//    Step: Given I am on the "My Recipes Online" page - features/EDFold.feature:4
        Given('I am on the {stringInDoubleQuotes} page', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: And I am shown "HOME" tab - features/EDFold.feature:5
        Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: And I am shown "INGREDIENTS" tab - features/EDFold.feature:6
        Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: When I click the "INGREDIENTS" tab - features/EDFold.feature:14

        When('I click the {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: Then Ingredients List is shown - features/EDFold.feature:15

        Then('Ingredients List is shown', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: And Ingredients items include "apple" - features/EDFold.feature:16

        Then('Ingredients items include {stringInDoubleQuotes}', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: Given I am on the "My Recipes Online" page - features/EDFold.feature:4

        Given('I am on the {stringInDoubleQuotes} page', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: And I am shown "HOME" tab - features/EDFold.feature:5

        Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: And I am shown "INGREDIENTS" tab - features/EDFold.feature:6

        Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: When I click the "INGREDIENTS" tab - features/EDFold.feature:23

        When('I click the {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: Then Ingredients List is shown - features/EDFold.feature:24

        Then('Ingredients List is shown', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: When I click "cinnamon" from the Ingredient List - features/EDFold.feature:25

        When('I click {stringInDoubleQuotes} from the Ingredient List', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: Then I am shown the Ingredients Detail Card - features/EDFold.feature:26

        Then('I am shown the Ingredients Detail Card', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: Given I am on the "My Recipes Online" page - features/EDFold.feature:4

        Given('I am on the {stringInDoubleQuotes} page', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: And I am shown "HOME" tab - features/EDFold.feature:5

        Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });

//    Step: And I am shown "INGREDIENTS" tab - features/EDFold.feature:6

        Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: When I click the "INGREDIENTS" tab - features/EDFold.feature:23

        When('I click the {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: Then Ingredients List is shown - features/EDFold.feature:24

        Then('Ingredients List is shown', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: When I click "apple" from the Ingredient List - features/EDFold.feature:25

        When('I click {stringInDoubleQuotes} from the Ingredient List', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


    Step: Then I am shown the Ingredients Detail Card - features/EDFold.feature:26

        Then('I am shown the Ingredients Detail Card', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: Given I am on the "My Recipes Online" page - features/RecipesOnline.feature:4

        Given('I am on the {stringInDoubleQuotes} page', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: And I am shown "HOME" tab - features/RecipesOnline.feature:5

        Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: And I am shown "INGREDIENTS" tab - features/RecipesOnline.feature:6

        Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });

//    Step: Given I am on the "My Recipes Online" page - features/RecipesOnline.feature:4

        Given('I am on the {stringInDoubleQuotes} page', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: And I am shown "HOME" tab - features/RecipesOnline.feature:5

        Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: And I am shown "INGREDIENTS" tab - features/RecipesOnline.feature:6

        Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: When I click the "INGREDIENTS" tab - features/RecipesOnline.feature:14

        When('I click the {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: Then Ingredients List is shown - features/RecipesOnline.feature:15

        Then('Ingredients List is shown', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: And Ingredients items include "cinnamon" - features/RecipesOnline.feature:16

        Then('Ingredients items include {stringInDoubleQuotes}', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });

//    Step: Given I am on the "My Recipes Online" page - features/RecipesOnline.feature:4
        Given('I am on the {stringInDoubleQuotes} page', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: And I am shown "HOME" tab - features/RecipesOnline.feature:5

        Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });

//    Step: And I am shown "INGREDIENTS" tab - features/RecipesOnline.feature:6

        Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: When I click the "INGREDIENTS" tab - features/RecipesOnline.feature:14

        When('I click the {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: Then Ingredients List is shown - features/RecipesOnline.feature:15

        Then('Ingredients List is shown', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


  //  Step: And Ingredients items include "apple" - features/RecipesOnline.feature:16

        Then('Ingredients items include {stringInDoubleQuotes}', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });

//    Step: Given I am on the "My Recipes Online" page - features/RecipesOnline.feature:4

        Given('I am on the {stringInDoubleQuotes} page', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: And I am shown "HOME" tab - features/RecipesOnline.feature:5

        Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: And I am shown "INGREDIENTS" tab - features/RecipesOnline.feature:6

        Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


  //  Step: When I click the "INGREDIENTS" tab - features/RecipesOnline.feature:23

        When('I click the {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });

//    Step: Then Ingredients List is shown - features/RecipesOnline.feature:24

        Then('Ingredients List is shown', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });

//    Step: When I click "cinnamon" from the Ingredient List - features/RecipesOnline.feature:25

        When('I click {stringInDoubleQuotes} from the Ingredient List', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: Then I am shown the Ingredients Detail Card - features/RecipesOnline.feature:26

        Then('I am shown the Ingredients Detail Card', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: Given I am on the "My Recipes Online" page - features/RecipesOnline.feature:4

        Given('I am on the {stringInDoubleQuotes} page', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: And I am shown "HOME" tab - features/RecipesOnline.feature:5

        Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: And I am shown "INGREDIENTS" tab - features/RecipesOnline.feature:6

        Given('I am shown {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: When I click the "INGREDIENTS" tab - features/RecipesOnline.feature:23

        When('I click the {stringInDoubleQuotes} tab', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });


//    Step: Then Ingredients List is shown - features/RecipesOnline.feature:24

        Then('Ingredients List is shown', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });

//    Step: When I click "apple" from the Ingredient List - features/RecipesOnline.feature:25

        When('I click {stringInDoubleQuotes} from the Ingredient List', function (stringInDoubleQuotes, callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });

//    Step: Then I am shown the Ingredients Detail Card - features/RecipesOnline.feature:26

        Then('I am shown the Ingredients Detail Card', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });



Given(/^that the user can see the Justification card link$/, () => {

    checkElementExists('/html/body/app-root/ion-app/ion-router-outlet/app-work-list-router/ion-content/ion-          grid/ion-row/ion-col[2]/app-work-list-detail/ion-grid/ion-row/ion-col[1]/vmd-justification-card')

} )


When(/^they select the Justification card link$/, () => {
clickElement('click', 'selector', '/html/body/app-root/ion-app/ion-router-outlet/app-work-list-router/ion-content/ion-grid/ion-row/ion-co l[2]/app-work-list-detail/ion-grid/ion-row/ion-col[1]/vmd-justification-card')

waitForVisible('/html/body/app-root/ion-app/ion-router-outlet/app-work-list-router/ion-content/ion-grid /ion-row/ion-col[2]/app-work-list-detail/ion-grid/ion-row/ion-col[1]/vmd-justification-card')
} )


Then(/^they will see the Justification card showing the justification text for the application$/, () => {
checkElementExists('//vmd-justification-card')
checkContainsText('element', '//*[@class="vmd-card-content"]', false, 'Lorem Ipsum is simply dummy text')
} )


And(/^they will see a Message Applicant Option$/, () => {
checkElementExists('.vmd-card-actions')
checkContainsText('element', '//*[@class="vmd-card-actions"]/ion-button[text()="Message applicant"]', false, 'MESSAGE APPLICANT')
   } )



And(/^they will see a Pass option$/, () => {
checkElementExists('.vmd-card-actions')
checkContainsText('element', '//*[@class="vmd-card-actions"]/ion-button[text()="Pass"]', false, 'PASS')
} )


});
