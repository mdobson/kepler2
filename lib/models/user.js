var Base = require('./base');
var util = require('util');

var User = module.exports = function(){
  Base.call(this);
};
util.inherits(User, Base);

