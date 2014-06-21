var Base = module.exports = function(){};


/*
 * json
 *
 * Serializes or deserializes a data object. Use to prep for getting or retrieving form database.
 *
 * obj <Object> - Object. to deserialize
 * TODO: opts <Object> - Settings. For now it's just a function called test(). Test will instake a parameter key, and if it returns true will include in serialized or deserialized object. False to excluding.
 * cb <Function(err, obj <Object>) - Function. First is error parameter if issues saving to db. Second is representation of the object deserialized.
 */

Base.prototype.json = function(obj, cb) {
  var ret = {};
  if(!obj) { 
    Object.keys(this).forEach(function(entry) {
      if(typeof entry !== 'function') {
        ret[entry] = this[entry];
      }
    });
    cb(null, ret);
  } else {
    Object.keys(obj).forEach(function(entry) {
      this[entry] = obj[entry];
    });
    cb(null, obj);
  }
}
