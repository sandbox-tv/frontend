var app = angular.module('sandbox.tv', ['angularMoment', 'ui.router', 'ngCookies']);

app.factory('authorizationInterceptor', function($cookies, $log) {
  var token = $cookies.get('sessionToken');
  $log.info('interceptor token', token);

  return {
    request: function(config) {
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }

      return config;
    }
  };
});

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $httpProvider.interceptors.push('authorizationInterceptor');
  $urlRouterProvider.otherwise('/register');

  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>'
    })
    .state('chat', {
      url: '/chat',
      template: '<chat></chat>'
    })
    .state('register', {
      url: '/register',
      template: '<register><register>'
    });
});

window.Config = {
  SOCKET_URL: 'http://172.17.0.3:3001',
  LOGIN_URL: 'http://172.17.0.2:4567/login',
  REGISTER_URL: 'http://172.17.0.2:4567/register',
  LOGOUT_URL: 'http://172.17.0.2:4567/logout'
};
