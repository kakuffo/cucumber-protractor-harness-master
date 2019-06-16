'use strict';
module.exports = {

  angularHomepage: {
    taskList: element(by.model('todoList.todoText')),
    taskButton: element(by.css('[value="add"]')),
    todoList: element.all(by.repeater('todo in todoList.todos')),
    ingredientsButton: element.all(by.id('ingredient-fa1b1155')),
    homeButton: element.all(by.partialLinkTex('HOME')),
    justCard: element.all(by.)

  },

  go: function(site) {
    browser.get(site);
  },

  addTask: function(task) {
    var angular = this.angularHomepage;
    angular.taskList.sendKeys(task);
  },

  submitTask: function() {
    var angular = this.angularHomepage;
    angular.taskButton.click();
  },

  ingredientTab:   function() {
  var angular = this.angularHomepage;
  angular.ingredientsButton.click();
  },

  homeTab: function()   {
  var angular = this.angularHomepage;
  angular.homeButton.click();

  },

  justificationCard:    function()  {
  var angular = this.angularHomepage;
  angular.homeButton.

  }



};
