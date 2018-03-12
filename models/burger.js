var orm = require("../config/orm.js");


//create code that will call using burger specific input for the ORM
var burger = {
  all: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.insertOne("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("burger", objColVals, condition, function(res) {
      cb(res);
    });
  }
};



module.exports = burger;