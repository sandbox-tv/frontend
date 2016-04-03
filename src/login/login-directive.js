define([
  'app'
], function(app) {
  app.directive('login', function() {
    return {
      restrict: 'E',
      transclude: false,
      templateUrl: 'login/login.html',
      scope: {
        onSuccess: '&',
        onFail: '&'
      },
      controller: 'LoginController'
    };
  });
});
