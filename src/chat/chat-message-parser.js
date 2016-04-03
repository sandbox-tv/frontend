define([
  'app'
], function(app) {
  app.service('ChatMessageParser', ['ChatMessage', function(ChatMessage) {
    var ChatMessageParser = {
      parse: function(payload) {
        return new ChatMessage(
          payload.content,
          payload.timestamp,
          payload.author
        );
      }
    };

    return ChatMessageParser;
  }]);
});
