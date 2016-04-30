describe('Todo controller test', function () {
  var scope, todoCtrl;

  beforeEach(module('TodoList'));
  beforeEach( inject(function($controller) {
    scope = {};
    todoCtrl = $controller('TodoCtrl', {
        $scope: scope
      });
  })
);

it('should get controller', function () {
  expect(todoCtrl).toBeDefined();
  expect(scope.getTotalTodos()).toBe(0);
});

it('should add a todo', function () {
  scope.formTodoText = 'lalala';
  scope.addTodo();
  expect(scope.getTotalTodos()).toBe(1);
});

it('should clear a todo', function () {
  scope.formTodoText = 'lalala';
  scope.addTodo();
  expect(scope.getTotalTodos()).toBe(1);
  scope.todos[0].done = true;
  scope.clearCompleted();
  expect(scope.getTotalTodos()).toBe(0);
});


});
