// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    showBurgers: function (cb) {
        var query = "SELECT * FROM burgers";
        connection.query(query, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
},
    addBurger: function (burgerName, cb) {
       