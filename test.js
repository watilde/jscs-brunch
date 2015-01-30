var Plugin = require('./');
var plugin = new Plugin({});


var content = 'var {a, b} = c;';

plugin.check({data: content, path: 'file.js'}, function(error, result) {
  var data = result.data;
  console.log(data);
});
