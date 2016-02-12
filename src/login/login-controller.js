app.controller('LoginController', [
  '$scope',
  'moment',
  'loginService',
  '$state', function($scope, moment, loginService, $state) {
    var clearPassword = function() {
      $scope.inputPassword = '';
    };

    $scope.submit = function() {
      var username = $scope.inputUsername;
      var password = $scope.inputPassword;

      var handleLoginSuccess = function(data) {
        $state.transitionTo('chat');
      };

      var handleLoginFail = function(error) {
        $scope.error = error.error
        clearPassword();
      };

      loginService(username, password).then(function(data) {
        handleLoginSuccess(data);
      }).catch(function(data) {
        handleLoginFail(data);
      });
    };
}]);
