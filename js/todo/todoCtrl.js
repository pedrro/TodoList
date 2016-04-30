angular.module('TodoList').controller('TodoCtrl', function ($scope){
  var bgColor = [
    {hex: '#086788' },
    {hex: '#07a0c3' },
    {hex: '#f0c808' },
    {hex: '#fff1d0' },
    {hex: '#dd1c1a' }
  ];
  $scope.todos = [];

 $scope.getTotalTodos = function () {
   return $scope.todos.length;
 };

 $scope.clearCompleted = function () {
   $scope.todos = _.filter($scope.todos, function(todo) {
     return !todo.done;
   });
 };

  $scope.addTodo = function () {
    var randomColor = _.sample(bgColor);
    $scope.todos.push({ text: $scope.formTodoText, done: false, color:randomColor.hex});
    $scope.formTodoText = '';
    $scope.totalTodos += 1;
  };
});
