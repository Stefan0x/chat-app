var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('disconnect', function() {
  console.log('Lost connection to server');
});

// Custom event
socket.on('newMessage', function (message) {
  console.log('Got new Message: ', message);
});
