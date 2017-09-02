const mongoose = require('mongoose');

module.exports = function() {
  var db;
  db = mongoose.connect('mongodb://localhost/dojonode/');
  require('./models/user.schema')
  return db;
};