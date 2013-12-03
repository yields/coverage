
var stdin = require('stdin');
var ejs = require('ejs');

stdin(function(str){
  var fn = ejs.compile(str, { client: true });
  process.stdout.write('\nmodule.exports = ');
  process.stdout.write(fn.toString() + ';\n');
});
