define([
  'app'
], function(app) {
  app.service('loginService', ['$http', '$window', '$log', '$cookies', 'tokenService', function ($http, $window, $log, $cookies, tokenService) {
    function baseRequest(options) {
      return $http(options)
        .then(function(response) {
          if (response.status != 200) return Promise.reject(response);
          $log.log(response);
          return response.data;
        })
        .catch(function(response) {
          $log.log(response);
          return Promise.reject(response.data);
        });
    }

    return {
      logout: function() {
        return baseRequest({
          method: 'POST',
          url: $window.Config.LOGOUT_URL,
          data: {
            sessiontoken: tokenService.getToken()
          }
        }).then(function() {
          tokenService.remove();
        });
      },

      register: function(username, password) {
        var data = {
          username: username,
          password: password
        };

        return baseRequest({
          method: 'POST',
          url: $window.Config.REGISTER_URL,
          data: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      },

      login: function(username, password) {
        var data = {
          username: username,
          password: password
        };

        return baseRequest({
          method: 'POST',
          url: $window.Config.LOGIN_URL,
          data: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
    };
  }]);
});
