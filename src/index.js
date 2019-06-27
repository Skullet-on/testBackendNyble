var express = require('express');
var app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;
const { user } = require('../routes');

app.use('/api/users', user);
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
