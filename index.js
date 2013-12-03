
/**
 * Dependencies
 */

var instrument = require('instrument');
var map = require('cover-map');
var domify = require('domify');
var query = require('query');
var each = require('each');
var ui = require('./ui');

/**
 * Export `Coverage`
 */

module.exports = Coverage;

/**
 * Initializae `Coverage`.
 *
 * @param {String} name
 * @api public
 */

function Coverage(name){
  if (!(this instanceof Coverage)) return new Coverage(name);
  this.cov = instrument(name);
}

/**
 * Render.
 *
 * @api public
 */

Coverage.prototype.render = function(){
  var el = query('#coverage');
  if (!el) throw new Error('"#coverage" was not found');
  var obj = map(this.cov);
  var self = this;

  // normalize
  obj.mods = obj.mods.map(function(mod){
    return self.normalize(mod);
  });

  // render
  el.appendChild(domify(ui(obj)));
};

/**
 * Normalize `mod`.
 *
 * @param {Object} mod
 * @return {Object}
 * @api private
 */

Coverage.prototype.normalize = function(mod){
  var lines = mod.source.split(/\r?\n/g);
  var ranges = mod.ranges;
  var chars = 0;

  // sort
  ranges = ranges.sort(function(a, b){
    return a[0] - b[0];
  });

  // mod lines
  mod.lines = [];


  // normalize ranges
  each(lines, function(line, i){
    var range = ranges[0] || [0, 0];
    var start = range[0];
    var end = range[1];
    var len = line.length;

    // total
    chars += (line + '\n').length;

    // skip
    if (start > chars - 2) {
      return mod.lines.push({
        src: line + '\n',
        n: i
      });
    }

    // range
    var range = ranges.shift();

    // skip
    if (!range) {
      return mod.lines.push({
        src: line + '\n',
        n: i
      });
    }

    // hits
    var mark = range.join(':');
    var hits = mod.covered[mark] || 0;

    // sloc
    if (mod.covered.hasOwnProperty(mark)) {
      if (!line.trim()) hits = null;
      return mod.lines.push({
        src: line + '\n',
        hits: hits,
        n: i
      });
    }

    // ignored
    mod.lines.push({
      src: line + '\n',
      hits: hits,
      n: i
    });
  });

  return mod;
};
