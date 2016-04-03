requirejs.config({
  paths: {
    // Application modules
    chat: 'chat',
    header: 'header',
    login: 'login',
    register: 'register',

    // Angular modules
    angular: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular',
    angularCookies: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0/angular-cookies',
    angularUiRouter: 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.18/angular-ui-router',
    moment: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.1/moment.min',
    angularMoment: 'http://cdnjs.cloudflare.com/ajax/libs/angular-moment/0.7.0/angular-moment',

    // Misc vendor modules
    jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min',
    bootstrap: 'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min',
    socketIo: 'https://cdn.socket.io/socket.io-1.4.5'
  },

  shim: {
    angular: { exports: "angular" },
    angularCookies: ['angular'],
    angularMoment: ['angular', 'moment'],
    angularUiRouter: ['angular'],
    bootstrap: ['jquery'],
    moment: ['jquery']
  },

  waitSeconds: 60
});

requirejs([
  'angular',

  'jquery',
  'bootstrap',

  'app',

  'socketIo',

  'chat/chat-controller',
  'chat/chat-directive',
  'chat/chat-message-parser',
  'chat/chat-message',
  'chat/socket-events',
  'chat/socket-service',

  'header/header-controller',
  'header/header-directive',

  'login/login-controller',
  'login/login-directive',
  'login/login-service',

  'register/register-controller',
  'register/register-directive',
], function(angular) {

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['sandbox.tv']);
  });

  window.Config = {
    SOCKET_URL: 'http:///* @echo EXTERNAL_IP */:3001',
    LOGIN_URL: 'http:///* @echo EXTERNAL_IP */:4567/login',
    REGISTER_URL: 'http:///* @echo EXTERNAL_IP */:4567/register',
    LOGOUT_URL: 'http:///* @echo EXTERNAL_IP */:4567/logout'
  };
});
