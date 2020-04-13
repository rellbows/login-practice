var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('login.handlebars');
});

router.post('/', function(req, res){
	
})

// export router to use in app.js
module.exports = router;