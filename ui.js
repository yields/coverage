
module.exports = function anonymous(locals, filters, escape, rethrow) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!#?[a-zA-Z0-9]+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
};
var __stack = { lineno: 1, input: "\n<div class='stats'>\n  <div class='percentage'><%= percent + '%' %></div>\n  <div class='sloc'><%= sloc %></div>\n</div>\n\n<% mods.forEach(function(mod){ %>\n  <div class='file'>\n    <h2 id='<%= mod.key %>'><%= mod.key %></h2>\n\n    <div class='stats'>\n      <div class='percentage'><%= mod.percent + '%' %></div>\n      <div class='sloc'><%= mod.sloc %></div>\n    </div>\n\n    <table class='source'>\n      <tbody>\n        <% mod.lines.forEach(function(obj){ %>\n          <% if (obj.hits) { %>\n            <tr class='hit'>\n              <td class='line'><%= obj.n + 1 %></td>\n              <td class='hits'><%= obj.hits %></td>\n              <td class='source'><%= obj.src %></td>\n            </tr>\n          <% } else if (0 == obj.hits) { %>\n            <tr class='miss'>\n              <td class='line'><%= obj.n + 1 %></td>\n              <td class='hits'>0</td>\n              <td class='source'><%= obj.src %></td>\n            </tr>\n          <% } else { %>\n            <tr>\n              <td class='line'><%= obj.n + 1 %></td>\n              <td class='hits'></td>\n              <td class='source'><%= obj.src %></td>\n            </tr>\n          <% } %>\n        <% }) %>\n      </tbody>\n    </table>\n  </div>\n<% }) %>\n", filename: undefined };
function rethrow(err, str, filename, lineno){
  var lines = str.split('\n')
    , start = Math.max(lineno - 3, 0)
    , end = Math.min(lines.length, lineno + 3);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;
  
  throw err;
}
try {
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('\n<div class=\'stats\'>\n  <div class=\'percentage\'>', escape((__stack.lineno=3,  percent + '%' )), '</div>\n  <div class=\'sloc\'>', escape((__stack.lineno=4,  sloc )), '</div>\n</div>\n\n');__stack.lineno=7; mods.forEach(function(mod){ ; buf.push('\n  <div class=\'file\'>\n    <h2 id=\'', escape((__stack.lineno=9,  mod.key )), '\'>', escape((__stack.lineno=9,  mod.key )), '</h2>\n\n    <div class=\'stats\'>\n      <div class=\'percentage\'>', escape((__stack.lineno=12,  mod.percent + '%' )), '</div>\n      <div class=\'sloc\'>', escape((__stack.lineno=13,  mod.sloc )), '</div>\n    </div>\n\n    <table class=\'source\'>\n      <tbody>\n        ');__stack.lineno=18; mod.lines.forEach(function(obj){ ; buf.push('\n          ');__stack.lineno=19; if (obj.hits) { ; buf.push('\n            <tr class=\'hit\'>\n              <td class=\'line\'>', escape((__stack.lineno=21,  obj.n + 1 )), '</td>\n              <td class=\'hits\'>', escape((__stack.lineno=22,  obj.hits )), '</td>\n              <td class=\'source\'>', escape((__stack.lineno=23,  obj.src )), '</td>\n            </tr>\n          ');__stack.lineno=25; } else if (0 == obj.hits) { ; buf.push('\n            <tr class=\'miss\'>\n              <td class=\'line\'>', escape((__stack.lineno=27,  obj.n + 1 )), '</td>\n              <td class=\'hits\'>0</td>\n              <td class=\'source\'>', escape((__stack.lineno=29,  obj.src )), '</td>\n            </tr>\n          ');__stack.lineno=31; } else { ; buf.push('\n            <tr>\n              <td class=\'line\'>', escape((__stack.lineno=33,  obj.n + 1 )), '</td>\n              <td class=\'hits\'></td>\n              <td class=\'source\'>', escape((__stack.lineno=35,  obj.src )), '</td>\n            </tr>\n          ');__stack.lineno=37; } ; buf.push('\n        ');__stack.lineno=38; }) ; buf.push('\n      </tbody>\n    </table>\n  </div>\n');__stack.lineno=42; }) ; buf.push('\n'); })();
} 
return buf.join('');
} catch (err) {
  rethrow(err, __stack.input, __stack.filename, __stack.lineno);
}
};
