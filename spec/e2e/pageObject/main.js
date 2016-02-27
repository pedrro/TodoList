var MainPage = function() {

  this.getTotalOfTodos = function() {
    return element(by.binding('getTotalTodos()')).getText();
  };

  this.insertTodo = function(text) {
    return element(by.model('formTodoText')).sendKeys(text);
  };

  this.addTodo = function() {
    return element(by.id('AddTodoBtn')).click();
  };

  this.removeTodoBtn = function() {
    return element(by.id('RemoveTodoBtn')).click();
  };

  this.clickCheckboxOfTodo = function(index) {
    return element(by.id('checkbox_'+index)).click();
  };

  this.getTextOfTodo = function(index) {
    return element.all(by.repeater('todo in todos')).get(index).getText();
  };

};

module.exports = MainPage;
