var test = require('tape');
var EZTV = require('../');

test('get page count', function (t) {
  t.plan(1);

  var eztv = new EZTV();
  yts.getPageCount().then( function(count) {
    console.log(count);
    t.equal(count.status, 'ok', 'Request success');
    /*
    t.equal(movies.data.movies[0].title, 'Snatch.', 'Title matches');
    t.equal(movies.data.movies[0].id, 10, 'ID matches');
    t.ok(movies.data.movies[0].torrents.length, 'Has at least one torrent');
    t.ok(movies.data.movies[0].background_image, 'Has background image');
    t.ok(movies.data.movies[0].medium_cover_image, 'Has cover image');
    t.ok(movies.data.movies[0].rating, 'Has rating');
    t.ok(movies.data.movies[0].rt_critics_score, 'Has rt score');
    */
  });
});