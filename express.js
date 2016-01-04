/**
 * Created by WangMing on 15/12/31.
 */
var express = require('express');

var app = express();
app.use('/', express.static(__dirname + '/dist'));
app.listen(8080, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at http://localhost:8080');
});