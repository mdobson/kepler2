var FormResource = module.exports = function() {
  this.path = '/forms';
};

FormResource.prototype.init = function(config) {
  config
    .path(this.path)
    .produces('application/json')
    .produces('application/vnd.siren+json')
    .consumes('application/json')
    .get('/{id}', this.form);
};

FormResource.prototype.form = function(env, next) {
};
