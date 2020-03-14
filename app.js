// app: login-practice
// description: simple login page in node/express utilizing passport and bcrypt
// libraries.

var express = require('express');
var app = express();

var login = require('./login.js');

app.use('/login', things);

app.get('/', function(req, res){
	res.send("Hello World!");
});

app.get('/:id', function(req, res){
	res.send('The id you specified was ' + req.params.id);
});

// invalid URL
app.get('*', function(req, res){
	res.send('Sorry, this is an invalid	URL.');
});

app.listen(3000);