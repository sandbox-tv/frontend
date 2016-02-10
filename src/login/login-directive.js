app.directive('login', function() {
  return {
    restrict: 'E',
    transclude: false,
    templateUrl: 'login/login.html',
    scope: {
      name: '&'
    },
    controller: 'LoginController'
  };
});
