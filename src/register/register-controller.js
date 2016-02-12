app.controller('RegisterController', [
  '$scope',
  '$state',
  'registerService', function($scope, $state, registerService) {
    var clearPassword = function() {
      $scope.inputPassword = '';
      $scope.inputPasswordConfirm = '';
    };

    $scope.submit = function() {
      var username = $scope.inputUsername;
      var password = $scope.inputPassword;
      var passwordConfirm = $scope.inputPasswordConfirm;

      var handleRegisterSuccess = function(data) {
        $state.transitionTo('chat');
      };

      var handleRegisterFail = function(error) {
        $scope.error = error.error
        clearPassword();
      };

      var passwordMatch = function() {
        return password === passwordConfirm;
      };

      if (!passwordMatch()) {
        $scope.error = 'Passwords do no not match';
        $scope.passwordConfirmError = true;
        return;
      }

      registerService(username, password).then(function(data) {
        handleRegisterSuccess(data);
      }).catch(function(data) {
        handleRegisterFail(data);
      });
    };
}]);
