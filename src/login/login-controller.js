app.controller('LoginController', [
  '$scope',
  'moment',
  'loginService',
  '$state',
  'tokenService', function($scope, moment, loginService, $state, tokenService) {
    var clearPassword = function() {
      $scope.inputPassword = '';
    };

    $scope.submit = function() {
      var username = $scope.inputUsername;
      var password = $scope.inputPassword;

      var handleLoginSuccess = function(data) {
        $state.transitionTo('chat');
        tokenService.setTokenResponse(data);
      };

      var handleLoginFail = function(error) {
        $scope.error = error.error_description;
        clearPassword();
      };

      loginService(username, password).then(function(data) {
        if (data.error) {
          handleLoginFail(data);
        } else {
          handleLoginSuccess(data);
        }
      });
    };
}]);
