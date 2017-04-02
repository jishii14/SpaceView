var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = '3941c26306a2480596d86819b2b3f341'; // Your client id
var client_secret = '8d90ad2451d44f458a9553ab5e04aac0'; // Your secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

var app = express();

app.use('/', express.static(__dirname + '/'));

console.log('Listening on 8888');
app.listen(8888);
