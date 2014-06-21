var argo = require('argo');
var resource = require('argo-resource');
var loaders = require('./loaders');

var KeplerServer = module.exports = function() {
  this.server = argo();
};

KeplerServer.prototype.listen = function() {
  this.server.listen.apply(this.server, arguments);
};

KeplerServer.prototype.use = function() {
  this.server.use.apply(this.server, arguments);
};

