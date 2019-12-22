var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

router.get('/', function(req, res){
	res.redirect('/burgers')
});

router.get('/burgers', function(req, res){
	burgers.all(function(data){
		var hbsObject = {burgers: data};

		console.log(hbsObject);

		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function(req, res){
	burgers.create(['burger_name'], [req.body.burger_name], function(data){
		res.redirect('/burgers')
	});
});

router.put('/burgers/:id', function(req, res){

	burgers.update(req.params.id, function(data){
        console.log(data);
		res.redirect('/burgers');
	});
});

module.exports = router;