var express = require('express');
var router = express.Router();
var mysql = require('./dbcon.js')

router.get('/', function(req, res){
	res.render('login.handlebars');
})

router.post('/', function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	if(username && password){
		mysql.pool.query('SELECT * FROM accounts WHERE username = ? and password = ?', [username, password], function(error, results, fields){
			if(results.length > 0){
				req.session.loggedin = true;
				req.session.username = username;
				res.redirect('..');
			} else{
				res.send('Incorrect Username and/or Password!');
			}
			res.end();
		});
	} else{
		res.send('Please enter Username and Password!');
		res.end();
	}
});

// export router to use in app.js
module.exports = router;