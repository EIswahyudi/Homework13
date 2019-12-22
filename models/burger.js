var orm = require('../config/orm.js');

var burgers = {
	all: function(cb){
		orm.all('burgers', function(res){
			cb(res);
		});
	},
	create: function(col, vals, cb){
		orm.create('burgers', col, vals, function(res){
			cb(res);
		});
	},
	update: function(id,cb){
		var condition = "id=" + id;
		orm.update('burgers', {
			devoured: true, 
		}, condition, cb);
	}
};

module.exports = burgers;