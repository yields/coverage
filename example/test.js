
describe('Cache', function(){

  var cache = require('lru-cache')
    , assert = require('assert');

  describe('()', function(){
    it('should return new cache', function(){
      assert(cache() != cache());
    })

    it('should default .max to infinity', function(){
      assert(Infinity == cache()._max);
    })

    it('should default .ttl to 0', function(){
      assert(0 == cache()._ttl);
    })
  })

  describe('({ max: 20 })', function(){
    it('should respect options', function(){
      assert(20 == cache({ max: 20 })._max)
    })
  })

  describe('({ ttl: 2ms })', function(){
    it('should respect options', function(){
      assert(2 == cache({ ttl: '2ms' })._ttl);
    })
  })

  describe('#set', function(){


    it('should add to `.vals`', function(){
      var c = cache();
      c.set('a', 'a');
      c.set('c', 'c');
      assert('c' == c.vals.c.value);
      assert('a' == c.vals.a.value);
    })

    it('should add .ttl to value', function(){
      assert(0 == cache().set('a', 'b').vals.a.ttl);
    })

    it('should default .ttl to global .ttl', function(){
      var c = cache({ ttl: '1m' });
      c.set('a', 'b');
      var a = c.vals.a;
      assert(6e+4 == a.ttl);
    })

    it('should respect .ttl if given', function(){
      var c = cache({ ttl: '1m' });
      c.set('a', 'b', '2m');
      var a = c.vals.a;
      assert(12e+4 == a.ttl);
    })
  })

  describe('#get', function(){
    it('should return the value', function(){
      assert('a' == cache().set('a', 'a').get('a'));
    })

    it('should return `null` and remove if value expired', function(done){
      var c = cache();
      c.set('a', 'b', '50ms');
      assert('b' == c.get('a'));
      setTimeout(function(){
        assert('b' == c.get('a'));
      }, 20);
      setTimeout(function(){
        assert(null == c.get('a'));
        assert(null == c.vals.a);
        done();
      }, 60);
    })
  })

  describe('#toJSON', function(){
    it('should return object of key => val', function(){
      var c = cache();
      c.set('a', 'a');
      c.set('b', 'b');
      assert('a' == c.toJSON().a);
      assert('b' == c.toJSON().b);
    })
  })

})
