app.service('ChatMessage', function() {
  var ChatMessage = function(content, timestamp, author, channel) {
    this.content = content;
    this.timestamp = timestamp;
    this.author = author;
    this.channel = channel;
  };

  return ChatMessage;
});
