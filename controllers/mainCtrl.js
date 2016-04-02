angularApp.controller('MainCtrl', [ 
  '$scope',
  function($scope){
    $scope.heading = "Hello World";
    $scope.message = "This is me";

    $scope.person = {};

    $scope.login = function() {
      console.log('performing log in checks', $scope.person);
    }
  }
]);