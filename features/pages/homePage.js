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
  }


};
