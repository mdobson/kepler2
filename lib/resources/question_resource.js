var QuestionResource = module.exports = function() {
  this.path = '/questions';
};

QuestionResouce.prototype.init = function(config) {
  config
    .path(this.path)
    .produces('application/json')
    .produces('application/vnd.siren+json')
    .consumes('application/json')
    .get('/{id}', this.question)
};

QuestionResource.prototype.question = function(env, next) {
};
