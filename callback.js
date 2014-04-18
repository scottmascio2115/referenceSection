(function() {
  var crap;
  (function() {
    var bar = { c: 5 };

    crap = function() {
      return this.a * this.b * bar.c;
    };
  })();

  console.log(stuff({a: 2, b: 3}, crap));

  function stuff(target, callback) {
    return callback.call(target);
  };
})();
