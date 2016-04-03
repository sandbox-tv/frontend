var app = angular.module('sandbox.tv', ['angularMoment', 'ui.router', 'ngCookies']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
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
  SOCKET_URL: 'http://localhost:3001',
  LOGIN_URL: 'http://localhost:4567/login',
  REGISTER_URL: 'http://localhost:4567/register',
  LOGOUT_URL: 'http://localhost:4567/logout'
};
