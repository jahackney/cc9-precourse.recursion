/* exported stringifyJSON */

/*

What does the output for stringifyJSON look like? Play around with JSON.stringify to find out!

*/

const stringifyJSON = (thing) => {

       if (thing === null) {
            return 'null';
      }
      if (typeof thing === 'function' || thing === undefined) {
            return undefined;
      }

      if (typeof thing === 'number' || typeof thing === 'boolean') {
            return '' + thing;
      }

      if (typeof thing === 'string') {
            return '"' + thing + '"';
      }

      let arr  = [];

      if(Array.isArray(thing)) {
            if (thing[0] === undefined) {
                  return '[]';
            }     

            thing.forEach(function(item) {
                  arr.push(stringifyJSON(item));
            })
            return '[' + arr +']';
      }

      let obj = [];

      if (typeof thing === 'object') {
            Object.keys(thing).forEach(function(key) {
                  if (key === undefined || thing[key] === undefined || typeof thing[key] === 'function') {
                        return '{}';
                  }
                  obj.push(stringifyJSON(key) + ':' + stringifyJSON(thing[key]));
                  });
            return '{' + obj.join(',') + '}';
      }

};
