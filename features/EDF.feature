#comment
Feature: Navigate to https://the-internet.herokuapp.com/
  Click Challenging DOM
  Confirm that the red button label changes after it's clicked

  Scenario: TEST 1
    Given I go to "https://the-internet.herokuapp.com"
    When I click "The Internet"
    Then I am shown "Challenging DOM" page title



