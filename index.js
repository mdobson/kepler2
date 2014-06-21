var path = require('path');
var titan = require('titan');
var siren = require('argo-formatter-siren');
var loaders = require('./loaders');
var dbOpts = {
  endpoint: process.env.LOCAL_HOST,
  port: process.env.LOCAL_PORT,
  password: "",
  username: process.env.LOCAL_USER,
  database: process.env.LOCAL_DB
};

var KeplerServer = module.exports = function() {
  var self = this;
  this.server = titan();
  this.db = new loaders.PG(opts);
  this.server.use(function(handle) {
    handle('request', function(env, next) {
      env.db = self.db;
      next(env);
    });
  });
  this.server.allow('*');
  this.server.compress();
  this.server.logger();
  this.server.format({ engines: [ siren ], override: { 'application/json': siren } });
  this.server.load(path.join(__dirname, 'resources'));
};

KeplerServer.prototype.listen = function() {
  this.server.listen.apply(this.server, arguments);
};

KeplerServer.prototype.use = function() {
  this.server.use.apply(this.server, arguments);
};

