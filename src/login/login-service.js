app.service('loginService', ['$http', '$window', '$log', function ($http, $window, $log) {
  return function(username, password) {
    var data = {
      username: username,
      password: password
    };

    return $http({
      method: 'POST',
      url: $window.Config.LOGIN_URL,
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function(response) {
      $log.info('login success', response);
      return response.data;
    }).catch(function(response) {
      $log.info('login error', response);
      return response.data;
    });
  };
}]);
