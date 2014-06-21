var pg = require('pg');

var PostgresLoader = module.exports = function(opts, cb) {
  this.endpoint = opts.endpoint;
  this.password = opts.password;
  this.username = opts.username;
  this.port = opts.port;
  this.db = opts.database;

  this.connection = 'postgres://'+this.username+':'+this.password+'@'+this.endpoint+'/'+this.database;
  
};

PostgresLoader.prototype.query = function(query, cb) {
  pg.connect(this.connection, function(err, client, done) {
    if(err) {
      cb(err);
    } else {
      client.query(query, function(err, result) {
        done();

        if(err) {
          cb(err);
        } else {
          cb(null, result);
        }
      });
    }
  });
};
