var test = require('tape');
var EZTV = require('../');

test('get page list', function (t) {
  t.plan(1);

  var eztv = new EZTV();
  eztv.getPages().then( function(pages) {
    t.ok(pages, 'Has page list');
  });
});

test('get show list', function (t) {
  t.plan(2);

  var eztv = new EZTV();
  eztv.getShows('1', {keywords: 'Breaking Bad'}).then( function(shows) {
    t.ok(shows, 'Has show list');
    t.equal(shows[0].title, 'Breaking Bad', 'Show title matches');
  });
});