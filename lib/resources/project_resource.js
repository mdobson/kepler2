var ProjectResource = module.exports = function() {
  this.path = '/projects';
};

ProjectResource.prototype.init = function(config) {
  config
    .path(this.path)
    .produces('application/json')
    .produces('application/vnd.siren+json')
    .consumes('application/json')
    .get('/', this.list)
    .get('/{id}', this.project)
    .get('/{id}/members', this.members);
};

ProjectResource.prototype.list = function(env, next) {
};

ProjectResource.prototype.project = function(env, next) {
};

ProjectResource.prototype.members = function(env, next) {
};
