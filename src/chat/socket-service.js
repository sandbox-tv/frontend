app.factory('socket', ['$rootScope', 'tokenService', function ($rootScope, tokenService) {
  var socket = io.connect(Config.SOCKET_URL + '?sessiontoken=' + tokenService.getToken());
  return {
    connected: function() {
      return socket.connected ? 'connected' : 'not connected';
    },
    on: function (eventName, callback) {
      socket.on(eventName, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
}]);
