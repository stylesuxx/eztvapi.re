var test = require('tape');
var EZTV = require('../');

test('get page list', function (t) {
  t.plan(1);

  var eztv = new EZTV();
  eztv.getPages().then( function(pages) {
    t.ok(pages, 'Has page list');
  });
});