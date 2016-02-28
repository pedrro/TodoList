var MainPage = require('../pageObject/main.js');
var mainPage = new MainPage();

describe('Protractor Demo App', function() {
  beforeEach(function() {
    browser.get('http://localhost:3456');
  });

  it('should have add a todo', function() {
    var todoInput = element(by.model('formTodoText'));
    mainPage.insertTodo('teste');
    mainPage.addTodo();

    expect(mainPage.getTextOfTodo(0)).toEqual('teste');
    expect(mainPage.getTotalOfTodos()).toEqual('Total of Todo\'s: 1');
  });

  it('should remove a todo', function() {
    mainPage.insertTodo('teste');
    mainPage.addTodo();
    mainPage.clickCheckboxOfTodo(0);
    mainPage.removeTodoBtn();

    expect(mainPage.getTotalOfTodos()).toEqual('Total of Todo\'s: 0');
  });
});
