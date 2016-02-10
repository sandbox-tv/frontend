app.service('tokenService', ['$cookies', function($cookies) {
  return {
    setTokenResponse: function(data) {
      $cookies.put('access_token', data.access_token);
    },
    getToken: function() {
      return $cookies.get('access_token');
    }
  };
}]);
