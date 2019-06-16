#comment
Feature: My Recipes Online Ingredients detail card
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

  Scenario Outline: Select an Ingredient from List of Ingredients
    When I click the "INGREDIENTS" tab
    Then Ingredients List is shown
    When I click "<ingredient>" from the Ingredient List
    Then I am shown the Ingredients Detail Card
    And Ingredients Detail card shows "<ExpectedIngredient>"
    Examples:
      |ingredient|ExpectedIngredient |
      |cinnamon   |cinnamon          |
      |apple      |apple             |