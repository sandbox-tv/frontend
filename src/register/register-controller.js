define([
  'app'
], function(app) {
  app.controller('RegisterController', [
    '$scope',
    '$state',
    'loginService',
    'tokenService', function($scope, $state, loginService, tokenService) {
      var clearPassword = function() {
        $scope.inputPassword = '';
        $scope.inputPasswordConfirm = '';
      };

      $scope.submit = function() {
        var username = $scope.inputUsername;
        var password = $scope.inputPassword;
        var passwordConfirm = $scope.inputPasswordConfirm;

        var reset = function() {
          $scope.error = '';
          $scope.passwordConfirmError = false;
        };

        var handleRegisterSuccess = function(data) {
          tokenService.setUserData(data);
          $state.transitionTo('chat');
        };

        var handleRegisterFail = function(data) {
          $scope.error = data.error || data.errors[0].message;
          clearPassword();
        };

        var passwordMatch = function() {
          return password === passwordConfirm;
        };

        reset();

        if (!passwordMatch()) {
          $scope.error = 'Passwords do no not match';
          $scope.passwordConfirmError = true;
          return;
        }

        loginService.register(username, password).then(function(data) {
          handleRegisterSuccess(data);
        }, function(data) {
          handleRegisterFail(data);
        });
      };
  }]);
});
