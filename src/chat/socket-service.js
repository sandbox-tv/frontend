app.factory('socket', function ($rootScope) {
  // TODO: retrieve bearer token from cookie (this bearer was manually retrieved from /login endpoint)
  var socket = io.connect(Config.SOCKET_URL + '?bearer=2ebde3def1d913724fbd9f4b01a802fb75563f56');
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
});
