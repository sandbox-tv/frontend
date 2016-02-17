app.controller('HeaderController', [
  '$scope',
  'tokenService',
  'loginService',
  '$state', '$log',
  '$rootScope', function($scope, tokenService, loginService, $state, $log, $rootScope) {
    function getDetails() {
      $scope.username = tokenService.getUsername();
      $scope.isLoggedIn = !!$scope.username;
    }

    $rootScope.$on('login', function() {
      getDetails();
    });

    getDetails();

    $scope.logout = function() {
      $log.info('logging out');
      $log.info('logout token', tokenService.getToken());
      loginService.logout().then(function() {
        $scope.username = tokenService.getUsername();
        $scope.isLoggedIn = !!$scope.username;
        $state.transitionTo('login');
      });
    }
}]);
