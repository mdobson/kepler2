var UserResource = module.exports = function(){
  this.path = '/users';
};

UserResource.prototype.init = function(config) {
  config
    .path(this.path)
    .produces('application/json')
    .produces('application/vnd.siren+json')
    .consumes('application/json')
    .get('/{id}', this.profile);
};

UserResource.prototype.profile = function(env, next) {
};




