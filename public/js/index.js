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
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

socket.on('newLocationMessage', function (message) {
  var li = jQuery('<li></li>');
  var a = jQuery('<a target="_blank">Location</a>');

  li.text(message.from+': ');
  a.attr('href', message.url);
  li.append(a);
  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'jQuery User',
    text: jQuery('input[name=message]').val()
  }, function () {

  });
});

var locationButton = jQuery('#send-location');
locationButton.on('click', function () {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported.');
  }

  navigator.geolocation.getCurrentPosition(function (pos) {
    socket.emit('createLocationMessage', {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude
    });
  }, function () {
    alert('unable to fetch location.');
  });
});
