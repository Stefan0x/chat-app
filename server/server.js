// Build-in node modules
// https://nodejs.org/dist/latest-v8.x/docs/api/path.html#path_path_join_paths
const path = require('path'); // make the path finding easier
const http = require('http');

// Third party node modules
const express = require('express');
const socketIO = require('socket.io');

// Custom variables
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

// Express Config
app.use(express.static(publicPath));

// Event listener
io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('createMessage', (message) => {
    console.log('New Message: ', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    })
  });

  socket.on('disconnect', function(){
    console.log('Lost connection to the user');
  });
});

server.listen(port, () => {
  console.log('Server started on port ' + port)
})
