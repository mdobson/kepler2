var FlowResource = module.exports = function() {
  this.path = '/flows';
};

FlowResource.prototype.init = function(config) {
  config
    .path(this.path)
    .produces('application/json')
    .produces('application/vnd.siren+json')
    .consumes('application/json')
    .get('/', this.list)
    .get('/{id}', this.flow);
};

FlowResource.prototype.list = function(env, next) {
};

FlowResource.prototype.flow = function(env, next) {
};
