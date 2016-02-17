var test = require('tape');

var pinky = require('..');

test('can resolve a value', function (t) {
  pinky.resolve(1).then(function (value) {
    t.equal(value, 1);
    t.end();
  });
});
