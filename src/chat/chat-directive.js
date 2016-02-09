app.directive('chat', function() {
  return {
    restrict: 'E',
    transclude: false,
    templateUrl: 'chat/chat.html',
    controller: 'ChatController'
  }
});
