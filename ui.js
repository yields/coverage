
module.exports = function anonymous(locals, filters, escape, rethrow) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!#?[a-zA-Z0-9]+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
};
var __stack = { lineno: 1, input: "\n<h1 id='overview'><%= name %></h1>\n\n<div id='menu'>\n  <li><a href='#overview'>overview</a></li>\n  <% mods.forEach(function(mod){ %>\n    <li>\n      <span class='cov <%= mod.level %>'><%= mod.percent %></span>\n      <a href='#<%= mod.key %>'>\n        <span class='basename'><%= mod.key.split('/').pop() %></span>\n      </a>\n    </li>\n  <% }) %>\n</div>\n\n<div id='stats' class='<%= level %>'>\n  <div class='percentage'><%= percent + '%' %></div>\n  <div class='sloc'><%= sloc %></div>\n  <div class='hits'><%= hits %></div>\n  <div class='misses'><%= misses %></div>\n</div>\n\n<div id='files'>\n  <% mods.forEach(function(mod){ %>\n    <div class='file'>\n      <h2 id='<%= mod.key %>'><%= mod.key.split('/').pop() %></h2>\n\n      <div id='stats' class='<%= mod.level %>'>\n        <div class='percentage'><%= mod.percent + '%' %></div>\n        <div class='sloc'><%= mod.sloc %></div>\n        <div class='hits'><%= mod.hits %></div>\n        <div class='misses'><%= mod.misses %></div>\n      </div>\n\n      <table class='source'>\n        <tbody>\n          <% mod.lines.forEach(function(obj){ %>\n            <% if (obj.hits) { %>\n              <tr class='hit'>\n                <td class='line'><%= obj.n + 1 %></td>\n                <td class='hits'><%= obj.hits %></td>\n                <td class='source'><%= obj.src %></td>\n              </tr>\n            <% } else if (0 == obj.hits) { %>\n              <tr class='miss'>\n                <td class='line'><%= obj.n + 1 %></td>\n                <td class='hits'>0</td>\n                <td class='source'><%= obj.src %></td>\n              </tr>\n            <% } else { %>\n              <tr>\n                <td class='line'><%= obj.n + 1 %></td>\n                <td class='hits'></td>\n                <td class='source'><%= obj.src %></td>\n              </tr>\n            <% } %>\n          <% }) %>\n        </tbody>\n      </table>\n    </div>\n  <% }) %>\n</div>\n", filename: undefined };
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
 buf.push('\n<h1 id=\'overview\'>', escape((__stack.lineno=2,  name )), '</h1>\n\n<div id=\'menu\'>\n  <li><a href=\'#overview\'>overview</a></li>\n  ');__stack.lineno=6; mods.forEach(function(mod){ ; buf.push('\n    <li>\n      <span class=\'cov ', escape((__stack.lineno=8,  mod.level )), '\'>', escape((__stack.lineno=8,  mod.percent )), '</span>\n      <a href=\'#', escape((__stack.lineno=9,  mod.key )), '\'>\n        <span class=\'basename\'>', escape((__stack.lineno=10,  mod.key.split('/').pop() )), '</span>\n      </a>\n    </li>\n  ');__stack.lineno=13; }) ; buf.push('\n</div>\n\n<div id=\'stats\' class=\'', escape((__stack.lineno=16,  level )), '\'>\n  <div class=\'percentage\'>', escape((__stack.lineno=17,  percent + '%' )), '</div>\n  <div class=\'sloc\'>', escape((__stack.lineno=18,  sloc )), '</div>\n  <div class=\'hits\'>', escape((__stack.lineno=19,  hits )), '</div>\n  <div class=\'misses\'>', escape((__stack.lineno=20,  misses )), '</div>\n</div>\n\n<div id=\'files\'>\n  ');__stack.lineno=24; mods.forEach(function(mod){ ; buf.push('\n    <div class=\'file\'>\n      <h2 id=\'', escape((__stack.lineno=26,  mod.key )), '\'>', escape((__stack.lineno=26,  mod.key.split('/').pop() )), '</h2>\n\n      <div id=\'stats\' class=\'', escape((__stack.lineno=28,  mod.level )), '\'>\n        <div class=\'percentage\'>', escape((__stack.lineno=29,  mod.percent + '%' )), '</div>\n        <div class=\'sloc\'>', escape((__stack.lineno=30,  mod.sloc )), '</div>\n        <div class=\'hits\'>', escape((__stack.lineno=31,  mod.hits )), '</div>\n        <div class=\'misses\'>', escape((__stack.lineno=32,  mod.misses )), '</div>\n      </div>\n\n      <table class=\'source\'>\n        <tbody>\n          ');__stack.lineno=37; mod.lines.forEach(function(obj){ ; buf.push('\n            ');__stack.lineno=38; if (obj.hits) { ; buf.push('\n              <tr class=\'hit\'>\n                <td class=\'line\'>', escape((__stack.lineno=40,  obj.n + 1 )), '</td>\n                <td class=\'hits\'>', escape((__stack.lineno=41,  obj.hits )), '</td>\n                <td class=\'source\'>', escape((__stack.lineno=42,  obj.src )), '</td>\n              </tr>\n            ');__stack.lineno=44; } else if (0 == obj.hits) { ; buf.push('\n              <tr class=\'miss\'>\n                <td class=\'line\'>', escape((__stack.lineno=46,  obj.n + 1 )), '</td>\n                <td class=\'hits\'>0</td>\n                <td class=\'source\'>', escape((__stack.lineno=48,  obj.src )), '</td>\n              </tr>\n            ');__stack.lineno=50; } else { ; buf.push('\n              <tr>\n                <td class=\'line\'>', escape((__stack.lineno=52,  obj.n + 1 )), '</td>\n                <td class=\'hits\'></td>\n                <td class=\'source\'>', escape((__stack.lineno=54,  obj.src )), '</td>\n              </tr>\n            ');__stack.lineno=56; } ; buf.push('\n          ');__stack.lineno=57; }) ; buf.push('\n        </tbody>\n      </table>\n    </div>\n  ');__stack.lineno=61; }) ; buf.push('\n</div>\n'); })();
} 
return buf.join('');
} catch (err) {
  rethrow(err, __stack.input, __stack.filename, __stack.lineno);
}
};
