app.controller('LoginController', [
  '$scope',
  'moment',
  'loginService',
  'tokenService',
  '$state',
  '$rootScope', function($scope, moment, loginService, tokenService, $state, $rootScope) {
    var clearPassword = function() {
      $scope.inputPassword = '';
    };

    $scope.submit = function() {
      var username = $scope.inputUsername;
      var password = $scope.inputPassword;

      var handleLoginSuccess = function(data) {
        tokenService.setUserData(data);
        console.log('token', tokenService.getToken());
        $rootScope.$broadcast('login');
        $state.transitionTo('chat');
      };

      var handleLoginFail = function(data) {
        $scope.error = data.error || data.errors[0].message;
        $log.info('scope error ', $scope.error);
        clearPassword();
      };

      loginService.login(username, password).then(function(data) {
        handleLoginSuccess(data);
      }, function(data) {
        handleLoginFail(data);
      });
    };
}]);
