var jsonStringify = function(object) {
  if(object === null) {
      return 'null';
  }

  if(typeof object === 'string') {
      return '"' + object + '"';
  }

  if(typeof object === 'number' || typeof object === 'boolean') {
      return String(object);
  }

  if(Array.isArray(object)) {
      let arrayItems = object.map(function(item) {
          return jsonStringify(item);
      });
      return '[' + arrayItems.join(',') + ']';
  }

  if(typeof object === 'object') {
      let keys = Object.keys(object);
      var objectProperties = keys.map(function(key) {
          let keyString = jsonStringify(key);
      var valueString = jsonStringify(object[key]);
      return keyString + ':' + valueString;
      });
      return '{' + objectProperties.join(',') + '}';
  }

  return '';
};