app.directive('register', function() {
  return {
    restrict: 'E',
    transclude: false,
    templateUrl: 'register/register.html',
    controller: 'RegisterController'
  };
});
