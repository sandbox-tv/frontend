app.controller('ChatController', [
  '$scope',
  'socket',
  'socketEvents',
  'ChatMessage',
  'ChatMessageParser',
  'moment', function($scope, socket, socketEvents, ChatMessage, ChatMessageParser, moment) {
    $scope.test = function() {
      console.log('c test');
    };
    $scope.messages = [];
    $scope.inputMessage = "";
    $scope.connected = socket.connected();
    $scope.socketChannel = 'DEFAULT_ROOM';

    setInterval(function() {
      var before = $scope.connected;
      $scope.connected = socket.connected();

      if (before !== $scope.connected) {
        $scope.$apply();
      }
    }, 200);

    $scope.changeRoom = function() {
      $scope.socketChannel = $scope.channelInput;
      socket.emit(socketEvents.CHANGE_ROOM, $scope.socketChannel);
    }

    $scope.formatTimestamp = function(date) {
      return moment(date).format('h:mm A');
    };

    $scope.handleSubmit = function(e) {
      if (e.type === "keypress" && e.which !== 13) {
        return;
      }

      var message = new ChatMessage(
        $scope.inputMessage,
        moment(),
        'anonymous'
      );

      socket.emit(socketEvents.CHAT_MESSAGE, message);
      $scope.inputMessage = "";
    };

    socket.on(socketEvents.CHAT_MESSAGE, function(data) {
      var message = ChatMessageParser.parse(data);
      $scope.messages.push(message);
    })
}]);
