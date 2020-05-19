// app: login-practice
// description: simple login page in node/express utilizing passport and bcrypt
// libraries.

// basic modules needed
var path = require('path');
var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var mysql = require('./dbcon.js');
var session = require('express-session');
var bodyParser = require('body-parser');

// setup session
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitiated: true
}));

// basic config stuff..
app.engine('handlebars', handlebars.engine);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/public'))); // where static .js files are served
app.set('view engine', 'handlebars');
app.set('port', 3000);
app.set('mysql', mysql);

app.use('/login', require('./login.js'));

app.get('/', function(req, res){
	if(req.session.loggedin){
		res.send('Welcome back, ' + req.session.username + '!');
	} else{
		res.send('Please login to view this page!');
	}
	res.end();
});

// invalid URL
app.get('*', function(req, res){
	res.send('Sorry, this is an invalid	URL.');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; Press Ctrl-C to terminate.');
});