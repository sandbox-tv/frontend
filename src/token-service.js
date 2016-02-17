app.service('tokenService', ['$cookies', '$log', function($cookies, $log) {
  function getUserData() {
    var data = $cookies.get('userData');
    if (data) return JSON.parse(data);
  }

  function getSessionToken() {
    return $cookies.get('sessionToken');
  }

  return {
    remove: function() {
      $cookies.remove('userData');
      $cookies.remove('sessionToken');
    },

    setUserData: function(data) {
      $log.log(data);
      $cookies.put('sessionToken', data.sessiontoken);
      $cookies.put('userData', JSON.stringify(data.user));
    },

    getUsername: function() {
      var data = getUserData();
      if (data) return data.username;
    },

    getToken: function() {
      return getSessionToken();
    }
  };
}]);
