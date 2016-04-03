define([
  'angular',
  'angularCookies',
  'angularUiRouter',
  'moment',
], function(angular, angularCookies, angularUiRouter, moment) {

  var app = angular.module('sandbox.tv', ['ui.router', 'ngCookies']);

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

  return app;
});
