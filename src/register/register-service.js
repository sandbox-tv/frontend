app.service('registerService', ['$http', '$window', '$log', function ($http, $window, $log) {
  return function(username, password) {
    var data = {
      username: username,
      password: password
    };

    return $http({
      method: 'POST',
      url: $window.Config.REGISTER_URL,
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    }).then(function(response) {
      if (response.status != 200) return Promise.reject();
      $log.info('register success', response);
      return response.data;
    }).catch(function(response) {
      $log.info('register error', response);
      return Promise.reject(response.data);
    });
  };
}]);
