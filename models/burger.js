var orm = require("../config/orm.js");

var burger = {
    addBurger: function(burgerName, cb) {
      orm.addBurger(burgerName, function(res) {
        cb(res);
      });
    },
    devourBurger: function(burgerID, cb) {
      orm.devourBurger(burgerID, function(res) {
        cb(res);
      });
    },
    showBurgers: function(cb) {
      orm.showBurgers(function(res) {
        cb(res);
      });
    },
    deleteBurger: function(burgerID, cb) {
      orm.deleteBurger(burgerID, function(res) {
        cb(res);
      });
    }
  }
  
  
  module.exports = burger;