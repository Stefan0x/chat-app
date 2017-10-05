// Build-in node module to make the path finding easier
// https://nodejs.org/dist/latest-v8.x/docs/api/path.html#path_path_join_paths
const path = require('path');

// Third party node modules
const express = require('express');

// Custom variables
const publicPath = path.join(__dirname, '../public');
var app = express();
const port = process.env.PORT || 3000;

// Express Config
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log('Server started on port ' + port)
})
