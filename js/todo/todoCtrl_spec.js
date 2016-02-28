describe('Todo controller test', function () {
  var $scope, $controller;

  beforeEach( inject(function(_$controller_, _$rootScope_) {
    $scope = _$rootScope_.$new();
    $controller = _$controller_;

    var controller = function(){
      $controller('TodoCtrl', {
        $scope: $scope
      });
    };
  })
);

});
