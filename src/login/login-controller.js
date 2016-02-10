app.controller('LoginController', [
  '$scope',
  'moment',
  'loginService', function($scope, moment, loginService) {
    var clearPassword = function() {
      $scope.inputPassword = '';
    };

    $scope.submit = function() {
      var username = $scope.inputUsername;
      var password = $scope.inputPassword;

      var handleLoginSuccess = function() {
        console.log('success');
      };

      var handleLoginFail = function(error) {
        $scope.error = error.error_description;
        clearPassword();
      };

      loginService(username, password).then(function(data) {
        if (data.error) {
          handleLoginFail(data);
        } else {
          handleLoginSuccess();
        }
      });
    };
}]);
